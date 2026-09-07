import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Share2,
  BookOpen,
  List,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Volume2,
  Copy,
  Check,
  Bookmark as BookmarkIcon,
  Sparkles,
  Pen,
  PenTool,
  Sliders
} from 'lucide-react';
import { Ayah, UserSettings } from '../types';
import { ALL_AVAILABLE_AYAHS, ALL_PARA1_AYAHS, getAudioUrlForAyah } from '../data/quranProvider';
import { saveLastRead } from '../utils/storage';
import { AyahAnnotationCanvas } from './AyahAnnotationCanvas';
import { InteractiveTafseerText } from './InteractiveTafseerText';

interface AyahReaderViewProps {
  currentSurahNumber: number;
  currentAyahNumber: number;
  settings: UserSettings;
  onBack: () => void;
  onSelectAyah: (surahNum: number, ayahNum: number) => void;
  onOpenSelectOption: (ayah: Ayah) => void;
  onOpenMushaf: () => void;
  onOpenSettings: () => void;
  onSaveBookmark: (ayah: Ayah) => void;
  onUpdateSettings?: (newSettings: Partial<UserSettings>) => void;
}

export const AyahReaderView: React.FC<AyahReaderViewProps> = ({
  currentSurahNumber,
  currentAyahNumber,
  settings,
  onBack,
  onSelectAyah,
  onOpenSelectOption,
  onOpenMushaf,
  onOpenSettings,
  onSaveBookmark,
  onUpdateSettings,
}) => {
  const currentAyah =
    ALL_AVAILABLE_AYAHS.find(
      (a) => a.surahNumber === currentSurahNumber && a.ayahNumber === currentAyahNumber
    ) || ALL_AVAILABLE_AYAHS[0];

  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isAnnotating, setIsAnnotating] = useState(false);
  const [hasSavedAnnotations, setHasSavedAnnotations] = useState(false);
  const [showNextAyahPrompt, setShowNextAyahPrompt] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const tabsScrollRef = useRef<HTMLDivElement | null>(null);
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  // Check if current Ayah has saved annotations
  useEffect(() => {
    try {
      const key = `maarif_draw_${currentAyah.surahNumber}_${currentAyah.ayahNumber}`;
      const saved = localStorage.getItem(key);
      if (saved && JSON.parse(saved).length > 0) {
        setHasSavedAnnotations(true);
      } else {
        setHasSavedAnnotations(false);
      }
    } catch {
      setHasSavedAnnotations(false);
    }
  }, [currentAyah.surahNumber, currentAyah.ayahNumber, isAnnotating]);

  // Update Automatic Last Read when viewing an ayah
  useEffect(() => {
    saveLastRead({
      surahNumber: currentAyah.surahNumber,
      ayahNumber: currentAyah.ayahNumber,
      timestamp: Date.now(),
      type: 'automatic',
    });
  }, [currentAyah.surahNumber, currentAyah.ayahNumber]);

  // Audio setup
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    const audioUrl = getAudioUrlForAyah(
      currentAyah.surahNumber,
      currentAyah.ayahNumber,
      settings.audioReciter
    );
    const audio = new Audio(audioUrl);
    audio.playbackRate = settings.playbackSpeed || 1;
    audioRef.current = audio;

    audio.onended = () => {
      setIsPlaying(false);
      if (settings.autoPlayNext) {
        handleNextAyah();
      }
    };

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [currentAyah.surahNumber, currentAyah.ayahNumber, settings.audioReciter, settings.playbackSpeed]);

  const togglePlayAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log('Audio play error:', e));
    }
  };

  const handlePrevAyah = () => {
    const currentIndex = ALL_AVAILABLE_AYAHS.findIndex(
      (a) => a.surahNumber === currentAyah.surahNumber && a.ayahNumber === currentAyah.ayahNumber
    );
    if (currentIndex > 0) {
      const prev = ALL_AVAILABLE_AYAHS[currentIndex - 1];
      onSelectAyah(prev.surahNumber, prev.ayahNumber);
    }
  };

  const handleNextAyah = () => {
    const currentIndex = ALL_AVAILABLE_AYAHS.findIndex(
      (a) => a.surahNumber === currentAyah.surahNumber && a.ayahNumber === currentAyah.ayahNumber
    );
    if (currentIndex < ALL_AVAILABLE_AYAHS.length - 1) {
      const next = ALL_AVAILABLE_AYAHS[currentIndex + 1];
      onSelectAyah(next.surahNumber, next.ayahNumber);
    }
  };

  // Surah Ayah tabs ribbon
  const surahAyahs = ALL_AVAILABLE_AYAHS.filter((a) => a.surahNumber === currentAyah.surahNumber);

  // Scroll active tab into view
  useEffect(() => {
    if (tabsScrollRef.current) {
      const activeEl = tabsScrollRef.current.querySelector('.active-tab');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [currentAyah.ayahNumber]);

  const handleCopyText = () => {
    const text = `${currentAyah.arabic}\n\n${currentAyah.translationEn}\n\n[Maarif-ul-Quran - ${currentAyah.surahNameEnglish} ${currentAyah.surahNumber}:${currentAyah.ayahNumber}]`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="ayah-reader-screen"
      className={`min-h-screen pb-24 ${
        settings.theme === 'sepia'
          ? 'bg-[#FCF9F1] text-[#2D2D2D]'
          : settings.theme === 'dark'
          ? 'bg-[#1E1C18] text-[#EDE9DE]'
          : 'bg-[#FCFAF5] text-[#1D2A20]'
      }`}
    >
      {/* Top Header Bar matching Emerald Green & Radiant Gold theme */}
      <div className="bg-[#154734] text-white sticky top-0 z-30 shadow-sm border-b border-[#0F3626]">
        <div className="px-3 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button
              id="btn-reader-back"
              onClick={onBack}
              className="p-2 rounded-full hover:bg-[#1A523C] active:bg-[#0F3626] text-white cursor-pointer"
              aria-label="Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="font-bold text-sm ml-1 text-white tracking-wide font-serif">
              {currentAyah.surahNameEnglish} ({currentAyah.ayahNumber})
            </span>
          </div>

          <div className="flex items-center gap-0.5">
            {/* Pencil / Highlighter / Eraser Annotation Button */}
            <button
              id="btn-reader-annotation"
              onClick={() => setIsAnnotating(!isAnnotating)}
              className={`p-2 rounded-full transition-all cursor-pointer relative ${
                isAnnotating
                  ? 'bg-[#0F3626] text-amber-300 ring-2 ring-[#C5A059]'
                  : 'hover:bg-[#1A523C] text-white'
              }`}
              title="Pencil, Highlighter & Eraser"
            >
              <PenTool className="w-4.5 h-4.5" />
              {hasSavedAnnotations && !isAnnotating && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400 ring-1 ring-[#154734]" />
              )}
            </button>

            {/* Share / Options */}
            <button
              id="btn-reader-share"
              onClick={() => onOpenSelectOption(currentAyah)}
              className="p-2 rounded-full hover:bg-[#1A523C] active:bg-[#0F3626] text-white cursor-pointer"
              title="Share & Options"
            >
              <Share2 className="w-4.5 h-4.5" />
            </button>

            {/* Mushaf Mode */}
            <button
              id="btn-reader-mushaf"
              onClick={onOpenMushaf}
              className="p-2 rounded-full hover:bg-[#1A523C] active:bg-[#0F3626] text-white cursor-pointer"
              title="Mushaf Mode"
            >
              <BookOpen className="w-4.5 h-4.5" />
            </button>

            {/* Options Modal button */}
            <button
              id="btn-reader-options"
              onClick={() => onOpenSelectOption(currentAyah)}
              className="p-2 rounded-full hover:bg-[#1A523C] active:bg-[#0F3626] text-white cursor-pointer"
              title="Ayah Options"
            >
              <List className="w-4.5 h-4.5" />
            </button>

            {/* Play Audio Button */}
            <button
              id="btn-reader-play"
              onClick={togglePlayAudio}
              className={`p-2 rounded-full text-white transition-all cursor-pointer ${
                isPlaying ? 'bg-[#0F3626] ring-1 ring-[#C5A059]' : 'hover:bg-[#1A523C]'
              }`}
              title={isPlaying ? 'Pause Recitation' : 'Play Recitation'}
            >
              {isPlaying ? <Pause className="w-4.5 h-4.5 fill-current" /> : <Play className="w-4.5 h-4.5 fill-current" />}
            </button>

            {/* Settings */}
            <button
              id="btn-reader-settings"
              onClick={onOpenSettings}
              className="p-2 rounded-full hover:bg-[#1A523C] active:bg-[#0F3626] text-white cursor-pointer"
              title="Settings"
            >
              <Sliders className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Horizontal Ayah Pager / Tabs ribbon */}
        <div
          ref={tabsScrollRef}
          className="flex items-center overflow-x-auto scrollbar-none px-2 border-t border-[#0F3626] bg-[#0F3626] text-xs font-medium text-[#F3E7C4]"
        >
          {surahAyahs.map((a) => {
            const isSelected = a.ayahNumber === currentAyah.ayahNumber;
            return (
              <button
                key={a.id}
                onClick={() => onSelectAyah(a.surahNumber, a.ayahNumber)}
                className={`py-2 px-3.5 whitespace-nowrap transition-all font-arabic text-sm cursor-pointer ${
                  isSelected
                    ? 'active-tab text-white font-bold border-b-2 border-[#C5A059] bg-[#154734]'
                    : 'text-[#F3E7C4]/80 hover:text-white hover:bg-[#154734]/50'
                }`}
              >
                {a.surahNameArabic} {a.ayahNumber}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Ayah Card Container */}
      <div className="max-w-xl mx-auto p-3.5 space-y-3.5">
        <div
          ref={cardContainerRef}
          id="main-ayah-card"
          className={`rounded-2xl shadow-xs border p-5 transition-all relative overflow-hidden ${
            settings.theme === 'sepia'
              ? 'bg-[#FFFFFF] border-[#E6DFC9]'
              : settings.theme === 'dark'
              ? 'bg-[#262420] border-[#3D3A34] text-[#EDE9DE]'
              : 'bg-[#FFFFFF] border-[#E6DFC9]'
          }`}
          onClick={() => {
            if (!isAnnotating) {
              onOpenSelectOption(currentAyah);
            }
          }}
        >
          {/* Annotation Canvas */}
          <AyahAnnotationCanvas
            surahNumber={currentAyah.surahNumber}
            ayahNumber={currentAyah.ayahNumber}
            containerRef={cardContainerRef}
            isActive={isAnnotating}
            onClose={() => setIsAnnotating(false)}
          />

          {/* Quick Ayah Actions bar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E6DFC9] text-xs text-[#68796C] font-sans relative z-10">
            <span className="font-semibold text-[#154734] flex items-center gap-1">
              <span>Para 1</span> • <span>Ruku {currentAyah.rukuNumber}</span> • <span>Page {currentAyah.pageNumber}</span>
            </span>
            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              {/* Annotation Toggle Pill */}
              <button
                id="btn-card-annotate-toggle"
                onClick={() => setIsAnnotating(!isAnnotating)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                  isAnnotating
                    ? 'bg-[#154734] text-white shadow-2xs'
                    : hasSavedAnnotations
                    ? 'bg-amber-100 text-amber-900 border border-amber-300 font-semibold'
                    : 'bg-[#F5EFE2] hover:bg-[#ECE4D0] text-[#154734] border border-[#E6DFC9]'
                }`}
                title="Pencil, Highlighter & Eraser"
              >
                <Pen className="w-3.5 h-3.5" />
                <span className="font-sans text-[11px] font-semibold">
                  {isAnnotating ? 'Close Draw' : hasSavedAnnotations ? 'Notes Active' : 'Pen & Highlight'}
                </span>
              </button>

              <button
                onClick={handleCopyText}
                className="p-1 text-[#68796C] hover:text-[#154734] transition-colors cursor-pointer"
                title="Copy Ayah"
              >
                {copied ? <Check className="w-4 h-4 text-[#154734]" /> : <Copy className="w-4 h-4 text-[#154734]" />}
              </button>
              <button
                onClick={() => onSaveBookmark(currentAyah)}
                className="p-1 text-[#68796C] hover:text-[#154734] transition-colors cursor-pointer"
                title="Bookmark Ayah"
              >
                <BookmarkIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 1. Large Arabic Text */}
          <div className="my-5 text-center px-1">
            <p
              id="ayah-arabic-text"
              className="font-quran leading-[2.4] text-[#1D2A20] font-bold dir-rtl select-text"
              style={{
                fontSize: `${settings.arabicFontSize || 28}px`,
                fontFamily: settings.arabicFontFamily || 'Amiri',
              }}
            >
              {currentAyah.arabic}
            </p>
          </div>

          {/* 2. Ayah Number Divider line */}
          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-[#E6DFC9] w-full" />
            <div className="absolute bg-[#154734] text-[#F3E7C4] px-3.5 py-0.5 text-xs font-bold rounded-full font-sans tracking-widest uppercase shadow-2xs border border-[#0F3626]">
              Verse {currentAyah.ayahNumber}
            </div>
          </div>

          {/* 3. Word-by-Word Translation Section */}
          {settings.showWordByWord && currentAyah.words && currentAyah.words.length > 0 && (
            <div
              id="word-by-word-section"
              className="my-4 p-3.5 sm:p-4 bg-[#F5EFE2]/90 rounded-2xl border border-[#E6DFC9] shadow-2xs"
            >
              {/* Header with Quick Language Switch */}
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#E6DFC9]">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#154734]" />
                  <span className="font-bold text-xs uppercase tracking-wider text-[#154734] font-sans">
                    Word-by-Word Meaning
                  </span>
                </div>
                {onUpdateSettings && (
                  <div className="flex items-center gap-1 bg-[#ECE4D0] p-0.5 rounded-lg text-[10px] font-sans font-semibold">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdateSettings({ wordByWordLang: 'en' });
                      }}
                      className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                        settings.wordByWordLang === 'en'
                          ? 'bg-[#154734] text-white shadow-2xs'
                          : 'text-[#154734] hover:text-[#1D2A20]'
                      }`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdateSettings({ wordByWordLang: 'both' });
                      }}
                      className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                        settings.wordByWordLang === 'both'
                          ? 'bg-[#154734] text-white shadow-2xs'
                          : 'text-[#154734] hover:text-[#1D2A20]'
                      }`}
                    >
                      Both
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdateSettings({ wordByWordLang: 'ur' });
                      }}
                      className={`px-2 py-0.5 rounded-md transition-all cursor-pointer font-urdu ${
                        settings.wordByWordLang === 'ur'
                          ? 'bg-[#154734] text-white shadow-2xs'
                          : 'text-[#154734] hover:text-[#1D2A20]'
                      }`}
                    >
                      Urdu
                    </button>
                  </div>
                )}
              </div>

              {/* Grid of Word Cards */}
              <div className="flex flex-wrap items-stretch justify-center gap-2 sm:gap-2.5 dir-rtl text-center">
                {currentAyah.words.map((w, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-between p-2 sm:p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6DFC9] min-w-[70px] max-w-[120px] shadow-2xs hover:bg-[#FAF7F0] hover:border-[#154734]/40 transition-all group"
                  >
                    {/* Arabic word */}
                    <span className="font-arabic text-lg sm:text-xl font-bold text-[#8B2626] tracking-wide dir-rtl py-0.5 group-hover:scale-105 transition-transform">
                      {w.arabic}
                    </span>

                    {/* English Word Translation */}
                    {(settings.wordByWordLang === 'en' || settings.wordByWordLang === 'both') && (
                      <span className="text-[11.5px] sm:text-[12px] font-semibold text-[#1D2A20] leading-tight dir-ltr font-sans mt-0.5 px-0.5 text-center">
                        {w.translationEn}
                      </span>
                    )}

                    {/* Urdu Word Translation */}
                    {(settings.wordByWordLang === 'ur' || settings.wordByWordLang === 'both') && (
                      <span className="font-urdu text-[11px] sm:text-[12px] font-bold text-[#154734] leading-tight dir-rtl mt-0.5 px-0.5 text-center">
                        {w.translationUr}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Full Verse Translation in English & Urdu */}
          <div className="space-y-3 my-4">
            {/* Translation Header Bar with Quick Switch */}
            <div className="flex items-center justify-between pb-1 text-xs text-[#154734] font-sans font-bold">
              <span className="uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verse Translation</span>
              </span>
              {onUpdateSettings && (
                <div className="flex items-center gap-1 bg-[#ECE4D0] p-0.5 rounded-lg text-[10px] font-sans font-semibold">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onUpdateSettings({ primaryTranslation: 'en' });
                    }}
                    className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                      settings.primaryTranslation === 'en'
                        ? 'bg-[#154734] text-white shadow-2xs'
                        : 'text-[#154734] hover:text-[#1D2A20]'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onUpdateSettings({ primaryTranslation: 'both' });
                    }}
                    className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                      settings.primaryTranslation === 'both'
                        ? 'bg-[#154734] text-white shadow-2xs'
                        : 'text-[#154734] hover:text-[#1D2A20]'
                    }`}
                  >
                    Both
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onUpdateSettings({ primaryTranslation: 'ur' });
                    }}
                    className={`px-2 py-0.5 rounded-md transition-all cursor-pointer font-urdu ${
                      settings.primaryTranslation === 'ur'
                        ? 'bg-[#154734] text-white shadow-2xs'
                        : 'text-[#154734] hover:text-[#1D2A20]'
                    }`}
                  >
                    Urdu
                  </button>
                </div>
              )}
            </div>

            {/* English Full Translation */}
            {(settings.primaryTranslation === 'en' || settings.primaryTranslation === 'both') && (
              <div className="p-3.5 bg-[#FFFFFF] rounded-xl border border-[#E6DFC9] text-left dir-ltr shadow-2xs">
                <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-[#E6DFC9]/60">
                  <span className="text-[10px] bg-[#B88E3E] text-white px-2 py-0.5 rounded font-sans font-bold uppercase tracking-wider">
                    English Translation (Sahih International)
                  </span>
                </div>
                <p className="text-[#1D2A20] text-[15px] sm:text-[15.5px] leading-relaxed font-sans font-medium select-text">
                  {currentAyah.translationEn}
                </p>
              </div>
            )}

            {/* Urdu Full Translation */}
            {(settings.primaryTranslation === 'ur' || settings.primaryTranslation === 'both') && (
              <div className="p-3.5 bg-[#FFFFFF] rounded-xl border border-[#E6DFC9] text-right dir-rtl shadow-2xs">
                <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-[#E6DFC9]/60">
                  <span className="text-[11px] bg-[#154734] text-white px-2 py-0.5 rounded font-urdu font-bold">
                    اردو ترجمہ (مفتی تقی عثمانی / مولانا جالندھری)
                  </span>
                </div>
                <p className="font-urdu text-[16px] sm:text-[17px] text-[#1D2A20] leading-[2.2] font-semibold select-text">
                  {currentAyah.translationUr}
                </p>
              </div>
            )}
          </div>

          {/* 5. Tafseer Maarif-ul-Quran Section */}
          <div className="mt-5 pt-4 border-t border-dashed border-[#D5CDBC]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-widest font-sans text-[#154734]">
                Tafsir Highlights (Maarif-ul-Quran)
              </h3>
              {onUpdateSettings && (
                <div className="flex items-center gap-1 bg-[#ECE4D0] p-0.5 rounded-lg text-[10px] font-sans font-semibold">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onUpdateSettings({ tafseerLang: 'en' });
                    }}
                    className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                      settings.tafseerLang === 'en'
                        ? 'bg-[#154734] text-white shadow-2xs'
                        : 'text-[#154734] hover:text-[#1D2A20]'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onUpdateSettings({ tafseerLang: 'both' });
                    }}
                    className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                      settings.tafseerLang === 'both'
                        ? 'bg-[#154734] text-white shadow-2xs'
                        : 'text-[#154734] hover:text-[#1D2A20]'
                    }`}
                  >
                    Both
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onUpdateSettings({ tafseerLang: 'ur' });
                    }}
                    className={`px-2 py-0.5 rounded-md transition-all cursor-pointer font-urdu ${
                      settings.tafseerLang === 'ur'
                        ? 'bg-[#154734] text-white shadow-2xs'
                        : 'text-[#154734] hover:text-[#1D2A20]'
                    }`}
                  >
                    Urdu
                  </button>
                </div>
              )}
            </div>

            {/* English Tafseer */}
            {(settings.tafseerLang === 'en' || settings.tafseerLang === 'both') && (
              <div className="text-left text-sm leading-relaxed text-[#1D2A20] bg-[#FAF7F0] p-4 rounded-xl border border-[#E6DFC9] font-sans shadow-2xs">
                <div className="text-[10px] bg-[#B88E3E] text-white px-2 py-0.5 rounded font-sans font-bold uppercase tracking-wider inline-block mb-2.5">
                  Easy Learning Tafseer & Stories (English)
                </div>
                <InteractiveTafseerText content={currentAyah.tafseerEn} isUrdu={false} />
              </div>
            )}

            {/* Urdu Tafseer */}
            {(settings.tafseerLang === 'ur' || settings.tafseerLang === 'both') && (
              <div className="mt-3 font-urdu text-right dir-rtl text-[15px] leading-[2.3] text-[#223528] bg-[#FAF7F0] p-4 rounded-xl border border-[#E6DFC9] shadow-2xs">
                <div className="text-[11px] bg-[#154734] text-[#F3E7C4] px-2 py-0.5 rounded font-urdu font-bold inline-block mb-2 border border-[#0F3626]">
                  آسان اور سبق آموز تفسیر و فہمِ قرآن (اردو)
                </div>
                <InteractiveTafseerText content={currentAyah.tafseerUr} isUrdu={true} />
              </div>
            )}
          </div>
        </div>

        {/* Previous / Next Navigation Buttons */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            id="btn-prev-ayah"
            onClick={handlePrevAyah}
            className="flex-1 bg-[#FFFFFF] hover:bg-[#F5EFE2] text-[#1D2A20] font-bold py-3 px-4 rounded-xl border border-[#E6DFC9] shadow-xs flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer font-sans"
          >
            <ChevronLeft className="w-5 h-5 text-[#154734]" />
            <span>Previous Verse</span>
          </button>

          <button
            id="btn-reader-quick-options"
            onClick={() => onOpenSelectOption(currentAyah)}
            className="bg-[#154734] hover:bg-[#0F3626] text-white p-3 rounded-xl shadow-xs flex items-center justify-center active:scale-95 transition-all cursor-pointer"
            title="Options"
          >
            <List className="w-5 h-5" />
          </button>

          <button
            id="btn-next-ayah"
            onClick={handleNextAyah}
            className="flex-1 bg-[#FFFFFF] hover:bg-[#F5EFE2] text-[#1D2A20] font-bold py-3 px-4 rounded-xl border border-[#E6DFC9] shadow-xs flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer font-sans"
          >
            <span>Next Verse</span>
            <ChevronRight className="w-5 h-5 text-[#154734]" />
          </button>
        </div>
      </div>

      {/* Floating Audio Sticky Bar */}
      {isPlaying && (
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#0F3626] text-[#FCFAF5] px-3.5 py-2 z-40 shadow-2xl flex items-center justify-between rounded-t-xl border-t border-[#C5A059]/40">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#154734] border border-[#C5A059]/50 flex items-center justify-center animate-pulse">
              <Volume2 className="w-3.5 h-3.5 text-[#F3E7C4]" />
            </div>
            <div>
              <p className="text-xs font-bold text-white font-sans leading-tight">
                {currentAyah.surahNameEnglish} {currentAyah.ayahNumber}
              </p>
              <p className="text-[9.5px] text-[#C5A059] font-sans">Alafasy</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrevAyah}
              className="p-1 text-[#F3E7C4] hover:text-white cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={togglePlayAudio}
              className="w-7 h-7 rounded-full bg-[#154734] hover:bg-[#1A523C] text-[#F3E7C4] border border-[#C5A059]/50 flex items-center justify-center cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
            </button>
            <button
              onClick={handleNextAyah}
              className="p-1 text-[#F3E7C4] hover:text-white cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step-by-Step Tafseer Review Confirmation Modal Popup */}
      {showNextAyahPrompt && currentAyah.surahNumber === 2 && currentAyah.ayahNumber <= 141 && currentAyah.ayahNumber > 1 && (
        <div className="fixed inset-0 bg-black/45 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-[#FCFAF5] border-2 border-[#154734] rounded-2xl max-w-md w-full p-5 shadow-2xl text-center space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 rounded-full bg-[#154734]/15 text-[#154734] flex items-center justify-center mx-auto shadow-inner border border-[#154734]/20">
              <Sparkles className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-[#154734] uppercase tracking-wider bg-[#F5EFE2] border border-[#E6DFC9] px-3 py-1 rounded-full font-sans">
                پارہ ۱ مفصل جائزہ (آیت {currentAyah.ayahNumber})
              </span>
              <h3 className="text-base font-bold font-urdu text-[#1D2A20] pt-1">
                آیت {currentAyah.ayahNumber} کی تفصیلی تفسیر و جامع ترجمہ مکمل ہو چکا ہے
              </h3>
              <p className="text-sm font-urdu text-[#68796C] leading-relaxed">
                کیا اگلی آیت (آیت {currentAyah.ayahNumber - 1}) کی تفصیلی تفسیر اور مفصل ترجمہ بھی اسی طرح تیار کریں؟
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowNextAyahPrompt(true);
                  onSelectAyah(2, currentAyah.ayahNumber - 1);
                }}
                className="flex-1 bg-[#154734] hover:bg-[#0F3626] text-white font-bold py-2.5 px-3 rounded-xl shadow-md transition-all font-urdu text-sm cursor-pointer active:scale-98"
              >
                جی ہاں، اگلی آیت ({currentAyah.ayahNumber - 1}) کریں
              </button>
              <button
                type="button"
                onClick={() => setShowNextAyahPrompt(false)}
                className="flex-1 bg-[#ECE4D0] hover:bg-[#DFD5BE] text-[#1D2A20] font-semibold py-2.5 px-3 rounded-xl transition-all font-urdu text-sm cursor-pointer"
              >
                فی الحال اسی کا مطالعہ کریں
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

