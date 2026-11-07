import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useStudent } from '../context/StudentContext.js';
import type { CareerTrack } from '../../../shared/types.js';
import { X, BookOpen, Check, ArrowRight, Laptop, Monitor, Smartphone } from 'lucide-react';

interface TrackCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrackCatalogModal: React.FC<TrackCatalogModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const { allTracks, primaryTrack, switchActiveTrack } = useStudent();

  if (!isOpen) return null;

  const handleSelectTrack = async (slug: string) => {
    await switchActiveTrack(slug);
    onClose();
  };

  const renderPcIcon = (req: string) => {
    if (req === 'none') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1B4332] bg-[#1B4332]/10 px-2 py-0.5 rounded">
          <Smartphone className="w-3 h-3 stroke-[2]" />
          <span>Mobile Friendly</span>
        </span>
      );
    }
    if (req === 'low') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#575653] bg-[#F7F6F2] border border-[#E5E4DF] px-2 py-0.5 rounded">
          <Monitor className="w-3 h-3 stroke-[2]" />
          <span>Low-Spec PC (4GB)</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C84B31] bg-[#C84B31]/10 px-2 py-0.5 rounded">
        <Laptop className="w-3 h-3 stroke-[2]" />
        <span>Standard PC (8GB)</span>
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl w-full max-w-4xl p-6 sm:p-8 shadow-2xl relative my-8 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F7F6F2] hover:bg-[#E5E4DF] flex items-center justify-center text-[#575653] transition-colors"
        >
          <X className="w-4 h-4 stroke-[2]" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2.5 text-[#C84B31] mb-1">
          <BookOpen className="w-5 h-5 stroke-[2]" />
          <h3 className="font-extrabold text-lg sm:text-2xl text-[#141413]">
            {t.catalog.title}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#575653] mb-6">
          {t.catalog.subtitle}
        </p>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pr-1">
          {allTracks.map((track) => {
            const isCurrent = primaryTrack?.slug === track.slug;
            return (
              <div
                key={track.slug}
                className={`p-5 rounded-xl border-2 transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#FAF9F5] border-[#C84B31] shadow-xs'
                    : 'bg-[#FFFFFF] border-[#E5E4DF] hover:border-[#D4D3CC]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono-numbers text-xs font-bold text-[#575653]">
                      #{track.id}
                    </span>
                    {renderPcIcon(track.minPcRequired)}
                  </div>

                  <h4 className="font-bold text-base text-[#141413] leading-snug">
                    {language === 'bn' ? track.title_bn : track.title_en}
                  </h4>
                  
                  <p className="text-xs text-[#575653] mt-2 line-clamp-3 leading-relaxed">
                    {language === 'bn' ? track.summary_bn : track.summary_en}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#E5E4DF] flex items-center justify-between text-xs">
                    <span className="text-[#575653]">Local Entry:</span>
                    <span className="font-mono-numbers font-bold text-[#141413]">
                      {track.marketData?.bangladesh?.entrySalary?.formatted || '15,000 - 25,000 BDT'}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  {isCurrent ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1B4332] bg-[#1B4332]/10 px-3 py-1.5 rounded-lg w-full justify-center">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      Active Matched Track
                    </span>
                  ) : (
                    <button
                      onClick={() => handleSelectTrack(track.slug)}
                      className="w-full py-2 px-3 rounded-lg border border-[#E5E4DF] hover:bg-[#F7F6F2] font-semibold text-xs text-[#141413] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>{t.catalog.viewRoadmap}</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
