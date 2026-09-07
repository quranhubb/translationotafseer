import React from 'react';
import { Settings, MoreVertical } from 'lucide-react';
import appLogo from '../assets/images/maarif_quran_logo_transparent.png';

interface HeaderProps {
  onOpenSettings: () => void;
  onOpenOverflow: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSettings, onOpenOverflow }) => {
  return (
    <header id="main-header" className="bg-[#7D6B4B] text-white px-4 py-2.5 shadow-md sticky top-0 z-30 flex items-center justify-between border-b border-[#C5A059]/60">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 shrink-0 flex items-center justify-center">
          <img
            src={appLogo}
            alt="Maarif ul Quran Logo"
            className="w-full h-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-200"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-[17px] font-bold tracking-tight text-white leading-tight font-serif">Maarif-ul-Quran</h1>
          </div>
          <p className="text-[10px] text-[#F3E7C4] uppercase tracking-widest font-sans font-semibold mt-0.5">
            Mufti Muhammad Shafi • معارف القرآن
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          id="btn-settings-header"
          onClick={onOpenSettings}
          aria-label="Settings"
          className="p-2 rounded-full hover:bg-[#63553C] active:bg-[#524631] transition-colors text-[#F5ECD5] hover:text-white cursor-pointer"
        >
          <Settings className="w-5 h-5" />
        </button>
        <button
          id="btn-overflow-header"
          onClick={onOpenOverflow}
          aria-label="More options"
          className="p-2 rounded-full hover:bg-[#63553C] active:bg-[#524631] transition-colors text-[#F5ECD5] hover:text-white cursor-pointer"
        >
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
