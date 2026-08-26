export interface WordDetail {
  arabic: string;
  transliteration?: string;
  translationEn: string;
  translationUr: string;
}

export interface AyahQA {
  questionUr: string;
  answerUr: string;
  questionEn?: string;
  answerEn?: string;
}

export interface AyahActionItem {
  actionUr: string;
  actionEn?: string;
  category?: 'command' | 'lesson' | 'prohibition' | 'dua';
}

export interface Ayah {
  id: number;
  surahNumber: number;
  surahNameArabic: string;
  surahNameEnglish: string;
  ayahNumber: number;
  juzNumber: number;
  pageNumber: number;
  rukuNumber: number;
  arabic: string;
  words: WordDetail[];
  translationUr: string;
  translationEn: string;
  tafseerUr: string;
  tafseerEn: string;
  audioUrl?: string;
  qa?: AyahQA[];
  actionPoints?: AyahActionItem[];
}

export interface SurahMeta {
  number: number;
  nameEnglish: string;
  nameArabic: string;
  revelationType: 'Meccan' | 'Medinan';
  totalVerses: number;
  para1VersesCount: number; // verses included in Para 1
  startAyahNumber: number;
  endAyahNumber: number;
}

export interface Bookmark {
  id: string;
  surahNumber: number;
  ayahNumber: number;
  surahName: string;
  arabicPreview: string;
  translationPreview: string;
  createdAt: number;
}

export interface CollectionItem {
  id: string;
  name: string;
  color: string;
  description: string;
  ayahs: {
    surahNumber: number;
    ayahNumber: number;
    surahName: string;
    arabicText: string;
  }[];
  createdAt: number;
}

export interface NoteItem {
  id: string;
  surahNumber: number;
  ayahNumber: number;
  surahName: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
}

export interface LastReadState {
  surahNumber: number;
  ayahNumber: number;
  timestamp: number;
  type: 'automatic' | 'manual';
}

export interface UserSettings {
  arabicFontSize: number; // e.g. 28
  translationFontSize: number; // e.g. 16
  tafseerFontSize: number; // e.g. 15
  arabicFontFamily: 'Amiri' | 'Scheherazade New' | 'Noto Naskh Arabic' | 'Amiri Quran';
  showWordByWord: boolean;
  wordByWordLang: 'en' | 'ur' | 'both';
  primaryTranslation: 'ur' | 'en' | 'both';
  tafseerLang: 'ur' | 'en' | 'both';
  audioReciter: string;
  playbackSpeed: number;
  autoPlayNext: boolean;
  theme: 'light' | 'sepia' | 'dark';
}
