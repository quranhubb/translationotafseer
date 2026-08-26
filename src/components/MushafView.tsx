import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, PenTool, Pen } from 'lucide-react';
import { ALL_PARA1_AYAHS } from '../data/quranProvider';
import { Ayah } from '../types';
import { AyahAnnotationCanvas } from './AyahAnnotationCanvas';

interface MushafViewProps {
  onSelectAyah: (surahNumber: number, ayahNumber: number) => void;
}

export const MushafView: React.FC<MushafViewProps> = ({ onSelectAyah }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnnotating, setIsAnnotating] = useState(false);
  const totalPages = 21; // Para 1 spans pages 1 to 21 in Madani Mushaf

  const pageContainerRef = useRef<HTMLDivElement | null>(null);
  const pageAyahs = ALL_PARA1_AYAHS.filter((a) => a.pageNumber === currentPage);

  return (
    <div className="px-3 pb-24 pt-2 max-w-xl mx-auto">
      {/* Mushaf Header Navigation */}
      <div className="bg-[#FDFCF8] rounded-2xl p-3 border border-[#E5E0D0] shadow-2xs flex items-center justify-between mb-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-xl text-[#2D2D2D] hover:bg-[#F4F1E6] disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="text-center">
          <span className="text-xs font-bold text-[#7D6B4B] uppercase tracking-widest block font-sans">
            Mushaf Page {currentPage} / {totalPages}
          </span>
          <p className="text-[11px] text-[#9A8D70] font-medium font-sans">Juz 1 • Alif Lam Meem (الم)</p>
        </div>

        <div className="flex items-center gap-1">
          {/* Annotation Toggle button */}
          <button
            onClick={() => setIsAnnotating(!isAnnotating)}
            className={`p-2 rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
              isAnnotating
                ? 'bg-[#7D6B4B] text-white shadow-xs'
                : 'text-[#7D6B4B] hover:bg-[#F4F1E6]'
            }`}
            title="Pencil & Highlighter (قلم و ہائی لائٹر)"
          >
            <Pen className="w-4 h-4" />
            <span className="font-urdu text-xs hidden sm:inline">
              {isAnnotating ? 'بند کریں' : 'قلم'}
            </span>
          </button>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl text-[#2D2D2D] hover:bg-[#F4F1E6] disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Page Content in Traditional Mushaf Frame */}
      <div
        ref={pageContainerRef}
        className="bg-[#FDFCF8] rounded-2xl border-2 border-[#7D6B4B]/30 shadow-md p-6 relative overflow-hidden"
      >
        {/* Interactive Drawing & Highlighting Canvas */}
        <AyahAnnotationCanvas
          surahNumber={999}
          ayahNumber={currentPage}
          containerRef={pageContainerRef}
          isActive={isAnnotating}
          onClose={() => setIsAnnotating(false)}
        />

        {/* Decorative corner borders */}
        <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#7D6B4B]/60 rounded-tl" />
        <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#7D6B4B]/60 rounded-tr" />
        <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#7D6B4B]/60 rounded-bl" />
        <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#7D6B4B]/60 rounded-br" />

        {/* Surah Header Banner if start of Surah */}
        {currentPage === 1 && (
          <div className="bg-[#7D6B4B] text-white py-2 px-4 rounded-xl text-center mb-6 shadow-sm border border-[#63553C]">
            <h3 className="font-arabic text-xl font-bold">سُورَةُ الفَاتِحَةِ</h3>
            <p className="text-[11px] text-[#EDE9DE] uppercase tracking-widest font-sans">مَكِّيَّةٌ • ۷ آيَاتٍ</p>
          </div>
        )}

        {currentPage === 2 && (
          <div className="bg-[#7D6B4B] text-white py-2 px-4 rounded-xl text-center mb-6 shadow-sm border border-[#63553C]">
            <h3 className="font-arabic text-xl font-bold">سُورَةُ البَقَرَةِ</h3>
            <p className="text-[11px] text-[#EDE9DE] uppercase tracking-widest font-sans">مَدَنِيَّةٌ • ۲۸۶ آيَةً</p>
          </div>
        )}

        {/* Continuous Flow of Ayahs */}
        <div className="dir-rtl text-justify font-quran text-[24px] leading-[2.6] text-[#2D2D2D] select-text">
          {pageAyahs.map((a) => (
            <span
              key={a.id}
              onClick={() => {
                if (!isAnnotating) {
                  onSelectAyah(a.surahNumber, a.ayahNumber);
                }
              }}
              className="inline hover:bg-[#EAE5D5] hover:text-[#7D6B4B] cursor-pointer rounded px-1 transition-colors group"
              title={`Tap to view Tafseer: ${a.surahNameEnglish} ${a.ayahNumber}`}
            >
              <span>{a.arabic}</span>
              <span className="inline-flex items-center justify-center w-7 h-7 mx-1.5 rounded-full bg-[#F4F1E6] text-[#7D6B4B] text-xs font-bold border border-[#DCD7C9] select-none align-middle font-sans shadow-2xs">
                {a.ayahNumber}
              </span>
            </span>
          ))}
        </div>

        <div className="mt-8 pt-3 border-t border-[#E5E0D0] text-center flex items-center justify-between text-xs text-[#9A8D70] font-sans">
          <span>الجزء الأول (الم)</span>
          <span className="font-bold text-[#7D6B4B]">صفحة {currentPage}</span>
          <span>الحزب الأول</span>
        </div>
      </div>

      {/* Helper instruction */}
      <p className="text-center text-xs text-[#9A8D70] mt-3 font-sans">
        💡 کسی بھی آیت پر کلک کریں تاکہ اس کا لفظی ترجمہ اور مفصل تفسیر کھل جائے۔
      </p>
    </div>
  );
};

