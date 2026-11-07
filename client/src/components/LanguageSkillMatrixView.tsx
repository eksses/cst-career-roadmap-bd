import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import type { CareerTrack, LanguageItem, SkillMatrixItem, InterestMatrixItem } from '../../shared/types.js';
import { 
  ArrowLeft, 
  ArrowRight, 
  Map, 
  BookOpen, 
  Award,
  Code2,
  Server,
  Network,
  Palette,
  CheckCircle2,
  Briefcase,
  Globe,
  Compass,
  Cpu,
  Smartphone,
  ShieldCheck,
  Layers,
  Database,
  Terminal,
  Search,
  Check,
  Sparkles,
  SlidersHorizontal,
  HelpCircle
} from 'lucide-react';

interface LanguageSkillMatrixViewProps {
  tracks: CareerTrack[];
  onSelectTrack: (trackSlug: string) => void;
  onBack: () => void;
  isSelecting: boolean;
  initialMode?: 'roadmaps' | 'interests' | 'languages' | 'skills' | 'roadmap_tech' | 'combinations';
  initialSelectedId?: string;
}

export const LanguageSkillMatrixView: React.FC<LanguageSkillMatrixViewProps> = ({
  tracks,
  onSelectTrack,
  onBack,
  isSelecting,
  initialMode = 'roadmaps',
  initialSelectedId,
}) => {
  const { language } = useLanguage();
  const [activeMode, setActiveMode] = useState<'roadmaps' | 'interests' | 'languages' | 'skills' | 'roadmap_tech' | 'combinations'>(initialMode);
  
  // Matrix data from API
  const [languagesList, setLanguagesList] = useState<LanguageItem[]>([]);
  const [skillsList, setSkillsList] = useState<SkillMatrixItem[]>([]);
  const [interestsList, setInterestsList] = useState<InterestMatrixItem[]>([]);
  const [isLoadingMatrix, setIsLoadingMatrix] = useState<boolean>(true);

  // Active selections in sub-views
  const [selectedInterestId, setSelectedInterestId] = useState<string>('game_dev');
  const [selectedLanguageId, setSelectedLanguageId] = useState<string>('python');
  const [selectedSkillId, setSelectedSkillId] = useState<string>('docker');
  const [selectedRoadmapSlug, setSelectedRoadmapSlug] = useState<string>(tracks[0]?.slug || 'frontend-fullstack-web');

  // Combinations explorer selections
  const [comboInterest, setComboInterest] = useState<string>('game_dev');
  const [comboLanguage, setComboLanguage] = useState<string>('csharp');

  // Filter state for roadmaps catalog mode
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetch('/api/matrix/overview')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          if (data.languages) setLanguagesList(data.languages);
          if (data.skills) setSkillsList(data.skills);
          if (data.interests) setInterestsList(data.interests);
        }
      })
      .catch(err => console.error('Error fetching matrix data:', err))
      .finally(() => setIsLoadingMatrix(false));
  }, []);

  useEffect(() => {
    if (initialSelectedId) {
      if (initialMode === 'interests') setSelectedInterestId(initialSelectedId);
      if (initialMode === 'languages') setSelectedLanguageId(initialSelectedId);
      if (initialMode === 'skills') setSelectedSkillId(initialSelectedId);
      if (initialMode === 'roadmap_tech') setSelectedRoadmapSlug(initialSelectedId);
    }
  }, [initialMode, initialSelectedId]);

  const categories = [
    { key: 'all', label_en: 'All Roadmaps (24)', label_bn: 'সব রোডম্যাপ (২৪টি)' },
    { key: 'software', label_en: 'Software & Web (7)', label_bn: 'সফটওয়্যার ও ওয়েব (৭টি)' },
    { key: 'cloud_sec', label_en: 'Cloud & Security (4)', label_bn: 'ক্লাউড ও সিকিউরিটি (৪টি)' },
    { key: 'net_hardware', label_en: 'Networking & IoT (3)', label_bn: 'নেটওয়ার্কিং ও আইওটি (৩টি)' },
    { key: 'data_ai', label_en: 'Data & AI (3)', label_bn: 'ডেটা ও এআই (৩টি)' },
    { key: 'specialized', label_en: 'Gaming, Web3 & Design (4)', label_bn: 'গেমিং, ওয়েব৩ ও ডিজাইন (৪টি)' },
    { key: 'foundation', label_en: 'Foundations (3)', label_bn: 'ফাউন্ডেশন ও সাপোর্ট (৩টি)' },
  ];

  const getTrackCategory = (slug: string): string => {
    switch (slug) {
      case 'frontend-fullstack-web':
      case 'backend-systems-engineering':
      case 'mobile-app-development':
      case 'laravel-php-agency-dev':
      case 'desktop-app-development':
      case 'enterprise-java-fintech':
      case 'qa-software-testing':
        return 'software';
      case 'linux-devops-admin':
      case 'cloud-solutions-architecture':
      case 'cybersecurity-soc-analyst':
      case 'ethical-hacking-bug-bounty':
        return 'cloud_sec';
      case 'isp-mikrotik-networking':
      case 'embedded-iot-robotics':
      case 'it-hardware-support':
        return 'net_hardware';
      case 'ai-ml-engineer':
      case 'python-data-ai':
      case 'data-engineering-big-data':
        return 'data_ai';
      case 'game-development-unity':
      case 'blockchain-web3-developer':
      case 'ui-ux-design':
      case 'graphic-design-motion':
        return 'specialized';
      case 'digital-marketing-ecommerce':
      case 'bpo-tech-support-data':
      case 'digital-literacy-foundation':
        return 'foundation';
      default:
        return 'software';
    }
  };

  const getTrackIcon = (slug: string) => {
    switch (slug) {
      case 'frontend-fullstack-web': return <Code2 className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'backend-systems-engineering': return <Database className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      case 'mobile-app-development': return <Smartphone className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'linux-devops-admin': return <Server className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      case 'cloud-solutions-architecture': return <Layers className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'cybersecurity-soc-analyst': return <ShieldCheck className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      case 'ethical-hacking-bug-bounty': return <ShieldCheck className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'python-data-ai': return <Cpu className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'ai-ml-engineer': return <Cpu className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      case 'data-engineering-big-data': return <Database className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'enterprise-java-fintech': return <Briefcase className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      case 'laravel-php-agency-dev': return <Globe className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'desktop-app-development': return <Layers className="w-5 h-5 stroke-[1.75] text-[#575653]" />;
      case 'game-development-unity': return <Layers className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'blockchain-web3-developer': return <Database className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      case 'isp-mikrotik-networking': return <Network className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      case 'embedded-iot-robotics': return <Cpu className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'ui-ux-design': return <Palette className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      case 'qa-software-testing': return <CheckCircle2 className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'it-hardware-support': return <Briefcase className="w-5 h-5 stroke-[1.75] text-[#575653]" />;
      case 'graphic-design-motion': return <Palette className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'digital-marketing-ecommerce': return <Globe className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      default: return <Compass className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
    }
  };

  const filteredTracks = useMemo(() => {
    return tracks.filter(t => {
      if (selectedCategory !== 'all' && getTrackCategory(t.slug) !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitleEn = t.title_en.toLowerCase().includes(query);
        const matchTitleBn = t.title_bn.toLowerCase().includes(query);
        const matchSummaryEn = t.summary_en.toLowerCase().includes(query);
        const matchSummaryBn = t.summary_bn.toLowerCase().includes(query);
        const matchSkills = t.mustHaveSkills?.some(s => s.name.toLowerCase().includes(query));
        return matchTitleEn || matchTitleBn || matchSummaryEn || matchSummaryBn || matchSkills;
      }
      return true;
    });
  }, [tracks, selectedCategory, searchQuery]);

  // Selected interest item
  const currentInterest = useMemo(() => {
    return interestsList.find(i => i.id === selectedInterestId) || interestsList[0];
  }, [interestsList, selectedInterestId]);

  // Selected language item
  const currentLanguage = useMemo(() => {
    return languagesList.find(l => l.id === selectedLanguageId) || languagesList[0];
  }, [languagesList, selectedLanguageId]);

  // Selected skill item
  const currentSkill = useMemo(() => {
    return skillsList.find(s => s.id === selectedSkillId) || skillsList[0];
  }, [skillsList, selectedSkillId]);

  // Selected roadmap for tech stack inspection
  const currentRoadmap = useMemo(() => {
    return tracks.find(t => t.slug === selectedRoadmapSlug) || tracks[0];
  }, [tracks, selectedRoadmapSlug]);

  // Roadmaps associated with current language
  const languageRoadmaps = useMemo(() => {
    if (!currentLanguage) return [];
    return currentLanguage.associatedRoadmaps;
  }, [currentLanguage]);

  // Roadmaps associated with current skill
  const skillRoadmaps = useMemo(() => {
    if (!currentSkill) return [];
    return currentSkill.associatedRoadmaps;
  }, [currentSkill]);

  // Languages for current roadmap
  const roadmapLanguages = useMemo(() => {
    if (!currentRoadmap) return [];
    return languagesList.filter(l => 
      l.associatedRoadmaps.some(r => r.trackSlug === currentRoadmap.slug)
    ).map(l => {
      const match = l.associatedRoadmaps.find(r => r.trackSlug === currentRoadmap.slug);
      return {
        ...l,
        importance: match?.importance || 'Recommended',
        role_en: match?.roleInRoadmap_en || '',
        role_bn: match?.roleInRoadmap_bn || '',
      };
    });
  }, [languagesList, currentRoadmap]);

  // Skills for current roadmap
  const roadmapSkills = useMemo(() => {
    if (!currentRoadmap) return [];
    return skillsList.filter(s => 
      s.associatedRoadmaps.some(r => r.trackSlug === currentRoadmap.slug)
    ).map(s => {
      const match = s.associatedRoadmaps.find(r => r.trackSlug === currentRoadmap.slug);
      return {
        ...s,
        importance: match?.importance || 'Recommended',
      };
    });
  }, [skillsList, currentRoadmap]);

  // Matching roadmap for combination explorer
  const comboMatchedRoadmaps = useMemo(() => {
    const interestObj = interestsList.find(i => i.id === comboInterest);
    const langObj = languagesList.find(l => l.id === comboLanguage);
    
    const candidates = tracks.filter(t => {
      const matchesInterest = interestObj ? interestObj.matchingRoadmaps.some(m => m.trackSlug === t.slug) : true;
      const matchesLang = langObj ? langObj.associatedRoadmaps.some(r => r.trackSlug === t.slug) : true;
      return matchesInterest || matchesLang;
    });

    return candidates.length > 0 ? candidates : tracks.slice(0, 3);
  }, [tracks, interestsList, languagesList, comboInterest, comboLanguage]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
      
      {/* Top Navigation Bar with Back & 6 Mode Switchers */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#575653] hover:text-[#141413] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2]" />
            <span>{language === 'bn' ? 'ফিরে যাও' : 'Back'}</span>
          </button>
          
          <span className="text-xs font-bold text-[#575653] bg-[#FAF9F5] border border-[#E5E4DF] px-3 py-1 rounded-full">
            {language === 'bn' ? '২৪টি ক্যারিয়ার রোডম্যাপ ও স্ট্যাক' : '24 CST Career Roadmaps'}
          </span>
        </div>

        {/* 6 Mode Segmented Control */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl shadow-2xs overflow-x-auto">
          <button
            onClick={() => setActiveMode('roadmaps')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeMode === 'roadmaps'
                ? 'bg-[#141413] text-white shadow-xs'
                : 'text-[#575653] hover:text-[#141413]'
            }`}
          >
            <Map className="w-3.5 h-3.5 stroke-[2]" />
            <span>{language === 'bn' ? 'সকল ২৪টি রোডম্যাপ' : 'All 24 Roadmaps'}</span>
          </button>

          <button
            onClick={() => setActiveMode('interests')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeMode === 'interests'
                ? 'bg-[#C84B31] text-white shadow-xs'
                : 'text-[#575653] hover:text-[#141413]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 stroke-[2]" />
            <span>{language === 'bn' ? 'আগ্রহ অনুযায়ী' : 'By Interest'}</span>
          </button>

          <button
            onClick={() => setActiveMode('languages')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeMode === 'languages'
                ? 'bg-[#1B4332] text-white shadow-xs'
                : 'text-[#575653] hover:text-[#141413]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 stroke-[2]" />
            <span>{language === 'bn' ? 'ল্যাঙ্গুয়েজ অনুযায়ী' : 'By Language'}</span>
          </button>

          <button
            onClick={() => setActiveMode('skills')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeMode === 'skills'
                ? 'bg-[#575653] text-white shadow-xs'
                : 'text-[#575653] hover:text-[#141413]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 stroke-[2]" />
            <span>{language === 'bn' ? 'দক্ষতা অনুযায়ী' : 'By Skill'}</span>
          </button>

          <button
            onClick={() => setActiveMode('roadmap_tech')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeMode === 'roadmap_tech'
                ? 'bg-[#C84B31] text-white shadow-xs'
                : 'text-[#575653] hover:text-[#141413]'
            }`}
          >
            <Database className="w-3.5 h-3.5 stroke-[2]" />
            <span>{language === 'bn' ? 'রোডম্যাপের স্ট্যাক' : 'By Tech Stack'}</span>
          </button>

          <button
            onClick={() => setActiveMode('combinations')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeMode === 'combinations'
                ? 'bg-[#141413] text-white shadow-xs'
                : 'text-[#575653] hover:text-[#141413]'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 stroke-[2]" />
            <span>{language === 'bn' ? 'কম্বিনেশন এক্সপ্লোরার' : 'Combination Match'}</span>
          </button>
        </div>
      </div>

      {/* Mode 1: ALL 24 ROADMAPS */}
      {activeMode === 'roadmaps' && (
        <div>
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight">
              {language === 'bn' ? 'পলিটেকনিক শিক্ষার্থীদের ২৪টি ক্যারিয়ার রোডম্যাপ' : 'All 24 Polytechnic Career Roadmaps'}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#575653] max-w-xl mx-auto leading-relaxed">
              {language === 'bn'
                ? 'যেকোনো রোডম্যাপ সরাসরি নির্বাচন করো অথবা ফিল্টার করে তোমার পছন্দের ক্ষেত্র খুঁজে নাও।'
                : 'Select any roadmap directly, or filter by engineering domain, languages, and skills.'}
            </p>
          </div>

          {/* Search bar & Category filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 stroke-[2] text-[#575653] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'bn' ? 'রোডম্যাপ বা স্কিল খুঁজুন...' : 'Search roadmap or skill...'}
                className="w-full pl-9 pr-4 py-2 bg-[#FFFFFF] border border-[#E5E4DF] rounded-xl text-xs text-[#141413] focus:outline-none focus:border-[#C84B31] shadow-2xs"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.key
                      ? 'bg-[#141413] text-white shadow-xs'
                      : 'bg-[#FFFFFF] border border-[#E5E4DF] text-[#575653] hover:text-[#141413]'
                  }`}
                >
                  {language === 'bn' ? cat.label_bn : cat.label_en}
                </button>
              ))}
            </div>
          </div>

          {/* Roadmaps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTracks.map((track) => (
              <div
                key={track.slug}
                className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E4DF] hover:border-[#C84B31]/40 shadow-xs flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F6F2] flex items-center justify-center shrink-0">
                      {getTrackIcon(track.slug)}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#F7F6F2] border border-[#E5E4DF] text-[#575653]">
                      {track.roadmapPhases?.length || 4} {language === 'bn' ? 'পর্ব' : 'Phases'}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-[#141413] leading-snug line-clamp-2">
                    {language === 'bn' ? track.title_bn : track.title_en}
                  </h2>

                  <p className="mt-2 text-xs text-[#575653] leading-relaxed line-clamp-3">
                    {language === 'bn' ? track.summary_bn : track.summary_en}
                  </p>

                  {/* Skills tags preview */}
                  {track.mustHaveSkills && track.mustHaveSkills.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {track.mustHaveSkills.slice(0, 3).map((s, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSkillId(s.id);
                            setActiveMode('skills');
                          }}
                          className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F7F6F2] border border-[#E5E4DF] text-[#575653] hover:text-[#C84B31] hover:border-[#C84B31]/30 transition-colors"
                          title="Click to view roadmaps using this skill"
                        >
                          {s.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3.5 border-t border-[#E5E4DF] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-xs text-[#575653]">
                    <span className="inline-flex items-center gap-1 font-semibold" title="Free certifications included">
                      <Award className="w-3.5 h-3.5 stroke-[2] text-[#1B4332]" />
                      {track.freeCerts?.length || 3}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedRoadmapSlug(track.slug);
                        setActiveMode('roadmap_tech');
                      }}
                      className="inline-flex items-center gap-1 font-semibold text-[#575653] hover:text-[#C84B31] transition-colors"
                      title="Inspect full tech stack"
                    >
                      <BookOpen className="w-3.5 h-3.5 stroke-[2]" />
                      <span>{language === 'bn' ? 'স্ট্যাক' : 'Stack'}</span>
                    </button>
                  </div>

                  <button
                    disabled={isSelecting}
                    onClick={() => onSelectTrack(track.slug)}
                    className="px-3.5 py-2 bg-[#C84B31] hover:bg-[#B33E26] active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>{language === 'bn' ? 'রোডম্যাপ নাও' : 'Select'}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mode 2: ROADMAPS BY INTEREST */}
      {activeMode === 'interests' && (
        <div>
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight">
              {language === 'bn' ? 'তোমার আগ্রহ ও ভালোলাগা অনুযায়ী রোডম্যাপ' : 'Career Roadmaps by Student Interest'}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#575653] max-w-xl mx-auto leading-relaxed">
              {language === 'bn'
                ? 'তোমার আসল শখ বা পছন্দের ধরণ বেছে নাও। আমরা তোমাকে দেখাব কোন ক্যারিয়ারটি তোমার ব্যক্তিত্বের সাথে সেরা মানাবে।'
                : 'Select what naturally excites you to discover the career tracks tailored to your personality and goals.'}
            </p>
          </div>

          {/* Interest Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-8">
            {interestsList.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedInterestId(item.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  selectedInterestId === item.id
                    ? 'bg-[#C84B31] text-white border-[#C84B31] shadow-xs'
                    : 'bg-[#FFFFFF] border-[#E5E4DF] text-[#141413] hover:border-[#C84B31]/30'
                }`}
              >
                <div className="font-bold text-xs leading-snug line-clamp-2">
                  {language === 'bn' ? item.title_bn : item.title_en}
                </div>
                <div className={`mt-2 text-[10px] font-semibold ${
                  selectedInterestId === item.id ? 'text-white/80' : 'text-[#575653]'
                }`}>
                  {item.matchingRoadmaps.length} {language === 'bn' ? 'টি ম্যাচিং রোডম্যাপ' : 'Matches'}
                </div>
              </button>
            ))}
          </div>

          {/* Current Interest Detail Box */}
          {currentInterest && (
            <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 sm:p-6 mb-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E4DF]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C84B31] bg-[#C84B31]/10 px-2.5 py-0.5 rounded-full">
                    {language === 'bn' ? 'নির্বাচিত আগ্রহ' : 'Selected Passion'}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#141413] mt-1.5">
                    {language === 'bn' ? currentInterest.title_bn : currentInterest.title_en}
                  </h2>
                </div>
                <div className="text-xs font-semibold text-[#1B4332] bg-[#1B4332]/10 border border-[#1B4332]/20 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                  {language === 'bn' ? `প্রস্তাবিত প্রথম ল্যাঙ্গুয়েজ: ${currentInterest.recommendedStarterLanguage}` : `Starter Language: ${currentInterest.recommendedStarterLanguage}`}
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-[#575653] leading-relaxed">
                {language === 'bn' ? currentInterest.tagline_bn : currentInterest.tagline_en}
              </p>
            </div>
          )}

          {/* Matching Roadmaps for this Interest */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#575653] mb-2">
              {language === 'bn' ? 'এই আগ্রহের সাথে প্রস্তাবিত সেরা ক্যারিয়ারসমূহ:' : 'Recommended Career Roadmaps for this Interest:'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentInterest?.matchingRoadmaps.map((r, idx) => {
                const trackObj = tracks.find(t => t.slug === r.trackSlug);
                return (
                  <div
                    key={idx}
                    className="bg-[#FFFFFF] border border-[#E5E4DF] hover:border-[#C84B31]/40 rounded-2xl p-5 shadow-xs flex flex-col justify-between transition-all"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#F7F6F2] flex items-center justify-center shrink-0">
                            {getTrackIcon(r.trackSlug)}
                          </div>
                          <h4 className="text-sm font-bold text-[#141413] leading-snug">
                            {language === 'bn' ? r.trackTitle_bn : r.trackTitle_en}
                          </h4>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#1B4332]/10 text-[#1B4332] shrink-0">
                          {language === 'bn' ? r.difficultyTier_bn : r.difficultyTier}
                        </span>
                      </div>

                      <div className="mt-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#E5E4DF]/60 text-xs text-[#575653] leading-relaxed">
                        <strong className="text-[#141413] block mb-0.5">
                          {language === 'bn' ? 'কেন এটি তোমার জন্য উপযুক্ত:' : 'Why this matches you:'}
                        </strong>
                        {language === 'bn' ? r.fitReason_bn : r.fitReason_en}
                      </div>

                      {trackObj && (
                        <p className="mt-2 text-xs text-[#575653] line-clamp-2">
                          {language === 'bn' ? trackObj.summary_bn : trackObj.summary_en}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E5E4DF] flex items-center justify-between gap-3">
                      <button
                        onClick={() => {
                          setSelectedRoadmapSlug(r.trackSlug);
                          setActiveMode('roadmap_tech');
                        }}
                        className="text-xs font-semibold text-[#575653] hover:text-[#141413] transition-colors"
                      >
                        {language === 'bn' ? 'স্ট্যাক দেখো' : 'View Stack'}
                      </button>

                      <button
                        disabled={isSelecting}
                        onClick={() => onSelectTrack(r.trackSlug)}
                        className="px-3.5 py-1.5 bg-[#C84B31] hover:bg-[#B33E26] active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>{language === 'bn' ? 'এই রোডম্যাপটি বেছে নাও' : 'Select Roadmap'}</span>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: ROADMAPS BY LANGUAGE (With Next Language Suggestions!) */}
      {activeMode === 'languages' && (
        <div>
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight">
              {language === 'bn' ? 'ল্যাঙ্গুয়েজ অনুযায়ী ক্যারিয়ার রোডম্যাপ ও অগ্রগতি' : 'Career Roadmaps & Next Language Suggestions'}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#575653] max-w-xl mx-auto leading-relaxed">
              {language === 'bn'
                ? 'তুমি যে ল্যাঙ্গুয়েজ জানো বা শিখতে চাও তা নির্বাচন করো। দেখো কোন ক্যারিয়ারে এটি কাজে লাগবে এবং পরবর্তী ধাপে কী শেখা উচিত।'
                : 'Select any programming language to see matching career roadmaps, why it is used, and what to learn next.'}
            </p>
          </div>

          {/* Language Selection Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8">
            {languagesList.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguageId(lang.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedLanguageId === lang.id
                    ? 'bg-[#1B4332] text-white shadow-sm ring-2 ring-[#1B4332]/30'
                    : 'bg-[#FFFFFF] border border-[#E5E4DF] text-[#575653] hover:text-[#141413] hover:border-[#141413]/30'
                }`}
              >
                <Code2 className="w-3.5 h-3.5 stroke-[2]" />
                <span>{lang.name.split(' (')[0]}</span>
              </button>
            ))}
          </div>

          {/* Current Language Detail Box */}
          {currentLanguage && (
            <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 sm:p-6 mb-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E4DF]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B4332] bg-[#1B4332]/10 px-2.5 py-0.5 rounded-full">
                      {currentLanguage.category}
                    </span>
                    <span className="text-[11px] font-bold bg-[#FAF9F5] border border-[#E5E4DF] text-[#575653] px-2.5 py-0.5 rounded-full">
                      {language === 'bn' ? `লেভেল: ${currentLanguage.difficulty_bn}` : `Difficulty: ${currentLanguage.difficulty}`}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#141413]">
                    {currentLanguage.name}
                  </h2>
                </div>
                <div className="text-xs font-semibold text-[#575653] bg-[#F7F6F2] px-3 py-1.5 rounded-xl border border-[#E5E4DF] self-start sm:self-auto">
                  {language === 'bn' 
                    ? `${languageRoadmaps.length}টি ক্যারিয়ার রোডম্যাপে ব্যবহৃত` 
                    : `Used in ${languageRoadmaps.length} Career Roadmaps`}
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-[#575653] leading-relaxed">
                {language === 'bn' ? currentLanguage.description_bn : currentLanguage.description_en}
              </p>

              {/* Next Language & Skill Progression Advice */}
              {currentLanguage.nextLanguageSuggestions && currentLanguage.nextLanguageSuggestions.length > 0 && (
                <div className="mt-4 pt-4 border-t border-[#E5E4DF]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#C84B31] mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 stroke-[2]" />
                    <span>{language === 'bn' ? 'পরবর্তী ধাপে কী শেখা উচিত (Next Step Suggestion):' : 'What to learn next:'}</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentLanguage.nextLanguageSuggestions.map((sug, sIdx) => (
                      <div key={sIdx} className="p-3 rounded-xl bg-[#FAF9F5] border border-[#E5E4DF] text-xs">
                        <span className="font-bold text-[#141413] block mb-1">
                          {language === 'bn' ? `শেখো: ${sug.nextLanguageName}` : `Learn: ${sug.nextLanguageName}`}
                        </span>
                        <p className="text-[#575653] leading-relaxed text-[11px]">
                          {language === 'bn' ? sug.reason_bn : sug.reason_en}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Associated Roadmaps for this Language */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#575653] mb-2">
              {language === 'bn' ? 'এই ল্যাঙ্গুয়েজের সাথে সংযুক্ত ক্যারিয়ার রোডম্যাপসমূহ:' : 'Career Tracks Utilizing This Language:'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {languageRoadmaps.map((r, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#E5E4DF] hover:border-[#1B4332]/40 rounded-2xl p-5 shadow-xs flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#F7F6F2] flex items-center justify-center shrink-0">
                          {getTrackIcon(r.trackSlug)}
                        </div>
                        <h4 className="text-sm font-bold text-[#141413] leading-snug">
                          {language === 'bn' ? r.trackTitle_bn : r.trackTitle_en}
                        </h4>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shrink-0 ${
                        r.importance === 'Essential'
                          ? 'bg-[#C84B31]/10 text-[#C84B31]'
                          : 'bg-[#1B4332]/10 text-[#1B4332]'
                      }`}>
                        {language === 'bn' 
                          ? (r.importance === 'Essential' ? 'আবশ্যক' : 'পরামর্শকৃত') 
                          : r.importance}
                      </span>
                    </div>

                    <div className="mt-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#E5E4DF]/60 text-xs text-[#575653] leading-relaxed">
                      <strong className="text-[#141413] block mb-0.5">
                        {language === 'bn' ? 'এই ক্যারিয়ারে ল্যাঙ্গুয়েজটির ভূমিকা:' : 'Role in this Career:'}
                      </strong>
                      {language === 'bn' ? r.roleInRoadmap_bn : r.roleInRoadmap_en}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E5E4DF] flex items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        setSelectedRoadmapSlug(r.trackSlug);
                        setActiveMode('roadmap_tech');
                      }}
                      className="text-xs font-semibold text-[#575653] hover:text-[#141413] transition-colors"
                    >
                      {language === 'bn' ? 'পুরো স্ট্যাক দেখো' : 'View Full Stack'}
                    </button>

                    <button
                      disabled={isSelecting}
                      onClick={() => onSelectTrack(r.trackSlug)}
                      className="px-3.5 py-1.5 bg-[#1B4332] hover:bg-[#143225] active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>{language === 'bn' ? 'এই রোডম্যাপটি বেছে নাও' : 'Select Roadmap'}</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mode 4: ROADMAPS BY SKILL */}
      {activeMode === 'skills' && (
        <div>
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight">
              {language === 'bn' ? 'দক্ষতা অনুযায়ী ক্যারিয়ার রোডম্যাপ' : 'Career Roadmaps by Technical Skill'}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#575653] max-w-xl mx-auto leading-relaxed">
              {language === 'bn'
                ? 'ডকার, স্প্রিং বুট, বার্প স্যুট, কাফকা বা ইউনিটির মতো নির্দিষ্ট ইন্ডাস্ট্রি স্কিল সিলেক্ট করে দেখো কোন পেশায় এর চাহিদা রয়েছে।'
                : 'Select any technical skill to discover all matching career tracks and prerequisites.'}
            </p>
          </div>

          {/* Skill Selection Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8">
            {skillsList.map((skill) => (
              <button
                key={skill.id}
                onClick={() => setSelectedSkillId(skill.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedSkillId === skill.id
                    ? 'bg-[#575653] text-white shadow-sm ring-2 ring-[#575653]/30'
                    : 'bg-[#FFFFFF] border border-[#E5E4DF] text-[#575653] hover:text-[#141413] hover:border-[#141413]/30'
                }`}
              >
                <Layers className="w-3.5 h-3.5 stroke-[2]" />
                <span>{skill.name.split(' (')[0].split(' &')[0]}</span>
              </button>
            ))}
          </div>

          {/* Current Skill Detail Box */}
          {currentSkill && (
            <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 sm:p-6 mb-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E4DF]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#575653] bg-[#575653]/10 px-2.5 py-0.5 rounded-full">
                      {currentSkill.category}
                    </span>
                    <span className="text-[11px] font-bold bg-[#FAF9F5] border border-[#E5E4DF] text-[#575653] px-2.5 py-0.5 rounded-full">
                      {language === 'bn' ? `লেভেল: ${currentSkill.difficulty_bn}` : `Level: ${currentSkill.difficulty}`}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#141413]">
                    {currentSkill.name}
                  </h2>
                </div>
                <div className="text-xs font-semibold text-[#575653] bg-[#F7F6F2] px-3 py-1.5 rounded-xl border border-[#E5E4DF] self-start sm:self-auto">
                  {language === 'bn' 
                    ? `${skillRoadmaps.length}টি ক্যারিয়ার রোডম্যাপে প্রয়োজন` 
                    : `Required in ${skillRoadmaps.length} Roadmaps`}
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-[#575653] leading-relaxed">
                {language === 'bn' ? currentSkill.description_bn : currentSkill.description_en}
              </p>
            </div>
          )}

          {/* Associated Roadmaps for this Skill */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#575653] mb-2">
              {language === 'bn' ? 'এই দক্ষতা যে যে ক্যারিয়ারে দরকার:' : 'Career Tracks Requiring This Skill:'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillRoadmaps.map((r, idx) => {
                const trackObj = tracks.find(t => t.slug === r.trackSlug);
                return (
                  <div
                    key={idx}
                    className="bg-[#FFFFFF] border border-[#E5E4DF] hover:border-[#575653]/40 rounded-2xl p-5 shadow-xs flex flex-col justify-between transition-all"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#F7F6F2] flex items-center justify-center shrink-0">
                            {getTrackIcon(r.trackSlug)}
                          </div>
                          <h4 className="text-sm font-bold text-[#141413] leading-snug">
                            {language === 'bn' ? r.trackTitle_bn : r.trackTitle_en}
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          r.importance === 'Essential'
                            ? 'bg-[#C84B31]/10 text-[#C84B31]'
                            : 'bg-[#1B4332]/10 text-[#1B4332]'
                        }`}>
                          {language === 'bn' 
                            ? (r.importance === 'Essential' ? 'আবশ্যক দক্ষতা' : 'পরামর্শকৃত') 
                            : r.importance}
                        </span>
                        {trackObj && (
                          <span className="text-[11px] font-medium text-[#575653]">
                            {trackObj.roadmapPhases?.length || 4} {language === 'bn' ? 'পর্ব' : 'Phases'}
                          </span>
                        )}
                      </div>

                      {trackObj && (
                        <p className="mt-3 text-xs text-[#575653] line-clamp-2 leading-relaxed">
                          {language === 'bn' ? trackObj.summary_bn : trackObj.summary_en}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E5E4DF] flex items-center justify-between gap-3">
                      <button
                        onClick={() => {
                          setSelectedRoadmapSlug(r.trackSlug);
                          setActiveMode('roadmap_tech');
                        }}
                        className="text-xs font-semibold text-[#575653] hover:text-[#141413] transition-colors"
                      >
                        {language === 'bn' ? 'স্ট্যাক দেখো' : 'View Stack'}
                      </button>

                      <button
                        disabled={isSelecting}
                        onClick={() => onSelectTrack(r.trackSlug)}
                        className="px-3.5 py-1.5 bg-[#141413] hover:bg-[#2B2A27] active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>{language === 'bn' ? 'নির্বাচন' : 'Select'}</span>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mode 5: LANGUAGES & SKILLS BY ROADMAP */}
      {activeMode === 'roadmap_tech' && (
        <div>
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight">
              {language === 'bn' ? 'রোডম্যাপের ল্যাঙ্গুয়েজ ও টেকনোলজি স্ট্যাক' : 'Languages & Skills by Career Roadmap'}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#575653] max-w-xl mx-auto leading-relaxed">
              {language === 'bn'
                ? 'যেকোনো রোডম্যাপ বেছে নিয়ে তার সকল প্রোগ্রামিং ল্যাঙ্গুয়েজ, আবশ্যক টুলস ও ভাইভা স্কিল দেখো।'
                : 'Select any roadmap to inspect its programming languages, core tools, and technical dependencies.'}
            </p>
          </div>

          {/* Roadmap Selector Dropdown / Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8">
            {tracks.map((t) => (
              <button
                key={t.slug}
                onClick={() => setSelectedRoadmapSlug(t.slug)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedRoadmapSlug === t.slug
                    ? 'bg-[#141413] text-white shadow-xs'
                    : 'bg-[#FFFFFF] border border-[#E5E4DF] text-[#575653] hover:text-[#141413]'
                }`}
              >
                {getTrackIcon(t.slug)}
                <span className="truncate max-w-[140px] sm:max-w-none">
                  {language === 'bn' ? t.title_bn.split(' (')[0] : t.title_en.split(' (')[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Current Selected Roadmap Full Breakdown */}
          {currentRoadmap && (
            <div className="space-y-6">
              
              {/* Top Banner with Action */}
              <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C84B31] bg-[#C84B31]/10 px-2.5 py-0.5 rounded-full">
                      {language === 'bn' ? 'নির্বাচিত রোডম্যাপ' : 'Selected Roadmap'}
                    </span>
                    <span className="text-[11px] font-bold bg-[#FAF9F5] border border-[#E5E4DF] text-[#575653] px-2.5 py-0.5 rounded-full">
                      {currentRoadmap.roadmapPhases?.length || 4} {language === 'bn' ? 'পর্বের সিলেবাস' : 'Phases'}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#141413]">
                    {language === 'bn' ? currentRoadmap.title_bn : currentRoadmap.title_en}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-[#575653] max-w-2xl leading-relaxed">
                    {language === 'bn' ? currentRoadmap.summary_bn : currentRoadmap.summary_en}
                  </p>
                </div>

                <button
                  disabled={isSelecting}
                  onClick={() => onSelectTrack(currentRoadmap.slug)}
                  className="shrink-0 px-5 py-3 bg-[#C84B31] hover:bg-[#B33E26] active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{language === 'bn' ? 'এই রোডম্যাপটি শুরু করো' : 'Start This Roadmap'}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </button>
              </div>

              {/* Two Column Grid: Languages on Left, Skills on Right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Languages Section */}
                <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E4DF] mb-4">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 stroke-[2] text-[#C84B31]" />
                      <h3 className="text-sm font-extrabold text-[#141413]">
                        {language === 'bn' ? 'প্রয়োজনীয় প্রোগ্রামিং ল্যাঙ্গুয়েজ' : 'Programming Languages'}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-[#575653]">
                      {roadmapLanguages.length} {language === 'bn' ? 'টি' : 'Languages'}
                    </span>
                  </div>

                  {roadmapLanguages.length === 0 ? (
                    <p className="text-xs text-[#575653] py-4 text-center">
                      {language === 'bn' ? 'এই ট্র্যাকে কোনো কোডিং ল্যাঙ্গুয়েজ বাধ্যতামূলক নয়।' : 'No coding languages required.'}
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {roadmapLanguages.map((lang) => (
                        <div
                          key={lang.id}
                          className="p-3 bg-[#FAF9F5] border border-[#E5E4DF] rounded-xl hover:border-[#C84B31]/30 transition-colors cursor-pointer"
                          onClick={() => {
                            setSelectedLanguageId(lang.id);
                            setActiveMode('languages');
                          }}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-xs font-bold text-[#141413]">
                              {lang.name}
                            </span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                              lang.importance === 'Essential'
                                ? 'bg-[#C84B31]/10 text-[#C84B31]'
                                : 'bg-[#1B4332]/10 text-[#1B4332]'
                            }`}>
                              {language === 'bn' 
                                ? (lang.importance === 'Essential' ? 'আবশ্যক' : 'পরামর্শ') 
                                : lang.importance}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#575653] leading-relaxed">
                            {language === 'bn' ? lang.role_bn : lang.role_en}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Skills Section */}
                <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E4DF] mb-4">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 stroke-[2] text-[#1B4332]" />
                      <h3 className="text-sm font-extrabold text-[#141413]">
                        {language === 'bn' ? 'প্রয়োজনীয় টেকনিক্যাল টুলস ও স্কিল' : 'Technical Tools & Skills'}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-[#575653]">
                      {roadmapSkills.length || currentRoadmap.mustHaveSkills?.length || 0} {language === 'bn' ? 'টি' : 'Skills'}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {(roadmapSkills.length > 0 ? roadmapSkills : currentRoadmap.mustHaveSkills || []).map((skill: any, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#FAF9F5] border border-[#E5E4DF] rounded-xl hover:border-[#1B4332]/30 transition-colors cursor-pointer"
                        onClick={() => {
                          if (skill.id && skillsList.some(s => s.id === skill.id)) {
                            setSelectedSkillId(skill.id);
                            setActiveMode('skills');
                          }
                        }}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-bold text-[#141413]">
                            {skill.name}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#1B4332]/10 text-[#1B4332]">
                            {skill.category || 'Skill'}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#575653] leading-relaxed">
                          {language === 'bn' ? (skill.description_bn || skill.name) : (skill.description_en || skill.name)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      )}

      {/* Mode 6: COMBINATIONS EXPLORER (Match any classmate's combo!) */}
      {activeMode === 'combinations' && (
        <div>
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight">
              {language === 'bn' ? 'কম্বিনেশন এক্সপ্লোরার (সবার জন্য রোডম্যাপ ম্যাচ)' : 'Combination Career Match Engine'}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#575653] max-w-xl mx-auto leading-relaxed">
              {language === 'bn'
                ? 'তোমার ক্লাসের যেকোনো সহপাঠীর আগ্রহ ও পছন্দের ল্যাঙ্গুয়েজ মিলিয়ে দেখো কোন রোডম্যাপটি নিখুঁত ফলাফল দেয়।'
                : 'Mix and match any interest and programming language to find the exact career track tailored for every student in your class.'}
            </p>
          </div>

          {/* Interactive Selectors Box */}
          <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 sm:p-6 mb-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Step 1: Select Student Interest */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#575653] mb-2">
                  {language === 'bn' ? '১. সহপাঠীর মূল আগ্রহ বা ভালোলাগা:' : '1. Student Passion or Goal:'}
                </label>
                <select
                  value={comboInterest}
                  onChange={(e) => setComboInterest(e.target.value)}
                  className="w-full p-2.5 bg-[#FAF9F5] border border-[#E5E4DF] rounded-xl text-xs font-semibold text-[#141413] focus:outline-none focus:border-[#C84B31]"
                >
                  {interestsList.map((item) => (
                    <option key={item.id} value={item.id}>
                      {language === 'bn' ? item.title_bn : item.title_en}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Select Preferred Language */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#575653] mb-2">
                  {language === 'bn' ? '২. যে ল্যাঙ্গুয়েজ জানে বা শিখতে চায়:' : '2. Preferred Programming Language:'}
                </label>
                <select
                  value={comboLanguage}
                  onChange={(e) => setComboLanguage(e.target.value)}
                  className="w-full p-2.5 bg-[#FAF9F5] border border-[#E5E4DF] rounded-xl text-xs font-semibold text-[#141413] focus:outline-none focus:border-[#C84B31]"
                >
                  {languagesList.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

            </div>
          </div>

          {/* Matched Outcomes for this Combination */}
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#575653]">
                {language === 'bn' ? 'এই কম্বিনেশনের সাথে প্রস্তাবিত রোডম্যাপসমূহ:' : 'Matched Career Trajectories:'}
              </h3>
              <span className="text-xs font-semibold text-[#1B4332] bg-[#1B4332]/10 px-2.5 py-0.5 rounded-full">
                {comboMatchedRoadmaps.length} {language === 'bn' ? 'টি সেরা ম্যাচ' : 'Matches'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {comboMatchedRoadmaps.map((track) => (
                <div
                  key={track.slug}
                  className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E4DF] hover:border-[#C84B31]/40 shadow-xs flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F7F6F2] flex items-center justify-center shrink-0">
                        {getTrackIcon(track.slug)}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#1B4332]/10 text-[#1B4332]">
                        Match Found
                      </span>
                    </div>

                    <h2 className="text-base font-bold text-[#141413] leading-snug line-clamp-2">
                      {language === 'bn' ? track.title_bn : track.title_en}
                    </h2>

                    <p className="mt-2 text-xs text-[#575653] leading-relaxed line-clamp-3">
                      {language === 'bn' ? track.summary_bn : track.summary_en}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-[#E5E4DF] flex items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        setSelectedRoadmapSlug(track.slug);
                        setActiveMode('roadmap_tech');
                      }}
                      className="text-xs font-semibold text-[#575653] hover:text-[#141413] transition-colors"
                    >
                      {language === 'bn' ? 'স্ট্যাক দেখো' : 'View Stack'}
                    </button>

                    <button
                      disabled={isSelecting}
                      onClick={() => onSelectTrack(track.slug)}
                      className="px-3.5 py-1.5 bg-[#C84B31] hover:bg-[#B33E26] active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>{language === 'bn' ? 'রোডম্যাপ নাও' : 'Select'}</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
