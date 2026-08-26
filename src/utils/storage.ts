import { Bookmark, CollectionItem, NoteItem, LastReadState, UserSettings } from '../types';

const STORAGE_KEYS = {
  BOOKMARKS: 'maarif_bookmarks_v1',
  COLLECTIONS: 'maarif_collections_v1',
  NOTES: 'maarif_notes_v1',
  LAST_READ_AUTO: 'maarif_last_read_auto_v1',
  LAST_READ_MANUAL: 'maarif_last_read_manual_v1',
  SETTINGS: 'maarif_settings_v1',
};

export const DEFAULT_SETTINGS: UserSettings = {
  arabicFontSize: 28,
  translationFontSize: 16,
  tafseerFontSize: 15,
  arabicFontFamily: 'Amiri',
  showWordByWord: true,
  wordByWordLang: 'en', // 'en' | 'ur' | 'both'
  primaryTranslation: 'both', // 'ur' | 'en' | 'both'
  tafseerLang: 'both', // 'ur' | 'en' | 'both'
  audioReciter: 'Alafasy_128kbps',
  playbackSpeed: 1,
  autoPlayNext: true,
  theme: 'light',
};

export function getStoredSettings(): UserSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch (e) {
    console.error(e);
  }
  return DEFAULT_SETTINGS;
}

export function saveStoredSettings(settings: UserSettings): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (e) {
    console.error(e);
  }
}

export function getBookmarks(): Bookmark[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  return [
    {
      id: 'bm-1',
      surahNumber: 1,
      ayahNumber: 5,
      surahName: 'Al-Faatiha',
      arabicPreview: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ط',
      translationPreview: 'ہم صرف تیری ہی عبادت کرتے ہیں اور صرف تجھ ہی سے مدد مانگتے ہیں۔',
      createdAt: Date.now() - 3600000,
    },
    {
      id: 'bm-2',
      surahNumber: 2,
      ayahNumber: 2,
      surahName: 'Al-Baqara',
      arabicPreview: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ',
      translationPreview: 'یہ وہ کتاب ہے جس میں کوئی شک نہیں، پرہیزگاروں کے لیے ہدایت ہے۔',
      createdAt: Date.now() - 7200000,
    }
  ];
}

export function saveBookmarks(bookmarks: Bookmark[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
  } catch (e) {
    console.error(e);
  }
}

export function getCollections(): CollectionItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COLLECTIONS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  return [
    {
      id: 'col-1',
      name: 'Daily Supplications & Dua',
      color: '#16a34a',
      description: 'Important Quranic Duas from Para 1',
      ayahs: [
        {
          surahNumber: 1,
          ayahNumber: 6,
          surahName: 'Al-Faatiha',
          arabicText: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ'
        },
        {
          surahNumber: 2,
          ayahNumber: 127,
          surahName: 'Al-Baqara',
          arabicText: 'رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ'
        },
        {
          surahNumber: 2,
          ayahNumber: 128,
          surahName: 'Al-Baqara',
          arabicText: 'رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ'
        }
      ],
      createdAt: Date.now() - 86400000,
    },
    {
      id: 'col-2',
      name: 'Muttaqeen & Taqwa Ayat',
      color: '#0284c7',
      description: 'Verses detailing the attributes of the God-fearing',
      ayahs: [
        {
          surahNumber: 2,
          ayahNumber: 2,
          surahName: 'Al-Baqara',
          arabicText: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ'
        },
        {
          surahNumber: 2,
          ayahNumber: 3,
          surahName: 'Al-Baqara',
          arabicText: 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ'
        }
      ],
      createdAt: Date.now() - 172800000,
    }
  ];
}

export function saveCollections(collections: CollectionItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.COLLECTIONS, JSON.stringify(collections));
  } catch (e) {
    console.error(e);
  }
}

export function getNotes(): NoteItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.NOTES);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  return [
    {
      id: 'note-1',
      surahNumber: 1,
      ayahNumber: 5,
      surahName: 'Al-Faatiha',
      title: 'Tawheed in Isti\'anah (Seeking Divine Help)',
      content: 'In Maarif ul Quran, Mufti Shafi notes that saying "Iyyaka Na\'budu" precedes "Iyyaka Nasta\'een" because worship is our duty, while seeking help is asking for divine grace to fulfill our purpose.',
      createdAt: Date.now() - 86400000,
      updatedAt: Date.now() - 86400000,
    },
    {
      id: 'note-2',
      surahNumber: 2,
      ayahNumber: 138,
      surahName: 'Al-Baqara',
      title: 'Sibghatullah - The True Color of Allah',
      content: 'Reflecting on the pure spiritual essence of Islam that cleanses and colors all human character.',
      createdAt: Date.now() - 43200000,
      updatedAt: Date.now() - 43200000,
    }
  ];
}

export function saveNotes(notes: NoteItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
  } catch (e) {
    console.error(e);
  }
}

export function getLastRead(type: 'automatic' | 'manual'): LastReadState {
  try {
    const key = type === 'automatic' ? STORAGE_KEYS.LAST_READ_AUTO : STORAGE_KEYS.LAST_READ_MANUAL;
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  return {
    surahNumber: 1,
    ayahNumber: 1,
    timestamp: Date.now(),
    type,
  };
}

export function saveLastRead(state: LastReadState): void {
  try {
    const key = state.type === 'automatic' ? STORAGE_KEYS.LAST_READ_AUTO : STORAGE_KEYS.LAST_READ_MANUAL;
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
}
