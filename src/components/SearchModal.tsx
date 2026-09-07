import React, { useState } from 'react';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { ALL_AVAILABLE_AYAHS } from '../data/quranProvider';
import { Ayah } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAyah: (surahNumber: number, ayahNumber: number) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectAyah }) => {
  const [query, setQuery] = useState('');
  const [searchTarget, setSearchTarget] = useState<'all' | 'arabic' | 'urdu' | 'english' | 'tafseer'>('all');

  if (!isOpen) return null;

  const results: Ayah[] = query.trim()
    ? ALL_AVAILABLE_AYAHS.filter((ayah) => {
        const q = query.toLowerCase().trim();
        if (searchTarget === 'arabic') return ayah.arabic.includes(q);
        if (searchTarget === 'urdu') return ayah.translationUr.includes(q);
        if (searchTarget === 'english') return ayah.translationEn.toLowerCase().includes(q);
        if (searchTarget === 'tafseer')
          return (
            ayah.tafseerUr.includes(q) || ayah.tafseerEn.toLowerCase().includes(q)
          );

        // 'all' search
        return (
          ayah.arabic.includes(q) ||
          ayah.translationUr.includes(q) ||
          ayah.translationEn.toLowerCase().includes(q) ||
          ayah.tafseerUr.includes(q) ||
          ayah.tafseerEn.toLowerCase().includes(q) ||
          ayah.surahNameEnglish.toLowerCase().includes(q) ||
          `ayah ${ayah.ayahNumber}`.includes(q)
        );
      })
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-3">
      <div className="bg-[#FDFCF8] w-full max-w-lg rounded-2xl shadow-2xl border border-[#E5E0D0] flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
        {/* Search Header */}
        <div className="p-4 border-b border-[#E5E0D0] bg-[#F4F1E6]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-[#2D2D2D] text-base flex items-center gap-1.5 font-serif">
              <Search className="w-5 h-5 text-[#7D6B4B]" />
              <span>Search Para 1</span>
            </h3>
            <button onClick={onClose} className="p-1 text-[#9A8D70] hover:text-[#2D2D2D] cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <Search className="w-4.5 h-4.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9A8D70]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search words, English, Urdu translation, or Tafseer..."
              className="w-full pl-10 pr-9 py-2.5 bg-white rounded-xl border border-[#E5E0D0] text-sm text-[#2D2D2D] placeholder-[#9A8D70] focus:ring-2 focus:ring-[#7D6B4B] focus:outline-none shadow-2xs font-sans"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A8D70] hover:text-[#2D2D2D] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Scope Filters */}
          <div className="flex gap-1.5 mt-2.5 overflow-x-auto scrollbar-none py-0.5 font-sans">
            {[
              { id: 'all', label: 'All Fields' },
              { id: 'urdu', label: 'Urdu Translation' },
              { id: 'english', label: 'English Translation' },
              { id: 'arabic', label: 'Arabic Text' },
              { id: 'tafseer', label: 'Tafseer' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSearchTarget(f.id as any)}
                className={`text-[11px] px-2.5 py-1 rounded-full font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  searchTarget === f.id
                    ? 'bg-[#7D6B4B] text-white'
                    : 'bg-white border border-[#E5E0D0] text-[#5A5A5A] hover:bg-[#F4F1E6]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {query.trim() ? (
            results.length > 0 ? (
              results.map((ayah) => (
                <div
                  key={ayah.id}
                  onClick={() => {
                    onSelectAyah(ayah.surahNumber, ayah.ayahNumber);
                    onClose();
                  }}
                  className="bg-[#FDFCF8] p-3.5 rounded-xl border border-[#E5E0D0] shadow-2xs hover:bg-[#F4F1E6] hover:border-[#7D6B4B]/40 cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between text-xs text-[#7D6B4B] font-bold mb-1.5 font-sans">
                    <span>
                      {ayah.surahNameEnglish} : Verse {ayah.ayahNumber} ({ayah.surahNameArabic})
                    </span>
                    <span className="text-[#9A8D70] text-[10px]">Ruku {ayah.rukuNumber}</span>
                  </div>

                  <p className="font-arabic text-base font-bold text-[#2D2D2D] text-right dir-rtl mb-1 line-clamp-1">
                    {ayah.arabic}
                  </p>

                  <p className="text-xs text-[#2D2D2D] font-medium font-sans mb-1 line-clamp-2">
                    {ayah.translationEn}
                  </p>

                  <p className="font-urdu text-xs text-[#63553C] text-right dir-rtl line-clamp-1 leading-relaxed">
                    {ayah.translationUr}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-[#9A8D70]">
                <p className="text-sm font-medium font-sans">No results found for "{query}"</p>
                <p className="text-xs text-[#9A8D70] mt-1 font-sans">
                  Try searching for keywords like "هدى", "رحمة", "worship", "صبر", or "Ibrahim".
                </p>
              </div>
            )
          ) : (
            <div className="text-center py-10 text-[#9A8D70] text-xs font-sans">
              <BookOpen className="w-10 h-10 mx-auto text-[#DCD7C9] mb-2" />
              <p className="font-medium text-[#4A4A4A]">Type any word or verse number to search</p>
              <p className="mt-1 text-[#9A8D70]">e.g. "تقویٰ", "بنی اسرائیل", "guidance", "Adam", "Al-Baqarah 5"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
