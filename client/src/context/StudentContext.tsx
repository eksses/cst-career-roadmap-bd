import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CareerTrack, DiagnosticResult, SuggestedTrackItem } from '../../../shared/types.js';
import { getTrackVerdict } from '../../../shared/trackVerdictData.js';

interface StudentContextType {
  saveCode: string | null;
  profile: any | null;
  primaryTrack: CareerTrack | null;
  secondaryTrack: CareerTrack | null;
  allTracks: CareerTrack[];
  suggestedTracks: SuggestedTrackItem[];
  completedMilestoneIds: string[];
  completedCertIds: string[];
  completedSkillIds: string[];
  verdict: any | null;
  personalizedRole: { en: string; bn: string } | null;
  targetStack: string[];
  hardwareSetupGuide: { en: string; bn: string } | null;
  matchScore: number;
  requiresFoundationTrack: boolean;
  isLoading: boolean;
  setDiagnosticResult: (result: DiagnosticResult) => void;
  loadProfileByCode: (code: string) => Promise<boolean>;
  toggleMilestone: (id: string) => void;
  toggleCert: (id: string) => void;
  toggleSkill: (id: string) => void;
  switchActiveTrack: (trackSlug: string) => Promise<boolean>;
  selectTrackDirectly: (trackSlug: string) => Promise<boolean>;
  resetSession: () => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [saveCode, setSaveCode] = useState<string | null>(() => localStorage.getItem('cst_save_code'));
  const [profile, setProfile] = useState<any | null>(null);
  const [primaryTrack, setPrimaryTrack] = useState<CareerTrack | null>(null);
  const [secondaryTrack, setSecondaryTrack] = useState<CareerTrack | null>(null);
  const [allTracks, setAllTracks] = useState<CareerTrack[]>([]);
  const [suggestedTracks, setSuggestedTracks] = useState<SuggestedTrackItem[]>([]);
  const [completedMilestoneIds, setCompletedMilestoneIds] = useState<string[]>([]);
  const [completedCertIds, setCompletedCertIds] = useState<string[]>([]);
  const [completedSkillIds, setCompletedSkillIds] = useState<string[]>([]);
  const [verdict, setVerdict] = useState<any | null>(null);
  const [personalizedRole, setPersonalizedRole] = useState<{ en: string; bn: string } | null>(null);
  const [targetStack, setTargetStack] = useState<string[]>([]);
  const [hardwareSetupGuide, setHardwareSetupGuide] = useState<{ en: string; bn: string } | null>(null);
  const [matchScore, setMatchScore] = useState<number>(85);
  const [requiresFoundationTrack, setRequiresFoundationTrack] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Load all tracks catalog on mount
  useEffect(() => {
    fetch('/api/tracks')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.tracks) {
          setAllTracks(data.tracks);
        }
      })
      .catch(err => console.error('Error loading tracks:', err));
  }, []);

  // If saveCode exists in localStorage, load profile
  useEffect(() => {
    const saved = localStorage.getItem('cst_save_code');
    if (saved && !primaryTrack) {
      loadProfileByCode(saved);
    }
  }, []);

  const setDiagnosticResult = (result: DiagnosticResult) => {
    setSaveCode(result.saveCode);
    localStorage.setItem('cst_save_code', result.saveCode);
    setPrimaryTrack(result.primaryTrack);
    setSecondaryTrack(result.secondaryTrack);
    setVerdict(result.verdict);
    setMatchScore(result.matchScore);
    setRequiresFoundationTrack(result.requiresFoundationTrack);
    if (result.personalizedRole_en && result.personalizedRole_bn) {
      setPersonalizedRole({ en: result.personalizedRole_en, bn: result.personalizedRole_bn });
    }
    if (result.targetStack) {
      setTargetStack(result.targetStack);
    }
    if (result.hardwareSetupGuide_en && result.hardwareSetupGuide_bn) {
      setHardwareSetupGuide({ en: result.hardwareSetupGuide_en, bn: result.hardwareSetupGuide_bn });
    }
    if (result.suggestedTracks) {
      setSuggestedTracks(result.suggestedTracks);
    }
    if (result.allTracks && result.allTracks.length > 0) {
      setAllTracks(result.allTracks);
    }
    setCompletedMilestoneIds([]);
    setCompletedCertIds([]);
    setCompletedSkillIds([]);
    setProfile({
      id: result.studentId,
      saveCode: result.saveCode,
    });
  };

  const loadProfileByCode = async (code: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/profile/${code.trim()}`);
      const data = await res.json();
      if (data.success && data.profile) {
        setSaveCode(data.profile.saveCode);
        localStorage.setItem('cst_save_code', data.profile.saveCode);
        setProfile(data.profile);
        setPrimaryTrack(data.primaryTrack);
        setSecondaryTrack(data.secondaryTrack);
        setVerdict(data.profile.verdict);
        if (data.profile.verdict?.personalizedRole_en && data.profile.verdict?.personalizedRole_bn) {
          setPersonalizedRole({ en: data.profile.verdict.personalizedRole_en, bn: data.profile.verdict.personalizedRole_bn });
        }
        if (data.profile.verdict?.targetStack && Array.isArray(data.profile.verdict.targetStack)) {
          const cleanStack = data.profile.verdict.targetStack.map((s: any) => typeof s === 'string' ? s : (s?.name || s?.id || String(s)));
          setTargetStack(cleanStack);
        } else if (data.primaryTrack?.mustHaveSkills) {
          const cleanStack = (data.primaryTrack.mustHaveSkills || []).map((s: any) => typeof s === 'string' ? s : (s?.name || s?.id || String(s))).slice(0, 6);
          setTargetStack(cleanStack.length > 0 ? cleanStack : ['Core Skills', 'Lab Projects', 'Git & GitHub']);
        }
        if (data.profile.verdict?.hardwareSetupGuide_en && data.profile.verdict?.hardwareSetupGuide_bn) {
          setHardwareSetupGuide({ en: data.profile.verdict.hardwareSetupGuide_en, bn: data.profile.verdict.hardwareSetupGuide_bn });
        }
        if (data.progress) {
          setCompletedMilestoneIds(data.progress.completedMilestoneIds || []);
          setCompletedCertIds(data.progress.completedCertIds || []);
          setCompletedSkillIds(data.progress.completedSkillIds || []);
        }
        setIsLoading(false);
        return true;
      }
      // If code was not found, clear stale save code
      localStorage.removeItem('cst_save_code');
      setSaveCode(null);
      setIsLoading(false);
      return false;
    } catch (err) {
      console.error('Error retrieving profile:', err);
      setIsLoading(false);
      return false;
    }
  };

  const syncProgressToApi = (milestones: string[], certs: string[], skills: string[]) => {
    if (!saveCode || !primaryTrack) return;
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        saveCode,
        trackId: primaryTrack.id,
        completedMilestoneIds: milestones,
        completedCertIds: certs,
        completedSkillIds: skills,
      })
    }).catch(err => console.error('Failed to sync progress:', err));
  };

  const toggleMilestone = (id: string) => {
    setCompletedMilestoneIds(prev => {
      const updated = prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id];
      syncProgressToApi(updated, completedCertIds, completedSkillIds);
      return updated;
    });
  };

  const toggleCert = (id: string) => {
    setCompletedCertIds(prev => {
      const updated = prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id];
      syncProgressToApi(completedMilestoneIds, updated, completedSkillIds);
      return updated;
    });
  };

  const toggleSkill = (id: string) => {
    setCompletedSkillIds(prev => {
      const updated = prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id];
      syncProgressToApi(completedMilestoneIds, completedCertIds, updated);
      return updated;
    });
  };

  const switchActiveTrack = async (trackSlug: string): Promise<boolean> => {
    setIsLoading(true);
    // 1. Immediately update local state so the dashboard is NEVER empty
    let localFound = allTracks.find(t => t.slug === trackSlug);
    if (!localFound) {
      try {
        const fallbackRes = await fetch(`/api/tracks/${trackSlug}`);
        const fallbackData = await fallbackRes.json();
        if (fallbackData.success && fallbackData.track) {
          localFound = fallbackData.track;
        }
      } catch (err) {
        console.error('Fallback track fetch error:', err);
      }
    }

    if (localFound) {
      setPrimaryTrack(localFound);
      setPersonalizedRole({ en: localFound.title_en, bn: localFound.title_bn });
      const stackStrings = (localFound.mustHaveSkills || [])
        .map((s: any) => typeof s === 'string' ? s : (s?.name || s?.id || String(s)))
        .slice(0, 6);
      setTargetStack(stackStrings.length > 0 ? stackStrings : ['Core Skills', 'Lab Projects', 'Git & GitHub']);
      const updatedVerdict = getTrackVerdict(trackSlug);
      setVerdict((prev: any) => ({
        ...(prev || {}),
        ...updatedVerdict,
        heading_en: `Career Strategy: ${localFound!.title_en}`,
        heading_bn: `ক্যারিয়ার দিকনির্দেশনা: ${localFound!.title_bn}`,
        body_en: localFound!.summary_en,
        body_bn: localFound!.summary_bn,
      }));
    }

    if (!saveCode) {
      // Create persistent profile & saveCode if student does not have one yet
      return await selectTrackDirectly(trackSlug);
    }

    try {
      const res = await fetch('/api/track/switch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ saveCode, trackSlug })
      });
      const data = await res.json();
      if (data.success && data.newTrack) {
        setPrimaryTrack(data.newTrack);
        if (data.verdict) {
          setVerdict(data.verdict);
        }
        setIsLoading(false);
        return true;
      }
      setIsLoading(false);
      return !!localFound;
    } catch (err) {
      console.error('Failed to switch track:', err);
      setIsLoading(false);
      return !!localFound;
    }
  };

  const selectTrackDirectly = async (trackSlug: string): Promise<boolean> => {
    setIsLoading(true);
    // 1. Immediately set local track to prevent empty screen
    let localFound = allTracks.find(t => t.slug === trackSlug);
    if (!localFound) {
      try {
        const fallbackRes = await fetch(`/api/tracks/${trackSlug}`);
        const fallbackData = await fallbackRes.json();
        if (fallbackData.success && fallbackData.track) {
          localFound = fallbackData.track;
        }
      } catch (err) {}
    }

    if (localFound) {
      setPrimaryTrack(localFound);
      setPersonalizedRole({ en: localFound.title_en, bn: localFound.title_bn });
      const stackStrings = (localFound.mustHaveSkills || [])
        .map((s: any) => typeof s === 'string' ? s : (s?.name || s?.id || String(s)))
        .slice(0, 6);
      setTargetStack(stackStrings.length > 0 ? stackStrings : ['Core Skills', 'Lab Projects', 'Git & GitHub']);
    }

    try {
      const res = await fetch('/api/survey/direct-select', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackSlug, languagePref: 'bn' }),
      });
      const data = await res.json();
      if (data.success && data.data) {
        setDiagnosticResult(data.data);
        setIsLoading(false);
        return true;
      }
      setIsLoading(false);
      return !!localFound;
    } catch (err) {
      console.error('Failed direct track selection:', err);
      setIsLoading(false);
      return !!localFound;
    }
  };

  const resetSession = () => {
    localStorage.removeItem('cst_save_code');
    setSaveCode(null);
    setProfile(null);
    setPrimaryTrack(null);
    setSecondaryTrack(null);
    setPersonalizedRole(null);
    setTargetStack([]);
    setHardwareSetupGuide(null);
    setSuggestedTracks([]);
    setCompletedMilestoneIds([]);
    setCompletedCertIds([]);
    setCompletedSkillIds([]);
    setVerdict(null);
  };

  return (
    <StudentContext.Provider
      value={{
        saveCode,
        profile,
        primaryTrack,
        secondaryTrack,
        allTracks,
        suggestedTracks,
        completedMilestoneIds,
        completedCertIds,
        completedSkillIds,
        verdict,
        personalizedRole,
        targetStack,
        hardwareSetupGuide,
        matchScore,
        requiresFoundationTrack,
        isLoading,
        setDiagnosticResult,
        loadProfileByCode,
        toggleMilestone,
        toggleCert,
        toggleSkill,
        switchActiveTrack,
        selectTrackDirectly,
        resetSession,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export function useStudent() {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
}
