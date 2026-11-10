import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import type { CareerTrack } from '../../../shared/types.js';
import { 
  ArrowLeft, 
  ArrowRight, 
  Map, 
  BookOpen, 
  Award,
  Code2,
  Server,
  Network,
  Palette,
  CheckCircle2,
  Briefcase,
  Globe,
  Compass,
  Cpu,
  Smartphone,
  ShieldCheck,
  Layers,
  Database
} from 'lucide-react';

interface DirectTrackSelectViewProps {
  tracks: CareerTrack[];
  onSelectTrack: (trackSlug: string) => void;
  onBack: () => void;
  isSelecting: boolean;
}

export const DirectTrackSelectView: React.FC<DirectTrackSelectViewProps> = ({
  tracks,
  onSelectTrack,
  onBack,
  isSelecting,
}) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label_en: 'All Roadmaps (16)', label_bn: 'সব রোডম্যাপ (১৬টি)' },
    { key: 'software', label_en: 'Software & Apps', label_bn: 'সফটওয়্যার ও অ্যাপস' },
    { key: 'cloud_sec', label_en: 'Cloud, Systems & Security', label_bn: 'ক্লাউড, সার্ভার ও সিকিউরিটি' },
    { key: 'net_hardware', label_en: 'Networking & IoT Hardware', label_bn: 'নেটওয়ার্কিং ও আইওটি' },
    { key: 'data_design', label_en: 'Data, AI & Design', label_bn: 'ডেটা ও ডিজাইন' },
    { key: 'foundation', label_en: 'Foundations', label_bn: 'ফাউন্ডেশন' },
  ];

  const getTrackCategory = (slug: string): string => {
    switch (slug) {
      case 'frontend-fullstack-web':
      case 'backend-systems-engineering':
      case 'mobile-app-development':
      case 'qa-software-testing':
        return 'software';
      case 'linux-devops-admin':
      case 'cloud-solutions-architecture':
      case 'cybersecurity-soc-analyst':
        return 'cloud_sec';
      case 'isp-mikrotik-networking':
      case 'embedded-iot-robotics':
      case 'it-hardware-support':
        return 'net_hardware';
      case 'python-data-ai':
      case 'ui-ux-design':
      case 'graphic-design-motion':
      case 'digital-marketing-ecommerce':
        return 'data_design';
      case 'digital-literacy-foundation':
      case 'bpo-tech-support-data':
        return 'foundation';
      default:
        return 'software';
    }
  };

  const getTrackIcon = (slug: string) => {
    switch (slug) {
      case 'frontend-fullstack-web': return <Code2 className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'backend-systems-engineering': return <Database className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      case 'mobile-app-development': return <Smartphone className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'linux-devops-admin': return <Server className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      case 'cloud-solutions-architecture': return <Layers className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'cybersecurity-soc-analyst': return <ShieldCheck className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      case 'python-data-ai': return <Cpu className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'isp-mikrotik-networking': return <Network className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      case 'embedded-iot-robotics': return <Cpu className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'ui-ux-design': return <Palette className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      case 'qa-software-testing': return <CheckCircle2 className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'it-hardware-support': return <Briefcase className="w-5 h-5 stroke-[1.75] text-[#575653]" />;
      case 'graphic-design-motion': return <Palette className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
      case 'digital-marketing-ecommerce': return <Globe className="w-5 h-5 stroke-[1.75] text-[#1B4332]" />;
      default: return <Compass className="w-5 h-5 stroke-[1.75] text-[#C84B31]" />;
    }
  };

  const filteredTracks = tracks.filter(t => {
    if (selectedCategory === 'all') return true;
    return getTrackCategory(t.slug) === selectedCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#575653] hover:text-[#141413] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2]" />
          <span>{t.catalog.backToHome}</span>
        </button>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#1B4332]/10 text-[#1B4332] mb-3">
          <Map className="w-3.5 h-3.5 stroke-[2]" />
          <span>{language === 'bn' ? 'সরাসরি রোডম্যাপ নির্বাচন' : 'Direct Roadmap Selection'}</span>
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight">
          {language === 'bn' ? 'সকল ১৬টি কারিগরি ক্যারিয়ার রোডম্যাপ' : 'All 16 CST Career Roadmaps'}
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-[#575653] max-w-xl mx-auto leading-relaxed">
          {t.catalog.subtitle}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === cat.key
                ? 'bg-[#141413] text-white shadow-xs'
                : 'bg-[#FFFFFF] border border-[#E5E4DF] text-[#575653] hover:text-[#141413]'
            }`}
          >
            {language === 'bn' ? cat.label_bn : cat.label_en}
          </button>
        ))}
      </div>

      {/* Grid of Filtered Tracks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTracks.map((track) => (
          <div
            key={track.slug}
            className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E4DF] hover:border-[#C84B31]/40 shadow-xs flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F7F6F2] flex items-center justify-center shrink-0">
                  {getTrackIcon(track.slug)}
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#F7F6F2] border border-[#E5E4DF] text-[#575653]">
                  {track.roadmapPhases?.length || 4} {language === 'bn' ? 'পর্ব' : 'Phases'}
                </span>
              </div>

              <h2 className="text-base font-bold text-[#141413] leading-snug line-clamp-2">
                {language === 'bn' ? track.title_bn : track.title_en}
              </h2>

              <p className="mt-2 text-xs text-[#575653] leading-relaxed line-clamp-3">
                {language === 'bn' ? track.summary_bn : track.summary_en}
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#E5E4DF] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-xs text-[#575653]">
                <span className="inline-flex items-center gap-1 font-semibold">
                  <Award className="w-3.5 h-3.5 stroke-[2] text-[#1B4332]" />
                  {track.freeCerts?.length || 3}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold">
                  <BookOpen className="w-3.5 h-3.5 stroke-[2] text-[#C84B31]" />
                  {track.mustHaveSkills?.length || 4}
                </span>
              </div>

              <button
                disabled={isSelecting}
                onClick={() => onSelectTrack(track.slug)}
                className="px-3.5 py-2 bg-[#C84B31] hover:bg-[#B33E26] active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>{t.catalog.selectCta}</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
