import React from 'react';
import { BookOpen, ChevronRight, Layers, ArrowRight } from 'lucide-react';
import { PARA1_RUKUS } from '../data/tafseer/baqarahPara1';

interface ParahListProps {
  onOpenAyah: (surahNumber: number, ayahNumber: number) => void;
}

export const ParahList: React.FC<ParahListProps> = ({ onOpenAyah }) => {
  return (
    <div className="px-3 pb-24 pt-2">
      {/* Featured Para 1 Banner */}
      <div className="bg-gradient-to-br from-[#7D6B4B] to-[#5C4E36] rounded-2xl p-4 text-white shadow-md mb-4 relative overflow-hidden border border-[#63553C]">
        <div className="absolute right-2 -bottom-4 text-white/10 font-arabic text-8xl pointer-events-none select-none font-bold">
          الم
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <span className="bg-[#5C4E36] border border-[#9A8D70]/40 text-[#EDE9DE] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest font-sans">
              Juz / Parah 1
            </span>
            <span className="text-[#EDE9DE] text-xs font-semibold font-sans">148 Verses</span>
          </div>

          <div className="mt-2.5 flex items-baseline justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight font-serif">الم (Alif Lam Meem)</h2>
              <p className="text-xs text-[#EDE9DE] mt-0.5 font-sans">
                Surah Al-Fatiha (1:1-7) & Surah Al-Baqarah (2:1-141)
              </p>
            </div>
            <div className="font-arabic text-3xl text-white font-bold">
              المٓ
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/20 flex gap-2">
            <button
              id="btn-start-para1"
              onClick={() => onOpenAyah(1, 1)}
              className="flex-1 bg-[#FCF9F1] text-[#7D6B4B] hover:bg-[#F4F1E6] text-xs font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer font-sans"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read from Beginning (1:1)</span>
            </button>
            <button
              id="btn-start-baqarah"
              onClick={() => onOpenAyah(2, 1)}
              className="bg-[#5C4E36] hover:bg-[#4E412C] text-[#EDE9DE] text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-1 border border-[#9A8D70]/40 transition-all cursor-pointer font-sans"
            >
              <span>Al-Baqarah</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Rukus Breakdown of Para 1 */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-bold text-[#7D6B4B] text-xs uppercase tracking-widest font-sans flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-[#7D6B4B]" />
          <span>Para 1 Rukus & Themes (مضامین و رکوعات)</span>
        </h3>
        <span className="text-xs text-[#9A8D70] font-medium font-sans">16 Rukus</span>
      </div>

      <div className="space-y-2.5">
        {/* Fatiha Ruku */}
        <div
          onClick={() => onOpenAyah(1, 1)}
          className="bg-[#FDFCF8] rounded-xl p-3.5 border border-[#E5E0D0] shadow-2xs hover:bg-[#F4F1E6] hover:border-[#7D6B4B]/40 cursor-pointer transition-all border-l-4 border-l-[#7D6B4B]"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#7D6B4B] text-white font-bold text-xs flex items-center justify-center font-sans shadow-2xs">
                F
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#2D2D2D] font-serif">Surah Al-Fatiha (Complete)</h4>
                <p className="text-xs text-[#9A8D70] font-sans">Verses 1 to 7 • Umm al-Kitab</p>
              </div>
            </div>
            <ChevronRight className="w-4.5 h-4.5 text-[#9A8D70] mt-1" />
          </div>
          <p className="font-urdu text-xs text-[#5A5A5A] mt-2 text-right dir-rtl leading-relaxed">
            سورۃ الفاتحہ: اللہ تعالیٰ کی حمد و ثناء، توحید، اور صراطِ مستقیم کی جامع ترین دعا۔
          </p>
        </div>

        {/* Baqarah 16 Rukus */}
        {PARA1_RUKUS.map((ruku) => (
          <div
            key={ruku.rukuNumber}
            id={`ruku-card-${ruku.rukuNumber}`}
            onClick={() => onOpenAyah(2, ruku.ayahStart)}
            className="bg-[#FDFCF8] rounded-xl p-3.5 border border-[#E5E0D0] shadow-2xs hover:bg-[#F4F1E6] hover:border-[#7D6B4B]/40 cursor-pointer transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#F4F1E6] text-[#7D6B4B] font-bold text-xs flex items-center justify-center border border-[#E5E0D0] font-sans">
                  R{ruku.rukuNumber}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#2D2D2D] font-serif">
                    Al-Baqarah: Verses {ruku.ayahStart} – {ruku.ayahEnd}
                  </h4>
                  <p className="text-[11px] text-[#7D6B4B] font-medium font-sans">{ruku.themeTitleEn}</p>
                </div>
              </div>
              <ChevronRight className="w-4.5 h-4.5 text-[#9A8D70] mt-1" />
            </div>

            <div className="mt-2 pt-2 border-t border-dashed border-[#E5E0D0] flex items-center justify-between">
              <p className="font-urdu text-xs text-[#5A5A5A] dir-rtl text-right font-medium">
                {ruku.themeTitleUr}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
