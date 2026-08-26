import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SURAHS_LIST } from '../data/surahs';
import { SurahMeta } from '../types';

interface SurahListProps {
  onSelectSurah: (surah: SurahMeta) => void;
}

export const SurahList: React.FC<SurahListProps> = ({ onSelectSurah }) => {
  const [filterText, setFilterText] = useState('');

  const filteredSurahs = SURAHS_LIST.filter((surah) => {
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
    <div className="px-3 pb-24">
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
          placeholder="Filter Surah List by Number or Name"
          className="w-full pl-10 pr-4 py-2.5 bg-[#FDFCF8] rounded-xl border border-[#E5E0D0] text-sm text-[#2D2D2D] placeholder-[#9A8D70] focus:outline-none focus:ring-2 focus:ring-[#7D6B4B] focus:border-transparent shadow-2xs font-sans"
        />
        {filterText && (
          <button
            onClick={() => setFilterText('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-[#9A8D70] hover:text-[#2D2D2D] cursor-pointer"
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
              className={`bg-[#FDFCF8] rounded-xl p-3.5 border border-[#E5E0D0] shadow-2xs flex items-center justify-between cursor-pointer hover:bg-[#F4F1E6] hover:border-[#7D6B4B]/40 active:scale-[0.99] transition-all ${
                isPara1Surah ? 'border-l-4 border-l-[#7D6B4B]' : 'opacity-85'
              }`}
            >
              <div className="flex items-center gap-3.5">
                {/* Number Badge */}
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm border flex-shrink-0 shadow-2xs ${
                  isPara1Surah
                    ? 'bg-[#7D6B4B] text-white border-[#63553C]'
                    : 'bg-[#F4F1E6] text-[#7D6B4B] border-[#E5E0D0]'
                }`}>
                  {surah.number}
                </div>

                {/* English Meta */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-[#2D2D2D] text-[15px] leading-tight tracking-tight font-serif">
                      {surah.nameEnglish}
                    </h3>
                    {isPara1Surah && (
                      <span className="text-[10px] bg-[#63553C] text-white px-2 py-0.5 rounded font-sans uppercase tracking-widest font-semibold">
                        Para 1
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#9A8D70] mt-0.5 font-sans">
                    {surah.revelationType} • {surah.totalVerses} Verses
                    {surah.number === 2 && ' (Para 1: 1-141)'}
                  </p>
                </div>
              </div>

              {/* Arabic Name */}
              <div className="text-right">
                <span className="font-arabic text-xl font-bold text-[#2D2D2D] dir-rtl tracking-wide">
                  {surah.nameArabic}
                </span>
                {isPara1Surah ? (
                  <p className="text-[11px] text-[#7D6B4B] font-medium mt-0.5">مفصل معارف القرآن</p>
                ) : (
                  <p className="text-[11px] text-[#9A8D70] mt-0.5">Para 2-3</p>
                )}
              </div>
            </div>
          );
        })}

        {filteredSurahs.length === 0 && (
          <div className="bg-[#FDFCF8] rounded-xl p-8 text-center text-[#9A8D70] border border-[#E5E0D0]">
            <p className="text-sm font-medium">No Surah found matching "{filterText}"</p>
            <button
              onClick={() => setFilterText('')}
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
