import React, { useState } from 'react';
import { UserCheck, X, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { AUTHOR_DATA } from '../data/author';

interface AuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthorModal: React.FC<AuthorModalProps> = ({ isOpen, onClose }) => {
  const [activeLang, setActiveLang] = useState<'ur' | 'en'>('ur');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-3">
      <div className="bg-[#FDFCF8] w-full max-w-lg rounded-2xl shadow-2xl border border-[#E5E0D0] flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-[#E5E0D0] flex items-center justify-between bg-[#F4F1E6]">
          <div className="flex items-center gap-2 text-[#7D6B4B]">
            <UserCheck className="w-5 h-5" />
            <h3 className="font-bold text-[#2D2D2D] text-base font-serif">About the Author & Tafseer</h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#9A8D70] hover:text-[#2D2D2D] cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Language Tabs */}
        <div className="flex border-b border-[#E5E0D0] bg-[#F4F1E6]/60 px-4 pt-2 font-sans">
          <button
            onClick={() => setActiveLang('ur')}
            className={`flex-1 py-2 text-xs font-bold font-urdu transition-colors border-b-2 cursor-pointer ${
              activeLang === 'ur'
                ? 'border-[#7D6B4B] text-[#7D6B4B] bg-[#FDFCF8] rounded-t-lg shadow-2xs'
                : 'border-transparent text-[#9A8D70] hover:text-[#2D2D2D]'
            }`}
          >
            اردو تفصیل (مصنف و تاریخِ تفسیر)
          </button>
          <button
            onClick={() => setActiveLang('en')}
            className={`flex-1 py-2 text-xs font-bold transition-colors border-b-2 cursor-pointer ${
              activeLang === 'en'
                ? 'border-[#7D6B4B] text-[#7D6B4B] bg-[#FDFCF8] rounded-t-lg shadow-2xs'
                : 'border-transparent text-[#9A8D70] hover:text-[#2D2D2D]'
            }`}
          >
            English Profile & Background
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {activeLang === 'ur' ? (
            <div className="space-y-4 font-urdu text-right dir-rtl">
              <div className="bg-[#F4F1E6] p-4 rounded-xl border border-[#E5E0D0]">
                <h4 className="text-lg font-bold text-[#2D2D2D]">{AUTHOR_DATA.nameUrdu}</h4>
                <p className="text-xs text-[#7D6B4B] font-semibold mt-0.5">{AUTHOR_DATA.titleUrdu}</p>
                <span className="inline-block mt-2 text-[11px] bg-[#7D6B4B] text-white px-2 py-0.5 rounded font-sans">
                  {AUTHOR_DATA.lifespan}
                </span>
              </div>

              <div>
                <h5 className="font-bold text-sm text-[#2D2D2D] border-b border-[#E5E0D0] pb-1 mb-2">تعارف و سوانح:</h5>
                <p className="text-[14px] text-[#4A4A4A] leading-[2.3]">{AUTHOR_DATA.biographyUrdu}</p>
              </div>

              <div>
                <h5 className="font-bold text-sm text-[#2D2D2D] border-b border-[#E5E0D0] pb-1 mb-2">
                  تفسیر معارف القرآن کا پس منظر:
                </h5>
                <p className="text-[14px] text-[#4A4A4A] leading-[2.3]">
                  {AUTHOR_DATA.tafseerBackgroundUrdu}
                </p>
              </div>

              <div>
                <h5 className="font-bold text-sm text-[#2D2D2D] border-b border-[#E5E0D0] pb-1 mb-2">
                  تفسیر کی نمایاں خصوصیات:
                </h5>
                <ul className="space-y-2 text-[13px] text-[#2D2D2D]">
                  {AUTHOR_DATA.featuresUrdu.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7D6B4B] mt-1 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-left font-sans">
              <div className="bg-[#F4F1E6] p-4 rounded-xl border border-[#E5E0D0]">
                <h4 className="text-base font-bold text-[#2D2D2D] font-serif">{AUTHOR_DATA.nameEnglish}</h4>
                <p className="text-xs text-[#7D6B4B] font-medium mt-0.5">{AUTHOR_DATA.titleEnglish}</p>
                <span className="inline-block mt-2 text-[11px] bg-[#7D6B4B] text-white px-2 py-0.5 rounded font-medium">
                  {AUTHOR_DATA.lifespan}
                </span>
              </div>

              <div>
                <h5 className="font-bold text-xs uppercase tracking-widest text-[#7D6B4B] mb-1.5 font-sans">
                  Biographical Profile
                </h5>
                <p className="text-xs text-[#4A4A4A] leading-relaxed">{AUTHOR_DATA.biographyEnglish}</p>
              </div>

              <div>
                <h5 className="font-bold text-xs uppercase tracking-widest text-[#7D6B4B] mb-1.5 font-sans">
                  Origins of Ma'ariful Qur'an
                </h5>
                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  {AUTHOR_DATA.tafseerBackgroundEnglish}
                </p>
              </div>

              <div>
                <h5 className="font-bold text-xs uppercase tracking-widest text-[#7D6B4B] mb-2 font-sans">
                  Key Distinctive Features
                </h5>
                <ul className="space-y-1.5 text-xs text-[#2D2D2D]">
                  {AUTHOR_DATA.featuresEnglish.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7D6B4B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
