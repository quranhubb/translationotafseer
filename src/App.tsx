import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { QuickActionsGrid } from './components/QuickActionsGrid';
import { SurahList } from './components/SurahList';
import { ParahList } from './components/ParahList';
import { MushafView } from './components/MushafView';
import { BookmarksView } from './components/BookmarksView';
import { CollectionsView } from './components/CollectionsView';
import { BottomNavBar, MainTabType } from './components/BottomNavBar';
import { FloatingLastRead } from './components/FloatingLastRead';
import { AyahReaderView } from './components/AyahReaderView';
import { SelectOptionModal } from './components/SelectOptionModal';

// Action Modals
import { GoToAyahModal } from './components/GoToAyahModal';
import { SearchModal } from './components/SearchModal';
import { NotesModal } from './components/NotesModal';
import { AuthorModal } from './components/AuthorModal';
import { BackupModal } from './components/BackupModal';
import { WebsiteModal } from './components/WebsiteModal';
import { FeedbackModal } from './components/FeedbackModal';
import { SettingsModal } from './components/SettingsModal';
import { ShareModal } from './components/ShareModal';

import {
  getStoredSettings,
  saveStoredSettings,
  getBookmarks,
  saveBookmarks,
  getCollections,
  saveCollections,
  getNotes,
  saveNotes,
  saveLastRead,
} from './utils/storage';
import { Ayah, Bookmark, CollectionItem, NoteItem, SurahMeta, UserSettings } from './types';
import { ALL_PARA1_AYAHS } from './data/quranProvider';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // Navigation State - Parah first as default
  const [activeTab, setActiveTab] = useState<MainTabType>('parah');
  const [activeReader, setActiveReader] = useState<{ surahNumber: number; ayahNumber: number } | null>(null);

  // Storage State
  const [settings, setSettings] = useState<UserSettings>(getStoredSettings());
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(getBookmarks());
  const [collections, setCollections] = useState<CollectionItem[]>(getCollections());
  const [notes, setNotes] = useState<NoteItem[]>(getNotes());

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Modals visibility
  const [selectedOptionAyah, setSelectedOptionAyah] = useState<Ayah | null>(null);
  const [showGoToModal, setShowGoToModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [notesDefaultAyah, setNotesDefaultAyah] = useState<{ surahNumber: number; ayahNumber: number; surahName: string } | undefined>(undefined);
  const [showAuthorModal, setShowAuthorModal] = useState(false);
  const [showBackupModal, setShowBackupModal] = useState(false);
  const [showWebsiteModal, setShowWebsiteModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareAyah, setShareAyah] = useState<Ayah | null>(null);

  // Settings updater
  const handleUpdateSettings = (newPartial: Partial<UserSettings>) => {
    const updated = { ...settings, ...newPartial };
    setSettings(updated);
    saveStoredSettings(updated);
  };

  // Open Reader
  const handleOpenAyah = (surahNumber: number, ayahNumber: number) => {
    setActiveReader({ surahNumber, ayahNumber });
  };

  const handleSelectSurah = (surah: SurahMeta) => {
    // If Surah is in Para 1, open at Ayah 1
    if (surah.number <= 2) {
      handleOpenAyah(surah.number, 1);
    } else {
      showToast(`Surah ${surah.nameEnglish} is in Para 2-30. Currently viewing Para 1.`);
    }
  };

  // Bookmark actions
  const handleAddBookmark = (ayah: Ayah) => {
    const exists = bookmarks.some(
      (b) => b.surahNumber === ayah.surahNumber && b.ayahNumber === ayah.ayahNumber
    );
    if (exists) {
      showToast('Ayah is already in bookmarks');
      return;
    }
    const newBm: Bookmark = {
      id: `bm-${Date.now()}`,
      surahNumber: ayah.surahNumber,
      ayahNumber: ayah.ayahNumber,
      surahName: ayah.surahNameEnglish,
      arabicPreview: ayah.arabic,
      translationPreview: ayah.translationUr,
      createdAt: Date.now(),
    };
    const updated = [newBm, ...bookmarks];
    setBookmarks(updated);
    saveBookmarks(updated);
    showToast(`Saved ${ayah.surahNameEnglish} ${ayah.ayahNumber} to bookmarks!`);
  };

  const handleDeleteBookmark = (id: string) => {
    const updated = bookmarks.filter((b) => b.id !== id);
    setBookmarks(updated);
    saveBookmarks(updated);
    showToast('Bookmark removed');
  };

  // Collection actions
  const handleCreateCollection = (name: string, description: string, color: string) => {
    const newCol: CollectionItem = {
      id: `col-${Date.now()}`,
      name,
      description,
      color,
      ayahs: [],
      createdAt: Date.now(),
    };
    const updated = [newCol, ...collections];
    setCollections(updated);
    saveCollections(updated);
    showToast(`Created collection "${name}"`);
  };

  const handleAddToCollection = (ayah: Ayah) => {
    if (collections.length === 0) {
      handleCreateCollection('My Saved Verses', 'Important verses from Para 1', '#16a34a');
    }
    // Add to first collection
    const target = collections[0];
    if (target) {
      const exists = target.ayahs.some(
        (a) => a.surahNumber === ayah.surahNumber && a.ayahNumber === ayah.ayahNumber
      );
      if (exists) {
        showToast('Ayah already exists in this collection');
        return;
      }
      const updatedCol: CollectionItem = {
        ...target,
        ayahs: [
          ...target.ayahs,
          {
            surahNumber: ayah.surahNumber,
            ayahNumber: ayah.ayahNumber,
            surahName: ayah.surahNameEnglish,
            arabicText: ayah.arabic,
          },
        ],
      };
      const updatedCollections = collections.map((c) => (c.id === target.id ? updatedCol : c));
      setCollections(updatedCollections);
      saveCollections(updatedCollections);
      showToast(`Added ${ayah.surahNameEnglish} ${ayah.ayahNumber} to "${target.name}"`);
    }
  };

  const handleDeleteCollection = (id: string) => {
    const updated = collections.filter((c) => c.id !== id);
    setCollections(updated);
    saveCollections(updated);
    showToast('Collection deleted');
  };

  // Notes actions
  const handleSaveNote = (noteData: Omit<NoteItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newNote: NoteItem = {
      ...noteData,
      id: `note-${Date.now()}`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    const updated = [newNote, ...notes];
    setNotes(updated);
    saveNotes(updated);
    showToast('Note saved successfully');
  };

  const handleDeleteNote = (id: string) => {
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);
    saveNotes(updated);
    showToast('Note deleted');
  };

  // Manual Last Read
  const handleSetManualLastRead = (ayah: Ayah) => {
    saveLastRead({
      surahNumber: ayah.surahNumber,
      ayahNumber: ayah.ayahNumber,
      timestamp: Date.now(),
      type: 'manual',
    });
    showToast(`Set Manual Last Read to ${ayah.surahNameEnglish} (Ayah ${ayah.ayahNumber})`);
  };

  // Restore backup
  const handleRestoreData = (data: {
    bookmarks?: Bookmark[];
    collections?: CollectionItem[];
    notes?: NoteItem[];
  }) => {
    if (data.bookmarks) {
      setBookmarks(data.bookmarks);
      saveBookmarks(data.bookmarks);
    }
    if (data.collections) {
      setCollections(data.collections);
      saveCollections(data.collections);
    }
    if (data.notes) {
      setNotes(data.notes);
      saveNotes(data.notes);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F3EB] text-[#1E2B22] font-sans antialiased flex flex-col justify-between selection:bg-[#154734]/15 selection:text-[#154734]">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#123626] text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-2xl flex items-center gap-2 border border-[#C5A059]/50 animate-in fade-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#E8D19D]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container - Responsive Mobile Max-Width */}
      <div className="w-full max-w-md mx-auto bg-[#FCFAF5] min-h-screen shadow-2xl relative flex flex-col border-x border-[#E6DFC9]">
        {/* If Active Reader is open, display Reader View */}
        {activeReader ? (
          <AyahReaderView
            currentSurahNumber={activeReader.surahNumber}
            currentAyahNumber={activeReader.ayahNumber}
            settings={settings}
            onBack={() => setActiveReader(null)}
            onSelectAyah={(s, a) => setActiveReader({ surahNumber: s, ayahNumber: a })}
            onOpenSelectOption={(ayah) => setSelectedOptionAyah(ayah)}
            onOpenMushaf={() => {
              setActiveReader(null);
              setActiveTab('mushaf');
            }}
            onOpenSettings={() => setShowSettingsModal(true)}
            onSaveBookmark={handleAddBookmark}
            onUpdateSettings={handleUpdateSettings}
          />
        ) : (
          /* Main Dashboard / Tab View */
          <div className="flex-1 flex flex-col">
            {/* Top Green Header matching Screenshot 1 */}
            <Header
              onOpenSettings={() => setShowSettingsModal(true)}
              onOpenOverflow={() => setShowSettingsModal(true)}
            />

            {/* 8 Quick Actions Grid matching Screenshot 1 */}
            <QuickActionsGrid
              onGoToAyah={() => setShowGoToModal(true)}
              onSearch={() => setShowSearchModal(true)}
              onNotes={() => {
                setNotesDefaultAyah(undefined);
                setShowNotesModal(true);
              }}
              onBackup={() => setShowBackupModal(true)}
              onAuthor={() => setShowAuthorModal(true)}
              onWebsite={() => setShowWebsiteModal(true)}
              onFeedback={() => setShowFeedbackModal(true)}
              onShareApp={() => {
                setShareAyah(null);
                setShowShareModal(true);
              }}
            />

            {/* Tab Views: Step 1 (Parah) -> Step 2 (Surahs) -> Step 3 (Ayah Reader with Translation & Tafseer) */}
            <div className="flex-1">
              {activeTab === 'parah' && (
                <ParahList
                  onOpenAyah={handleOpenAyah}
                  onSelectSurah={handleSelectSurah}
                />
              )}

              {activeTab === 'quran' && (
                <SurahList
                  onSelectSurah={handleSelectSurah}
                  onGoToParas={() => setActiveTab('parah')}
                />
              )}

              {activeTab === 'mushaf' && (
                <MushafView onSelectAyah={handleOpenAyah} />
              )}

              {activeTab === 'bookmarks' && (
                <BookmarksView
                  bookmarks={bookmarks}
                  onSelectBookmark={handleOpenAyah}
                  onDeleteBookmark={handleDeleteBookmark}
                />
              )}

              {activeTab === 'collections' && (
                <CollectionsView
                  collections={collections}
                  onSelectAyah={handleOpenAyah}
                  onCreateCollection={handleCreateCollection}
                  onDeleteCollection={handleDeleteCollection}
                />
              )}
            </div>

            {/* Floating Last Read Menu matching Screenshot 1 */}
            <FloatingLastRead onOpenAyah={handleOpenAyah} />

            {/* Bottom 5-Tabs Navigation Bar matching Screenshot 1 */}
            <BottomNavBar
              activeTab={activeTab}
              onChangeTab={(t) => setActiveTab(t)}
            />
          </div>
        )}
      </div>

      {/* Select Option Modal matching Screenshot 3 */}
      <SelectOptionModal
        isOpen={!!selectedOptionAyah}
        ayah={selectedOptionAyah}
        onClose={() => setSelectedOptionAyah(null)}
        onSetManualLastRead={() => {
          if (selectedOptionAyah) handleSetManualLastRead(selectedOptionAyah);
        }}
        onAddToCollection={() => {
          if (selectedOptionAyah) handleAddToCollection(selectedOptionAyah);
        }}
        onSaveBookmark={() => {
          if (selectedOptionAyah) handleAddBookmark(selectedOptionAyah);
        }}
        onCreateNote={() => {
          if (selectedOptionAyah) {
            setNotesDefaultAyah({
              surahNumber: selectedOptionAyah.surahNumber,
              ayahNumber: selectedOptionAyah.ayahNumber,
              surahName: selectedOptionAyah.surahNameEnglish,
            });
            setShowNotesModal(true);
          }
        }}
        onShareAyah={() => {
          if (selectedOptionAyah) {
            setShareAyah(selectedOptionAyah);
            setShowShareModal(true);
          }
        }}
        onCopyAyah={() => {
          if (selectedOptionAyah) {
            const text = `${selectedOptionAyah.arabic}\n\n${selectedOptionAyah.translationUr}\n\n${selectedOptionAyah.translationEn}\n\n[Maarif ul Quran - ${selectedOptionAyah.surahNameEnglish} ${selectedOptionAyah.surahNumber}:${selectedOptionAyah.ayahNumber}]`;
            navigator.clipboard.writeText(text);
            showToast('Ayah text copied to clipboard');
          }
        }}
        onOpenMushafMode={() => {
          setActiveReader(null);
          setActiveTab('mushaf');
        }}
        onOpenWebsite={() => setShowWebsiteModal(true)}
        onToggleFullScreen={() => {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
          } else {
            document.exitFullscreen().catch(() => {});
          }
        }}
      />

      {/* All Action & Feature Modals */}
      <GoToAyahModal
        isOpen={showGoToModal}
        onClose={() => setShowGoToModal(false)}
        onJump={handleOpenAyah}
      />

      <SearchModal
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        onSelectAyah={handleOpenAyah}
      />

      <NotesModal
        isOpen={showNotesModal}
        notes={notes}
        onClose={() => setShowNotesModal(false)}
        onSelectAyah={handleOpenAyah}
        onSaveNote={handleSaveNote}
        onDeleteNote={handleDeleteNote}
        defaultAyah={notesDefaultAyah}
      />

      <AuthorModal
        isOpen={showAuthorModal}
        onClose={() => setShowAuthorModal(false)}
      />

      <BackupModal
        isOpen={showBackupModal}
        onClose={() => setShowBackupModal(false)}
        bookmarks={bookmarks}
        collections={collections}
        notes={notes}
        onRestoreData={handleRestoreData}
      />

      <WebsiteModal
        isOpen={showWebsiteModal}
        onClose={() => setShowWebsiteModal(false)}
      />

      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
      />

      <SettingsModal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
      />

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        ayah={shareAyah}
      />
    </div>
  );
}
