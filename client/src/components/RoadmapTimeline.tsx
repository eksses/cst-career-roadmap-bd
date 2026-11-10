import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useStudent } from '../context/StudentContext.js';
import type { RoadmapPhase, RoadmapModule, FreeCertification } from '../../../shared/types.js';
import { RoadmapGraphMap } from './RoadmapGraphMap.js';
import { 
  CheckCircle2, 
  Circle, 
  Smartphone, 
  Laptop, 
  ExternalLink, 
  Award, 
  Calendar, 
  Check, 
  Target,
  Sparkles,
  ListOrdered,
  Layers,
  MapPin
} from 'lucide-react';

export const RoadmapTimeline: React.FC = () => {
  const { language, t } = useLanguage();
  const { primaryTrack, completedMilestoneIds, completedCertIds, toggleMilestone, toggleCert } = useStudent();
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [certFilter, setCertFilter] = useState<'all' | 'intl' | 'bd'>('all');
  const [viewMode, setViewMode] = useState<'step' | 'map'>('map');

  if (!primaryTrack?.roadmapPhases || primaryTrack.roadmapPhases.length === 0) {
    return (
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-6 sm:p-8 shadow-xs text-center py-12">
        <p className="text-xs text-[#575653]">
          {language === 'bn' 
            ? 'রোডম্যাপ লোড হচ্ছে...' 
            : 'Loading roadmap timeline...'}
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
  const currentPhase = phases[activePhaseIndex] || phases[0] || { phaseNumber: 1, durationWeeks: 4, phaseTitle_en: 'Phase 01', phaseTitle_bn: 'পর্ব ০১', phaseSubtitle_en: '', phaseSubtitle_bn: '', modules: [] };
  const allFreeCerts: FreeCertification[] = Array.isArray(primaryTrack.freeCerts) ? primaryTrack.freeCerts : [];

  const completedIds = completedMilestoneIds || [];
  const certIds = completedCertIds || [];

  const freeCerts = allFreeCerts.filter(c => {
    if (certFilter === 'intl') return c.isBdLocal === false || c.category === 'international_free';
    if (certFilter === 'bd') return c.isBdLocal === true || c.category === 'bd_national';
    return true;
  });

  const totalCertsCount = allFreeCerts.length;
  const claimedCertsCount = allFreeCerts.filter(c => certIds.includes(c.id)).length;

  return (
    <div className="space-y-6">

      {/* View Switcher: Step View vs Interactive Tech Map */}
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#575653]">
            {language === 'bn' ? 'রোডম্যাপ প্রদর্শন মোড:' : 'Roadmap View Mode:'}
          </span>
          <span className="text-xs font-bold text-[#141413]">
            {viewMode === 'map' 
              ? (language === 'bn' ? 'ইন্টারঅ্যাক্টিভ রোডম্যাপ ম্যাপ' : 'Interactive Map') 
              : (language === 'bn' ? 'ধাপে ধাপে লিস্ট' : 'Step-by-Step List')}
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-[#FAF9F5] p-1 rounded-xl border border-[#E5E4DF] w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setViewMode('map')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              viewMode === 'map'
                ? 'bg-[#C84B31] text-white shadow-2xs'
                : 'text-[#575653] hover:text-[#141413]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 stroke-[2]" />
            <span>{language === 'bn' ? 'রোডম্যাপ ম্যাপ' : 'Interactive Map'}</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('step')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              viewMode === 'step'
                ? 'bg-[#141413] text-white shadow-2xs'
                : 'text-[#575653] hover:text-[#141413]'
            }`}
          >
            <ListOrdered className="w-3.5 h-3.5 stroke-[2]" />
            <span>{language === 'bn' ? 'স্টেপ ভিউ' : 'Step List'}</span>
          </button>
        </div>
      </div>

      {viewMode === 'map' ? (
        <RoadmapGraphMap onSelectStepView={() => setViewMode('step')} />
      ) : (
        <>
          {/* Sleek Phase Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {phases.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;
              const pMods = phase.modules || [];
              const totalModules = pMods.length;
              const completedInPhase = pMods.filter(m => completedIds.includes(m?.id)).length;
              const isPhaseFullyDone = totalModules > 0 && completedInPhase === totalModules;

              return (
                <button
                  key={idx}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`p-3.5 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FFFFFF] border-[#C84B31] shadow-xs ring-1 ring-[#C84B31]/10'
                      : 'bg-[#FAF9F5] border-[#E5E4DF] hover:border-[#D4D3CC]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-mono-numbers text-[11px] font-bold text-[#575653]">
                      {language === 'bn' ? `পর্ব ০${phase.phaseNumber}` : `Phase 0${phase.phaseNumber}`}
                    </span>
                    {isPhaseFullyDone ? (
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5] text-[#1B4332]" />
                    ) : (
                      <span className="text-[10px] text-[#575653] font-mono-numbers font-semibold">
                        {completedInPhase}/{totalModules}
                      </span>
                    )}
                  </div>

                  <h4 className="font-bold text-xs sm:text-sm text-[#141413] line-clamp-1">
                    {language === 'bn' ? phase.phaseTitle_bn : phase.phaseTitle_en}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Phase Card */}
          <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 sm:p-7 shadow-xs">
            
            {/* Phase Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#E5E4DF]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C84B31]">
                    {language === 'bn' ? `পর্ব ০${currentPhase.phaseNumber}` : `Phase 0${currentPhase.phaseNumber}`}
                  </span>
                  <span className="text-xs text-[#575653]">•</span>
                  <span className="text-xs text-[#575653] font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 stroke-[2]" />
                    {currentPhase.durationWeeks} {language === 'bn' ? 'সপ্তাহ' : 'weeks'}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#141413] mt-1 tracking-tight">
                  {language === 'bn' ? currentPhase.phaseTitle_bn : currentPhase.phaseTitle_en}
                </h3>
                <p className="text-xs text-[#575653] mt-0.5">
                  {language === 'bn' ? currentPhase.phaseSubtitle_bn : currentPhase.phaseSubtitle_en}
                </p>
              </div>

              <div className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E5E4DF] text-xs font-bold text-[#141413] font-mono-numbers">
                {(currentPhase.modules || []).filter(m => completedIds.includes(m?.id)).length} / {(currentPhase.modules || []).length} {language === 'bn' ? 'সম্পন্ন' : 'Done'}
              </div>
            </div>

            {/* Modules List: Clean, Direct & Simple */}
            <div className="mt-5 space-y-4">
              {(currentPhase.modules || []).map((module) => {
                const isCompleted = completedIds.includes(module.id);

                return (
                  <div
                    key={module.id}
                    className={`p-4 sm:p-5 rounded-xl border transition-all ${
                      isCompleted
                        ? 'bg-[#FFFFFF] border-[#1B4332]/50 shadow-2xs'
                        : 'bg-[#FAF9F5] border-[#E5E4DF] hover:border-[#D4D3CC]'
                    }`}
                  >
                    {/* Header row: Checkbox, Title & Badges */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <button
                          type="button"
                          onClick={() => toggleMilestone(module.id)}
                          className={`w-6 h-6 rounded-md shrink-0 flex items-center justify-center transition-colors cursor-pointer mt-0.5 ${
                            isCompleted
                              ? 'bg-[#1B4332] text-white shadow-xs'
                              : 'border-2 border-[#D4D3CC] hover:border-[#1B4332] bg-white'
                          }`}
                        >
                          {isCompleted && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </button>
                        <div>
                          <h4 className={`font-bold text-sm sm:text-base leading-snug ${
                            isCompleted ? 'line-through text-[#575653]' : 'text-[#141413]'
                          }`}>
                            {language === 'bn' ? module.title_bn : module.title_en}
                          </h4>
                          <p className="text-xs text-[#575653] mt-1 leading-relaxed">
                            {language === 'bn' ? module.description_bn : module.description_en}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {module.mobileAccessible ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#1B4332]/10 text-[#1B4332]">
                            <Smartphone className="w-3 h-3 stroke-[2]" />
                            <span className="hidden sm:inline">{language === 'bn' ? 'মোবাইল ফ্রেন্ডলি' : 'Phone'}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#C84B31]/10 text-[#C84B31]">
                            <Laptop className="w-3 h-3 stroke-[2]" />
                            <span className="hidden sm:inline">{language === 'bn' ? 'পিসি আবশ্যক' : 'PC'}</span>
                          </span>
                        )}

                        <span className="text-[10px] font-mono-numbers text-[#575653] bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#E5E4DF]">
                          {module.estimatedDays}d
                        </span>
                      </div>
                    </div>

                    {/* Practical Milestone Box */}
                    <div className="mt-3.5 p-3 rounded-lg bg-[#FFFFFF] border border-[#E5E4DF]">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#C84B31] mb-1">
                        <Target className="w-3.5 h-3.5 stroke-[2]" />
                        <span>{language === 'bn' ? 'বাস্তব ব্যবহারিক কাজ:' : 'Practical Milestone:'}</span>
                      </div>
                      <p className="text-xs text-[#141413] font-medium leading-relaxed">
                        {language === 'bn' ? module.practicalTask_bn : module.practicalTask_en}
                      </p>
                    </div>

                    {/* Core Topics Pills */}
                    {module.keyTopics && module.keyTopics.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {module.keyTopics.map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#FFFFFF] border border-[#E5E4DF] text-[#575653]"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Certification Vault */}
          <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 sm:p-7 shadow-xs">
            
            {/* Header and Filter Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E4DF]">
              <div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 stroke-[2] text-[#1B4332]" />
                  <h3 className="font-bold text-sm sm:text-base text-[#141413]">
                    {language === 'bn' ? 'প্রস্তাবিত সার্টিফিকেশন ভল্ট' : 'Verified Certification Vault'}
                  </h3>
                </div>
                <p className="text-xs text-[#575653] mt-0.5">
                  {claimedCertsCount} / {totalCertsCount} {language === 'bn' ? 'সার্টিফিকেট সংগৃহীত' : 'claimed'}
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCertFilter('all')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    certFilter === 'all'
                      ? 'bg-[#141413] text-white'
                      : 'bg-[#FAF9F5] border border-[#E5E4DF] text-[#575653]'
                  }`}
                >
                  {language === 'bn' ? 'সব' : 'All'}
                </button>
                <button
                  onClick={() => setCertFilter('intl')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    certFilter === 'intl'
                      ? 'bg-[#141413] text-white'
                      : 'bg-[#FAF9F5] border border-[#E5E4DF] text-[#575653]'
                  }`}
                >
                  {language === 'bn' ? 'আন্তর্জাতিক' : 'International'}
                </button>
                <button
                  onClick={() => setCertFilter('bd')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    certFilter === 'bd'
                      ? 'bg-[#141413] text-white'
                      : 'bg-[#FAF9F5] border border-[#E5E4DF] text-[#575653]'
                  }`}
                >
                  {language === 'bn' ? 'বাংলাদেশ' : 'Bangladesh'}
                </button>
              </div>
            </div>

            {/* Certificate Cards */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {freeCerts.map((cert) => {
                const isClaimed = certIds.includes(cert.id);

                return (
                  <div
                    key={cert.id}
                    className="p-4 rounded-xl border border-[#E5E4DF] bg-[#FAF9F5] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-bold text-[#1B4332] bg-[#1B4332]/10 px-2 py-0.5 rounded">
                          {cert.cost}
                        </span>
                        <span className="text-[10px] text-[#575653] font-mono-numbers">
                          {cert.durationHours}h
                        </span>
                      </div>

                      <h4 className="font-bold text-xs sm:text-sm text-[#141413]">
                        {language === 'bn' ? cert.title_bn : cert.title_en}
                      </h4>
                      <p className="text-[11px] text-[#575653] mt-0.5">
                        {cert.provider}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E5E4DF] flex items-center justify-between gap-2">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-[#575653] hover:text-[#141413] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>{language === 'bn' ? 'কোর্স লিংক' : 'Open'}</span>
                        <ExternalLink className="w-3 h-3 stroke-[2]" />
                      </a>

                      <button
                        type="button"
                        onClick={() => toggleCert(cert.id)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isClaimed
                            ? 'bg-[#1B4332] text-white'
                            : 'bg-[#FFFFFF] border border-[#E5E4DF] text-[#141413] hover:border-[#1B4332]'
                        }`}
                      >
                        {isClaimed 
                          ? (language === 'bn' ? 'অর্জিত' : 'Earned') 
                          : (language === 'bn' ? 'সংগ্রহ করো' : 'Mark Claimed')}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </>
      )}

    </div>
  );
};
