import React from 'react';
import { Folder, Menu, BookOpen, Layers, Bookmark } from 'lucide-react';

export type MainTabType = 'parah' | 'quran' | 'mushaf' | 'bookmarks' | 'collections';

interface BottomNavBarProps {
  activeTab: MainTabType;
  onChangeTab: (tab: MainTabType) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onChangeTab }) => {
  const navItems = [
    { id: 'parah', label: 'Paras (Juz)', icon: Menu },
    { id: 'quran', label: 'Surahs', icon: BookOpen },
    { id: 'mushaf', label: 'Mushaf', icon: Layers },
    { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark },
    { id: 'collections', label: 'Collections', icon: Folder },
  ];

  return (
    <div
      id="bottom-navigation-bar"
      className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#FAF7EE] border-t border-[#E5DFCE] shadow-lg z-30 flex items-center justify-around py-1.5 px-2"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            id={`tab-btn-${item.id}`}
            onClick={() => onChangeTab(item.id as MainTabType)}
            className={`flex flex-col items-center justify-center flex-1 py-1 px-1 transition-all rounded-lg cursor-pointer ${
              isActive
                ? 'text-[#7D6B4B] font-bold'
                : 'text-[#9A8D70] hover:text-[#7D6B4B] font-medium'
            }`}
          >
            <div className={`p-1 rounded-full transition-colors ${isActive ? 'bg-[#F0E9D8] text-[#7D6B4B]' : ''}`}>
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
            </div>
            <span className="text-[11px] leading-tight tracking-tight mt-0.5 font-sans">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
