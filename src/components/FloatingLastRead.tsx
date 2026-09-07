import React, { useState, useRef, useEffect } from 'react';
import { Clock, ArrowRightCircle } from 'lucide-react';
import { getLastRead } from '../utils/storage';

interface FloatingLastReadProps {
  onOpenAyah: (surahNumber: number, ayahNumber: number) => void;
}

export const FloatingLastRead: React.FC<FloatingLastReadProps> = ({ onOpenAyah }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOpenAuto = () => {
    const last = getLastRead('automatic');
    onOpenAyah(last.surahNumber, last.ayahNumber);
    setIsOpen(false);
  };

  const handleOpenManual = () => {
    const last = getLastRead('manual');
    onOpenAyah(last.surahNumber, last.ayahNumber);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="fixed bottom-20 right-4 z-40 flex flex-col items-end">
      {/* Expanded Pills matching Professional Polish theme */}
      {isOpen && (
        <div className="flex flex-col items-end gap-2.5 mb-3 transition-all animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Automatic Last Read Pill */}
          <button
            id="btn-open-auto-last-read"
            onClick={handleOpenAuto}
            className="flex items-center gap-2 bg-[#7D6B4B] hover:bg-[#63553C] text-white py-2 px-3.5 rounded-full shadow-lg text-xs font-semibold active:scale-95 transition-all border border-[#C5A059]/60 cursor-pointer"
          >
            <span>Open Automatic Last Read</span>
            <div className="bg-[#C5A059]/30 rounded-full p-0.5">
              <ArrowRightCircle className="w-4.5 h-4.5 text-[#FDF6E2]" />
            </div>
          </button>

          {/* Manual Last Read Pill */}
          <button
            id="btn-open-manual-last-read"
            onClick={handleOpenManual}
            className="flex items-center gap-2 bg-[#7D6B4B] hover:bg-[#63553C] text-white py-2 px-3.5 rounded-full shadow-lg text-xs font-semibold active:scale-95 transition-all border border-[#C5A059]/60 cursor-pointer"
          >
            <span>Open Manual Last Read</span>
            <div className="bg-[#C5A059]/30 rounded-full p-0.5">
              <ArrowRightCircle className="w-4.5 h-4.5 text-[#FDF6E2]" />
            </div>
          </button>
        </div>
      )}

      {/* Main Floating Clock Button */}
      <button
        id="fab-last-read"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Last Read Menu"
        className="w-12 h-12 rounded-full bg-[#7D6B4B] hover:bg-[#63553C] text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-90 border-2 border-[#FCF9F1] ring-2 ring-[#C5A059]/50 cursor-pointer"
      >
        <Clock className={`w-5.5 h-5.5 text-[#FDF6E2] transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} />
      </button>
    </div>
  );
};
