import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from '../../../shared/types.js';
import { en } from '../translations/en.js';
import { bn } from '../translations/bn.js';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof bn;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('cst_lang');
    return (saved === 'en' || saved === 'bn') ? saved : 'bn';
  });

  useEffect(() => {
    localStorage.setItem('cst_lang', language);
    document.documentElement.lang = language;
    if (language === 'bn') {
      document.documentElement.classList.add('lang-bn');
    } else {
      document.documentElement.classList.remove('lang-bn');
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'bn' ? 'en' : 'bn'));
  };

  const t = language === 'bn' ? bn : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
