import React, { useState, useEffect } from 'react';
import { useLanguage } from './context/LanguageContext.js';
import { useStudent } from './context/StudentContext.js';
import { Navbar } from './components/Navbar.js';
import { RealTimeLoadingBar } from './components/RealTimeLoadingBar.js';
import { LocationStatusStrip } from './components/LocationStatusStrip.js';
import { ErrorBoundary } from './components/ErrorBoundary.js';
import { LanguageOnboarding } from './components/LanguageOnboarding.js';
import { SurveyStepCard } from './components/SurveyStepCard.js';
import { SuggestedRoadmapsView } from './components/SuggestedRoadmapsView.js';
import { LanguageSkillMatrixView } from './components/LanguageSkillMatrixView.js';
import { SaveCodeModal } from './components/SaveCodeModal.js';
import { TrackCatalogModal } from './components/TrackCatalogModal.js';
import { VerdictSection } from './components/VerdictSection.js';
import { MarketExplorer } from './components/MarketExplorer.js';
import { InterviewVault } from './components/InterviewVault.js';
import { RequirementsChecklist } from './components/RequirementsChecklist.js';
import { RoadmapTimeline } from './components/RoadmapTimeline.js';
import { DesktopTelemetryPanel } from './components/DesktopTelemetryPanel.js';
import { AiMentorDrawer } from './components/AiMentorDrawer.js';
import type { SurveySubmission } from '../shared/types.js';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Map, 
  TrendingUp, 
  FileQuestion, 
  CheckSquare, 
  ShieldAlert, 
  MessageSquare, 
  RotateCcw,
  Code2,
  Layers,
  Sparkles,
  SlidersHorizontal,
  Loader2
} from 'lucide-react';

export const App: React.FC = () => {
  const { language, t } = useLanguage();
  const { 
    primaryTrack, 
    personalizedRole,
    targetStack,
    hardwareSetupGuide,
    setDiagnosticResult, 
    resetSession, 
    allTracks,
    suggestedTracks,
    switchActiveTrack,
    selectTrackDirectly,
    requiresFoundationTrack,
    isLoading
  } = useStudent();

  const [viewState, setViewState] = useState<'onboarding' | 'survey' | 'suggestions' | 'catalog' | 'dashboard'>(() => {
    return localStorage.getItem('cst_save_code') ? 'dashboard' : 'onboarding';
  });

  const [activeTab, setActiveTab] = useState<'roadmap' | 'market' | 'interview' | 'requirements' | 'verdict'>('roadmap');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState<boolean>(false);
  const [isMentorDrawerOpen, setIsMentorDrawerOpen] = useState<boolean>(false);
  const [isSubmittingSurvey, setIsSubmittingSurvey] = useState<boolean>(false);
  const [matrixMode, setMatrixMode] = useState<'roadmaps' | 'interests' | 'languages' | 'skills' | 'roadmap_tech' | 'combinations'>('roadmaps');
  const [matrixInitialId, setMatrixInitialId] = useState<string | undefined>(undefined);

  // Auto-recovery mechanism: If in dashboard mode but primaryTrack is not set, recover smoothly
  useEffect(() => {
    if (viewState === 'dashboard' && !primaryTrack && !isLoading) {
      if (allTracks.length > 0) {
        // Automatically default to the first available track
        switchActiveTrack(allTracks[0].slug);
      } else {
        const saved = localStorage.getItem('cst_save_code');
        if (!saved) {
          setViewState('onboarding');
        }
      }
    }
  }, [viewState, primaryTrack, isLoading, allTracks]);

  const handleOpenMatrix = (mode: 'roadmaps' | 'interests' | 'languages' | 'skills' | 'roadmap_tech' | 'combinations' = 'roadmaps', id?: string) => {
    setMatrixMode(mode);
    setMatrixInitialId(id);
    setViewState('catalog');
  };

  // When student finishes the guided survey
  const handleSurveyComplete = async (submission: SurveySubmission) => {
    setIsSubmittingSurvey(true);
    try {
      const res = await fetch('/api/survey/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      });
      const data = await res.json();
      if (data.success && data.data) {
        setDiagnosticResult(data.data);
        // Transition to Suggested Roadmaps View so the user can select their roadmap!
        setViewState('suggestions');
      } else {
        alert('Could not process survey. Please try again.');
      }
    } catch (err) {
      console.error('Failed to submit survey:', err);
      alert('Network error submitting survey.');
    } finally {
      setIsSubmittingSurvey(false);
    }
  };

  const handleSelectSuggestedTrack = async (trackSlug: string) => {
    setIsSubmittingSurvey(true);
    try {
      await switchActiveTrack(trackSlug);
      setViewState('dashboard');
      setActiveTab('roadmap');
    } catch (err) {
      console.error('Error selecting suggested track:', err);
    } finally {
      setIsSubmittingSurvey(false);
    }
  };

  const handleDirectSelectTrack = async (trackSlug: string) => {
    setIsSubmittingSurvey(true);
    try {
      const ok = await selectTrackDirectly(trackSlug);
      if (ok) {
        setViewState('dashboard');
        setActiveTab('roadmap');
      } else {
        alert('Could not select track. Please try again.');
      }
    } catch (err) {
      console.error('Error selecting direct track:', err);
    } finally {
      setIsSubmittingSurvey(false);
    }
  };

  const handleRestartSurvey = () => {
    resetSession();
    setViewState('onboarding');
  };

  const isGlobalBusy = isLoading || isSubmittingSurvey;

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#141413]">
      
      {/* Real-time reactive loading bar across the very top viewport edge */}
      <RealTimeLoadingBar isLoading={isGlobalBusy} />

      {/* Top Universal Navbar */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenCatalogModal={() => handleOpenMatrix('roadmaps')}
        onOpenMentorDrawer={() => setIsMentorDrawerOpen(true)}
        onRestartSurvey={handleRestartSurvey}
      />

      {/* Location Telemetry Status Strip */}
      <LocationStatusStrip
        viewState={viewState}
        activeTab={activeTab}
        onNavigateToCatalog={() => handleOpenMatrix('roadmaps')}
        onRestartSurvey={handleRestartSurvey}
        onOpenSaveCodeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Body Router with Smooth Screen Animations */}
      <main className="flex-1 pb-20 lg:pb-12">
        <AnimatePresence mode="wait">
          
          {viewState === 'onboarding' && (
            <motion.div
              key="onboarding"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <LanguageOnboarding
                onStartSurvey={() => setViewState('survey')}
                onOpenDirectCatalog={() => handleOpenMatrix('roadmaps')}
                onOpenResumeModal={() => setIsResumeModalOpen(true)}
              />
            </motion.div>
          )}

          {viewState === 'survey' && (
            <motion.div
              key="survey"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <SurveyStepCard
                onComplete={handleSurveyComplete}
                isSubmitting={isSubmittingSurvey}
                onOpenDirectCatalog={() => handleOpenMatrix('roadmaps')}
              />
            </motion.div>
          )}

          {viewState === 'suggestions' && (
            <motion.div
              key="suggestions"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <SuggestedRoadmapsView
                suggestedTracks={suggestedTracks}
                allTracks={allTracks}
                onSelectTrack={handleSelectSuggestedTrack}
                isSelecting={isSubmittingSurvey}
              />
            </motion.div>
          )}

          {viewState === 'catalog' && (
            <motion.div
              key="catalog"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <LanguageSkillMatrixView
                tracks={allTracks}
                onSelectTrack={handleDirectSelectTrack}
                onBack={() => setViewState(primaryTrack ? 'dashboard' : 'onboarding')}
                isSelecting={isSubmittingSurvey}
                initialMode={matrixMode}
                initialSelectedId={matrixInitialId}
              />
            </motion.div>
          )}

          {viewState === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <ErrorBoundary>
                {/* Fallback if primaryTrack is still resolving */}
                {!primaryTrack ? (
                  <div className="max-w-4xl mx-auto px-4 py-20 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#C84B31]/10 text-[#C84B31] flex items-center justify-center mx-auto mb-4">
                      <Loader2 className="w-6 h-6 stroke-[2] animate-spin" />
                    </div>
                    <h2 className="text-xl font-bold text-[#141413] mb-2">
                      {language === 'bn' ? 'রোডম্যাপ প্রস্তুত করা হচ্ছে...' : 'Calibrating Career Roadmap...'}
                    </h2>
                    <p className="text-xs text-[#575653] max-w-sm mx-auto mb-6 leading-relaxed">
                      {language === 'bn' 
                        ? 'তোমার ডেটাবেস প্রোফাইল সিঙ্ক হচ্ছে। একটু অপেক্ষা করো অথবা সরাসরি রোডম্যাপ বেছে নাও।' 
                        : 'Syncing roadmap data. You can select any of our 24 tracks directly.'}
                    </p>
                    <button
                      onClick={() => handleOpenMatrix('roadmaps')}
                      className="px-4 py-2.5 bg-[#141413] text-white rounded-xl text-xs font-bold inline-flex items-center gap-2 hover:bg-[#2A2927] transition-all cursor-pointer shadow-xs"
                    >
                      <Map className="w-4 h-4 stroke-[2]" />
                      <span>{language === 'bn' ? '২৪টি রোডম্যাপ দেখো' : 'Browse All 24 Roadmaps'}</span>
                    </button>
                  </div>
                ) : (
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    
                    {/* Top RoadMap Hero Header - Clean, Focused, Zero-Clutter */}
                    <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-4 sm:p-6 mb-4 shadow-xs">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C84B31] bg-[#C84B31]/10 px-2.5 py-0.5 rounded-full">
                              {t.dashboard.primaryTrack}
                            </span>
                            {requiresFoundationTrack && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#1B4332]/10 text-[#1B4332]">
                                30-Day Bridge Active
                              </span>
                            )}
                          </div>

                          <h1 className="text-xl sm:text-2xl font-extrabold text-[#141413] tracking-tight">
                            {personalizedRole 
                              ? (language === 'bn' ? personalizedRole.bn : personalizedRole.en)
                              : (language === 'bn' ? primaryTrack.title_bn : primaryTrack.title_en)}
                          </h1>

                          {/* Concise Tech Stack Badges */}
                          {targetStack && targetStack.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 mt-2">
                              {targetStack.slice(0, 5).map((tech: any, idx: number) => {
                                const techName = typeof tech === 'string' ? tech : (tech?.name || tech?.id || String(tech));
                                return (
                                  <span
                                    key={idx}
                                    className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FAF9F5] border border-[#E5E4DF] text-[#141413]"
                                  >
                                    {techName}
                                  </span>
                                );
                              })}
                            </div>
                          )}

                          <p className="mt-2 text-xs text-[#575653] max-w-2xl leading-relaxed">
                            {language === 'bn' ? primaryTrack.summary_bn : primaryTrack.summary_en}
                          </p>
                        </div>

                        {/* Top Right: Single Clean Action Button */}
                        <div className="shrink-0 flex items-center gap-2 self-start">
                          <button
                            onClick={() => handleOpenMatrix('roadmaps')}
                            className="px-3 py-1.5 text-xs font-bold text-[#141413] hover:text-[#C84B31] bg-[#FAF9F5] hover:bg-[#FFFFFF] border border-[#E5E4DF] rounded-xl flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                            title={language === 'bn' ? 'অন্য রোডম্যাপ বেছে নাও' : 'Change or browse roadmaps'}
                          >
                            <Map className="w-3.5 h-3.5 stroke-[2] text-[#1B4332]" />
                            <span>{language === 'bn' ? '২৪টি রোডম্যাপ' : 'All Roadmaps'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Device Workaround: Only rendered when truly actionable for phone/low-spec users */}
                      {hardwareSetupGuide && (
                        hardwareSetupGuide.en.toLowerCase().includes('phone') || 
                        hardwareSetupGuide.en.toLowerCase().includes('termux') || 
                        hardwareSetupGuide.en.toLowerCase().includes('codespaces') || 
                        hardwareSetupGuide.en.toLowerCase().includes('otg') || 
                        hardwareSetupGuide.bn.includes('মোবাইল') || 
                        hardwareSetupGuide.bn.includes('টার্মাক্স')
                      ) && (
                        <div className="mt-3 pt-3 border-t border-[#E5E4DF] text-xs text-[#141413] bg-[#FAF9F5] p-2.5 rounded-xl border border-[#E5E4DF]/60 flex items-start gap-2">
                          <Compass className="w-4 h-4 stroke-[2] text-[#C84B31] shrink-0 mt-0.5" />
                          <p className="leading-relaxed text-[11px] text-[#575653]">
                            <strong className="text-[#141413] font-bold mr-1">
                              {language === 'bn' ? 'ডিভাইস গাইড:' : 'Device Guide:'}
                            </strong>
                            {language === 'bn' ? hardwareSetupGuide.bn : hardwareSetupGuide.en}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Modern Segmented Navigation Bar */}
                    <div className="bg-[#FAF9F5] border border-[#E5E4DF] p-1 rounded-2xl mb-5 shadow-2xs flex items-center gap-1 overflow-x-auto scrollbar-none">
                      <button
                        onClick={() => setActiveTab('roadmap')}
                        className={`flex-1 min-w-[76px] sm:min-w-[90px] py-2 px-2.5 sm:px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                          activeTab === 'roadmap'
                            ? 'bg-[#FFFFFF] text-[#C84B31] shadow-xs border border-[#E5E4DF]/60'
                            : 'text-[#575653] hover:text-[#141413]'
                        }`}
                      >
                        <Map className="w-3.5 h-3.5 stroke-[2]" />
                        <span>{language === 'bn' ? 'রোডম্যাপ' : 'Roadmap'}</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('market')}
                        className={`flex-1 min-w-[76px] sm:min-w-[90px] py-2 px-2.5 sm:px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                          activeTab === 'market'
                            ? 'bg-[#FFFFFF] text-[#C84B31] shadow-xs border border-[#E5E4DF]/60'
                            : 'text-[#575653] hover:text-[#141413]'
                        }`}
                      >
                        <TrendingUp className="w-3.5 h-3.5 stroke-[2]" />
                        <span>{language === 'bn' ? 'মার্কেট ও বেতন' : 'Salaries'}</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('interview')}
                        className={`flex-1 min-w-[76px] sm:min-w-[90px] py-2 px-2.5 sm:px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                          activeTab === 'interview'
                            ? 'bg-[#FFFFFF] text-[#C84B31] shadow-xs border border-[#E5E4DF]/60'
                            : 'text-[#575653] hover:text-[#141413]'
                        }`}
                      >
                        <FileQuestion className="w-3.5 h-3.5 stroke-[2]" />
                        <span>{language === 'bn' ? 'ভাইভা' : 'Interview'}</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('requirements')}
                        className={`flex-1 min-w-[76px] sm:min-w-[90px] py-2 px-2.5 sm:px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                          activeTab === 'requirements'
                            ? 'bg-[#FFFFFF] text-[#C84B31] shadow-xs border border-[#E5E4DF]/60'
                            : 'text-[#575653] hover:text-[#141413]'
                        }`}
                      >
                        <CheckSquare className="w-3.5 h-3.5 stroke-[2]" />
                        <span>{language === 'bn' ? 'স্কিলস' : 'Skills'}</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('verdict')}
                        className={`flex-1 min-w-[76px] sm:min-w-[90px] py-2 px-2.5 sm:px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                          activeTab === 'verdict'
                            ? 'bg-[#FFFFFF] text-[#C84B31] shadow-xs border border-[#E5E4DF]/60'
                            : 'text-[#575653] hover:text-[#141413]'
                        }`}
                      >
                        <ShieldAlert className="w-3.5 h-3.5 stroke-[2]" />
                        <span>{language === 'bn' ? 'দিকনির্দেশনা' : 'Guidance'}</span>
                      </button>
                    </div>

                    {/* Asymmetric Split-Pane Layout on Desktop (8 cols canvas, 4 cols sticky telemetry) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left Pane: Interactive Content Canvas */}
                      <div className="lg:col-span-8 space-y-6">
                        {activeTab === 'roadmap' && <RoadmapTimeline />}
                        {activeTab === 'market' && <MarketExplorer />}
                        {activeTab === 'interview' && <InterviewVault />}
                        {activeTab === 'requirements' && <RequirementsChecklist />}
                        {activeTab === 'verdict' && <VerdictSection />}
                      </div>

                      {/* Right Pane: Asymmetric Sticky Telemetry Panel */}
                      <div className="hidden lg:block lg:col-span-4">
                        <DesktopTelemetryPanel
                          onOpenMentorDrawer={() => setIsMentorDrawerOpen(true)}
                          onOpenCatalogModal={() => setViewState('catalog')}
                        />
                      </div>

                    </div>

                  </div>
                )}
              </ErrorBoundary>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Floating Action Trigger on Mobile for AI Mentor */}
      {viewState === 'dashboard' && primaryTrack && (
        <div className="fixed bottom-4 right-4 z-30 lg:hidden">
          <button
            onClick={() => setIsMentorDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-3 bg-[#1B4332] text-white font-bold text-xs rounded-full shadow-lg active:scale-95 transition-transform"
          >
            <MessageSquare className="w-4 h-4 stroke-[2]" />
            <span>{t.nav.aiMentor}</span>
          </button>
        </div>
      )}

      {/* Modals & Slide-Overs */}
      <SaveCodeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <TrackCatalogModal
        isOpen={isCatalogModalOpen}
        onClose={() => setIsCatalogModalOpen(false)}
      />

      <AiMentorDrawer
        isOpen={isMentorDrawerOpen}
        onClose={() => setIsMentorDrawerOpen(false)}
      />

    </div>
  );
};
