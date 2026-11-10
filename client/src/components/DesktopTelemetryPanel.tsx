import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useStudent } from '../context/StudentContext.js';
import { Sparkles, KeyRound, Copy, Check, MessageSquare, ArrowRight, ShieldCheck, MapPin, Laptop, Smartphone, ShieldAlert } from 'lucide-react';
import { getTrackVerdict } from '../../../shared/trackVerdictData.js';

interface DesktopTelemetryPanelProps {
  onOpenMentorDrawer: () => void;
  onOpenCatalogModal: () => void;
  onSelectTab?: (tab: 'roadmap' | 'market' | 'interview' | 'requirements' | 'verdict') => void;
}

export const DesktopTelemetryPanel: React.FC<DesktopTelemetryPanelProps> = ({
  onOpenMentorDrawer,
  onOpenCatalogModal,
  onSelectTab,
}) => {
  const { language, t } = useLanguage();
  const { saveCode, primaryTrack, matchScore, completedMilestoneIds, completedCertIds, personalizedRole, targetStack, verdict } = useStudent();
  const [copied, setCopied] = React.useState<boolean>(false);

  if (!primaryTrack) return null;

  const handleCopyCode = () => {
    if (saveCode) {
      navigator.clipboard.writeText(saveCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const totalModules = primaryTrack.roadmapPhases?.reduce(
    (acc, phase) => acc + (phase.modules?.length || 0),
    0
  ) || 1;
  const completedModules = completedMilestoneIds.length;
  const progressPercent = Math.min(100, Math.round((completedModules / totalModules) * 100));

  return (
    <aside className="sticky top-20 space-y-4">
      
      {/* Match Confidence & Track Summary */}
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#575653]">
            {t.dashboard.matchConfidence}
          </span>
          <span className="font-mono-numbers text-sm font-extrabold text-[#1B4332] bg-[#1B4332]/10 px-2 py-0.5 rounded">
            {matchScore}%
          </span>
        </div>

        <h3 className="font-bold text-base text-[#141413] leading-snug">
          {personalizedRole 
            ? (language === 'bn' ? personalizedRole.bn : personalizedRole.en)
            : (language === 'bn' ? primaryTrack.title_bn : primaryTrack.title_en)}
        </h3>

        {targetStack && targetStack.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2 mb-1">
            {targetStack.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#F7F6F2] border border-[#E5E4DF] text-[#141413]">
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="text-xs text-[#575653] mt-2 line-clamp-2 leading-relaxed">
          {language === 'bn' ? primaryTrack.summary_bn : primaryTrack.summary_en}
        </p>

        {/* Milestone Progress Bar */}
        <div className="mt-4 pt-4 border-t border-[#E5E4DF]">
          <div className="flex items-center justify-between text-xs text-[#575653] mb-1.5 font-semibold">
            <span>Overall Roadmap Progress:</span>
            <span className="font-mono-numbers font-bold text-[#141413]">{progressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-[#F7F6F2] border border-[#E5E4DF] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C84B31] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#575653] mt-1">
            <span>{completedModules} of {totalModules} modules finished</span>
            <span>{completedCertIds.length} certs</span>
          </div>
        </div>

        <button
          onClick={onOpenCatalogModal}
          className="mt-4 w-full py-2 px-3 text-xs font-semibold text-[#141413] hover:bg-[#F7F6F2] border border-[#E5E4DF] rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>{t.dashboard.switchTrack}</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
        </button>
      </div>

      {/* Honest Track Verdict Snapshot Card */}
      <div className="bg-[#FFFFFF] border-2 border-[#C84B31]/30 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center justify-between gap-1 mb-2">
          <div className="flex items-center gap-1.5 text-[#C84B31] font-bold text-xs uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 stroke-[2]" />
            <span>{t.dashboard.stayVerdictQuickLabel}</span>
          </div>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FAF9F5] border border-[#E5E4DF] text-[#141413]">
            {language === 'bn' 
              ? (verdict?.shortTermSuitability_bn || getTrackVerdict(primaryTrack.slug).shortTermSuitability_bn)
              : (verdict?.shortTermSuitability || getTrackVerdict(primaryTrack.slug).shortTermSuitability)}
          </span>
        </div>
        <p className="text-xs text-[#141413] leading-relaxed line-clamp-3 mb-3 font-medium">
          {language === 'bn'
            ? (verdict?.stayDecision_bn || getTrackVerdict(primaryTrack.slug).stayDecision_bn)
            : (verdict?.stayDecision_en || getTrackVerdict(primaryTrack.slug).stayDecision_en)}
        </p>
        {onSelectTab && (
          <button
            onClick={() => onSelectTab('verdict')}
            className="w-full py-2 px-3 text-xs font-bold text-white bg-[#C84B31] hover:bg-[#B33E26] rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
          >
            <span>{t.dashboard.viewVerdictBtn}</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
          </button>
        )}
      </div>

      {/* Salary Telemetry Snapshot */}
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 shadow-xs">
        <div className="flex items-center gap-1.5 text-[#C84B31] font-bold text-xs uppercase tracking-wider mb-2">
          <MapPin className="w-4 h-4 stroke-[2]" />
          <span>Local Salary Telemetry</span>
        </div>
        
        <div className="space-y-2 mt-3">
          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#FAF9F5]">
            <span className="text-[#575653]">Fresh Diploma Entry:</span>
            <span className="font-mono-numbers font-bold text-[#141413]">
              {primaryTrack.marketData?.bangladesh?.entrySalary?.formatted || '15,000 - 25,000 BDT'}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#FAF9F5]">
            <span className="text-[#575653]">Mid-Level (3+ Yrs):</span>
            <span className="font-mono-numbers font-bold text-[#1B4332]">
              {primaryTrack.marketData?.bangladesh?.midSalary?.formatted || '30,000 - 55,000 BDT'}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#FAF9F5]">
            <span className="text-[#575653]">Global Remote Range:</span>
            <span className="font-mono-numbers font-bold text-[#C84B31]">
              {primaryTrack.marketData?.remote?.monthlyRangeUsd || '$400 - $1,500 / mo'}
            </span>
          </div>
        </div>
      </div>

      {/* Save Code Instant Box */}
      {saveCode && (
        <div className="bg-[#FAF9F5] border border-[#E5E4DF] rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#575653] uppercase tracking-wider mb-1">
            <KeyRound className="w-4 h-4 stroke-[2] text-[#C84B31]" />
            <span>Zero-Password Save Code</span>
          </div>
          <p className="text-[11px] text-[#575653] mb-3">
            Use this code on any polytechnic lab computer or phone:
          </p>
          <div className="flex items-center justify-between bg-[#FFFFFF] p-2.5 rounded-xl border border-[#E5E4DF]">
            <span className="font-mono-numbers text-lg font-extrabold tracking-widest text-[#141413]">
              {saveCode}
            </span>
            <button
              onClick={handleCopyCode}
              className="p-1.5 text-[#575653] hover:text-[#141413] transition-colors cursor-pointer"
              title="Copy code"
            >
              {copied ? (
                <Check className="w-4 h-4 stroke-[2.5] text-[#1B4332]" />
              ) : (
                <Copy className="w-4 h-4 stroke-[2]" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* AI Mentor Quick Trigger Card */}
      <div 
        onClick={onOpenMentorDrawer}
        className="bg-[#1B4332] text-white rounded-2xl p-5 shadow-md cursor-pointer hover:bg-[#143225] transition-all group"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
            {t.mentor.title}
          </span>
          <MessageSquare className="w-4 h-4 stroke-[2] text-emerald-300" />
        </div>
        <h4 className="font-bold text-sm leading-snug">
          {language === 'bn' 
            ? 'ডিভাইস বা ক্যারিয়ার নিয়ে পরামর্শ চাও?'
            : 'Need advice on hardware or polytechnic labs?'}
        </h4>
        <p className="text-xs text-white/80 mt-1">
          {language === 'bn'
            ? 'যেকোনো সময় এআই মেন্টরকে প্রশ্ন করো।'
            : 'Ask contextual questions anytime in simple language.'}
        </p>
      </div>

    </aside>
  );
};
