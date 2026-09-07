import React, { useState } from 'react';
import { BookOpen, ChevronRight, Layers, ArrowRight, Search, Sparkles, CheckCircle2, ChevronLeft } from 'lucide-react';
import { PARAS_LIST, ParaMeta } from '../data/paras';
import { PARA1_RUKUS } from '../data/tafseer/baqarahPara1';
import { PARA2_RUKUS } from '../data/tafseer/baqarahPara2';
import { PARA3_RUKUS } from '../data/tafseer/para3';
import { SURAHS_LIST } from '../data/surahs';
import { SurahMeta } from '../types';

interface ParahListProps {
  onOpenAyah: (surahNumber: number, ayahNumber: number) => void;
  onSelectSurah?: (surah: SurahMeta) => void;
}

export const ParahList: React.FC<ParahListProps> = ({ onOpenAyah, onSelectSurah }) => {
  const [selectedParaNumber, setSelectedParaNumber] = useState<number | null>(null);
  const [searchFilter, setSearchFilter] = useState('');

  // Selected Para metadata
  const selectedPara = selectedParaNumber
    ? PARAS_LIST.find((p) => p.number === selectedParaNumber)
    : null;

  // Filtered Paras list
  const filteredParas = PARAS_LIST.filter((para) => {
    const q = searchFilter.toLowerCase().trim();
    if (!q) return true;
    return (
      para.number.toString().includes(q) ||
      para.nameEnglish.toLowerCase().includes(q) ||
      para.nameUrdu.includes(q) ||
      para.nameArabic.includes(q) ||
      para.surahsDescription.toLowerCase().includes(q) ||
      para.surahsDescriptionUrdu.includes(q)
    );
  });

  // If a specific Para is clicked, show its Surahs breakdown (Step 2: Surahs in this Para)
  if (selectedPara) {
    const paraSurahs = SURAHS_LIST.filter((s) => selectedPara.surahNumbers.includes(s.number));
    const isPara1 = selectedPara.number === 1;
    const isPara2 = selectedPara.number === 2;
    const isPara3 = selectedPara.number === 3;
    const currentRukus = isPara1 ? PARA1_RUKUS : isPara2 ? PARA2_RUKUS : isPara3 ? PARA3_RUKUS : [];

    return (
      <div className="px-3 pb-24 pt-2">
        {/* Breadcrumb / Step Indicator */}
        <div className="flex items-center justify-between bg-[#F5EFE2] rounded-xl p-2 mb-3 border border-[#E5DFCE] text-xs">
          <button
            id="btn-back-to-paras"
            onClick={() => setSelectedParaNumber(null)}
            className="flex items-center gap-1 text-[#7D6B4B] font-bold hover:underline cursor-pointer font-sans"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>All Paras (Juz)</span>
          </button>
          <span className="text-[#8C7D63] font-medium font-sans">
            Para {selectedPara.number} • {selectedPara.nameEnglish}
          </span>
        </div>

        {/* Selected Para Header Banner */}
        <div className="bg-gradient-to-br from-[#7D6B4B] via-[#8C7A58] to-[#63553C] rounded-2xl p-4 text-white shadow-md mb-4 relative overflow-hidden border border-[#C5A059]/50">
          <div className="absolute right-2 -bottom-3 text-white/10 font-arabic text-7xl pointer-events-none select-none font-bold">
            {selectedPara.nameArabic}
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="bg-[#63553C] border border-[#C5A059]/40 text-[#F7F2E2] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest font-sans">
                Para {selectedPara.number} • Juz {selectedPara.number}
              </span>
              <span className="text-[#F3E7C4] text-xs font-semibold font-sans">
                {selectedPara.totalVerses} Verses
              </span>
            </div>

            <div className="mt-2.5 flex items-baseline justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight font-serif flex items-center gap-2">
                  <span>{selectedPara.nameArabic}</span>
                  <span className="text-lg font-normal text-[#F3E7C4]">({selectedPara.nameEnglish})</span>
                </h2>
                <p className="text-xs text-[#F3E7C4] mt-1 font-sans">
                  {selectedPara.surahsDescription}
                </p>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="mt-4 pt-3 border-t border-white/20 flex gap-2">
              <button
                id="btn-read-para-start"
                onClick={() => onOpenAyah(selectedPara.startSurahNumber, selectedPara.startAyahNumber)}
                className="flex-1 bg-[#FFFFFF] text-[#7D6B4B] hover:bg-[#F7F3E8] text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer font-sans"
              >
                <BookOpen className="w-4 h-4 text-[#B88E3E]" />
                <span>Read from Beginning (Verse {selectedPara.startAyahNumber})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Step 2: Surahs in this Para */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-[#7D6B4B] text-white text-[11px] font-bold flex items-center justify-center">
              2
            </span>
            <h3 className="font-bold text-[#7D6B4B] text-xs uppercase tracking-wider font-sans">
              Surahs in Para {selectedPara.number}
            </h3>
          </div>
          <span className="text-[11px] text-[#8C7D63] font-sans">Select Surah</span>
        </div>

        {/* Surahs Cards List */}
        <div className="space-y-2.5 mb-5">
          {paraSurahs.length > 0 ? (
            paraSurahs.map((surah) => {
              const isFatiha = surah.number === 1;
              const isBaqarah = surah.number === 2;
              const isAalImran = surah.number === 3;
              const targetAyahStart =
                isPara1 && isBaqarah
                  ? 1
                  : isPara2 && isBaqarah
                  ? 142
                  : isPara3 && isBaqarah
                  ? 253
                  : isPara3 && isAalImran
                  ? 1
                  : 1;

              return (
                <div
                  key={surah.number}
                  id={`para-surah-card-${surah.number}`}
                  onClick={() => onOpenAyah(surah.number, targetAyahStart)}
                  className="bg-[#FFFFFF] rounded-xl p-3.5 border border-[#E5DFCE] shadow-2xs hover:bg-[#FAF7EE] hover:border-[#7D6B4B]/50 cursor-pointer transition-all border-l-4 border-l-[#7D6B4B] group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#7D6B4B] text-white font-bold text-sm flex items-center justify-center font-sans shadow-2xs">
                        {surah.number}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-[15px] font-bold text-[#2D2D2D] font-serif group-hover:text-[#7D6B4B]">
                            {surah.nameEnglish}
                          </h4>
                          <span className="text-[10px] bg-[#B88E3E] text-white px-2 py-0.2 rounded font-sans uppercase font-semibold">
                            {surah.revelationType}
                          </span>
                        </div>
                        <p className="text-xs text-[#8C7D63] font-sans mt-0.5">
                          {isFatiha
                            ? '7 Verses (Complete)'
                            : isBaqarah && isPara1
                            ? 'Verses 1 to 141 in Para 1 • 16 Rukus'
                            : isBaqarah && isPara2
                            ? 'Verses 142 to 252 in Para 2 • 16 Rukus (Ruku 17 to 32)'
                            : isBaqarah && isPara3
                            ? 'Verses 253 to 286 in Para 3 • 6 Rukus (Ruku 35 to 40)'
                            : isAalImran && isPara3
                            ? 'Verses 1 to 92 in Para 3 • 9 Rukus (Ruku 1 to 9)'
                            : `${surah.totalVerses} Verses`}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-arabic text-xl font-bold text-[#2D2D2D] block">
                        {surah.nameArabic}
                      </span>
                      <span className="text-[11px] text-[#7D6B4B] font-sans font-medium flex items-center justify-end gap-1 mt-0.5">
                        <span>Translation & Tafseer</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-[#FFFFFF] rounded-xl p-4 text-center border border-[#E5DFCE]">
              <p className="text-xs text-[#7D6B4B] font-sans leading-relaxed">
                {selectedPara.surahsDescription}
              </p>
              <button
                onClick={() => onOpenAyah(selectedPara.startSurahNumber, selectedPara.startAyahNumber)}
                className="mt-2.5 bg-[#7D6B4B] hover:bg-[#63553C] text-white text-xs px-3 py-1.5 rounded-lg font-bold font-sans cursor-pointer"
              >
                Open Para
              </button>
            </div>
          )}
        </div>

        {/* Display Rukus and Topics for Para 1, Para 2, and Para 3 */}
        {currentRukus.length > 0 && (
          <div>
            <div className="mb-2.5 flex items-center justify-between pt-2 border-t border-[#E5DFCE]">
              <h3 className="font-bold text-[#7D6B4B] text-xs uppercase tracking-widest font-sans flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#7D6B4B]" />
                <span>Rukus & Themes of Para {selectedPara.number}</span>
              </h3>
              <span className="text-xs text-[#8C7D63] font-medium font-sans">
                {currentRukus.length} Rukus
              </span>
            </div>

            <div className="space-y-2">
              {currentRukus.map((ruku) => {
                const targetSurahNumber = (ruku as any).surahNumber || 2;
                const surahNameLabel = (ruku as any).surahNameEnglish || 'Al-Baqarah';

                return (
                  <div
                    key={`${targetSurahNumber}-${ruku.rukuNumber}`}
                    id={`para-ruku-${targetSurahNumber}-${ruku.rukuNumber}`}
                    onClick={() => onOpenAyah(targetSurahNumber, ruku.ayahStart)}
                    className="bg-[#FFFFFF] rounded-xl p-3 border border-[#E5DFCE] shadow-2xs hover:bg-[#FAF7EE] hover:border-[#7D6B4B]/50 cursor-pointer transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#F5EFE2] text-[#7D6B4B] font-bold text-xs flex items-center justify-center border border-[#E5DFCE] font-sans shrink-0">
                        R{ruku.rukuNumber}
                      </span>
                      <div>
                        <h5 className="text-xs font-bold text-[#2D2D2D] font-serif">
                          {surahNameLabel}: Verses {ruku.ayahStart} to {ruku.ayahEnd}
                        </h5>
                        <p className="text-[11px] text-[#7D6B4B] font-medium font-sans">{ruku.themeTitleEn}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-urdu text-[11.5px] text-[#63553C] dir-rtl font-medium block">
                        {ruku.themeTitleUr}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Primary Step 1 View: Complete 30 Paras List
  return (
    <div className="px-3 pb-24 pt-2">
      {/* 3-Step Guided Navigation Header */}
      <div className="bg-gradient-to-r from-[#7D6B4B]/10 via-[#FCF9F1] to-[#7D6B4B]/10 rounded-2xl p-3 border border-[#7D6B4B]/20 shadow-2xs mb-3.5">
        <div className="flex items-center justify-between text-xs font-bold text-[#7D6B4B] mb-1.5 pb-1 border-b border-[#7D6B4B]/15">
          <span className="flex items-center gap-1 font-sans text-xs">
            <BookOpen className="w-4 h-4 text-[#7D6B4B]" />
            <span>Study Quran in 3 Easy Steps:</span>
          </span>
          <span className="text-[10px] text-[#8C7D63] uppercase tracking-wider font-sans">
            30 Juz / Paras
          </span>
        </div>
        
        {/* Step-by-Step Sequence */}
        <div className="grid grid-cols-3 gap-1.5 text-center font-sans text-xs">
          <div className="bg-[#7D6B4B] text-white py-1.5 px-1 rounded-lg font-bold shadow-2xs flex flex-col items-center border border-[#63553C]">
            <span className="text-[10px] text-[#F3E7C4]">Step 1</span>
            <span className="text-[11px]">1. Select Para</span>
          </div>
          <div className="bg-[#FFFFFF] text-[#7D6B4B] border border-[#E5DFCE] py-1.5 px-1 rounded-lg font-medium flex flex-col items-center">
            <span className="text-[10px] text-[#8C7D63]">Step 2</span>
            <span className="text-[11px]">2. Select Surah</span>
          </div>
          <div className="bg-[#FFFFFF] text-[#7D6B4B] border border-[#E5DFCE] py-1.5 px-1 rounded-lg font-medium flex flex-col items-center">
            <span className="text-[10px] text-[#8C7D63]">Step 3</span>
            <span className="text-[11px]">3. Translation & Tafseer</span>
          </div>
        </div>
      </div>

      {/* Search Input for Paras */}
      <div className="relative mb-3.5">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7D6B4B]">
          <Search className="w-4.5 h-4.5" />
        </div>
        <input
          id="input-filter-paras"
          type="text"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          placeholder="Search Para by number or name..."
          className="w-full pl-10 pr-4 py-2.5 bg-[#FFFFFF] rounded-xl border border-[#E5DFCE] text-sm text-[#2D2D2D] placeholder-[#8C7D63] focus:outline-none focus:ring-2 focus:ring-[#7D6B4B] focus:border-transparent shadow-2xs font-sans"
        />
        {searchFilter && (
          <button
            onClick={() => setSearchFilter('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-[#8C7D63] hover:text-[#2D2D2D] cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* Quick Launch Cards for Para 1 and Para 2 with Full Tafseer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {/* Para 1 Card */}
        <div className="bg-gradient-to-br from-[#7D6B4B] via-[#8C7A58] to-[#63553C] rounded-2xl p-4 text-white shadow-md relative overflow-hidden border border-[#C5A059]/50">
          <div className="absolute right-2 -bottom-4 text-white/10 font-arabic text-7xl pointer-events-none select-none font-bold">
            الم
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="bg-[#63553C] border border-[#C5A059]/40 text-[#F7F2E2] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest font-sans">
                Para 1 • Juz 1
              </span>
              <span className="bg-[#FCF9F1] text-[#7D6B4B] text-[10px] font-bold px-2 py-0.5 rounded-full font-sans shadow-2xs">
                Complete Tafseer
              </span>
            </div>

            <div className="mt-2">
              <h2 className="text-xl font-bold tracking-tight font-serif">المٓ (Alif Lam Meem)</h2>
              <p className="text-xs text-[#F3E7C4] mt-0.5 font-sans">
                Surah Al-Fatiha & Al-Baqarah (1-141)
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/20 flex gap-2">
              <button
                id="btn-open-para1-surahs"
                onClick={() => setSelectedParaNumber(1)}
                className="flex-1 bg-[#FFFFFF] text-[#7D6B4B] hover:bg-[#F7F3E8] text-xs font-bold py-2 px-2.5 rounded-xl flex items-center justify-center gap-1 shadow-sm transition-all active:scale-95 cursor-pointer font-sans"
              >
                <Layers className="w-3.5 h-3.5 text-[#B88E3E]" />
                <span>View Surahs & Rukus</span>
              </button>
              <button
                id="btn-quick-read-para1"
                onClick={() => onOpenAyah(1, 1)}
                className="bg-[#63553C] hover:bg-[#524631] text-[#F7F2E2] text-xs font-semibold py-1.5 px-2.5 rounded-xl flex items-center justify-center gap-1 border border-[#C5A059]/40 transition-all cursor-pointer font-sans"
              >
                <span>Read</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Para 2 Card */}
        <div className="bg-gradient-to-br from-[#8C7A58] via-[#7D6B4B] to-[#63553C] rounded-2xl p-4 text-white shadow-md relative overflow-hidden border border-[#C5A059]/50">
          <div className="absolute right-2 -bottom-4 text-white/10 font-arabic text-7xl pointer-events-none select-none font-bold">
            سَيَقُولُ
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="bg-[#63553C] border border-[#C5A059]/40 text-[#F7F2E2] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest font-sans">
                Para 2 • Juz 2
              </span>
              <span className="bg-[#FCF9F1] text-[#7D6B4B] text-[10px] font-bold px-2 py-0.5 rounded-full font-sans shadow-2xs">
                Complete Tafseer
              </span>
            </div>

            <div className="mt-2">
              <h2 className="text-xl font-bold tracking-tight font-serif">سَيَقُولُ (Sayaqool)</h2>
              <p className="text-xs text-[#F3E7C4] mt-0.5 font-sans">
                Surah Al-Baqarah (142 to 252) • 16 Rukus
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/20 flex gap-2">
              <button
                id="btn-open-para2-surahs"
                onClick={() => setSelectedParaNumber(2)}
                className="flex-1 bg-[#FFFFFF] text-[#7D6B4B] hover:bg-[#F7F3E8] text-xs font-bold py-2 px-2.5 rounded-xl flex items-center justify-center gap-1 shadow-sm transition-all active:scale-95 cursor-pointer font-sans"
              >
                <Layers className="w-3.5 h-3.5 text-[#B88E3E]" />
                <span>View Surahs & Rukus</span>
              </button>
              <button
                id="btn-quick-read-para2"
                onClick={() => onOpenAyah(2, 142)}
                className="bg-[#63553C] hover:bg-[#524631] text-[#F7F2E2] text-xs font-semibold py-1.5 px-2.5 rounded-xl flex items-center justify-center gap-1 border border-[#C5A059]/40 transition-all cursor-pointer font-sans"
              >
                <span>Read</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 30 Paras List Section */}
      <div className="mb-2.5 flex items-center justify-between">
        <h3 className="font-bold text-[#7D6B4B] text-xs uppercase tracking-widest font-sans flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-[#7D6B4B]" />
          <span>All 30 Paras (Juz)</span>
        </h3>
        <span className="text-xs text-[#8C7D63] font-medium font-sans">30 Paras</span>
      </div>

      <div className="space-y-2.5">
        {filteredParas.map((para) => {
          const isFullTafseer = para.isFullTafseerAvailable;
          return (
            <div
              key={para.number}
              id={`para-item-${para.number}`}
              onClick={() => {
                if (para.number === 1 || para.number === 2) {
                  setSelectedParaNumber(para.number);
                } else {
                  onOpenAyah(para.startSurahNumber, para.startAyahNumber);
                }
              }}
              className={`bg-[#FFFFFF] rounded-xl p-3.5 border border-[#E5DFCE] shadow-xs hover:bg-[#FAF7EE] hover:border-[#7D6B4B]/50 cursor-pointer transition-all flex items-center justify-between ${
                isFullTafseer ? 'border-l-4 border-l-[#7D6B4B]' : ''
              }`}
            >
              {/* Left meta */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs font-sans shadow-xs shrink-0 ${
                    isFullTafseer
                      ? 'bg-[#7D6B4B] text-white border border-[#63553C]'
                      : 'bg-[#F5EFE2] text-[#7D6B4B] border border-[#E5DFCE]'
                  }`}
                >
                  {para.number}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-[#2D2D2D] font-serif">
                      Para {para.number}: {para.nameEnglish}
                    </h4>
                    {isFullTafseer && (
                      <span className="text-[10px] bg-[#7D6B4B] text-white px-2 py-0.5 rounded font-sans uppercase font-semibold">
                        Full Tafseer
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#8C7D63] font-sans mt-0.5">
                    {para.surahsDescription}
                  </p>
                </div>
              </div>

              {/* Right Arabic Name */}
              <div className="text-right shrink-0">
                <span className="font-arabic text-lg font-bold text-[#2D2D2D] block dir-rtl">
                  {para.nameArabic}
                </span>
                <span className="text-[11px] text-[#7D6B4B] font-sans font-medium mt-0.5 block">
                  {para.number === 1 || para.number === 2 ? 'View Surahs & Rukus ➔' : `${para.totalVerses} Verses`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

