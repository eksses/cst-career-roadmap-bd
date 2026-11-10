import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import type { CareerTrack, SuggestedTrackItem } from '../../../shared/types.js';
import { 
  ArrowRight, 
  CheckCircle2, 
  Laptop, 
  Map, 
  Search,
  Filter,
  Layers,
  Sparkles,
  Compass,
  Check
} from 'lucide-react';

interface SuggestedRoadmapsViewProps {
  suggestedTracks: SuggestedTrackItem[];
  allTracks: CareerTrack[];
  onSelectTrack: (trackSlug: string) => void;
  isSelecting: boolean;
}

export const SuggestedRoadmapsView: React.FC<SuggestedRoadmapsViewProps> = ({
  suggestedTracks,
  allTracks,
  onSelectTrack,
  isSelecting,
}) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isSkippedSurvey = !suggestedTracks || suggestedTracks.length === 0 || suggestedTracks[0]?.matchScore === 0;

  // Category classifier for all 24 tracks
  const categorizeTrack = (slug: string): string => {
    if (['frontend-fullstack-web', 'backend-systems-engineering', 'mobile-app-development', 'laravel-php-agency-dev', 'enterprise-java-fintech'].includes(slug)) {
      return 'web';
    }
    if (['linux-devops-admin', 'cloud-solutions-architecture'].includes(slug)) {
      return 'devops';
    }
    if (['cybersecurity-soc-analyst', 'ethical-hacking-bug-bounty'].includes(slug)) {
      return 'security';
    }
    if (['isp-mikrotik-networking', 'it-hardware-support', 'embedded-iot-robotics'].includes(slug)) {
      return 'networking';
    }
    if (['python-data-ai', 'ai-ml-engineer', 'data-engineering-big-data'].includes(slug)) {
      return 'data';
    }
    if (['ui-ux-design', 'graphic-design-motion', 'digital-marketing-ecommerce'].includes(slug)) {
      return 'design';
    }
    return 'specialized'; // game-development-unity, desktop-app-development, blockchain-web3-developer, qa-software-testing, bpo-tech-support-data, digital-literacy-foundation
  };

  const categories = [
    { key: 'all', label_en: 'All 24 Tracks', label_bn: 'সকল ২৪টি ট্র্যাক' },
    { key: 'web', label_en: 'Web & Software', label_bn: 'ওয়েব ও সফটওয়্যার' },
    { key: 'devops', label_en: 'DevOps & Cloud', label_bn: 'ডেভঅপ্স ও ক্লাউড' },
    { key: 'security', label_en: 'Cyber Security', label_bn: 'সাইবার সিকিউরিটি' },
    { key: 'networking', label_en: 'Networking & Hardware', label_bn: 'নেটওয়ার্ক ও হার্ডওয়্যার' },
    { key: 'data', label_en: 'AI & Data Systems', label_bn: 'এআই ও ডেটা সিস্টেমস' },
    { key: 'design', label_en: 'UI/UX & Design', label_bn: 'ডিজাইন ও মিডিয়া' },
    { key: 'specialized', label_en: 'Specialized (Game, Web3, POS, QA)', label_bn: 'স্পেশালাইজড (গেম, কিউএ, ব্লকচেইন)' }
  ];

  const filteredCatalogTracks = useMemo(() => {
    return allTracks.filter(track => {
      const matchesCat = selectedCategory === 'all' || categorizeTrack(track.slug) === selectedCategory;
      if (!matchesCat) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const titleEn = track.title_en.toLowerCase();
      const titleBn = track.title_bn.toLowerCase();
      const sumEn = track.summary_en.toLowerCase();
      const sumBn = track.summary_bn.toLowerCase();
      return titleEn.includes(q) || titleBn.includes(q) || sumEn.includes(q) || sumBn.includes(q) || track.slug.includes(q);
    });
  }, [allTracks, selectedCategory, searchQuery]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-8">
      
      {/* Dynamic Header */}
      <div className="text-center">
        {isSkippedSurvey ? (
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#141413] text-white mb-3">
              <Compass className="w-3.5 h-3.5 stroke-[2]" />
              <span>{language === 'bn' ? 'সরাসরি রোডম্যাপ নির্বাচন' : 'Direct Career Selection'}</span>
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight">
              {language === 'bn' ? 'তোমার পছন্দের রোডম্যাপ বেছে নাও' : 'Choose Your Career Roadmap'}
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-[#575653] max-w-lg mx-auto">
              {language === 'bn' 
                ? 'তুমি প্রশ্নগুলো এড়িয়ে গিয়েছ। নিচে থাকা ২৪টি ক্যারিয়ার ট্র্যাক থেকে তোমার পছন্দের পথটি সরাসরি নির্বাচন করো।' 
                : 'You skipped the questionnaire. Choose any of the 24 career roadmaps below to start your journey.'}
            </p>
          </div>
        ) : (
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C84B31]/10 text-[#C84B31] mb-3">
              <Sparkles className="w-3.5 h-3.5 stroke-[2]" />
              <span>{language === 'bn' ? 'তোমার প্রোফাইলের সাথে মিল' : 'Calibrated Recommendation'}</span>
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight">
              {language === 'bn' ? 'তোমার জন্য প্রস্তাবিত রোডম্যাপ' : 'Recommended Roadmaps for You'}
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-[#575653] max-w-lg mx-auto">
              {language === 'bn'
                ? 'তোমার ডিভাইস ও নির্বাচিত পছন্দের ভিত্তিতে রোডম্যাপ প্রস্তুত করা হয়েছে।'
                : 'Matched directly to your device and chosen engineering specialty.'}
            </p>
          </div>
        )}
      </div>

      {/* Recommended Match Cards (Only shown when user answered) */}
      {!isSkippedSurvey && suggestedTracks && suggestedTracks.length > 0 && (
        <div className="space-y-4">
          {suggestedTracks.slice(0, 2).map((item, idx) => {
            const isTop = idx === 0;
            return (
              <div
                key={item.track.slug}
                className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                  isTop 
                    ? 'bg-[#FFFFFF] border-[#C84B31] shadow-md ring-2 ring-[#C84B31]/10' 
                    : 'bg-[#FFFFFF] border-[#E5E4DF] shadow-xs'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      isTop ? 'bg-[#C84B31] text-white' : 'bg-[#1B4332]/10 text-[#1B4332]'
                    }`}>
                      {language === 'bn' ? item.fitTag_bn : item.fitTag_en}
                    </span>
                    <span className="text-xs font-mono-numbers font-bold text-[#575653]">
                      {item.matchScore}% {language === 'bn' ? 'মিল' : 'Match'}
                    </span>
                  </div>

                  <button
                    disabled={isSelecting}
                    onClick={() => onSelectTrack(item.track.slug)}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isTop
                        ? 'bg-[#C84B31] hover:bg-[#B33E26] text-white shadow-xs'
                        : 'bg-[#141413] hover:bg-[#2A2927] text-white'
                    }`}
                  >
                    <span>{language === 'bn' ? 'এই রোডম্যাপটি শুরু করো' : 'Start This Roadmap'}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2]" />
                  </button>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-[#141413]">
                  {language === 'bn' ? item.targetRole_bn : item.targetRole_en}
                </h2>
                
                <p className="mt-1 text-xs text-[#575653] leading-relaxed">
                  {language === 'bn' ? item.track.summary_bn : item.track.summary_en}
                </p>

                {/* Target Tech Stack */}
                {item.targetStack && item.targetStack.length > 0 && (
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    {item.targetStack.map((tech: any, sIdx: number) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FAF9F5] border border-[#E5E4DF] text-[#141413]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Match Reason Row */}
                <div className="mt-4 pt-3 border-t border-[#E5E4DF] grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2 bg-[#FAF9F5] p-2.5 rounded-xl border border-[#E5E4DF]/60">
                    <CheckCircle2 className="w-4 h-4 stroke-[2] text-[#1B4332] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#141413] block">
                        {language === 'bn' ? 'কেন এটি উপযুক্ত:' : 'Match Rationale:'}
                      </span>
                      <span className="text-[#575653]">
                        {language === 'bn' ? item.matchReason_bn : item.matchReason_en}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-[#FAF9F5] p-2.5 rounded-xl border border-[#E5E4DF]/60">
                    <Laptop className="w-4 h-4 stroke-[2] text-[#C84B31] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#141413] block">
                        {language === 'bn' ? 'ডিভাইস গাইডলাইন:' : 'Device Strategy:'}
                      </span>
                      <span className="text-[#575653]">
                        {language === 'bn' ? item.hardwareTip_bn : item.hardwareTip_en}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Catalog Search & Category Filter Section */}
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl p-5 shadow-xs space-y-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E5E4DF]">
          <div>
            <h3 className="text-base font-bold text-[#141413] flex items-center gap-2">
              <Map className="w-4 h-4 stroke-[2] text-[#1B4332]" />
              <span>{language === 'bn' ? 'সকল ২৪টি কারিগরি রোডম্যাপ' : 'All 24 Career Roadmaps'}</span>
            </h3>
            <p className="text-xs text-[#575653] mt-0.5">
              {language === 'bn' 
                ? 'যেকোনো রোডম্যাপ সরাসরি নির্বাচন করতে নিচে ক্লিক করো।' 
                : 'Select any roadmap to open practical milestones and certifications.'}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#575653] absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'bn' ? 'ট্র্যাক বা টেকনোলজি খুঁজুন...' : 'Search tracks or tools...'}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#FAF9F5] border border-[#E5E4DF] rounded-lg focus:outline-none focus:border-[#C84B31]"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-[#141413] text-white shadow-2xs'
                  : 'bg-[#FAF9F5] border border-[#E5E4DF] text-[#575653] hover:text-[#141413]'
              }`}
            >
              {language === 'bn' ? cat.label_bn : cat.label_en}
            </button>
          ))}
        </div>

        {/* 24 Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {filteredCatalogTracks.map((track) => (
            <div
              key={track.slug}
              className="p-4 rounded-xl border border-[#E5E4DF] hover:border-[#C84B31]/50 bg-[#FAF9F5] flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C84B31]">
                    {track.minPcRequired}
                  </span>
                  <span className="text-[10px] text-[#575653] font-mono-numbers">
                    {track.roadmapPhases?.length || 4} {language === 'bn' ? 'পর্ব' : 'phases'}
                  </span>
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#141413]">
                  {language === 'bn' ? track.title_bn : track.title_en}
                </h4>
                <p className="mt-1 text-[11px] text-[#575653] line-clamp-2 leading-relaxed">
                  {language === 'bn' ? track.summary_bn : track.summary_en}
                </p>
              </div>

              <button
                disabled={isSelecting}
                onClick={() => onSelectTrack(track.slug)}
                className="mt-3 w-full py-2 px-3 bg-[#FFFFFF] hover:bg-[#141413] hover:text-white border border-[#E5E4DF] rounded-lg text-xs font-bold text-[#141413] flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs"
              >
                <span>{language === 'bn' ? 'এই রোডম্যাপটি বেছে নাও' : 'Select This Roadmap'}</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
              </button>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
