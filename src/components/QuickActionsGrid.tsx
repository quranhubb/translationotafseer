import React from 'react';
import { Send, Search, Edit3, Download, UserCheck, Monitor, MessageSquare, Share2 } from 'lucide-react';

interface QuickActionsGridProps {
  onGoToAyah: () => void;
  onSearch: () => void;
  onNotes: () => void;
  onBackup: () => void;
  onAuthor: () => void;
  onWebsite: () => void;
  onFeedback: () => void;
  onShareApp: () => void;
}

export const QuickActionsGrid: React.FC<QuickActionsGridProps> = ({
  onGoToAyah,
  onSearch,
  onNotes,
  onBackup,
  onAuthor,
  onWebsite,
  onFeedback,
  onShareApp,
}) => {
  const actions = [
    { id: 'btn-qa-goto', label: 'Go to Ayah', icon: Send, onClick: onGoToAyah },
    { id: 'btn-qa-search', label: 'Search', icon: Search, onClick: onSearch },
    { id: 'btn-qa-notes', label: 'Notes', icon: Edit3, onClick: onNotes },
    { id: 'btn-qa-backup', label: 'Backup', icon: Download, onClick: onBackup },
    { id: 'btn-qa-author', label: 'Author', icon: UserCheck, onClick: onAuthor },
    { id: 'btn-qa-website', label: 'Website', icon: Monitor, onClick: onWebsite },
    { id: 'btn-qa-feedback', label: 'Feedback', icon: MessageSquare, onClick: onFeedback },
    { id: 'btn-qa-share', label: 'Share App', icon: Share2, onClick: onShareApp },
  ];

  return (
    <div className="bg-[#FDFCF8] rounded-2xl p-4 shadow-xs border border-[#E5E0D0] mb-3.5 mx-3 mt-3">
      <div className="grid grid-cols-4 gap-y-3.5 gap-x-2">
        {actions.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              id={item.id}
              onClick={item.onClick}
              className="flex flex-col items-center justify-center text-center group cursor-pointer p-1.5 rounded-xl hover:bg-[#F4F1E6] active:scale-95 transition-all"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#7D6B4B] bg-[#F4F1E6] border border-[#E5E0D0] group-hover:bg-[#7D6B4B] group-hover:text-white group-hover:border-[#7D6B4B] transition-colors mb-1.5 shadow-2xs">
                <Icon className="w-4.5 h-4.5 transition-transform group-hover:scale-110" />
              </div>
              <span className="text-[11px] font-medium text-[#4A4A4A] leading-tight group-hover:text-[#7D6B4B] font-sans">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
