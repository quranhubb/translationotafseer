import React from 'react';
import { Ayah } from '../types';

interface SelectOptionModalProps {
  isOpen: boolean;
  ayah: Ayah | null;
  onClose: () => void;
  onSetManualLastRead: () => void;
  onAddToCollection: () => void;
  onSaveBookmark: () => void;
  onCreateNote: () => void;
  onShareAyah: () => void;
  onCopyAyah: () => void;
  onOpenMushafMode: () => void;
  onOpenWebsite: () => void;
  onToggleFullScreen: () => void;
  onOpenAnnotation?: () => void;
}

export const SelectOptionModal: React.FC<SelectOptionModalProps> = ({
  isOpen,
  ayah,
  onClose,
  onSetManualLastRead,
  onAddToCollection,
  onSaveBookmark,
  onCreateNote,
  onShareAyah,
  onCopyAyah,
  onOpenMushafMode,
  onOpenWebsite,
  onToggleFullScreen,
  onOpenAnnotation,
}) => {
  if (!isOpen || !ayah) return null;

  const options = [
    { label: '✏️ Pencil, Highlighter & Eraser', action: onOpenAnnotation || (() => {}) },
    { label: 'Set Manual Last Read', action: onSetManualLastRead },
    { label: 'Add to Collection', action: onAddToCollection },
    { label: 'Save as Bookmark', action: onSaveBookmark },
    { label: 'Create Note', action: onCreateNote },
    { label: 'Share Ayah as Text', action: onShareAyah },
    { label: 'Copy Ayah', action: onCopyAyah },
    { label: 'Mushaf Mode', action: onOpenMushafMode },
    { label: 'Open Ayah in Website', action: onOpenWebsite },
    { label: 'Toggle Full Screen', action: onToggleFullScreen },
  ];

  return (
    <div
      id="modal-select-option-backdrop"
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="modal-select-option-content"
        className="bg-[#FDFCF8] w-full max-w-sm rounded-2xl shadow-2xl p-5 border border-[#E5E0D0] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-[#E5E0D0] pb-3 mb-2">
          <h2 className="text-lg font-bold text-[#2D2D2D] font-serif">Select Option</h2>
          <p className="text-xs text-[#9A8D70] mt-0.5 font-sans">
            {ayah.surahNameEnglish} : Verse {ayah.ayahNumber} ({ayah.surahNameArabic})
          </p>
        </div>

        {/* Options List */}
        <div className="divide-y divide-[#E5E0D0]/50 font-sans">
          {options.map((opt, index) => (
            <button
              key={index}
              id={`opt-btn-${index}`}
              onClick={() => {
                opt.action();
                onClose();
              }}
              className="w-full text-left py-2.5 px-2 text-[13.5px] font-medium text-[#2D2D2D] hover:text-[#7D6B4B] hover:bg-[#F4F1E6] rounded-lg transition-colors block cursor-pointer"
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="mt-3 pt-2 text-right border-t border-[#E5E0D0]">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#5A5A5A] hover:text-[#2D2D2D] px-3 py-1.5 rounded cursor-pointer font-sans"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
