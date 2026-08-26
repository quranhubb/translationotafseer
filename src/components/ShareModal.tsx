import React, { useState } from 'react';
import { Share2, X, Copy, Check, MessageCircle, Send } from 'lucide-react';
import { Ayah } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  ayah?: Ayah | null;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, ayah }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareText = ayah
    ? `📖 Maarif ul Quran - ${ayah.surahNameEnglish} (Verse ${ayah.ayahNumber})\n\n${ayah.arabic}\n\nاردو ترجمہ: ${ayah.translationUr}\n\nEnglish: ${ayah.translationEn}\n\nRead full Tafseer with word-by-word meaning on Maarif ul Quran App.`
    : `📖 Maarif ul Quran (معارف القرآن) - Para 1 (Alif Lam Meem)\n\nExperience the authentic Maarif ul Quran Tafseer by Mufti Muhammad Shafi with word-by-word translation, audio recitation, bookmarking, and custom collections.\n\nOpen and read now!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-3">
      <div className="bg-[#FDFCF8] w-full max-w-sm rounded-2xl shadow-2xl border border-[#E5E0D0] p-5 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E0D0] mb-3">
          <div className="flex items-center gap-2 text-[#7D6B4B]">
            <Share2 className="w-5 h-5" />
            <h3 className="font-bold text-[#2D2D2D] text-base font-serif">
              {ayah ? 'Share Ayah & Tafseer' : 'Share Maarif ul Quran'}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#9A8D70] hover:text-[#2D2D2D] cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3 bg-[#F4F1E6]/70 rounded-xl border border-[#E5E0D0] text-xs text-[#4A4A4A] max-h-48 overflow-y-auto whitespace-pre-wrap font-sans">
          {shareText}
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4 font-sans">
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-1.5 py-2.5 bg-white border border-[#E5E0D0] hover:bg-[#F4F1E6] text-[#2D2D2D] text-xs font-bold rounded-xl transition-all cursor-pointer shadow-2xs"
          >
            {copied ? <Check className="w-4 h-4 text-[#7D6B4B]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Copy Text'}</span>
          </button>

          <button
            onClick={handleWhatsAppShare}
            className="flex items-center justify-center gap-1.5 py-2.5 bg-[#7D6B4B] hover:bg-[#63553C] text-white text-xs font-bold rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
