import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useStudent } from '../context/StudentContext.js';
import type { SkillItem } from '../../../shared/types.js';
import { CheckSquare, Square, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export const RequirementsChecklist: React.FC = () => {
  const { language, t } = useLanguage();
  const { primaryTrack, completedSkillIds, toggleSkill } = useStudent();

  if (!primaryTrack) return null;

  const rawDayToDay = language === 'bn' 
    ? (primaryTrack.dayToDay_bn || primaryTrack.dayToDay_en) 
    : (primaryTrack.dayToDay_en || primaryTrack.dayToDay_bn);
  const dayToDay: string[] = Array.isArray(rawDayToDay) ? rawDayToDay : [];
  const skills: SkillItem[] = Array.isArray(primaryTrack.mustHaveSkills) ? primaryTrack.mustHaveSkills : [];
  const safeCompletedSkillIds = Array.isArray(completedSkillIds) ? completedSkillIds : [];
  const completedCount = skills.filter(s => safeCompletedSkillIds.includes(s.id)).length;

  return (
    <div className="space-y-6">
      
      {/* Day-to-Day Responsibilities Card */}
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-5 h-5 stroke-[2] text-[#C84B31]" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#141413] tracking-tight">
            {t.requirements.dayToDayHeading}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#575653] mb-6 leading-relaxed">
          {t.requirements.dayToDaySubheading}
        </p>

        <div className="grid grid-cols-1 gap-3">
          {dayToDay.map((task, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DF] flex items-start gap-3.5"
            >
              <span className="font-mono-numbers text-xs font-bold text-[#C84B31] bg-[#C84B31]/10 px-2 py-0.5 rounded mt-0.5 shrink-0">
                0{idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-[#141413] leading-relaxed">
                {task}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Must-Have Skills Checklist */}
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#141413] tracking-tight">
              {t.requirements.checklistHeading}
            </h2>
            <p className="text-xs sm:text-sm text-[#575653] mt-1 leading-relaxed">
              {t.requirements.checklistSubheading}
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F7F6F2] border border-[#E5E4DF] rounded-xl self-start sm:self-auto shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#1B4332] stroke-[2]" />
            <span className="text-xs font-bold text-[#141413]">
              <span className="font-mono-numbers">{completedCount}</span> / <span className="font-mono-numbers">{skills.length}</span> {t.requirements.progressText}
            </span>
          </div>
        </div>

        {/* Skills List with Checkboxes */}
        <div className="space-y-3 mt-4">
          {skills.map((skill) => {
            const isChecked = safeCompletedSkillIds.includes(skill.id);
            return (
              <div
                key={skill.id}
                onClick={() => toggleSkill(skill.id)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                  isChecked
                    ? 'bg-[#FAF9F5] border-[#1B4332]/50 shadow-xs'
                    : 'bg-[#FFFFFF] border-[#E5E4DF] hover:border-[#D4D3CC]'
                }`}
              >
                <div className="mt-0.5 text-[#1B4332] shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 stroke-[2.5]" />
                  ) : (
                    <Square className="w-5 h-5 stroke-[1.75] text-[#575653]" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-sm text-[#141413]">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F7F6F2] text-[#575653]">
                      {skill.category}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        skill.importance === 'Essential'
                          ? 'bg-[#C84B31]/10 text-[#C84B31]'
                          : 'bg-[#575653]/10 text-[#575653]'
                      }`}
                    >
                      {skill.importance}
                    </span>
                  </div>

                  <p className="text-xs text-[#575653] leading-relaxed">
                    {language === 'bn' ? skill.description_bn : skill.description_en}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
