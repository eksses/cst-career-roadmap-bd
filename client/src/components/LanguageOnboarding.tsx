import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { motion } from 'framer-motion';
import { Compass, Map, CheckCircle2 } from 'lucide-react';

interface LanguageOnboardingProps {
  onStartSurvey: () => void;
  onOpenDirectCatalog: () => void;
  onOpenResumeModal: () => void;
}

export const LanguageOnboarding: React.FC<LanguageOnboardingProps> = ({
  onStartSurvey,
  onOpenDirectCatalog,
  onOpenResumeModal,
}) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="max-w-md mx-auto px-4 py-16 sm:py-24 flex flex-col items-center text-center">
      
      {/* Brand Icon */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-14 h-14 rounded-2xl bg-[#FFFFFF] border border-[#E5E4DF] shadow-xs flex items-center justify-center mb-6"
      >
        <Compass className="w-7 h-7 stroke-[1.75] text-[#C84B31]" />
      </motion.div>

      {/* Clean Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight mb-8"
      >
        {t.onboarding.title}
      </motion.h1>

      {/* Segmented Language Switch */}
      <motion.div 
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="w-full max-w-xs mb-8"
      >
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#FFFFFF] border border-[#E5E4DF] rounded-xl shadow-2xs">
          <button
            type="button"
            onClick={() => setLanguage('bn')}
            className={`py-2 px-3 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              language === 'bn'
                ? 'bg-[#C84B31] text-white shadow-xs font-bangla'
                : 'text-[#575653] hover:text-[#141413] font-bangla'
            }`}
          >
            {language === 'bn' && <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />}
            <span>বাংলা</span>
          </button>

          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`py-2 px-3 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              language === 'en'
                ? 'bg-[#C84B31] text-white shadow-xs font-sans'
                : 'text-[#575653] hover:text-[#141413] font-sans'
            }`}
          >
            {language === 'en' && <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />}
            <span>English</span>
          </button>
        </div>
      </motion.div>

      {/* Primary Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.15 }}
        className="w-full max-w-xs flex flex-col gap-3"
      >
        <button
          onClick={onStartSurvey}
          className="w-full min-h-[52px] px-5 py-3 bg-[#C84B31] hover:bg-[#B33E26] active:scale-[0.98] text-white font-bold text-sm rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <Compass className="w-4 h-4 stroke-[2]" />
          <span>{t.onboarding.ctaHelpMeChoose}</span>
        </button>

        <button
          onClick={onOpenDirectCatalog}
          className="w-full min-h-[50px] px-5 py-3 bg-[#FFFFFF] hover:bg-[#FAF9F5] active:scale-[0.98] text-[#141413] font-bold text-xs sm:text-sm rounded-xl border border-[#E5E4DF] hover:border-[#C84B31]/40 shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <Map className="w-4 h-4 stroke-[2] text-[#1B4332]" />
          <span>{t.onboarding.ctaDirectSelect}</span>
        </button>

        <button
          onClick={onOpenResumeModal}
          className="mt-3 text-xs font-semibold text-[#575653] hover:text-[#141413] underline underline-offset-4 transition-colors cursor-pointer"
        >
          {t.onboarding.ctaResume}
        </button>
      </motion.div>

    </div>
  );
};
