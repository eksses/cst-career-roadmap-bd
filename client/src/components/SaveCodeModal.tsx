import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useStudent } from '../context/StudentContext.js';
import { X, KeyRound, Copy, Check, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

interface SaveCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SaveCodeModal: React.FC<SaveCodeModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const { saveCode, loadProfileByCode } = useStudent();
  const [inputCode, setInputCode] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (saveCode) {
      navigator.clipboard.writeText(saveCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleResume = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;

    setLoading(true);
    setError(null);

    const success = await loadProfileByCode(inputCode.trim());
    setLoading(false);

    if (success) {
      onClose();
    } else {
      setError(t.resumeModal.errorNotFound);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-[#FFFFFF] border border-[#E5E4DF] rounded-2xl w-full max-w-md p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F7F6F2] hover:bg-[#E5E4DF] flex items-center justify-center text-[#575653] transition-colors"
        >
          <X className="w-4 h-4 stroke-[2]" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 text-[#C84B31] mb-2">
          <KeyRound className="w-5 h-5 stroke-[2]" />
          <h3 className="font-bold text-base sm:text-lg text-[#141413]">
            {t.resumeModal.title}
          </h3>
        </div>
        <p className="text-xs text-[#575653] leading-relaxed mb-6">
          {t.resumeModal.subtitle}
        </p>

        {/* Active Save Code Section (If currently active) */}
        {saveCode && (
          <div className="mb-6 p-4 rounded-xl bg-[#F7F6F2] border border-[#E5E4DF]">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#575653] mb-1">
              Your Current Session Code:
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="font-mono-numbers text-xl font-extrabold text-[#141413] tracking-widest">
                {saveCode}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFFFFF] border border-[#E5E4DF] hover:border-[#C84B31] text-xs font-bold text-[#141413] rounded-lg transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[2.5] text-[#1B4332]" />
                    <span className="text-[#1B4332]">{t.dashboard.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 stroke-[2]" />
                    <span>{t.dashboard.copyCode}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Enter Code Form */}
        <form onSubmit={handleResume}>
          <label className="block text-xs font-bold text-[#141413] mb-1.5">
            {language === 'bn' ? 'আগের সেভ কোড লিখো:' : 'Enter 6-Character Save Code:'}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={inputCode}
              onChange={(e) => {
                setInputCode(e.target.value.toUpperCase());
                setError(null);
              }}
              maxLength={12}
              placeholder={t.resumeModal.codePlaceholder}
              className="flex-1 px-4 py-2.5 font-mono-numbers text-base font-bold bg-[#F7F6F2] border border-[#E5E4DF] rounded-xl focus:outline-none focus:border-[#C84B31] uppercase tracking-wider"
            />
            <button
              type="submit"
              disabled={loading || !inputCode.trim()}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs text-white flex items-center gap-1.5 transition-all ${
                loading || !inputCode.trim()
                  ? 'bg-[#D4D3CC] cursor-not-allowed'
                  : 'bg-[#C84B31] hover:bg-[#B33E26] cursor-pointer shadow-xs'
              }`}
            >
              {loading ? (
                <Loader2 className="w-4 h-4 stroke-[2] animate-spin" />
              ) : (
                <>
                  <span>{t.resumeModal.button}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="mt-3 flex items-center gap-1.5 text-xs text-red-600">
              <AlertCircle className="w-3.5 h-3.5 stroke-[2]" />
              <span>{error}</span>
            </div>
          )}
        </form>

      </div>
    </div>
  );
};
