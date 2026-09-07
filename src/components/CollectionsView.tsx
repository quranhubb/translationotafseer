import React, { useState } from 'react';
import { Folder, Plus, ChevronRight, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { CollectionItem } from '../types';

interface CollectionsViewProps {
  collections: CollectionItem[];
  onSelectAyah: (surahNumber: number, ayahNumber: number) => void;
  onCreateCollection: (name: string, description: string, color: string) => void;
  onDeleteCollection: (id: string) => void;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({
  collections,
  onSelectAyah,
  onCreateCollection,
  onDeleteCollection,
}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [selectedColor, setSelectedColor] = useState('#7D6B4B');
  const [expandedColId, setExpandedColId] = useState<string | null>(collections[0]?.id || null);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    onCreateCollection(newTitle.trim(), newDesc.trim(), selectedColor);
    setNewTitle('');
    setNewDesc('');
    setShowAddModal(false);
  };

  const colors = ['#7D6B4B', '#63553C', '#8B2626', '#3D5A80', '#2E5A44'];

  return (
    <div className="px-3 pb-24 pt-2">
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-base font-bold text-[#2D2D2D] flex items-center gap-1.5 font-serif">
          <Folder className="w-4.5 h-4.5 text-[#7D6B4B]" />
          <span>My Collections</span>
        </h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#7D6B4B] hover:bg-[#63553C] text-white text-xs font-bold py-1.5 px-3 rounded-xl flex items-center gap-1 shadow-2xs transition-all active:scale-95 cursor-pointer font-sans"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New</span>
        </button>
      </div>

      <div className="space-y-3">
        {collections.map((col) => {
          const isExpanded = expandedColId === col.id;
          return (
            <div
              key={col.id}
              className="bg-[#FDFCF8] rounded-xl border border-[#E5E0D0] shadow-2xs overflow-hidden transition-all"
            >
              {/* Collection Header */}
              <div
                onClick={() => setExpandedColId(isExpanded ? null : col.id)}
                className="p-3.5 flex items-center justify-between cursor-pointer hover:bg-[#F4F1E6]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold shadow-2xs"
                    style={{ backgroundColor: col.color || '#7D6B4B' }}
                  >
                    <Folder className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] text-sm font-serif">{col.name}</h3>
                    <p className="text-xs text-[#9A8D70] font-sans">{col.ayahs.length} verses saved</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteCollection(col.id);
                    }}
                    className="p-1 text-[#9A8D70] hover:text-red-600 rounded cursor-pointer"
                    title="Delete Collection"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <ChevronRight
                    className={`w-5 h-5 text-[#9A8D70] transition-transform ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Ayahs inside collection */}
              {isExpanded && (
                <div className="bg-[#F4F1E6]/70 p-3.5 border-t border-[#E5E0D0] space-y-2">
                  {col.description && (
                    <p className="text-xs text-[#5A5A5A] mb-2 italic font-sans">{col.description}</p>
                  )}

                  {col.ayahs.length === 0 ? (
                    <p className="text-xs text-[#9A8D70] text-center py-2 font-sans">
                      No Ayahs added to this collection yet.
                    </p>
                  ) : (
                    col.ayahs.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => onSelectAyah(item.surahNumber, item.ayahNumber)}
                        className="bg-[#FDFCF8] p-2.5 rounded-lg border border-[#E5E0D0] hover:border-[#7D6B4B]/50 flex items-center justify-between cursor-pointer group shadow-2xs"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-[#7D6B4B] bg-[#F4F1E6] px-1.5 py-0.5 rounded border border-[#E5E0D0] font-sans">
                            {item.surahName} {item.ayahNumber}
                          </span>
                          <span className="font-arabic text-sm text-[#2D2D2D] line-clamp-1 dir-rtl">
                            {item.arabicText}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#9A8D70] group-hover:text-[#7D6B4B] transition-colors" />
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* New Collection Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FDFCF8] w-full max-w-sm rounded-2xl p-5 shadow-xl border border-[#E5E0D0]">
            <h3 className="font-bold text-[#2D2D2D] text-base mb-3 font-serif">Create New Collection</h3>
            <form onSubmit={handleCreate} className="space-y-3 font-sans">
              <div>
                <label className="block text-xs font-semibold text-[#4A4A4A] mb-1">
                  Collection Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Verses of Hope & Patience"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#E5E0D0] text-sm text-[#2D2D2D] focus:ring-2 focus:ring-[#7D6B4B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A4A4A] mb-1">
                  Description (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Notes or purpose of this collection"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#E5E0D0] text-sm text-[#2D2D2D] focus:ring-2 focus:ring-[#7D6B4B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A4A4A] mb-1.5">Color Tag</label>
                <div className="flex gap-2">
                  {colors.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setSelectedColor(c)}
                      className={`w-7 h-7 rounded-full transition-transform cursor-pointer ${
                        selectedColor === c ? 'scale-125 ring-2 ring-offset-2 ring-[#7D6B4B]' : ''
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-1.5 text-xs text-[#5A5A5A] font-semibold hover:text-[#2D2D2D] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#7D6B4B] text-white rounded-xl text-xs font-bold shadow-2xs hover:bg-[#63553C] cursor-pointer"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
