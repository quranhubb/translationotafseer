import React from 'react';
import { Monitor, X, ExternalLink, Globe, BookOpen, Heart } from 'lucide-react';

interface WebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WebsiteModal: React.FC<WebsiteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const resources = [
    {
      title: 'Ma\'ariful Qur\'an Digital Library',
      url: 'https://quran.com',
      desc: 'Authentic online Quranic text, word-by-word analysis, and multiple classical translations.',
    },
    {
      title: 'Darul Uloom Karachi Official Publications',
      url: 'https://darululoomkarachi.edu.pk',
      desc: 'Official website of the Islamic seminary founded by Mufti Muhammad Shafi Usmani (r.a.).',
    },
    {
      title: 'International Learn Quran Academy',
      url: 'https://internationallearnquranacademy.com',
      desc: 'Online Quran learning platform offering Tajweed, Hifz, and Tafseer classes worldwide.',
    },
    {
      title: 'EveryAyah Recitation Audio Archive',
      url: 'https://everyayah.com',
      desc: 'High-quality verse-by-verse audio recitations by world-renowned Qaris.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-3">
      <div className="bg-[#FDFCF8] w-full max-w-lg rounded-2xl shadow-2xl border border-[#E5E0D0] flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-[#E5E0D0] flex items-center justify-between bg-[#F4F1E6]">
          <div className="flex items-center gap-2 text-[#7D6B4B]">
            <Monitor className="w-5 h-5" />
            <h3 className="font-bold text-[#2D2D2D] text-base font-serif">Quranic Resources & Websites</h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#9A8D70] hover:text-[#2D2D2D] cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-3 font-sans">
          <p className="text-xs text-[#5A5A5A]">
            Explore authentic reference platforms and educational portals dedicated to Quranic sciences:
          </p>

          <div className="space-y-2.5">
            {resources.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#F4F1E6]/70 rounded-xl border border-[#E5E0D0] hover:border-[#7D6B4B]/40 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#7D6B4B] shrink-0" />
                    <h4 className="font-bold text-[#2D2D2D] text-sm font-serif">{item.title}</h4>
                  </div>
                  <span className="text-[11px] bg-[#7D6B4B]/15 text-[#7D6B4B] font-bold px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
                <p className="text-xs text-[#5A5A5A] mt-1 pl-6 leading-relaxed">{item.desc}</p>
                <div className="mt-2 pl-6">
                  <span className="text-[11px] text-[#7D6B4B] font-semibold break-all">
                    {item.url}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-[#F4F1E6] rounded-xl border border-[#E5E0D0] text-center">
            <p className="font-sans text-xs text-[#7D6B4B] font-semibold">
              Sadaqah Jariyah: Share the timeless wisdom of the Holy Quran and Tafseer with family and friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
