import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Share2,
  BookOpen,
  List,
  Play,
  Pause,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Copy,
  Check,
  Bookmark as BookmarkIcon,
  Maximize,
  Minimize,
  Sliders,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  CheckSquare,
  Compass,
  AlertCircle
} from 'lucide-react';
import { Ayah, UserSettings } from '../types';
import { ALL_PARA1_AYAHS, getAudioUrlForAyah } from '../data/quranProvider';
import { getAyahQA, getAyahActionPoints } from '../data/ayahStudyData';
import { saveLastRead } from '../utils/storage';

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
}) => {
  const currentAyah =
    ALL_PARA1_AYAHS.find(
      (a) => a.surahNumber === currentSurahNumber && a.ayahNumber === currentAyahNumber
    ) || ALL_PARA1_AYAHS[0];

  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const tabsScrollRef = useRef<HTMLDivElement | null>(null);

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

    audio.onloadedmetadata = () => {
      setAudioDuration(audio.duration || 0);
    };

    audio.ontimeupdate = () => {
      if (audio.duration) {
        setAudioProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.onended = () => {
      setIsPlaying(false);
      setAudioProgress(0);
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
    const currentIndex = ALL_PARA1_AYAHS.findIndex(
      (a) => a.surahNumber === currentAyah.surahNumber && a.ayahNumber === currentAyah.ayahNumber
    );
    if (currentIndex > 0) {
      const prev = ALL_PARA1_AYAHS[currentIndex - 1];
      onSelectAyah(prev.surahNumber, prev.ayahNumber);
    }
  };

  const handleNextAyah = () => {
    const currentIndex = ALL_PARA1_AYAHS.findIndex(
      (a) => a.surahNumber === currentAyah.surahNumber && a.ayahNumber === currentAyah.ayahNumber
    );
    if (currentIndex < ALL_PARA1_AYAHS.length - 1) {
      const next = ALL_PARA1_AYAHS[currentIndex + 1];
      onSelectAyah(next.surahNumber, next.ayahNumber);
    }
  };

  // Surah Ayah tabs ribbon (e.g. الفاتحة 4, الفاتحة 5, الفاتحة 6)
  const surahAyahs = ALL_PARA1_AYAHS.filter((a) => a.surahNumber === currentAyah.surahNumber);

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
    const text = `${currentAyah.arabic}\n\n${currentAyah.translationUr}\n\n${currentAyah.translationEn}\n\n[Maarif ul Quran - ${currentAyah.surahNameEnglish} ${currentAyah.surahNumber}:${currentAyah.ayahNumber}]`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div
      id="ayah-reader-screen"
      className={`min-h-screen pb-28 ${
        settings.theme === 'sepia'
          ? 'bg-[#FCF9F1] text-[#2D2D2D]'
          : settings.theme === 'dark'
          ? 'bg-[#1E1C18] text-[#EDE9DE]'
          : 'bg-[#FCF9F1] text-[#2D2D2D]'
      }`}
    >
      {/* Top Header Bar matching Professional Polish theme */}
      <div className="bg-[#7D6B4B] text-white sticky top-0 z-30 shadow-sm border-b border-[#63553C]">
        <div className="px-3 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button
              id="btn-reader-back"
              onClick={onBack}
              className="p-1.5 rounded-full hover:bg-[#63553C] active:bg-[#524631] text-white cursor-pointer"
              aria-label="Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="font-bold text-sm ml-1 text-white tracking-wide font-serif">
              {currentAyah.surahNameEnglish} ({currentAyah.ayahNumber})
            </span>
          </div>

          <div className="flex items-center gap-0.5">
            {/* Share / Options */}
            <button
              id="btn-reader-share"
              onClick={() => onOpenSelectOption(currentAyah)}
              className="p-2 rounded-full hover:bg-[#63553C] active:bg-[#524631] text-white cursor-pointer"
              title="Share & Options"
            >
              <Share2 className="w-4.5 h-4.5" />
            </button>

            {/* Mushaf Mode */}
            <button
              id="btn-reader-mushaf"
              onClick={onOpenMushaf}
              className="p-2 rounded-full hover:bg-[#63553C] active:bg-[#524631] text-white cursor-pointer"
              title="Mushaf Mode"
            >
              <BookOpen className="w-4.5 h-4.5" />
            </button>

            {/* Options Modal button */}
            <button
              id="btn-reader-options"
              onClick={() => onOpenSelectOption(currentAyah)}
              className="p-2 rounded-full hover:bg-[#63553C] active:bg-[#524631] text-white cursor-pointer"
              title="Ayah Options"
            >
              <List className="w-4.5 h-4.5" />
            </button>

            {/* Play Audio Button */}
            <button
              id="btn-reader-play"
              onClick={togglePlayAudio}
              className={`p-2 rounded-full text-white transition-all cursor-pointer ${
                isPlaying ? 'bg-[#524631]' : 'hover:bg-[#63553C]'
              }`}
              title={isPlaying ? 'Pause Recitation' : 'Play Recitation'}
            >
              {isPlaying ? <Pause className="w-4.5 h-4.5 fill-current" /> : <Play className="w-4.5 h-4.5 fill-current" />}
            </button>

            {/* More menu */}
            <button
              id="btn-reader-more"
              onClick={onOpenSettings}
              className="p-2 rounded-full hover:bg-[#63553C] active:bg-[#524631] text-white cursor-pointer"
              title="Settings"
            >
              <MoreVertical className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Horizontal Ayah Pager / Tabs ribbon */}
        <div
          ref={tabsScrollRef}
          className="flex items-center overflow-x-auto scrollbar-none px-2 border-t border-[#63553C] bg-[#63553C] text-xs font-medium text-[#EDE9DE]"
        >
          {surahAyahs.map((a) => {
            const isSelected = a.ayahNumber === currentAyah.ayahNumber;
            return (
              <button
                key={a.id}
                onClick={() => onSelectAyah(a.surahNumber, a.ayahNumber)}
                className={`py-2 px-3.5 whitespace-nowrap transition-all font-arabic text-sm cursor-pointer ${
                  isSelected
                    ? 'active-tab text-white font-bold border-b-2 border-[#FCF9F1] bg-[#524631]'
                    : 'text-[#EDE9DE]/80 hover:text-white hover:bg-[#524631]/40'
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
          id="main-ayah-card"
          className={`rounded-2xl shadow-xs border p-5 transition-all relative ${
            settings.theme === 'sepia'
              ? 'bg-[#FDFCF8] border-[#E5E0D0]'
              : settings.theme === 'dark'
              ? 'bg-[#262420] border-[#3D3A34] text-[#EDE9DE]'
              : 'bg-[#FDFCF8] border-[#E5E0D0]'
          }`}
          onClick={() => onOpenSelectOption(currentAyah)}
        >
          {/* Quick Ayah Actions bar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E0D0] text-xs text-[#9A8D70] font-sans">
            <span className="font-semibold text-[#7D6B4B] flex items-center gap-1">
              <span>Para 1</span> • <span>Ruku {currentAyah.rukuNumber}</span> • <span>Page {currentAyah.pageNumber}</span>
            </span>
            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={handleCopyText}
                className="p-1 text-[#9A8D70] hover:text-[#7D6B4B] transition-colors cursor-pointer"
                title="Copy Ayah"
              >
                {copied ? <Check className="w-4 h-4 text-[#7D6B4B]" /> : <Copy className="w-4 h-4" />}
              </button>
              <button
                onClick={() => onSaveBookmark(currentAyah)}
                className="p-1 text-[#9A8D70] hover:text-[#7D6B4B] transition-colors cursor-pointer"
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
              className="font-quran leading-[2.4] text-[#2D2D2D] font-bold dir-rtl select-text"
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
            <div className="border-t border-[#E5E0D0] w-full" />
            <div className="absolute bg-[#7D6B4B] text-white px-3.5 py-0.5 text-xs font-bold rounded-full font-sans tracking-widest uppercase shadow-2xs">
              Verse {currentAyah.ayahNumber}
            </div>
          </div>

          {/* 3. Word-by-Word Translation Section */}
          {settings.showWordByWord && currentAyah.words && currentAyah.words.length > 0 && (
            <div
              id="word-by-word-section"
              className="my-4 p-4 bg-[#F4F1E6]/80 rounded-xl border border-[#E5E0D0]"
            >
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3.5 dir-rtl text-center">
                {currentAyah.words.map((w, idx) => (
                  <div key={idx} className="flex flex-col items-center min-w-[50px]">
                    {/* Arabic word */}
                    <span className="font-arabic text-lg font-bold text-[#8B2626] tracking-wide dir-rtl">
                      {w.arabic}
                    </span>
                    {/* Meaning underneath */}
                    {(settings.wordByWordLang === 'en' || settings.wordByWordLang === 'both') && (
                      <span className="text-[12px] font-medium text-[#2D2D2D] leading-tight mt-0.5 dir-ltr font-sans">
                        {w.translationEn}
                      </span>
                    )}
                    {(settings.wordByWordLang === 'ur' || settings.wordByWordLang === 'both') && (
                      <span className="font-urdu text-[11px] font-semibold text-[#7D6B4B] leading-tight mt-0.5 dir-rtl">
                        {w.translationUr}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Full Verse Translation (English & Urdu) */}
          <div className="space-y-3 my-4">
            {/* English Translation */}
            {(settings.primaryTranslation === 'en' || settings.primaryTranslation === 'both') && (
              <div className="text-[#4A4A4A] text-[15px] leading-relaxed font-sans font-medium">
                <p>{currentAyah.translationEn}</p>
              </div>
            )}

            {/* Urdu Translation */}
            {(settings.primaryTranslation === 'ur' || settings.primaryTranslation === 'both') && (
              <div className="text-right dir-rtl font-urdu text-[16px] text-[#2D2D2D] leading-[2.1] font-semibold pt-2 border-t border-[#E5E0D0]">
                <p>{currentAyah.translationUr}</p>
              </div>
            )}
          </div>

          {/* 5. Tafseer Maarif-ul-Quran Section */}
          <div className="mt-5 pt-4 border-t border-dashed border-[#DCD7C9]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-widest font-sans text-[#7D6B4B]">
                Tafsir Highlights (Maarif-ul-Quran)
              </h3>
            </div>

            {/* Urdu Tafseer */}
            {(settings.tafseerLang === 'ur' || settings.tafseerLang === 'both') && (
              <div className="font-urdu text-right dir-rtl text-[15px] leading-[2.3] text-[#4A4A4A] bg-[#F4F1E6]/60 p-4 rounded-xl border border-[#E5E0D0] whitespace-pre-line">
                {currentAyah.tafseerUr}
              </div>
            )}

            {/* English Tafseer */}
            {(settings.tafseerLang === 'en' || settings.tafseerLang === 'both') && (
              <div className="mt-3 text-left text-sm leading-relaxed text-[#4A4A4A] bg-[#F4F1E6]/60 p-4 rounded-xl border border-[#E5E0D0] whitespace-pre-line font-sans">
                {currentAyah.tafseerEn}
              </div>
            )}
          </div>

          {/* 6. Easy Questions & Answers (فہمِ تفسیر - آسان سوال و جواب) */}
          {(() => {
            const qaList = getAyahQA(currentAyah.surahNumber, currentAyah.ayahNumber, currentAyah);
            if (!qaList || qaList.length === 0) return null;
            return (
              <div id="ayah-qa-section" className="mt-5 pt-4 border-t border-dashed border-[#DCD7C9]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="p-1 rounded-md bg-[#7D6B4B]/15 text-[#7D6B4B]">
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <h3 className="text-xs font-bold uppercase tracking-wider font-sans text-[#7D6B4B]">
                      تفسیر کے آسان سوال و جواب (Q&A)
                    </h3>
                  </div>
                  <span className="text-[11px] font-urdu font-medium text-[#9A8D70] bg-[#F4F1E6] px-2 py-0.5 rounded-md border border-[#E5E0D0]">
                    فہمِ قرآن
                  </span>
                </div>

                <div className="space-y-3">
                  {qaList.map((qaItem, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F4F1E6]/50 rounded-xl p-3.5 border border-[#E5E0D0] transition-colors"
                    >
                      {/* Question */}
                      <div className="flex items-start gap-2 text-right dir-rtl mb-2">
                        <span className="bg-[#7D6B4B] text-white text-[11px] font-bold px-1.5 py-0.5 rounded shrink-0 font-urdu mt-0.5">
                          سوال {idx + 1}:
                        </span>
                        <p className="font-urdu text-[15px] font-bold text-[#2D2D2D] leading-[1.9]">
                          {qaItem.questionUr}
                        </p>
                      </div>

                      {/* Answer */}
                      <div className="flex items-start gap-2 text-right dir-rtl bg-white/70 p-3 rounded-lg border border-[#E5E0D0]/80">
                        <span className="bg-[#524631] text-[#FCF9F1] text-[11px] font-bold px-1.5 py-0.5 rounded shrink-0 font-urdu mt-0.5">
                          جواب:
                        </span>
                        <p className="font-urdu text-[14.5px] text-[#4A4A4A] leading-[2.1]">
                          {qaItem.answerUr}
                        </p>
                      </div>

                      {/* English QA if enabled in settings */}
                      {(settings.primaryTranslation === 'en' || settings.tafseerLang === 'en' || settings.tafseerLang === 'both') && qaItem.questionEn && (
                        <div className="mt-2.5 pt-2 border-t border-[#E5E0D0]/60 text-left font-sans text-xs space-y-1">
                          <p className="font-semibold text-[#2D2D2D]">
                            <span className="text-[#7D6B4B]">Q{idx + 1}: </span>{qaItem.questionEn}
                          </p>
                          <p className="text-[#555] pl-4 border-l-2 border-[#7D6B4B]/40 leading-relaxed">
                            {qaItem.answerEn}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* 7. Practical Guidance & Injunctions (عملی ہدایات و احکام - ہمیں کیا عمل کرنا چاہیے؟) */}
          {(() => {
            const actionList = getAyahActionPoints(currentAyah.surahNumber, currentAyah.ayahNumber, currentAyah);
            if (!actionList || actionList.length === 0) return null;
            return (
              <div id="ayah-actions-section" className="mt-5 pt-4 border-t border-dashed border-[#DCD7C9]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="p-1 rounded-md bg-[#7D6B4B]/15 text-[#7D6B4B]">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <h3 className="text-xs font-bold uppercase tracking-wider font-sans text-[#7D6B4B]">
                      عملی ہدایات و احکام (ہمیں کیا عمل کرنا چاہیے؟)
                    </h3>
                  </div>
                  <span className="text-[11px] font-urdu font-medium text-[#7D6B4B] bg-[#7D6B4B]/10 px-2 py-0.5 rounded-md border border-[#7D6B4B]/20">
                    حکمِ الٰہی و عملی سبق
                  </span>
                </div>

                <div className="space-y-2.5">
                  {actionList.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FDFCF8] border border-[#E5E0D0] text-right dir-rtl shadow-2xs"
                    >
                      <div className="mt-1 shrink-0">
                        {item.category === 'prohibition' ? (
                          <AlertCircle className="w-4 h-4 text-[#8B2626]" />
                        ) : item.category === 'dua' ? (
                          <Compass className="w-4 h-4 text-[#7D6B4B]" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-[#436436]" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 mb-1 justify-start">
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full font-urdu ${
                              item.category === 'prohibition'
                                ? 'bg-red-100 text-red-800'
                                : item.category === 'dua'
                                ? 'bg-amber-100 text-amber-900'
                                : item.category === 'command'
                                ? 'bg-emerald-100 text-emerald-900'
                                : 'bg-[#EAE5D5] text-[#524631]'
                            }`}
                          >
                            {item.category === 'prohibition'
                              ? 'ممانعت / بچنے کا حکم'
                              : item.category === 'dua'
                              ? 'دعائیہ ہدایت'
                              : item.category === 'command'
                              ? 'حکمِ الٰہی'
                              : 'عملی سبق'}
                          </span>
                        </div>
                        <p className="font-urdu text-[14.5px] leading-[2.1] text-[#2D2D2D] font-medium">
                          {item.actionUr}
                        </p>
                        {(settings.primaryTranslation === 'en' || settings.tafseerLang === 'en' || settings.tafseerLang === 'both') && item.actionEn && (
                          <p className="mt-1 text-left font-sans text-xs text-[#555] dir-ltr leading-relaxed border-t border-[#E5E0D0]/50 pt-1">
                            {item.actionEn}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Navigation buttons: Prev Ayah / Next Ayah */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <button
            id="btn-prev-ayah"
            onClick={handlePrevAyah}
            className="flex-1 bg-[#FDFCF8] hover:bg-[#F4F1E6] text-[#2D2D2D] font-bold py-2.5 px-4 rounded-xl border border-[#E5E0D0] shadow-2xs flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer font-sans"
          >
            <ChevronLeft className="w-4.5 h-4.5 text-[#7D6B4B]" />
            <span className="text-xs">Previous Ayah</span>
          </button>

          <button
            id="btn-reader-quick-options"
            onClick={() => onOpenSelectOption(currentAyah)}
            className="bg-[#7D6B4B] hover:bg-[#63553C] text-white p-2.5 rounded-xl shadow-2xs flex items-center justify-center active:scale-95 transition-all cursor-pointer"
            title="Options"
          >
            <List className="w-5 h-5" />
          </button>

          <button
            id="btn-next-ayah"
            onClick={handleNextAyah}
            className="flex-1 bg-[#FDFCF8] hover:bg-[#F4F1E6] text-[#2D2D2D] font-bold py-2.5 px-4 rounded-xl border border-[#E5E0D0] shadow-2xs flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer font-sans"
          >
            <span className="text-xs">Next Ayah</span>
            <ChevronRight className="w-4.5 h-4.5 text-[#7D6B4B]" />
          </button>
        </div>
      </div>

      {/* Floating Audio Sticky Control Bar */}
      {isPlaying && (
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#2D2D2D] text-[#FCF9F1] px-4 py-2.5 z-40 shadow-2xl flex items-center justify-between rounded-t-2xl border-t border-[#7D6B4B] animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#7D6B4B] flex items-center justify-center animate-pulse">
              <Volume2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-white font-sans">
                Recitation: {currentAyah.surahNameEnglish} {currentAyah.ayahNumber}
              </p>
              <p className="text-[10px] text-[#9A8D70] font-sans">Mishary Rashid Alafasy</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevAyah}
              className="p-1.5 text-[#EDE9DE] hover:text-white active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={togglePlayAudio}
              className="w-9 h-9 rounded-full bg-[#7D6B4B] hover:bg-[#63553C] text-white flex items-center justify-center active:scale-95 transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4.5 h-4.5 fill-current" /> : <Play className="w-4.5 h-4.5 fill-current ml-0.5" />}
            </button>
            <button
              onClick={handleNextAyah}
              className="p-1.5 text-[#EDE9DE] hover:text-white active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
