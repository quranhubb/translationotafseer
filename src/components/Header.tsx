import React from 'react';
import { Settings, MoreVertical } from 'lucide-react';
import appLogo from '../assets/images/maarif_quran_logo_1787749243934.jpg';

interface HeaderProps {
  onOpenSettings: () => void;
  onOpenOverflow: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSettings, onOpenOverflow }) => {
  return (
    <header id="main-header" className="bg-[#7D6B4B] text-white px-4 py-3 shadow-sm sticky top-0 z-30 flex items-center justify-between border-b border-[#63553C]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#5E5037] border-2 border-[#DCD7C9]/40 shadow-sm flex items-center justify-center shrink-0">
          <img
            src={appLogo}
            alt="Maarif ul Quran App Logo"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold tracking-tight text-white leading-tight font-serif">Maarif-ul-Quran</h1>
            <span className="font-urdu text-xs text-[#EAE5D5] font-semibold bg-[#63553C] px-1.5 py-0.2 rounded border border-[#9A8D70]/40">
              معارف القرآن
            </span>
          </div>
          <p className="text-[10px] text-[#EDE9DE] uppercase tracking-widest font-sans font-semibold mt-0.5">
            Mufti Muhammad Shafi • Para 1: Alif Lam Mim
          </p>
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
