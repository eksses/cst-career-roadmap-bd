import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useStudent } from '../context/StudentContext.js';
import { Compass, Globe, KeyRound, MessageSquare, BookOpen, RotateCcw } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
  onOpenCatalogModal: () => void;
  onOpenMentorDrawer: () => void;
  onRestartSurvey: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResumeModal,
  onOpenCatalogModal,
  onOpenMentorDrawer,
  onRestartSurvey,
}) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { saveCode, primaryTrack } = useStudent();

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E5E4DF] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div 
          onClick={onRestartSurvey}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-lg bg-[#C84B31] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <Compass className="w-5 h-5 stroke-[1.75]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base sm:text-lg tracking-tight text-[#141413]">
                {t.brand.title}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold uppercase bg-[#F7F6F2] border border-[#E5E4DF] text-[#575653] rounded">
                BTEB CST
              </span>
            </div>
            <p className="hidden md:block text-xs text-[#575653] truncate max-w-xs lg:max-w-md">
              {t.brand.tagline}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Explore 10 Tracks button */}
          <button
            onClick={onOpenCatalogModal}
            className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#141413] hover:bg-[#F7F6F2] border border-[#E5E4DF] rounded-lg transition-colors"
          >
            <BookOpen className="w-4 h-4 stroke-[1.75] text-[#575653]" />
            <span>{t.nav.browseTracks}</span>
          </button>

          {/* Save Code / Resume button */}
          {saveCode ? (
            <div 
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F7F6F2] border border-[#E5E4DF] rounded-lg cursor-pointer hover:border-[#C84B31]/40 transition-colors"
              title="Click to view Save Code"
            >
              <KeyRound className="w-3.5 h-3.5 stroke-[1.75] text-[#C84B31]" />
              <span className="text-xs font-semibold text-[#575653] hidden sm:inline">
                {t.nav.saveCode}:
              </span>
              <span className="font-mono-numbers font-bold text-xs text-[#141413] tracking-wider">
                {saveCode}
              </span>
            </div>
          ) : (
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#575653] hover:text-[#141413] hover:bg-[#F7F6F2] border border-[#E5E4DF] rounded-lg transition-colors"
            >
              <KeyRound className="w-3.5 h-3.5 stroke-[1.75]" />
              <span className="hidden sm:inline">{t.nav.resumeRoadmap}</span>
            </button>
          )}

          {/* AI Mentor Assistant Trigger */}
          <button
            onClick={onOpenMentorDrawer}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#1B4332] text-white hover:bg-[#143225] rounded-lg shadow-sm transition-all hover:shadow active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 stroke-[1.75]" />
            <span className="hidden xs:inline">{t.nav.aiMentor}</span>
          </button>

          {/* Instant Language Switcher Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold border border-[#E5E4DF] bg-[#FFFFFF] hover:bg-[#F7F6F2] text-[#141413] rounded-lg transition-colors select-none"
            title="Toggle Bangla / English"
          >
            <Globe className="w-3.5 h-3.5 stroke-[1.75] text-[#575653]" />
            <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
          </button>

        </div>
      </div>
    </header>
  );
};
