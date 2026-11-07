import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useStudent } from '../context/StudentContext.js';
import { 
  Compass, 
  Map, 
  Layers, 
  Activity, 
  RotateCcw, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Radio
} from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationStatusStripProps {
  viewState: 'onboarding' | 'survey' | 'suggestions' | 'catalog' | 'dashboard';
  activeTab?: 'roadmap' | 'market' | 'interview' | 'requirements' | 'verdict';
  onNavigateToCatalog: () => void;
  onRestartSurvey: () => void;
  onOpenSaveCodeModal?: () => void;
  surveyProgress?: { current: number; total: number };
}

export const LocationStatusStrip: React.FC<LocationStatusStripProps> = ({
  viewState,
  activeTab = 'roadmap',
  onNavigateToCatalog,
  onRestartSurvey,
  onOpenSaveCodeModal,
  surveyProgress,
}) => {
  const { language } = useLanguage();
  const { primaryTrack, saveCode, isLoading } = useStudent();

  const getBreadcrumbs = () => {
    switch (viewState) {
      case 'onboarding':
        return [
          { label: language === 'bn' ? 'হোম' : 'Home' },
          { label: language === 'bn' ? 'স্টেশন ০১: গেটওয়ে' : 'Station 01: Gateway', active: true }
        ];
      case 'survey':
        return [
          { label: language === 'bn' ? 'গেটওয়ে' : 'Gateway' },
          { 
            label: surveyProgress 
              ? (language === 'bn' 
                  ? `কম্পাস: প্রশ্ন ০${surveyProgress.current} / ০${surveyProgress.total}` 
                  : `Compass: Step 0${surveyProgress.current} of 0${surveyProgress.total}`)
              : (language === 'bn' ? 'ক্যারিয়ার কম্পাস' : 'CST Compass'),
            active: true 
          }
        ];
      case 'suggestions':
        return [
          { label: language === 'bn' ? 'কম্পাস' : 'Compass' },
          { label: language === 'bn' ? 'রোডম্যাপ নির্বাচন' : 'Roadmap Selection', active: true }
        ];
      case 'catalog':
        return [
          { label: language === 'bn' ? 'কনসোল' : 'Console' },
          { label: language === 'bn' ? '২৪টি ট্র্যাক এক্সপ্লোরার' : '24 Track Explorer', active: true }
        ];
      case 'dashboard':
        return [
          { 
            label: primaryTrack 
              ? (language === 'bn' ? primaryTrack.title_bn : primaryTrack.title_en)
              : (language === 'bn' ? 'রোডম্যাপ' : 'Roadmap')
          },
          { 
            label: language === 'bn' 
              ? (activeTab === 'roadmap' ? 'রোডম্যাপ' : activeTab === 'market' ? 'বেতন ও মার্কেট' : activeTab === 'interview' ? 'ভাইভা' : activeTab === 'requirements' ? 'স্কিলস' : 'দিকনির্দেশনা')
              : (activeTab === 'roadmap' ? 'Roadmap' : activeTab === 'market' ? 'Salaries' : activeTab === 'interview' ? 'Interview' : activeTab === 'requirements' ? 'Skills' : 'Guidance'),
            active: true 
          }
        ];
      default:
        return [{ label: 'Console', active: true }];
    }
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="bg-[#FFFFFF]/90 backdrop-blur-xs border-b border-[#E5E4DF] sticky top-14 z-20 px-3 sm:px-6 py-1.5 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
        
        {/* Left Side: Live Location Telemetry Breadcrumb */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-[#575653]">
            <Radio className={`w-3 h-3 stroke-[2] ${isLoading ? 'text-[#C84B31] animate-pulse' : 'text-[#1B4332]'}`} />
            <span className="uppercase tracking-wider text-[10px] text-[#575653]">
              {language === 'bn' ? 'লোকেশন:' : 'Station:'}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <ChevronRight className="w-3 h-3 text-[#575653] stroke-[2] shrink-0" />
                )}
                <span
                  className={`truncate max-w-[150px] sm:max-w-[240px] ${
                    crumb.active
                      ? 'font-bold text-[#141413]'
                      : 'text-[#575653] hover:text-[#141413]'
                  }`}
                >
                  {crumb.label}
                </span>
              </React.Fragment>
            ))}
          </div>

          {/* Real-time Status Pulse Beacon */}
          <div className="hidden sm:flex items-center gap-1.5 ml-2 pl-2 border-l border-[#E5E4DF]">
            <span className={`w-1.5 h-1.5 rounded-full ${isLoading ? 'bg-[#C84B31] animate-ping' : 'bg-[#1B4332]'}`} />
            <span className="text-[10px] font-mono-numbers text-[#575653]">
              {isLoading 
                ? (language === 'bn' ? 'সিঙ্ক হচ্ছে...' : 'Syncing...')
                : (language === 'bn' ? 'অনলাইন • রিয়েলটাইম' : 'Online • Synced')}
            </span>
          </div>
        </div>

        {/* Right Side: Quick Action Telemetry Pills */}
        <div className="flex items-center gap-2">
          {saveCode && (
            <button
              onClick={onOpenSaveCodeModal}
              className="hidden md:flex text-[11px] font-mono-numbers font-bold text-[#141413] bg-[#FAF9F5] hover:bg-[#E5E4DF] border border-[#E5E4DF] px-2 py-0.5 rounded transition-colors cursor-pointer items-center gap-1"
              title={language === 'bn' ? 'তোমার সেভ কোড' : 'Your Save Code'}
            >
              <ShieldCheck className="w-3 h-3 text-[#1B4332] stroke-[2]" />
              <span>{saveCode}</span>
            </button>
          )}

          <button
            onClick={onNavigateToCatalog}
            className="text-[11px] font-semibold text-[#575653] hover:text-[#C84B31] flex items-center gap-1 px-2 py-0.5 rounded hover:bg-[#FAF9F5] transition-colors cursor-pointer"
          >
            <Map className="w-3 h-3 stroke-[2]" />
            <span className="hidden sm:inline">
              {language === 'bn' ? '২৪টি ট্র্যাক' : '24 Tracks'}
            </span>
          </button>

          {viewState !== 'survey' && (
            <button
              onClick={onRestartSurvey}
              className="text-[11px] font-semibold text-[#575653] hover:text-[#141413] flex items-center gap-1 px-2 py-0.5 rounded hover:bg-[#FAF9F5] transition-colors cursor-pointer"
              title={language === 'bn' ? 'নতুন করে সার্ভে শুরু করো' : 'Start Diagnostic Survey'}
            >
              <RotateCcw className="w-3 h-3 stroke-[2]" />
              <span className="hidden sm:inline">
                {language === 'bn' ? 'নতুন সার্ভে' : 'Reset'}
              </span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
