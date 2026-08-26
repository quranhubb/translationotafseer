import React from 'react';
import { Bookmark as BookmarkIcon, Trash2, ArrowRight, BookOpen } from 'lucide-react';
import { Bookmark } from '../types';

interface BookmarksViewProps {
  bookmarks: Bookmark[];
  onSelectBookmark: (surahNumber: number, ayahNumber: number) => void;
  onDeleteBookmark: (id: string) => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  bookmarks,
  onSelectBookmark,
  onDeleteBookmark,
}) => {
  return (
    <div className="px-3 pb-24 pt-2">
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-base font-bold text-[#2D2D2D] flex items-center gap-1.5 font-serif">
          <BookmarkIcon className="w-4.5 h-4.5 text-[#7D6B4B]" />
          <span>Saved Bookmarks (نشان زدہ آیات)</span>
        </h2>
        <span className="text-xs bg-[#F4F1E6] text-[#7D6B4B] font-bold px-2 py-0.5 rounded-full border border-[#E5E0D0] font-sans">
          {bookmarks.length} saved
        </span>
      </div>

      {bookmarks.length === 0 ? (
        <div className="bg-[#FDFCF8] rounded-2xl p-10 text-center border border-[#E5E0D0] shadow-2xs mt-4">
          <div className="w-12 h-12 rounded-full bg-[#F4F1E6] text-[#7D6B4B] border border-[#E5E0D0] flex items-center justify-center mx-auto mb-3">
            <BookmarkIcon className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-[#2D2D2D] text-sm font-serif">No bookmarks yet</h3>
          <p className="text-xs text-[#9A8D70] mt-1 max-w-xs mx-auto font-sans">
            While reading any Ayah, tap the bookmark icon or select "Save as Bookmark" from the options menu.
          </p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {bookmarks.map((bm) => (
            <div
              key={bm.id}
              className="bg-[#FDFCF8] rounded-xl p-3.5 border border-[#E5E0D0] shadow-2xs hover:bg-[#F4F1E6] hover:border-[#7D6B4B]/40 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#7D6B4B] bg-[#F4F1E6] px-2 py-0.5 rounded border border-[#E5E0D0] font-sans">
                      {bm.surahName} : Verse {bm.ayahNumber}
                    </span>
                    <span className="text-[11px] text-[#9A8D70] font-sans">
                      {new Date(bm.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onDeleteBookmark(bm.id)}
                  className="text-[#9A8D70] hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors cursor-pointer"
                  title="Remove bookmark"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div
                onClick={() => onSelectBookmark(bm.surahNumber, bm.ayahNumber)}
                className="cursor-pointer group mt-2.5"
              >
                <p className="font-arabic text-lg font-bold text-[#2D2D2D] text-right dir-rtl line-clamp-1 group-hover:text-[#7D6B4B] transition-colors">
                  {bm.arabicPreview}
                </p>
                <p className="font-urdu text-xs text-[#5A5A5A] text-right dir-rtl line-clamp-1 mt-1 font-medium">
                  {bm.translationPreview}
                </p>

                <div className="flex items-center justify-end gap-1 text-[11px] text-[#7D6B4B] font-bold mt-2 group-hover:translate-x-0.5 transition-transform font-sans">
                  <span>Open Ayah</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
