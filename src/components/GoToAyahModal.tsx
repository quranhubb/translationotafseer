import React, { useState } from 'react';
import { Send, X } from 'lucide-react';
import { SURAHS_LIST } from '../data/surahs';

interface GoToAyahModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJump: (surahNumber: number, ayahNumber: number) => void;
}

export const GoToAyahModal: React.FC<GoToAyahModalProps> = ({ isOpen, onClose, onJump }) => {
  const [selectedSurah, setSelectedSurah] = useState<number>(1);
  const [ayahNumber, setAyahNumber] = useState<number>(1);

  if (!isOpen) return null;

  const currentSurahMeta = SURAHS_LIST.find((s) => s.number === selectedSurah) || SURAHS_LIST[0];
  const maxAyahs = selectedSurah === 1 ? 7 : 141; // in Para 1

  const handleGo = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanAyah = Math.min(Math.max(1, ayahNumber), maxAyahs);
    onJump(selectedSurah, cleanAyah);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FDFCF8] w-full max-w-sm rounded-2xl p-5 shadow-2xl border border-[#E5E0D0] animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E0D0] mb-4">
          <div className="flex items-center gap-2 text-[#7D6B4B]">
            <Send className="w-5 h-5" />
            <h3 className="font-bold text-[#2D2D2D] text-base font-serif">Go to Ayah (آیت کا انتخاب)</h3>
          </div>
          <button onClick={onClose} className="text-[#9A8D70] hover:text-[#2D2D2D] p-1 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleGo} className="space-y-4 font-sans">
          <div>
            <label className="block text-xs font-bold text-[#4A4A4A] mb-1.5">
              Select Surah (سورت)
            </label>
            <select
              value={selectedSurah}
              onChange={(e) => {
                const s = Number(e.target.value);
                setSelectedSurah(s);
                setAyahNumber(1);
              }}
              className="w-full px-3 py-2.5 bg-white border border-[#E5E0D0] rounded-xl text-sm font-medium text-[#2D2D2D] focus:ring-2 focus:ring-[#7D6B4B] focus:outline-none"
            >
              <option value={1}>1. Al-Faatiha (الفاتحة) - Verses 1 to 7</option>
              <option value={2}>2. Al-Baqara (البقرة) - Para 1: Verses 1 to 141</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold text-[#4A4A4A]">
                Ayah Number (1 to {maxAyahs})
              </label>
              <span className="text-xs text-[#7D6B4B] font-bold">Selected: {ayahNumber}</span>
            </div>
            <input
              type="number"
              min={1}
              max={maxAyahs}
              value={ayahNumber}
              onChange={(e) => setAyahNumber(Number(e.target.value))}
              className="w-full px-3.5 py-2.5 bg-white border border-[#E5E0D0] rounded-xl text-sm font-bold text-[#2D2D2D] focus:ring-2 focus:ring-[#7D6B4B] focus:outline-none"
            />
          </div>

          {/* Quick presets */}
          <div>
            <span className="text-[11px] text-[#9A8D70] block mb-1.5">Quick Presets:</span>
            <div className="flex flex-wrap gap-1.5">
              {[1, 5, 10, 21, 30, 40, 83, 127, 138, 141].filter(n => n <= maxAyahs).map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setAyahNumber(num)}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition-colors cursor-pointer ${
                    ayahNumber === num
                      ? 'bg-[#7D6B4B] text-white border-[#7D6B4B]'
                      : 'bg-white text-[#4A4A4A] border-[#E5E0D0] hover:border-[#7D6B4B]/40 hover:bg-[#F4F1E6]'
                  }`}
                >
                  Ayah {num}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-2 border-t border-[#E5E0D0]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#5A5A5A] hover:text-[#2D2D2D] cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#7D6B4B] hover:bg-[#63553C] text-white text-xs font-bold rounded-xl shadow-2xs transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Go to Ayah</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
