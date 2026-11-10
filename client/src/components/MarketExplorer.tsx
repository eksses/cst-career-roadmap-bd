import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useStudent } from '../context/StudentContext.js';
import { MapPin, Globe2, Laptop, Building2, FileText, CheckCircle2, DollarSign, Briefcase, AlertCircle } from 'lucide-react';

export const MarketExplorer: React.FC = () => {
  const { language, t } = useLanguage();
  const { primaryTrack } = useStudent();
  const [activeTab, setActiveTab] = useState<'local' | 'target' | 'remote'>('local');
  const [selectedCountryIndex, setSelectedCountryIndex] = useState<number>(0);

  if (!primaryTrack?.marketData) {
    return (
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-6 sm:p-8 shadow-xs text-center py-12">
        <p className="text-xs text-[#575653]">
          {language === 'bn' 
            ? 'এই ট্র্যাকের মার্কেট ডেটা সংগৃহীত হচ্ছে।'
            : 'Market telemetry data is being compiled for this track.'}
        </p>
      </div>
    );
  }

  const { bangladesh, targetCountries, remote } = primaryTrack.marketData;

  return (
    <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-6 sm:p-8 shadow-xs">
      
      {/* Tab Switcher */}
      <div className="flex border-b border-[#E5E4DF] gap-2 sm:gap-6 mb-6 overflow-x-auto pb-px">
        <button
          onClick={() => setActiveTab('local')}
          className={`pb-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'local'
              ? 'border-[#C84B31] text-[#C84B31]'
              : 'border-transparent text-[#575653] hover:text-[#141413]'
          }`}
        >
          <MapPin className="w-4 h-4 stroke-[2]" />
          <span>{t.market.localTab}</span>
        </button>

        <button
          onClick={() => setActiveTab('target')}
          className={`pb-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'target'
              ? 'border-[#C84B31] text-[#C84B31]'
              : 'border-transparent text-[#575653] hover:text-[#141413]'
          }`}
        >
          <Globe2 className="w-4 h-4 stroke-[2]" />
          <span>{t.market.targetTab}</span>
        </button>

        <button
          onClick={() => setActiveTab('remote')}
          className={`pb-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'remote'
              ? 'border-[#C84B31] text-[#C84B31]'
              : 'border-transparent text-[#575653] hover:text-[#141413]'
          }`}
        >
          <Laptop className="w-4 h-4 stroke-[2]" />
          <span>{t.market.remoteTab}</span>
        </button>
      </div>

      {/* Tab 1: Bangladesh Local Market */}
      {activeTab === 'local' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Salary Tiers in JetBrains Mono */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#575653] mb-3">
              Salary Benchmarks: {bangladesh.region}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Entry Salary */}
              <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#E5E4DF]">
                <span className="text-[11px] font-semibold text-[#575653] block">
                  {t.market.entryLevel}
                </span>
                <span className="font-mono-numbers text-xl sm:text-2xl font-extrabold text-[#C84B31] block mt-1">
                  {bangladesh?.entrySalary?.formatted || 'BDT 15,000 - 25,000'}
                </span>
                <span className="text-[11px] text-[#575653] block mt-1">
                  Polytechnic fresh graduate
                </span>
              </div>

              {/* Mid Salary */}
              <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#E5E4DF]">
                <span className="text-[11px] font-semibold text-[#575653] block">
                  {t.market.midLevel}
                </span>
                <span className="font-mono-numbers text-xl sm:text-2xl font-extrabold text-[#141413] block mt-1">
                  {bangladesh?.midSalary?.formatted || 'BDT 35,000 - 65,000'}
                </span>
                <span className="text-[11px] text-[#575653] block mt-1">
                  Proven project ownership
                </span>
              </div>

              {/* Senior Salary */}
              <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#E5E4DF]">
                <span className="text-[11px] font-semibold text-[#575653] block">
                  {t.market.seniorLevel}
                </span>
                <span className="font-mono-numbers text-xl sm:text-2xl font-extrabold text-[#1B4332] block mt-1">
                  {bangladesh?.seniorSalary?.formatted || 'BDT 80,000 - 150,000+'}
                </span>
                <span className="text-[11px] text-[#575653] block mt-1">
                  Lead engineer / administrator
                </span>
              </div>

            </div>
          </div>

          {/* Local Market Demand Summary */}
          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DF]">
            <p className="text-xs sm:text-sm text-[#141413] leading-relaxed">
              {language === 'bn' ? bangladesh.localDemandSummary_bn : bangladesh.localDemandSummary_en}
            </p>
          </div>

          {/* Hiring Sectors & CV Realities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Hiring Sectors */}
            <div className="p-5 rounded-xl border border-[#E5E4DF] bg-[#FFFFFF]">
              <div className="flex items-center gap-2 text-[#C84B31] font-bold text-xs uppercase tracking-wider mb-3">
                <Building2 className="w-4 h-4 stroke-[2]" />
                <span>{t.market.hiringIndustries}</span>
              </div>
              <ul className="space-y-2">
                {(Array.isArray(bangladesh?.hiringSectors) ? bangladesh.hiringSectors : []).map((sector, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#141413] leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332] shrink-0 mt-0.5 stroke-[2]" />
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CV Reality */}
            <div className="p-5 rounded-xl border border-[#E5E4DF] bg-[#FFFFFF]">
              <div className="flex items-center gap-2 text-[#1B4332] font-bold text-xs uppercase tracking-wider mb-3">
                <FileText className="w-4 h-4 stroke-[2]" />
                <span>{t.market.cvReality}</span>
              </div>
              <ul className="space-y-2">
                {(Array.isArray(bangladesh?.cvExpectations) ? bangladesh.cvExpectations : []).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#141413] leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C84B31] shrink-0 mt-0.5 stroke-[2]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      )}

      {/* Tab 2: Target Overseas Countries */}
      {activeTab === 'target' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Country Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {(Array.isArray(targetCountries) ? targetCountries : []).map((c, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCountryIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCountryIndex === idx
                    ? 'bg-[#141413] text-white shadow-xs'
                    : 'bg-[#F7F6F2] border border-[#E5E4DF] text-[#575653] hover:text-[#141413]'
                }`}
              >
                {language === 'bn' ? c?.countryName_bn : c?.countryName_en}
              </button>
            ))}
          </div>

          {/* Active Target Country Card */}
          {Array.isArray(targetCountries) && targetCountries[selectedCountryIndex] && (
            <div className="p-5 rounded-xl border border-[#E5E4DF] bg-[#FAF9F5] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#575653]">
                    {targetCountries[selectedCountryIndex].region}
                  </span>
                  <h3 className="text-lg font-bold text-[#141413]">
                    {language === 'bn'
                      ? targetCountries[selectedCountryIndex].countryName_bn
                      : targetCountries[selectedCountryIndex].countryName_en}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#575653]">{t.market.demandLevel}:</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#1B4332]/10 text-[#1B4332]">
                    {language === 'bn'
                      ? targetCountries[selectedCountryIndex].demandLevel_bn
                      : targetCountries[selectedCountryIndex].demandLevel}
                  </span>
                </div>
              </div>

              {/* Salary & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 bg-[#FFFFFF] border border-[#E5E4DF] rounded-lg">
                  <span className="text-[11px] font-bold text-[#575653] uppercase block mb-1">
                    {t.market.averageSalary}
                  </span>
                  <span className="font-mono-numbers text-base font-extrabold text-[#C84B31]">
                    {targetCountries[selectedCountryIndex].averageSalaryUsdOrLocal}
                  </span>
                </div>

                <div className="p-3.5 bg-[#FFFFFF] border border-[#E5E4DF] rounded-lg">
                  <span className="text-[11px] font-bold text-[#575653] uppercase block mb-1">
                    {t.market.requiredExp}
                  </span>
                  <span className="font-bold text-sm text-[#141413]">
                    {targetCountries[selectedCountryIndex].requiredExperienceYears}
                  </span>
                </div>
              </div>

              {/* Visa Reality */}
              <div className="pt-2">
                <span className="text-xs font-bold text-[#141413] uppercase tracking-wider block mb-1">
                  {t.market.visaReality}:
                </span>
                <p className="text-xs sm:text-sm text-[#575653] leading-relaxed">
                  {language === 'bn'
                    ? targetCountries[selectedCountryIndex].visaReality_bn
                    : targetCountries[selectedCountryIndex].visaReality_en}
                </p>
              </div>

            </div>
          )}

        </div>
      )}

      {/* Tab 3: Global Remote & Freelance */}
      {activeTab === 'remote' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Entry Barrier */}
            <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#E5E4DF]">
              <span className="text-[11px] font-bold text-[#575653] uppercase block">
                {t.market.remoteBarrier}
              </span>
              <span className="text-lg font-extrabold text-[#141413] block mt-1">
                {language === 'bn' ? remote.entryBarrier_bn : remote.entryBarrier}
              </span>
            </div>

            {/* Monthly USD Earning */}
            <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#E5E4DF]">
              <span className="text-[11px] font-bold text-[#575653] uppercase block">
                {t.market.monthlyEarning}
              </span>
              <span className="font-mono-numbers text-lg font-extrabold text-[#1B4332] block mt-1">
                {remote.monthlyRangeUsd}
              </span>
            </div>

            {/* Competition Level */}
            <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#E5E4DF]">
              <span className="text-[11px] font-bold text-[#575653] uppercase block">
                {t.market.competition}
              </span>
              <span className="text-xs font-bold text-[#575653] block mt-1 leading-snug">
                {language === 'bn' ? remote.competitionLevel_bn : remote.competitionLevel}
              </span>
            </div>

          </div>

          {/* English Requirement Pill */}
          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DF] flex items-start gap-3">
            <Globe2 className="w-5 h-5 stroke-[2] text-[#C84B31] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-[#141413] uppercase tracking-wider block">
                {t.market.englishDemand}:
              </span>
              <p className="text-xs sm:text-sm text-[#575653] mt-0.5 leading-relaxed">
                {language === 'bn' ? remote.englishRequirement_bn : remote.englishRequirement}
              </p>
            </div>
          </div>

          {/* Remote Realities */}
          <div className="p-5 rounded-xl border border-[#E5E4DF] bg-[#FFFFFF]">
            <span className="text-xs font-bold text-[#141413] uppercase tracking-wider block mb-3">
              {t.market.remoteRealities}:
            </span>
            <ul className="space-y-2">
              {(Array.isArray(language === 'bn' ? remote?.realities_bn : remote?.realities_en) ? (language === 'bn' ? remote?.realities_bn : remote?.realities_en) : []).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#141413] leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332] shrink-0 mt-0.5 stroke-[2]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}

    </div>
  );
};
