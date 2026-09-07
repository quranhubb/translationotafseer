import React, { useState } from 'react';
import { Download, Upload, X, Check, AlertCircle } from 'lucide-react';
import { Bookmark, CollectionItem, NoteItem } from '../types';

interface BackupModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarks: Bookmark[];
  collections: CollectionItem[];
  notes: NoteItem[];
  onRestoreData: (data: { bookmarks?: Bookmark[]; collections?: CollectionItem[]; notes?: NoteItem[] }) => void;
}

export const BackupModal: React.FC<BackupModalProps> = ({
  isOpen,
  onClose,
  bookmarks,
  collections,
  notes,
  onRestoreData,
}) => {
  const [copied, setCopied] = useState(false);
  const [importJson, setImportJson] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const backupPayload = {
    app: 'Maarif ul Quran - Para 1',
    exportDate: new Date().toISOString(),
    bookmarks,
    collections,
    notes,
  };

  const jsonString = JSON.stringify(backupPayload, null, 2);

  const handleDownloadFile = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `maarif_ul_quran_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImport = () => {
    try {
      const parsed = JSON.parse(importJson.trim());
      if (parsed.bookmarks || parsed.collections || parsed.notes) {
        onRestoreData(parsed);
        setImportStatus('Backup successfully restored!');
        setImportJson('');
      } else {
        setImportStatus('Invalid format: missing bookmarks/collections/notes keys.');
      }
    } catch (err) {
      setImportStatus('Error parsing JSON. Please check text.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-3">
      <div className="bg-[#FFFFFF] w-full max-w-lg rounded-2xl shadow-2xl border border-[#E6DFC9] flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-[#E6DFC9] flex items-center justify-between bg-[#F5EFE2]">
          <div className="flex items-center gap-2 text-[#154734]">
            <Download className="w-5 h-5" />
            <h3 className="font-bold text-[#1D2A20] text-base font-serif">Backup & Restore</h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#68796C] hover:text-[#1D2A20] cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-5 font-sans">
          {/* Summary counts */}
          <div className="grid grid-cols-3 gap-2 bg-[#F5EFE2] p-3 rounded-xl border border-[#E6DFC9] text-center text-xs">
            <div>
              <span className="font-bold text-base text-[#154734] block">{bookmarks.length}</span>
              <span className="text-[#68796C] font-medium">Bookmarks</span>
            </div>
            <div>
              <span className="font-bold text-base text-[#154734] block">{collections.length}</span>
              <span className="text-[#68796C] font-medium">Collections</span>
            </div>
            <div>
              <span className="font-bold text-base text-[#154734] block">{notes.length}</span>
              <span className="text-[#68796C] font-medium">Notes</span>
            </div>
          </div>

          {/* Export Section */}
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-[#1D2A20] font-serif">1. Export / Backup</h4>
            <p className="text-xs text-[#68796C]">
              Download your bookmarks, custom collections, and personal notes as a JSON file.
            </p>
            <div className="flex gap-2 pt-1">
              <button
                onClick={handleDownloadFile}
                className="flex-1 bg-[#154734] hover:bg-[#0F3626] text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download JSON File</span>
              </button>
              <button
                onClick={handleCopyJson}
                className="bg-white border border-[#E6DFC9] hover:bg-[#F5EFE2] text-[#1D2A20] text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-[#154734]" /> : <span>Copy Raw JSON</span>}
              </button>
            </div>
          </div>

          {/* Import Section */}
          <div className="space-y-2 pt-3 border-t border-[#E6DFC9]">
            <h4 className="font-bold text-sm text-[#1D2A20] font-serif">2. Restore from Backup</h4>
            <p className="text-xs text-[#68796C]">
              Paste the exported JSON data below to restore your notes and bookmarks.
            </p>
            <textarea
              rows={3}
              value={importJson}
              onChange={(e) => {
                setImportJson(e.target.value);
                setImportStatus(null);
              }}
              placeholder="Paste JSON backup payload here..."
              className="w-full p-2.5 bg-white border border-[#E6DFC9] rounded-xl text-xs font-mono text-[#1D2A20] focus:ring-2 focus:ring-[#154734] focus:outline-none"
            />
            {importStatus && (
              <p
                className={`text-xs font-medium ${
                  importStatus.includes('successfully') ? 'text-[#154734]' : 'text-red-600'
                }`}
              >
                {importStatus}
              </p>
            )}
            <button
              onClick={handleImport}
              disabled={!importJson.trim()}
              className="w-full bg-[#154734] hover:bg-[#0F3626] text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 disabled:opacity-40 disabled:hover:bg-[#154734] transition-all cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span>Restore Backup</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
