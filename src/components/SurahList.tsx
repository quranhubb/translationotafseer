import React, { useState } from 'react';
import { Search, BookOpen, Layers, ChevronRight } from 'lucide-react';
import { SURAHS_LIST } from '../data/surahs';
import { SurahMeta } from '../types';

interface SurahListProps {
  onSelectSurah: (surah: SurahMeta) => void;
  onGoToParas?: () => void;
}

export const SurahList: React.FC<SurahListProps> = ({ onSelectSurah, onGoToParas }) => {
  const [filterText, setFilterText] = useState('');
  const [tabFilter, setTabFilter] = useState<'all' | 'para1'>('all');

  const filteredSurahs = SURAHS_LIST.filter((surah) => {
    if (tabFilter === 'para1' && surah.number > 2) return false;
    const q = filterText.toLowerCase().trim();
    if (!q) return true;
    return (
      surah.number.toString().includes(q) ||
      surah.nameEnglish.toLowerCase().includes(q) ||
      surah.nameArabic.includes(q) ||
      surah.revelationType.toLowerCase().includes(q)
    );
  });

  return (
    <div className="px-3 pb-24 pt-2">
      {/* 3-Step Guided Navigation Header */}
      <div className="bg-gradient-to-r from-[#7D6B4B]/10 via-[#FCF9F1] to-[#7D6B4B]/10 rounded-2xl p-3 border border-[#7D6B4B]/20 shadow-2xs mb-3.5">
        <div className="flex items-center justify-between text-xs font-bold text-[#7D6B4B] mb-1.5 pb-1 border-b border-[#7D6B4B]/15">
          <span className="flex items-center gap-1 font-sans text-xs">
            <BookOpen className="w-4 h-4 text-[#7D6B4B]" />
            <span>All 114 Surahs of the Holy Quran:</span>
          </span>
          {onGoToParas && (
            <button
              onClick={onGoToParas}
              className="text-[11px] text-[#7D6B4B] font-sans font-bold hover:underline cursor-pointer flex items-center gap-0.5"
            >
              <span>View Paras (Juz) First ➔</span>
            </button>
          )}
        </div>

        {/* Step-by-Step Sequence */}
        <div className="grid grid-cols-3 gap-1.5 text-center font-sans text-xs">
          <div
            onClick={onGoToParas}
            className="bg-[#FFFFFF] text-[#7D6B4B] border border-[#E5DFCE] py-1.5 px-1 rounded-lg font-medium cursor-pointer hover:bg-[#FAF7EE] flex flex-col items-center"
          >
            <span className="text-[10px] text-[#8C7D63]">Step 1</span>
            <span className="text-[11px]">1. Select Para</span>
          </div>
          <div className="bg-[#7D6B4B] text-white py-1.5 px-1 rounded-lg font-bold shadow-2xs flex flex-col items-center border border-[#63553C]">
            <span className="text-[10px] text-[#F3E7C4]">Step 2</span>
            <span className="text-[11px]">2. Select Surah</span>
          </div>
          <div className="bg-[#FFFFFF] text-[#7D6B4B] border border-[#E5DFCE] py-1.5 px-1 rounded-lg font-medium flex flex-col items-center">
            <span className="text-[10px] text-[#8C7D63]">Step 3</span>
            <span className="text-[11px]">3. Translation & Tafseer</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={() => setTabFilter('all')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer font-sans ${
            tabFilter === 'all'
              ? 'bg-[#7D6B4B] text-white shadow-2xs'
              : 'bg-[#F5EFE2] text-[#7D6B4B] border border-[#E5DFCE] hover:bg-[#ECE4D0]'
          }`}
        >
          All 114 Surahs
        </button>
        <button
          onClick={() => setTabFilter('para1')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer font-sans ${
            tabFilter === 'para1'
              ? 'bg-[#7D6B4B] text-white shadow-2xs'
              : 'bg-[#F5EFE2] text-[#7D6B4B] border border-[#E5DFCE] hover:bg-[#ECE4D0]'
          }`}
        >
          Para 1 & 2 Surahs (Full Tafseer)
        </button>
      </div>

      {/* Search Input */}
      <div className="relative mb-3.5">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7D6B4B]">
          <Search className="w-4.5 h-4.5" />
        </div>
        <input
          id="input-filter-surahs"
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Search Surah by name or number..."
          className="w-full pl-10 pr-4 py-2.5 bg-[#FFFFFF] rounded-xl border border-[#E5DFCE] text-sm text-[#2D2D2D] placeholder-[#8C7D63] focus:outline-none focus:ring-2 focus:ring-[#7D6B4B] focus:border-transparent shadow-2xs font-sans"
        />
        {filterText && (
          <button
            onClick={() => setFilterText('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-[#8C7D63] hover:text-[#2D2D2D] cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* Surah List Items */}
      <div className="space-y-2.5">
        {filteredSurahs.map((surah) => {
          const isPara1Surah = surah.number <= 2;
          return (
            <div
              key={surah.number}
              id={`surah-card-${surah.number}`}
              onClick={() => onSelectSurah(surah)}
              className={`bg-[#FFFFFF] rounded-xl p-3.5 border border-[#E5DFCE] shadow-2xs flex items-center justify-between cursor-pointer hover:bg-[#FAF7EE] hover:border-[#7D6B4B]/50 active:scale-[0.99] transition-all group ${
                isPara1Surah ? 'border-l-4 border-l-[#7D6B4B]' : 'opacity-90'
              }`}
            >
              <div className="flex items-center gap-3.5">
                {/* Number Badge */}
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm border flex-shrink-0 shadow-2xs ${
                    isPara1Surah
                      ? 'bg-[#7D6B4B] text-white border-[#63553C]'
                      : 'bg-[#F5EFE2] text-[#7D6B4B] border-[#E5DFCE]'
                  }`}
                >
                  {surah.number}
                </div>

                {/* English Meta */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-[#2D2D2D] text-[15px] leading-tight tracking-tight font-serif group-hover:text-[#7D6B4B]">
                      {surah.nameEnglish}
                    </h3>
                    {isPara1Surah && (
                      <span className="text-[10px] bg-[#B88E3E] text-white px-2 py-0.2 rounded font-sans uppercase tracking-widest font-semibold">
                        {surah.number === 1 ? 'Para 1' : 'Para 1 & 2'}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#8C7D63] mt-0.5 font-sans">
                    {surah.revelationType} • {surah.totalVerses} Verses
                    {surah.number === 2 && ' (Para 1 & 2: 1-252 Full Tafseer)'}
                  </p>
                </div>
              </div>

              {/* Arabic Name & Action */}
              <div className="text-right">
                <span className="font-arabic text-xl font-bold text-[#2D2D2D] dir-rtl tracking-wide block">
                  {surah.nameArabic}
                </span>
                <span className="text-[11px] text-[#7D6B4B] font-sans font-medium mt-0.5 flex items-center justify-end gap-0.5">
                  <span>Translation & Tafseer</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}

        {filteredSurahs.length === 0 && (
          <div className="bg-[#FFFFFF] rounded-xl p-8 text-center text-[#8C7D63] border border-[#E5DFCE]">
            <p className="text-sm font-medium">No Surah found matching "{filterText}"</p>
            <button
              onClick={() => {
                setFilterText('');
                setTabFilter('all');
              }}
              className="mt-2 text-xs text-[#7D6B4B] font-bold hover:underline cursor-pointer"
            >
              Show all surahs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
