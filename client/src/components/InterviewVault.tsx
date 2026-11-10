import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useStudent } from '../context/StudentContext.js';
import type { InterviewQuestion } from '../../../shared/types.js';
import { HelpCircle, ChevronDown, ChevronUp, Search, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

export const InterviewVault: React.FC = () => {
  const { language, t } = useLanguage();
  const { primaryTrack } = useStudent();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!primaryTrack?.interviewQuestions || !Array.isArray(primaryTrack.interviewQuestions) || primaryTrack.interviewQuestions.length === 0) {
    return (
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-6 sm:p-8 shadow-xs text-center py-12">
        <p className="text-xs text-[#575653]">
          {language === 'bn' 
            ? 'এই ট্র্যাকের ইন্টারভিউ প্রশ্নাবলী আপডেট হচ্ছে।'
            : 'Technical interview questions are being calibrated for this track.'}
        </p>
      </div>
    );
  }

  const questions: InterviewQuestion[] = primaryTrack.interviewQuestions;

  const filteredQuestions = questions.filter((q) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const textToSearch = `${q.question_en || ''} ${q.question_bn || ''} ${q.category || ''} ${q.howToAnswer_en || ''} ${q.howToAnswer_bn || ''}`.toLowerCase();
    return textToSearch.includes(query);
  });

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-6 sm:p-8 shadow-xs">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#141413] tracking-tight">
            {t.interview.heading}
          </h2>
          <p className="text-xs sm:text-sm text-[#575653] mt-1 leading-relaxed">
            {t.interview.subheading}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#575653] absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.interview.searchPlaceholder}
            className="w-full pl-9 pr-3 py-2 text-base sm:text-xs bg-[#F7F6F2] border border-[#E5E4DF] rounded-xl focus:outline-none focus:border-[#C84B31]"
          />
        </div>
      </div>

      {/* Questions Accordion List */}
      <div className="space-y-3">
        {filteredQuestions.map((q, idx) => {
          const isExpanded = expandedId === q.id || (idx === 0 && !expandedId);
          return (
            <div
              key={q.id}
              className={`rounded-xl border transition-all ${
                isExpanded
                  ? 'border-[#C84B31] bg-[#FFFFFF] shadow-xs'
                  : 'border-[#E5E4DF] bg-[#FAF9F5] hover:border-[#D4D3CC]'
              }`}
            >
              {/* Question Header (Toggle) */}
              <button
                onClick={() => toggleExpand(q.id)}
                className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono-numbers text-xs font-bold text-[#C84B31] bg-[#C84B31]/10 px-2 py-0.5 rounded mt-0.5">
                    Q{idx + 1}
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#575653] block mb-1">
                      {q.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#141413] leading-snug">
                      {language === 'bn' ? q.question_bn : q.question_en}
                    </h3>
                  </div>
                </div>

                <div className="text-[#575653] mt-1 shrink-0">
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 stroke-[2]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 stroke-[2]" />
                  )}
                </div>
              </button>

              {/* Expanded Detail Body */}
              {isExpanded && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-2 border-t border-[#E5E4DF] space-y-4 text-xs sm:text-sm">
                  
                  {/* 1. Why Interviewer Asks This */}
                  <div className="p-3.5 rounded-lg bg-[#F7F6F2] border border-[#E5E4DF]">
                    <div className="flex items-center gap-1.5 text-[#575653] font-bold text-[11px] uppercase tracking-wider mb-1">
                      <Lightbulb className="w-3.5 h-3.5 stroke-[2] text-[#C84B31]" />
                      <span>{t.interview.whyAsked}</span>
                    </div>
                    <p className="text-[#141413] leading-relaxed">
                      {language === 'bn' ? q.whyAsked_bn : q.whyAsked_en}
                    </p>
                  </div>

                  {/* 2. How to Answer Professionally */}
                  <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E5E4DF]">
                    <div className="flex items-center gap-1.5 text-[#1B4332] font-bold text-[11px] uppercase tracking-wider mb-1">
                      <CheckCircle className="w-3.5 h-3.5 stroke-[2]" />
                      <span>{t.interview.howToAnswer}</span>
                    </div>
                    <p className="text-[#141413] leading-relaxed font-medium">
                      {language === 'bn' ? q.howToAnswer_bn : q.howToAnswer_en}
                    </p>
                  </div>

                  {/* 3. Common Mistakes CST Students Make */}
                  <div className="p-3.5 rounded-lg bg-[#FFF8F7] border border-[#FCDAD7]">
                    <div className="flex items-center gap-1.5 text-[#C84B31] font-bold text-[11px] uppercase tracking-wider mb-1">
                      <AlertTriangle className="w-3.5 h-3.5 stroke-[2]" />
                      <span>{t.interview.commonMistakes}</span>
                    </div>
                    <p className="text-[#575653] leading-relaxed">
                      {language === 'bn' ? q.commonMistakes_bn : q.commonMistakes_en}
                    </p>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
