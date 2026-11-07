import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import type { SurveyQuestion, SurveyOption, SurveySubmission } from '../../../shared/types.js';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  User, 
  Phone, 
  ArrowRight, 
  Loader2, 
  Smartphone, 
  Laptop, 
  Monitor, 
  Cpu, 
  Code2, 
  Server, 
  Network, 
  Palette, 
  CheckCircle2, 
  Briefcase, 
  Globe, 
  Clock, 
  Terminal, 
  Cloud, 
  Layers, 
  HelpCircle, 
  Compass, 
  ShieldCheck,
  FastForward,
  Map,
  Compass as CompassIcon,
  Filter
} from 'lucide-react';

interface SurveyStepCardProps {
  onComplete: (submission: SurveySubmission) => void;
  isSubmitting: boolean;
  onOpenDirectCatalog?: () => void;
}

export const SurveyStepCard: React.FC<SurveyStepCardProps> = ({ 
  onComplete, 
  isSubmitting,
  onOpenDirectCatalog 
}) => {
  const { language, t } = useLanguage();
  const [allQuestions, setAllQuestions] = useState<SurveyQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [studentName, setStudentName] = useState<string>('');
  const [phoneOrRoll, setPhoneOrRoll] = useState<string>('');
  const [loadingQuestions, setLoadingQuestions] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/survey')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.questions) {
          setAllQuestions(data.questions);
        }
        setLoadingQuestions(false);
      })
      .catch(err => {
        console.error('Failed to load questions:', err);
        setLoadingQuestions(false);
      });
  }, []);

  // Compute active dynamic question queue based on answers
  const activeQuestions = useMemo(() => {
    return allQuestions.filter(q => {
      if (!q.dependsOn) return true;
      const parentVal = selectedAnswers[q.dependsOn.questionId];
      if (!parentVal) return false;
      return q.dependsOn.values.includes(parentVal);
    });
  }, [allQuestions, selectedAnswers]);

  if (loadingQuestions) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Loader2 className="w-8 h-8 stroke-[2] text-[#C84B31] animate-spin mb-3" />
        <p className="text-xs font-semibold text-[#575653]">
          {language === 'bn' ? 'ম্যাট্রিক্স লোড হচ্ছে...' : 'Loading CST Career Matrix...'}
        </p>
      </div>
    );
  }

  if (activeQuestions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xs text-[#575653]">
          {language === 'bn' ? 'প্রশ্ন খুঁজে পাওয়া যায়নি।' : 'No questions found.'}
        </p>
      </div>
    );
  }

  const safeIndex = Math.min(currentIndex, activeQuestions.length - 1);
  const currentQ = activeQuestions[safeIndex];
  const totalQuestions = activeQuestions.length;
  const currentSelectedKey = selectedAnswers[currentQ?.id];
  const isLastQuestion = safeIndex === totalQuestions - 1;

  // Live scope telemetry counter
  const getScopeDescription = () => {
    if (safeIndex === 0) {
      return language === 'bn' ? '২৪টি রোডম্যাপ বিবেচনায় আছে' : '24 Roadmaps In Scope';
    }
    const hw = selectedAnswers['hardware'];
    if (hw === 'phone_only') {
      return language === 'bn' ? 'মোবাইল ও ল্যাব-বান্ধব রোডম্যাপ' : 'Phone & Lab Friendly Tracks';
    }
    const pref = selectedAnswers['coding_preference'];
    if (pref === 'prefers_non_coding') {
      return language === 'bn' ? 'নন-কোডিং ও সিস্টেমস রোডম্যাপ' : 'Non-Coding & Systems Tracks';
    }
    return language === 'bn' ? 'ইঞ্জিনিয়ারিং স্পেশালাইজেশন ফিল্টার' : 'Engineering Specialization Scope';
  };

  const renderIcon = (iconName?: string) => {
    const props = { className: "w-4 h-4 stroke-[1.75]" };
    switch (iconName) {
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Laptop': return <Laptop {...props} />;
      case 'Monitor': return <Monitor {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'HelpCircle': return <HelpCircle {...props} />;
      default: return <Compass {...props} />;
    }
  };

  const handleSelectOption = (option: SurveyOption) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: option.key,
    }));
  };

  const handleSkipQuestion = () => {
    const updated = {
      ...selectedAnswers,
      [currentQ.id]: 'skipped',
    };
    setSelectedAnswers(updated);

    if (safeIndex < totalQuestions - 1) {
      setCurrentIndex(safeIndex + 1);
    } else {
      triggerComplete(updated);
    }
  };

  const handleSkipAllToCatalog = () => {
    if (onOpenDirectCatalog) {
      onOpenDirectCatalog();
    } else {
      // Trigger complete with empty answers to initiate direct selection
      triggerComplete({});
    }
  };

  const handleNext = () => {
    if (safeIndex < totalQuestions - 1) {
      setCurrentIndex(safeIndex + 1);
    } else {
      triggerComplete(selectedAnswers);
    }
  };

  const handlePrevious = () => {
    if (safeIndex > 0) {
      setCurrentIndex(safeIndex - 1);
    }
  };

  const triggerComplete = (answers: Record<string, string>) => {
    onComplete({
      studentName: studentName.trim() || undefined,
      phoneOrRoll: phoneOrRoll.trim() || undefined,
      ...answers,
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-5 sm:py-8 space-y-4">
      
      {/* Matrix Cockpit Command Header */}
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C84B31]/10 text-[#C84B31] flex items-center justify-center shrink-0">
              <CompassIcon className="w-4 h-4 stroke-[2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#575653]">
                  {language === 'bn' ? 'ক্যারিয়ার কম্পাস' : 'CST Matrix Compass'}
                </span>
                <span className="text-xs text-[#575653]">•</span>
                <span className="text-[10px] font-mono-numbers font-bold text-[#C84B31]">
                  {safeIndex + 1} / {totalQuestions}
                </span>
              </div>
              <div className="text-xs font-bold text-[#141413] flex items-center gap-1.5 mt-0.5">
                <Filter className="w-3 h-3 stroke-[2] text-[#575653]" />
                <span>{getScopeDescription()}</span>
              </div>
            </div>
          </div>

          {/* Quick Direct Track Escape Button */}
          <button
            type="button"
            onClick={handleSkipAllToCatalog}
            className="self-start sm:self-auto px-3 py-1.5 rounded-lg border border-[#E5E4DF] hover:border-[#141413] bg-[#FAF9F5] hover:bg-white text-xs font-bold text-[#141413] flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Map className="w-3.5 h-3.5 stroke-[2] text-[#1B4332]" />
            <span>{language === 'bn' ? 'সরাসরি ২৪টি ট্র্যাক দেখো' : 'Browse All 24 Tracks'}</span>
          </button>
        </div>

        {/* Dynamic Progress Ribbon */}
        <div className="mt-4">
          <div className="w-full h-1.5 bg-[#E5E4DF] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#C84B31]"
              initial={{ width: 0 }}
              animate={{ width: `${((safeIndex + 1) / totalQuestions) * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            />
          </div>
        </div>

        {/* Step Station Dots Navigator */}
        <div className="mt-3 flex items-center justify-between gap-1">
          {activeQuestions.map((q, idx) => {
            const isDone = selectedAnswers[q.id] && selectedAnswers[q.id] !== 'skipped';
            const isCurrent = idx === safeIndex;

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`flex-1 py-1 rounded transition-all cursor-pointer text-center text-[10px] font-mono-numbers font-bold truncate ${
                  isCurrent
                    ? 'bg-[#141413] text-white shadow-2xs'
                    : isDone
                    ? 'bg-[#1B4332]/10 text-[#1B4332]'
                    : 'text-[#575653] hover:bg-[#FAF9F5]'
                }`}
                title={language === 'bn' ? q.title_bn : q.title_en}
              >
                0{idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 sm:p-6 shadow-xs"
        >
          {/* Question Title */}
          <div className="mb-4">
            <h2 className="text-base sm:text-lg font-bold text-[#141413] tracking-tight">
              {language === 'bn' ? currentQ.title_bn : currentQ.title_en}
            </h2>
            <p className="mt-0.5 text-xs text-[#575653]">
              {language === 'bn' ? currentQ.subtitle_bn : currentQ.subtitle_en}
            </p>
          </div>

          {/* Options List */}
          <div className="space-y-2.5">
            {currentQ.options.map((option) => {
              const isSelected = currentSelectedKey === option.key;
              return (
                <div
                  key={option.key}
                  onClick={() => handleSelectOption(option)}
                  className={`min-h-[56px] p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between select-none ${
                    isSelected
                      ? 'bg-[#FAF9F5] border-[#C84B31] shadow-xs'
                      : 'bg-[#FFFFFF] border-[#E5E4DF] hover:border-[#D4D3CC]'
                  }`}
                >
                  <div className="flex items-center gap-3 pr-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-[#C84B31] text-white shadow-xs'
                        : 'bg-[#F7F6F2] text-[#575653]'
                    }`}>
                      {renderIcon(option.iconName)}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#141413] leading-snug">
                        {language === 'bn' ? option.label_bn : option.label_en}
                      </p>
                      <p className="text-[11px] text-[#575653] mt-0.5 leading-normal">
                        {language === 'bn' ? option.description_bn : option.description_en}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#C84B31] text-white'
                        : 'border-2 border-[#D4D3CC]'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Optional Name & Roll on the final step */}
          {isLastQuestion && (
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 pt-4 border-t border-[#E5E4DF]"
            >
              <p className="text-xs font-bold text-[#141413] mb-2">
                {language === 'bn' ? 'তোমার নাম বা রোল (ঐচ্ছিক):' : 'Save Session Name or Roll (Optional):'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="relative">
                  <User className="w-4 h-4 text-[#575653] absolute left-3 top-3.5" />
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder={language === 'bn' ? 'তোমার নাম' : 'Your Name'}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-[#FAF9F5] border border-[#E5E4DF] rounded-lg focus:outline-none focus:border-[#C84B31]"
                  />
                </div>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#575653] absolute left-3 top-3.5" />
                  <input
                    type="text"
                    value={phoneOrRoll}
                    onChange={(e) => setPhoneOrRoll(e.target.value)}
                    placeholder={language === 'bn' ? 'রোল বা ফোন নম্বর' : 'Phone or Roll'}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-[#FAF9F5] border border-[#E5E4DF] rounded-lg focus:outline-none focus:border-[#C84B31]"
                  />
                </div>
              </div>
            </motion.div>
          )}

        </motion.div>
      </AnimatePresence>

      {/* Action Deck Bar */}
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-2">
          {safeIndex > 0 ? (
            <button
              onClick={handlePrevious}
              disabled={isSubmitting}
              className="px-3.5 py-2 rounded-xl border border-[#E5E4DF] font-bold text-xs text-[#141413] hover:bg-[#FAF9F5] flex items-center gap-1 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2]" />
              <span>{t.survey.previous}</span>
            </button>
          ) : (
            <button
              onClick={handleSkipAllToCatalog}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-[#575653] hover:text-[#141413] transition-colors cursor-pointer"
            >
              {language === 'bn' ? 'স্কিপ করে ২৪টি ট্র্যাক দেখো' : 'Skip to All 24 Tracks'}
            </button>
          )}

          <button
            type="button"
            onClick={handleSkipQuestion}
            className="px-3 py-2 rounded-xl text-xs font-semibold text-[#575653] hover:text-[#C84B31] transition-colors cursor-pointer inline-flex items-center gap-1"
          >
            <FastForward className="w-3.5 h-3.5 stroke-[1.75]" />
            <span>{language === 'bn' ? 'এই প্রশ্ন স্কিপ করো' : 'Skip Question'}</span>
          </button>
        </div>

        <button
          onClick={handleNext}
          disabled={!currentSelectedKey || isSubmitting}
          className={`min-h-[44px] px-5 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 text-white transition-all ${
            !currentSelectedKey || isSubmitting
              ? 'bg-[#D4D3CC] cursor-not-allowed'
              : 'bg-[#C84B31] hover:bg-[#B33E26] cursor-pointer shadow-xs active:scale-[0.98]'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 stroke-[2] animate-spin" />
              <span>{language === 'bn' ? 'প্রস্তুত হচ্ছে...' : 'Calibrating...'}</span>
            </>
          ) : isLastQuestion ? (
            <>
              <span>{language === 'bn' ? 'রোডম্যাপ দেখো' : 'View My Roadmap'}</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </>
          ) : (
            <>
              <span>{t.survey.next}</span>
              <ChevronRight className="w-4 h-4 stroke-[2]" />
            </>
          )}
        </button>
      </div>

    </div>
  );
};
