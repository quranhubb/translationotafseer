import React from 'react';
import { Settings, MoreVertical, BookOpen } from 'lucide-react';

interface HeaderProps {
  onOpenSettings: () => void;
  onOpenOverflow: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSettings, onOpenOverflow }) => {
  return (
    <header id="main-header" className="bg-[#7D6B4B] text-white px-4 py-3.5 shadow-sm sticky top-0 z-30 flex items-center justify-between border-b border-[#63553C]">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#63553C] border border-[#9A8D70]/40 flex items-center justify-center shadow-inner">
          <BookOpen className="w-5 h-5 text-[#FCF9F1]" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white leading-tight font-serif">Maarif-ul-Quran</h1>
          <p className="text-[10px] text-[#EDE9DE] uppercase tracking-widest font-sans font-semibold">Mufti Muhammad Shafi • Para 1: Alif Lam Mim</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          id="btn-settings-header"
          onClick={onOpenSettings}
          aria-label="Settings"
          className="p-2 rounded-full hover:bg-[#63553C] active:bg-[#524631] transition-colors text-white cursor-pointer"
        >
          <Settings className="w-5 h-5" />
        </button>
        <button
          id="btn-overflow-header"
          onClick={onOpenOverflow}
          aria-label="More options"
          className="p-2 rounded-full hover:bg-[#63553C] active:bg-[#524631] transition-colors text-white cursor-pointer"
        >
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
