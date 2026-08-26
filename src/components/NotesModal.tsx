import React, { useState } from 'react';
import { Edit3, X, Plus, Trash2, ArrowRight } from 'lucide-react';
import { NoteItem } from '../types';

interface NotesModalProps {
  isOpen: boolean;
  notes: NoteItem[];
  onClose: () => void;
  onSelectAyah: (surahNumber: number, ayahNumber: number) => void;
  onSaveNote: (note: Omit<NoteItem, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onDeleteNote: (id: string) => void;
  defaultAyah?: { surahNumber: number; ayahNumber: number; surahName: string };
}

export const NotesModal: React.FC<NotesModalProps> = ({
  isOpen,
  notes,
  onClose,
  onSelectAyah,
  onSaveNote,
  onDeleteNote,
  defaultAyah,
}) => {
  const [isAdding, setIsAdding] = useState(!!defaultAyah);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [surahNum, setSurahNum] = useState(defaultAyah?.surahNumber || 1);
  const [ayahNum, setAyahNum] = useState(defaultAyah?.ayahNumber || 1);

  if (!isOpen) return null;

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    onSaveNote({
      surahNumber: surahNum,
      ayahNumber: ayahNum,
      surahName: surahNum === 1 ? 'Al-Faatiha' : 'Al-Baqara',
      title: title.trim() || `Reflection on Verse ${ayahNum}`,
      content: content.trim(),
    });
    setTitle('');
    setContent('');
    setIsAdding(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-3">
      <div className="bg-[#FDFCF8] w-full max-w-lg rounded-2xl shadow-2xl border border-[#E5E0D0] flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-[#E5E0D0] flex items-center justify-between bg-[#F4F1E6]">
          <div className="flex items-center gap-2 text-[#7D6B4B]">
            <Edit3 className="w-5 h-5" />
            <h3 className="font-bold text-[#2D2D2D] text-base font-serif">Tafseer & Ayah Notes (نوٹس)</h3>
          </div>
          <div className="flex items-center gap-2 font-sans">
            {!isAdding && (
              <button
                onClick={() => setIsAdding(true)}
                className="bg-[#7D6B4B] hover:bg-[#63553C] text-white text-xs font-bold py-1.5 px-3 rounded-lg flex items-center gap-1 shadow-2xs cursor-pointer transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Note</span>
              </button>
            )}
            <button onClick={onClose} className="p-1 text-[#9A8D70] hover:text-[#2D2D2D] cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans">
          {isAdding ? (
            <form onSubmit={handleCreate} className="bg-[#F4F1E6] p-4 rounded-xl border border-[#E5E0D0] space-y-3">
              <h4 className="font-bold text-[#2D2D2D] text-sm font-serif">Write New Note</h4>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-[#4A4A4A] block mb-1">Surah</label>
                  <select
                    value={surahNum}
                    onChange={(e) => setSurahNum(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 bg-white border border-[#E5E0D0] rounded-lg text-xs text-[#2D2D2D]"
                  >
                    <option value={1}>1. Al-Faatiha</option>
                    <option value={2}>2. Al-Baqara</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#4A4A4A] block mb-1">Ayah Number</label>
                  <input
                    type="number"
                    min={1}
                    max={surahNum === 1 ? 7 : 141}
                    value={ayahNum}
                    onChange={(e) => setAyahNum(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 bg-white border border-[#E5E0D0] rounded-lg text-xs text-[#2D2D2D]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#4A4A4A] block mb-1">Title / Theme</label>
                <input
                  type="text"
                  placeholder="e.g. Lesson on Sincerity & Tawheed"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#E5E0D0] rounded-lg text-xs text-[#2D2D2D] focus:ring-2 focus:ring-[#7D6B4B] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#4A4A4A] block mb-1">Note Content</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your reflections, Tafseer points, or lecture notes here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#E5E0D0] rounded-lg text-xs text-[#2D2D2D] focus:ring-2 focus:ring-[#7D6B4B] focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-3 py-1.5 text-xs text-[#5A5A5A] hover:text-[#2D2D2D] font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#7D6B4B] hover:bg-[#63553C] text-white rounded-lg text-xs font-bold shadow-2xs cursor-pointer transition-colors"
                >
                  Save Note
                </button>
              </div>
            </form>
          ) : notes.length === 0 ? (
            <div className="text-center py-12 text-[#9A8D70]">
              <Edit3 className="w-10 h-10 mx-auto text-[#DCD7C9] mb-2" />
              <p className="font-semibold text-sm text-[#4A4A4A]">No notes written yet</p>
              <p className="text-xs text-[#9A8D70] mt-1">
                Tap "Add Note" above or use the Ayah options menu to attach personal notes to any verse.
              </p>
            </div>
          ) : (
            notes.map((note) => (
              <div
                key={note.id}
                className="bg-[#FDFCF8] p-3.5 rounded-xl border border-[#E5E0D0] shadow-2xs hover:border-[#7D6B4B]/40 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#7D6B4B] bg-[#F4F1E6] px-2 py-0.5 rounded border border-[#E5E0D0]">
                      {note.surahName} {note.ayahNumber}
                    </span>
                    <h4 className="font-bold text-[#2D2D2D] text-sm mt-1.5 font-serif">{note.title}</h4>
                  </div>
                  <button
                    onClick={() => onDeleteNote(note.id)}
                    className="text-[#9A8D70] hover:text-red-600 p-1 cursor-pointer"
                    title="Delete Note"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-[#4A4A4A] mt-2 leading-relaxed whitespace-pre-wrap">
                  {note.content}
                </p>

                <div className="mt-3 pt-2 border-t border-[#E5E0D0] flex items-center justify-between">
                  <span className="text-[10px] text-[#9A8D70]">
                    {new Date(note.createdAt).toLocaleDateString()}
                  </span>
                  <button
                    onClick={() => {
                      onSelectAyah(note.surahNumber, note.ayahNumber);
                      onClose();
                    }}
                    className="text-xs font-bold text-[#7D6B4B] flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>View Ayah</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
