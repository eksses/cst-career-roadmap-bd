import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useStudent } from '../context/StudentContext.js';
import type { RoadmapPhase, RoadmapModule, FreeCertification } from '../../../shared/types.js';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Circle, 
  Smartphone, 
  Laptop, 
  Target, 
  Award, 
  Calendar, 
  Check, 
  ChevronRight, 
  ChevronDown, 
  Flag, 
  Sparkles, 
  Layers, 
  ExternalLink,
  Code2
} from 'lucide-react';

interface RoadmapGraphMapProps {
  onSelectStepView?: () => void;
}

export const RoadmapGraphMap: React.FC<RoadmapGraphMapProps> = ({ onSelectStepView }) => {
  const { language } = useLanguage();
  const { primaryTrack, completedMilestoneIds, completedCertIds, toggleMilestone, toggleCert } = useStudent();
  
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState<number | 'all'>('all');
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);

  if (!primaryTrack?.roadmapPhases || primaryTrack.roadmapPhases.length === 0) {
    return (
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-6 sm:p-8 shadow-xs text-center py-12">
        <p className="text-xs text-[#575653]">
          {language === 'bn' 
            ? 'রোডম্যাপ ম্যাপ লোড হচ্ছে...' 
            : 'Loading interactive roadmap map...'}
        </p>
      </div>
    );
  }

  const rawPhases = primaryTrack.roadmapPhases;
  const phases: RoadmapPhase[] = Array.isArray(rawPhases)
    ? rawPhases
    : typeof rawPhases === 'string'
    ? (() => { try { return JSON.parse(rawPhases); } catch { return []; } })()
    : [];
  const allFreeCerts: FreeCertification[] = Array.isArray(primaryTrack.freeCerts)
    ? primaryTrack.freeCerts
    : [];

  const completedIds = completedMilestoneIds || [];
  const certIds = completedCertIds || [];

  // Calculate overall metrics
  const totalModulesCount = phases.reduce((acc, p) => acc + (p?.modules?.length || 0), 0);
  const completedModulesCount = phases.reduce(
    (acc, p) => acc + (p?.modules || []).filter(m => completedIds.includes(m?.id)).length, 
    0
  );
  const progressPercent = totalModulesCount > 0 
    ? Math.round((completedModulesCount / totalModulesCount) * 100) 
    : 0;

  const totalDays = phases.reduce(
    (acc, p) => acc + (p?.modules || []).reduce((mAcc, m) => mAcc + (m?.estimatedDays || 7), 0),
    0
  );

  const displayedPhases = selectedPhaseFilter === 'all' 
    ? phases 
    : phases.filter(p => p.phaseNumber === selectedPhaseFilter);

  return (
    <div className="space-y-6">

      {/* Map Control Bar & Overall Journey Metrics */}
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E5E4DF]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#C84B31]/10 text-[#C84B31]">
                <Layers className="w-3.5 h-3.5 stroke-[2]" />
                {language === 'bn' ? 'ইন্টারঅ্যাক্টিভ রোডম্যাপ ম্যাপ' : 'Interactive Subway Tech Tree'}
              </span>
              <span className="text-xs text-[#575653] font-medium font-mono-numbers">
                {totalDays} {language === 'bn' ? 'দিনের রোডম্যাপ' : 'Days Total'}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#141413]">
              {language === 'bn' ? primaryTrack.title_bn : primaryTrack.title_en}
            </h3>
            <p className="text-xs text-[#575653] mt-0.5">
              {language === 'bn' 
                ? 'প্রতিটি পর্বের স্টেশন ও মাইলস্টোন সম্পন্ন করে ধাপে ধাপে জব-রেডি হও।' 
                : 'Follow station checkpoints and milestone nodes step by step toward job readiness.'}
            </p>
          </div>

          {/* Quick Progress Indicator */}
          <div className="flex items-center gap-4 bg-[#FAF9F5] border border-[#E5E4DF] p-3 rounded-xl shrink-0">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#575653]">
                {language === 'bn' ? 'অগ্রগতি' : 'Progress'}
              </div>
              <div className="text-lg font-bold font-mono-numbers text-[#141413]">
                {progressPercent}%
              </div>
            </div>
            <div className="w-24 bg-[#E5E4DF] h-2 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#1B4332]"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              />
            </div>
            <div className="text-right text-xs font-mono-numbers text-[#575653] font-semibold">
              {completedModulesCount}/{totalModulesCount}
            </div>
          </div>
        </div>

        {/* Phase Filter Tabs */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-[#575653] mr-1">
            {language === 'bn' ? 'ফিল্টার:' : 'Filter:'}
          </span>
          <button
            onClick={() => setSelectedPhaseFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedPhaseFilter === 'all'
                ? 'bg-[#141413] text-white shadow-2xs'
                : 'bg-[#FAF9F5] border border-[#E5E4DF] text-[#575653] hover:text-[#141413]'
            }`}
          >
            {language === 'bn' ? 'সম্পূর্ণ ম্যাপ (সব পর্ব)' : 'Full Map (All Phases)'}
          </button>

          {phases.map((phase) => {
            const isSelected = selectedPhaseFilter === phase.phaseNumber;
            const pMods = phase.modules || [];
            const completedCount = pMods.filter(m => completedIds.includes(m?.id)).length;
            const isPhaseDone = pMods.length > 0 && completedCount === pMods.length;

            return (
              <button
                key={phase.phaseNumber}
                onClick={() => setSelectedPhaseFilter(phase.phaseNumber)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#C84B31] text-white shadow-2xs'
                    : 'bg-[#FAF9F5] border border-[#E5E4DF] text-[#575653] hover:text-[#141413]'
                }`}
              >
                {isPhaseDone ? (
                  <Check className="w-3 h-3 stroke-[3] text-[#1B4332]" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#575653]" />
                )}
                <span>
                  {language === 'bn' ? `পর্ব ০${phase.phaseNumber}` : `Phase 0${phase.phaseNumber}`}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Metro Map Canvas */}
      <div className="relative space-y-10">
        
        {displayedPhases.map((phase, pIdx) => {
          const pMods = phase.modules || [];
          const totalInPhase = pMods.length;
          const doneInPhase = pMods.filter(m => completedIds.includes(m?.id)).length;
          const isPhaseDone = totalInPhase > 0 && doneInPhase === totalInPhase;
          const prevMods = phases[pIdx - 1]?.modules || [];
          const isPhaseActive = !isPhaseDone && (pIdx === 0 || (prevMods.length > 0 && prevMods.every(m => completedIds.includes(m?.id))));

          // Pick matching cert for this phase
          const phaseCert = allFreeCerts[pIdx] || null;

          return (
            <motion.div
              key={phase.phaseNumber}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: pIdx * 0.08 }}
              className="relative"
            >
              {/* Phase Metro Hub Banner */}
              <div className={`p-4 sm:p-5 rounded-2xl border-2 transition-all ${
                isPhaseDone
                  ? 'bg-[#FFFFFF] border-[#1B4332]/40 shadow-xs'
                  : isPhaseActive
                  ? 'bg-[#FFFFFF] border-[#C84B31] shadow-xs ring-2 ring-[#C84B31]/10'
                  : 'bg-[#FAF9F5] border-[#E5E4DF]'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Glowing Hub Circle */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono-numbers font-bold text-sm shrink-0 ${
                      isPhaseDone
                        ? 'bg-[#1B4332] text-white shadow-xs'
                        : isPhaseActive
                        ? 'bg-[#C84B31] text-white shadow-xs animate-pulse'
                        : 'bg-[#FAF9F5] border border-[#E5E4DF] text-[#575653]'
                    }`}>
                      {isPhaseDone ? (
                        <Check className="w-5 h-5 stroke-[3]" />
                      ) : (
                        `0${phase.phaseNumber}`
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#C84B31]">
                          {language === 'bn' ? `স্টেশন ০${phase.phaseNumber}` : `Station 0${phase.phaseNumber}`}
                        </span>
                        <span className="text-xs text-[#575653]">•</span>
                        <span className="text-xs text-[#575653] font-medium flex items-center gap-1">
                          <Calendar className="w-3 h-3 stroke-[2]" />
                          {phase.durationWeeks} {language === 'bn' ? 'সপ্তাহ' : 'weeks'}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-[#141413] mt-0.5">
                        {language === 'bn' ? phase.phaseTitle_bn : phase.phaseTitle_en}
                      </h4>
                      <p className="text-xs text-[#575653]">
                        {language === 'bn' ? phase.phaseSubtitle_bn : phase.phaseSubtitle_en}
                      </p>
                    </div>
                  </div>

                  {/* Status Tag */}
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-numbers font-bold bg-[#FAF9F5] border border-[#E5E4DF] text-[#141413]">
                      {doneInPhase} / {totalInPhase} {language === 'bn' ? 'সম্পন্ন' : 'Done'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subway Line Connection with Milestone Nodes */}
              <div className="relative pl-6 sm:pl-10 mt-5 space-y-4">
                
                {/* Vertical SVG Route Rail */}
                <div className="absolute left-[19px] sm:left-[27px] top-2 bottom-4 w-1 pointer-events-none">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <line 
                      x1="50%" 
                      y1="0" 
                      x2="50%" 
                      y2="100%" 
                      stroke={isPhaseDone ? "#1B4332" : isPhaseActive ? "#C84B31" : "#E5E4DF"} 
                      strokeWidth="3"
                      strokeDasharray={isPhaseDone ? "none" : "6 4"}
                    />
                  </svg>
                </div>

                {/* Milestone Nodes */}
                {(phase.modules || []).map((module, mIdx) => {
                  const isDone = completedIds.includes(module.id);
                  const isExpanded = expandedModuleId === module.id;
                  const pMods = phase.modules || [];
                  const isFirstIncomplete = !isDone && pMods.slice(0, mIdx).every(m => completedIds.includes(m.id));

                  return (
                    <div key={module.id} className="relative group">
                      
                      {/* Node Circle on the Rail */}
                      <button
                        type="button"
                        onClick={() => toggleMilestone(module.id)}
                        className={`absolute -left-[25px] sm:-left-[33px] top-4 w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer z-10 ${
                          isDone 
                            ? 'bg-[#1B4332] text-white ring-4 ring-[#FFFFFF] shadow-xs' 
                            : isFirstIncomplete
                            ? 'bg-[#C84B31] text-white ring-4 ring-[#FFFFFF] shadow-xs animate-bounce'
                            : 'bg-[#FFFFFF] border-2 border-[#D4D3CC] hover:border-[#1B4332] text-transparent'
                        }`}
                        title={isDone ? 'Mark Incomplete' : 'Mark Complete'}
                      >
                        {isDone ? (
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-current" />
                        )}
                      </button>

                      {/* Milestone Card */}
                      <div className={`p-4 sm:p-5 rounded-xl border transition-all ${
                        isDone
                          ? 'bg-[#FFFFFF] border-[#1B4332]/40 shadow-2xs'
                          : isFirstIncomplete
                          ? 'bg-[#FFFFFF] border-[#C84B31] shadow-xs'
                          : 'bg-[#FAF9F5] border-[#E5E4DF] hover:border-[#D4D3CC]'
                      }`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[11px] font-mono-numbers font-bold text-[#575653]">
                                {language === 'bn' ? `মাইলস্টোন ${mIdx + 1}` : `Milestone ${mIdx + 1}`}
                              </span>
                              {module.mobileAccessible ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#1B4332]/10 text-[#1B4332]">
                                  <Smartphone className="w-3 h-3 stroke-[2]" />
                                  <span>{language === 'bn' ? 'মোবাইলে সম্ভব' : 'Phone'}</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#C84B31]/10 text-[#C84B31]">
                                  <Laptop className="w-3 h-3 stroke-[2]" />
                                  <span>{language === 'bn' ? 'পিসি প্রয়োজন' : 'PC Lab'}</span>
                                </span>
                              )}
                              <span className="text-[10px] font-mono-numbers text-[#575653] bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#E5E4DF]">
                                {module.estimatedDays} {language === 'bn' ? 'দিন' : 'days'}
                              </span>
                            </div>

                            <h5 className={`font-bold text-sm sm:text-base leading-snug ${
                              isDone ? 'line-through text-[#575653]' : 'text-[#141413]'
                            }`}>
                              {language === 'bn' ? module.title_bn : module.title_en}
                            </h5>
                            <p className="text-xs text-[#575653] mt-1 leading-relaxed">
                              {language === 'bn' ? module.description_bn : module.description_en}
                            </p>
                          </div>

                          {/* Quick Toggle Details / Complete Buttons */}
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={() => toggleMilestone(module.id)}
                              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                isDone
                                  ? 'bg-[#1B4332] text-white'
                                  : 'bg-[#FFFFFF] border border-[#E5E4DF] text-[#141413] hover:border-[#1B4332]'
                              }`}
                            >
                              {isDone 
                                ? (language === 'bn' ? 'সম্পন্ন' : 'Done') 
                                : (language === 'bn' ? 'সম্পন্ন করো' : 'Mark Done')}
                            </button>

                            <button
                              type="button"
                              onClick={() => setExpandedModuleId(isExpanded ? null : module.id)}
                              className="p-1.5 rounded-lg border border-[#E5E4DF] bg-white text-[#575653] hover:text-[#141413] cursor-pointer"
                              title={isExpanded ? 'Collapse' : 'Expand Details'}
                            >
                              {isExpanded ? (
                                <ChevronDown className="w-4 h-4 stroke-[2]" />
                              ) : (
                                <ChevronRight className="w-4 h-4 stroke-[2]" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Practical Milestone Task Highlight */}
                        <div className="mt-3 p-3 rounded-lg bg-[#FFFFFF] border border-[#E5E4DF]">
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#C84B31] mb-1">
                            <Target className="w-3.5 h-3.5 stroke-[2]" />
                            <span>{language === 'bn' ? 'বাস্তব ব্যবহারিক মাইলস্টোন:' : 'Practical Milestone:'}</span>
                          </div>
                          <p className="text-xs text-[#141413] font-medium leading-relaxed">
                            {language === 'bn' ? module.practicalTask_bn : module.practicalTask_en}
                          </p>
                        </div>

                        {/* Expandable Core Topics Drawer */}
                        <AnimatePresence>
                          {isExpanded && module.keyTopics && module.keyTopics.length > 0 && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-3 pt-3 border-t border-[#E5E4DF]"
                            >
                              <div className="text-[11px] font-bold text-[#575653] mb-1.5">
                                {language === 'bn' ? 'প্রয়োজনীয় টেকনিক্যাল টপিকসমূহ:' : 'Required Core Topics:'}
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {module.keyTopics.map((topic, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#FFFFFF] border border-[#E5E4DF] text-[#141413]"
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}

                {/* Phase Verified Certification Checkpoint */}
                {phaseCert && (
                  <div className="relative pt-2">
                    <div className="p-4 rounded-xl border border-[#1B4332]/30 bg-[#1B4332]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#1B4332] text-white flex items-center justify-center shrink-0">
                          <Award className="w-4 h-4 stroke-[2]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B4332]">
                              {language === 'bn' ? 'চেকপয়েন্ট ভেরিফাইড সার্টিফিকেট' : 'Phase Verified Credential'}
                            </span>
                            <span className="text-[10px] text-[#575653] font-mono-numbers">
                              {phaseCert.cost}
                            </span>
                          </div>
                          <h6 className="font-bold text-xs sm:text-sm text-[#141413]">
                            {language === 'bn' ? phaseCert.title_bn : phaseCert.title_en}
                          </h6>
                          <p className="text-[11px] text-[#575653]">
                            {phaseCert.provider} • {phaseCert.durationHours} {language === 'bn' ? 'ঘণ্টা' : 'hours'}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-auto">
                        <a
                          href={phaseCert.url}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold text-[#575653] hover:text-[#141413] bg-white border border-[#E5E4DF] inline-flex items-center gap-1"
                        >
                          <span>{language === 'bn' ? 'কোর্স লিংক' : 'Link'}</span>
                          <ExternalLink className="w-3 h-3 stroke-[2]" />
                        </a>
                        <button
                          type="button"
                          onClick={() => toggleCert(phaseCert.id)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            certIds.includes(phaseCert.id)
                              ? 'bg-[#1B4332] text-white'
                              : 'bg-white border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white'
                          }`}
                        >
                          {certIds.includes(phaseCert.id)
                            ? (language === 'bn' ? 'অর্জিত' : 'Earned')
                            : (language === 'bn' ? 'সংগ্রহ করো' : 'Claim')}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Decorative Inter-Phase Station Transfer Connector */}
              {pIdx < displayedPhases.length - 1 && (
                <div className="flex items-center justify-center my-6">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E4DF] text-[11px] font-bold text-[#575653]">
                    <Flag className="w-3.5 h-3.5 stroke-[2] text-[#C84B31]" />
                    <span>
                      {language === 'bn' 
                        ? `পর্ব ০${phase.phaseNumber} থেকে পর্ব ০${phase.phaseNumber + 1}-এ ট্রানজিশন` 
                        : `Transition from Phase 0${phase.phaseNumber} to Phase 0${phase.phaseNumber + 1}`}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Final Capstone Destination Hub */}
        <div className="p-6 rounded-2xl bg-[#FFFFFF] border-2 border-[#1B4332] shadow-sm text-center">
          <div className="w-12 h-12 mx-auto rounded-xl bg-[#1B4332] text-white flex items-center justify-center mb-3 shadow-xs">
            <Sparkles className="w-6 h-6 stroke-[2]" />
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[#141413]">
            {language === 'bn' ? 'চূড়ান্ত গন্তব্য: জব-রেডি ইঞ্জিনিয়ার' : 'Final Destination: Industry Job Ready'}
          </h4>
          <p className="text-xs text-[#575653] max-w-md mx-auto mt-1">
            {language === 'bn'
              ? 'সকল মাইলস্টোন সম্পন্ন করার পর তুমি আত্মবিশ্বাসের সাথে দেশীয় সফটওয়্যার কোম্পানি, ব্যাংক বা রিমোট জবের ভাইভাতে অংশ নিতে প্রস্তুত।'
              : 'Completing all milestones positions you for software agencies, banks, or remote contracts with a verified portfolio.'}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono-numbers font-bold bg-[#FAF9F5] border border-[#E5E4DF] text-[#141413]">
              {completedModulesCount}/{totalModulesCount} {language === 'bn' ? 'মাইলস্টোন সম্পন্ন' : 'Milestones Completed'}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono-numbers font-bold bg-[#1B4332]/10 text-[#1B4332]">
              {certIds.length} {language === 'bn' ? 'সার্টিফিকেট সংগৃহীত' : 'Certificates Earned'}
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
