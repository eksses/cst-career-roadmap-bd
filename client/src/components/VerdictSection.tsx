import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useStudent } from '../context/StudentContext.js';
import { 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRightCircle, 
  Cpu, 
  Clock, 
  Globe2, 
  Users, 
  Calendar, 
  Zap, 
  GraduationCap, 
  AlertCircle 
} from 'lucide-react';
import { getTrackVerdict } from '../../../shared/trackVerdictData.js';

export const VerdictSection: React.FC = () => {
  const { language, t } = useLanguage();
  const { verdict, primaryTrack, secondaryTrack, requiresFoundationTrack, switchActiveTrack } = useStudent();

  const trackVerdict = getTrackVerdict(primaryTrack?.slug);

  const activeVerdict = verdict || {
    heading_en: `Career Strategy: ${primaryTrack?.title_en || 'CST Professional Track'}`,
    heading_bn: `ক্যারিয়ার দিকনির্দেশনা: ${primaryTrack?.title_bn || 'সিএসটি প্রফেশনাল ট্র্যাক'}`,
    body_en: primaryTrack?.summary_en || 'Follow your structured milestones, hands-on lab experiments, and free industry certifications step by step.',
    body_bn: primaryTrack?.summary_bn || 'তোমার নির্বাচিত রোডম্যাপ অনুযায়ী ব্যবহারিক কাজ, ল্যাব প্র্যাকটিস এবং ফ্রি সার্টিফিকেশন সম্পন্ন করো।',
    hardwareVerdict_en: 'Practice comfortably in polytechnic labs and on any available computer setup.',
    hardwareVerdict_bn: 'পলিটেকনিক ল্যাব ও যেকোনো সাধারণ কম্পিউটারে প্র্যাকটিস শুরু করা সম্ভব।',
    englishVerdict_en: 'Core concepts explained in simple Bengali alongside essential workplace technical terms.',
    englishVerdict_bn: 'সব কনসেপ্ট সহজ বাংলায় ব্যাখ্যা করা হয়েছে, পাশাপাশি কাজের প্রয়োজনীয় টেকনিক্যাল ইংরেজি অন্তর্ভুক্ত আছে।',
    urgencyVerdict_en: 'Build verified portfolio repositories and milestone projects step by step.',
    urgencyVerdict_bn: 'ধাপে ধাপে বাস্তব প্রজেক্ট তৈরি করে পোর্টফোলিও সমৃদ্ধ করো।',
    expenseVerdict_en: 'Prioritizes 100% free verified certifications with zero tuition costs.',
    expenseVerdict_bn: '১০০% ফ্রি রিসোর্স ও ভেরিফায়েড সার্টিফিকেট অগ্রাধিকার দেওয়া হয়েছে।',
    actionPlanPoints_en: [
      'Follow Phase 1 milestones during polytechnic lab hours.',
      'Build hands-on practical projects for your GitHub portfolio.',
      'Claim the free verified certifications recommended in this track.',
      'Review technical interview questions weekly for viva readiness.'
    ],
    actionPlanPoints_bn: [
      'ল্যাব ও অবসর সময়ে প্রথম পর্বের মাইলস্টোনগুলো সম্পন্ন করো।',
      'গিটহাব পোর্টফোলিওর জন্য বাস্তবমুখী প্রজেক্ট তৈরি করো।',
      'রোডম্যাপে প্রস্তাবিত ফ্রি আন্তর্জাতিক সার্টিফিকেটগুলো সংগ্রহ করো।',
      'ভাইভার প্রস্তুতির জন্য ইন্টারভিউ ভল্টের প্রশ্নগুলো নিয়মিত অনুশীলন করো।'
    ],
  };

  const competitionLevelBadge = language === 'bn' 
    ? (activeVerdict.competitionLevel_bn || trackVerdict.competitionLevel_bn)
    : (activeVerdict.competitionLevel || trackVerdict.competitionLevel);

  const competitorsText = language === 'bn' 
    ? (activeVerdict.competitors_bn || trackVerdict.competitors_bn)
    : (activeVerdict.competitors_en || trackVerdict.competitors_en);

  const degreeBarrierText = language === 'bn'
    ? (activeVerdict.degreeGatekeeping_bn || trackVerdict.degreeGatekeeping_bn)
    : (activeVerdict.degreeGatekeeping_en || trackVerdict.degreeGatekeeping_en);

  const winningStrategyText = language === 'bn'
    ? (activeVerdict.diplomaWinningStrategy_bn || trackVerdict.diplomaWinningStrategy_bn)
    : (activeVerdict.diplomaWinningStrategy_en || trackVerdict.diplomaWinningStrategy_en);

  const timeframeText = language === 'bn'
    ? (activeVerdict.timeframe_bn || trackVerdict.timeframe_bn)
    : (activeVerdict.timeframe_en || trackVerdict.timeframe_en);

  const dailyCommitmentText = language === 'bn'
    ? (activeVerdict.dailyCommitment_bn || trackVerdict.dailyCommitment_bn)
    : (activeVerdict.dailyCommitment_en || trackVerdict.dailyCommitment_en);

  const timelineVerdictText = language === 'bn'
    ? (activeVerdict.timelineVerdict_bn || trackVerdict.timelineVerdict_bn)
    : (activeVerdict.timelineVerdict_en || trackVerdict.timelineVerdict_en);

  const milestonesList = (language === 'bn'
    ? (activeVerdict.milestones_bn || trackVerdict.milestones_bn)
    : (activeVerdict.milestones_en || trackVerdict.milestones_en)) || [];

  return (
    <div className="space-y-6">
      
      {/* Primary Strategic Verdict Card */}
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 sm:p-7 shadow-xs">
        
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C84B31]/10 text-[#C84B31]">
            <ShieldAlert className="w-3.5 h-3.5 stroke-[2]" />
            {t.dashboard.verdictBadge}
          </span>
          {requiresFoundationTrack && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#1B4332]/10 text-[#1B4332]">
              30-Day Bridge Active
            </span>
          )}
        </div>

        {/* Heading & Executive Body */}
        <h2 className="text-lg sm:text-xl font-bold text-[#141413] tracking-tight leading-snug">
          {language === 'bn' ? activeVerdict.heading_bn : activeVerdict.heading_en}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#575653] leading-relaxed">
          {language === 'bn' ? activeVerdict.body_bn : activeVerdict.body_en}
        </p>

        {/* 4 Reality Columns: Hardware, Language, Timeline, Expense */}
        <div className="mt-5 pt-4 border-t border-[#E5E4DF] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Hardware Reality */}
          <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E4DF]">
            <div className="flex items-center gap-1.5 text-[#C84B31] font-bold text-[11px] uppercase tracking-wider mb-1.5">
              <Cpu className="w-3.5 h-3.5 stroke-[2]" />
              <span>Hardware</span>
            </div>
            <p className="text-xs text-[#141413] leading-relaxed">
              {language === 'bn' ? activeVerdict.hardwareVerdict_bn : activeVerdict.hardwareVerdict_en}
            </p>
          </div>

          {/* English Language Reality */}
          <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E4DF]">
            <div className="flex items-center gap-1.5 text-[#1B4332] font-bold text-[11px] uppercase tracking-wider mb-1.5">
              <Globe2 className="w-3.5 h-3.5 stroke-[2]" />
              <span>Language</span>
            </div>
            <p className="text-xs text-[#141413] leading-relaxed">
              {language === 'bn' ? activeVerdict.englishVerdict_bn : activeVerdict.englishVerdict_en}
            </p>
          </div>

          {/* Financial Urgency Reality */}
          <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E4DF]">
            <div className="flex items-center gap-1.5 text-[#575653] font-bold text-[11px] uppercase tracking-wider mb-1.5">
              <Clock className="w-3.5 h-3.5 stroke-[2]" />
              <span>Timeline</span>
            </div>
            <p className="text-xs text-[#141413] leading-relaxed">
              {language === 'bn' ? activeVerdict.urgencyVerdict_bn : activeVerdict.urgencyVerdict_en}
            </p>
          </div>

          {/* Course & Expense Budget Reality */}
          <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E4DF]">
            <div className="flex items-center gap-1.5 text-[#C84B31] font-bold text-[11px] uppercase tracking-wider mb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2]" />
              <span>Course & Budget</span>
            </div>
            <p className="text-xs text-[#141413] leading-relaxed">
              {language === 'bn' ? (activeVerdict.expenseVerdict_bn || '১০০% ফ্রি রিসোর্স ও ভেরিফায়েড সার্টিফিকেট অগ্রাধিকার দেওয়া হয়েছে।') : (activeVerdict.expenseVerdict_en || 'Prioritizes 100% free verified certifications with zero tuition costs.')}
            </p>
          </div>

        </div>

        {/* Action Plan Points */}
        <div className="mt-5 pt-4 border-t border-[#E5E4DF]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#141413] mb-2.5">
            {language === 'bn' ? 'তোমার জন্য সরাসরি করণীয়:' : 'Immediate Action Steps:'}
          </h3>
          <div className="space-y-2">
            {(language === 'bn' ? activeVerdict.actionPlanPoints_bn : activeVerdict.actionPlanPoints_en)?.map(
              (point: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px] font-mono-numbers">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-[#141413] leading-relaxed">
                    {point}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

      </div>

      {/* 2026 Competition Reality & Candidate Landscape Card */}
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 sm:p-7 shadow-xs">
        
        {/* Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1B4332]/10 text-[#1B4332]">
            <Users className="w-3.5 h-3.5 stroke-[2]" />
            {t.dashboard.competitionBadge}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FAF9F5] border border-[#E5E4DF] text-[#141413]">
            {competitionLevelBadge}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-[#141413] tracking-tight leading-snug">
          {t.dashboard.competitionTitle}
        </h3>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Competitor Profile & Degree Gatekeeping */}
          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DF] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-[#C84B31] font-bold text-xs uppercase tracking-wider mb-2">
                <Users className="w-4 h-4 stroke-[2]" />
                <span>{t.dashboard.competitorsLabel}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#141413] leading-relaxed">
                {competitorsText}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E5E4DF]">
              <div className="flex items-center gap-1.5 text-[#575653] font-bold text-[11px] uppercase tracking-wider mb-1">
                <GraduationCap className="w-3.5 h-3.5 stroke-[2]" />
                <span>{t.dashboard.degreeBarrierLabel}</span>
              </div>
              <p className="text-xs text-[#575653] leading-relaxed">
                {degreeBarrierText}
              </p>
            </div>
          </div>

          {/* CST Diploma Winning Edge */}
          <div className="p-4 rounded-xl bg-[#1B4332]/5 border border-[#1B4332]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-[#1B4332] font-bold text-xs uppercase tracking-wider mb-2">
                <Zap className="w-4 h-4 stroke-[2]" />
                <span>{t.dashboard.diplomaWinningLabel}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#141413] leading-relaxed font-medium">
                {winningStrategyText}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1B4332]/15 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 stroke-[2]" />
              <p className="text-[11px] text-[#1B4332] font-semibold">
                {language === 'bn' ? 'বাস্তব প্রজেক্ট কোড ও গিটহাব সরাসরি ডিগ্রির পক্ষপাতিত্ব দূর করে।' : 'Live code repositories and benchmarked projects override academic degree bias.'}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* 2026 Realistic Timeline to Employment Card */}
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 sm:p-7 shadow-xs">
        
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#575653]/10 text-[#575653]">
            <Calendar className="w-3.5 h-3.5 stroke-[2]" />
            {t.dashboard.timelineBadge}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-[#141413] tracking-tight leading-snug">
          {t.dashboard.timelineTitle}
        </h3>

        {/* Quick Stats: Estimated Months & Daily Hours */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E4DF]">
            <div className="flex items-center gap-1.5 text-[#C84B31] font-bold text-[11px] uppercase tracking-wider mb-1">
              <Clock className="w-3.5 h-3.5 stroke-[2]" />
              <span>{t.dashboard.estimatedTimeLabel}</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-[#141413] font-mono-numbers">
              {timeframeText}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E4DF]">
            <div className="flex items-center gap-1.5 text-[#1B4332] font-bold text-[11px] uppercase tracking-wider mb-1">
              <Calendar className="w-3.5 h-3.5 stroke-[2]" />
              <span>{t.dashboard.dailyCommitmentLabel}</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-[#141413] font-mono-numbers">
              {dailyCommitmentText}
            </div>
          </div>
        </div>

        {/* Timeline Verdict Narrative */}
        <p className="mt-4 text-xs sm:text-sm text-[#575653] leading-relaxed">
          {timelineVerdictText}
        </p>

        {/* Milestone Steps to Job Ready */}
        {milestonesList.length > 0 && (
          <div className="mt-4 pt-4 border-t border-[#E5E4DF]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#141413] mb-2.5">
              {t.dashboard.milestonesTitle}
            </h4>
            <div className="space-y-2">
              {milestonesList.map((step: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#C84B31]/10 text-[#C84B31] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[11px] font-mono-numbers">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-[#141413] leading-relaxed pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pragmatic Mentor Reality Check Box */}
        <div className="mt-5 p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E4DF] flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#C84B31] shrink-0 mt-0.5 stroke-[2]" />
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#C84B31] mb-0.5">
              {t.dashboard.realityCheckLabel}
            </div>
            <p className="text-xs text-[#575653] leading-relaxed">
              {t.dashboard.realityCheckText}
            </p>
          </div>
        </div>

      </div>

      {/* Alternative Backup Track & Honest Pivot Advice */}
      {secondaryTrack && (
        <div className="bg-[#FAF9F5] border border-[#E5E4DF] rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#575653]">
              {t.dashboard.backupTrack}
            </span>
            <button
              onClick={() => switchActiveTrack(secondaryTrack.slug)}
              className="text-xs font-bold text-[#C84B31] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{t.dashboard.switchTrack}</span>
              <ArrowRightCircle className="w-3.5 h-3.5 stroke-[2]" />
            </button>
          </div>

          <h3 className="text-sm sm:text-base font-bold text-[#141413]">
            {language === 'bn' ? secondaryTrack.title_bn : secondaryTrack.title_en}
          </h3>
          
          <div className="mt-2.5 p-3 bg-[#FFFFFF] border border-[#E5E4DF] rounded-xl">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#C84B31] mb-0.5">
              {language === 'bn' ? 'বিকল্প পরামর্শ:' : 'Alternative Pivot Advice:'}
            </p>
            <p className="text-xs text-[#575653] leading-relaxed">
              {language === 'bn' ? secondaryTrack.pivotAdvice_bn : secondaryTrack.pivotAdvice_en}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
