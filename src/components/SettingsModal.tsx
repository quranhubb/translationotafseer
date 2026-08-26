import React from 'react';
import { Settings as SettingsIcon, X, Sliders, Volume2, Type, Eye, Palette } from 'lucide-react';
import { UserSettings } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: UserSettings;
  onUpdateSettings: (newSettings: Partial<UserSettings>) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-3">
      <div className="bg-[#FDFCF8] w-full max-w-lg rounded-2xl shadow-2xl border border-[#E5E0D0] flex flex-col max-h-[88vh] animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-[#E5E0D0] flex items-center justify-between bg-[#F4F1E6]">
          <div className="flex items-center gap-2 text-[#7D6B4B]">
            <SettingsIcon className="w-5 h-5" />
            <h3 className="font-bold text-[#2D2D2D] text-base font-serif">Settings & Display Preferences</h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#9A8D70] hover:text-[#2D2D2D] cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-5 divide-y divide-[#E5E0D0]">
          {/* 1. Arabic Typography */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#7D6B4B] flex items-center gap-1.5 font-sans">
              <Type className="w-4 h-4" />
              <span>Arabic Script & Font Size</span>
            </h4>

            <div>
              <div className="flex justify-between text-xs font-semibold text-[#4A4A4A] mb-1 font-sans">
                <span>Arabic Font Size</span>
                <span className="text-[#7D6B4B] font-bold">{settings.arabicFontSize}px</span>
              </div>
              <input
                type="range"
                min={20}
                max={44}
                step={2}
                value={settings.arabicFontSize}
                onChange={(e) => onUpdateSettings({ arabicFontSize: Number(e.target.value) })}
                className="w-full accent-[#7D6B4B]"
              />
              <div className="mt-2 p-3 bg-[#F4F1E6]/70 rounded-xl text-center border border-[#E5E0D0]">
                <p
                  className="font-arabic font-bold text-[#2D2D2D] dir-rtl select-none"
                  style={{
                    fontSize: `${settings.arabicFontSize}px`,
                    fontFamily: settings.arabicFontFamily,
                  }}
                >
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4A4A4A] mb-1 font-sans">
                Arabic Font Style
              </label>
              <select
                value={settings.arabicFontFamily}
                onChange={(e) => onUpdateSettings({ arabicFontFamily: e.target.value as any })}
                className="w-full px-3 py-2 bg-white border border-[#E5E0D0] rounded-xl text-xs font-medium text-[#2D2D2D] focus:outline-none focus:ring-1 focus:ring-[#7D6B4B]"
              >
                <option value="Amiri">Amiri (Uthmani Naskh - عثماني)</option>
                <option value="Scheherazade New">Scheherazade New (Traditional)</option>
                <option value="Noto Naskh Arabic">Noto Naskh Arabic (Standard)</option>
                <option value="Amiri Quran">Amiri Quran (Majestic Calligraphic)</option>
              </select>
            </div>
          </div>

          {/* 2. Word by Word Options */}
          <div className="pt-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#7D6B4B] flex items-center gap-1.5 font-sans">
              <Eye className="w-4 h-4" />
              <span>Word-by-Word Translation</span>
            </h4>

            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#2D2D2D] font-sans">Show Word-by-Word Breakdown</span>
              <input
                type="checkbox"
                checked={settings.showWordByWord}
                onChange={(e) => onUpdateSettings({ showWordByWord: e.target.checked })}
                className="w-4 h-4 accent-[#7D6B4B] rounded cursor-pointer"
              />
            </div>

            {settings.showWordByWord && (
              <div>
                <label className="block text-xs font-semibold text-[#4A4A4A] mb-1 font-sans">
                  Word Meaning Language
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'en', label: 'English' },
                    { id: 'ur', label: 'Urdu (اردو)' },
                    { id: 'both', label: 'Both' },
                  ].map((lang) => (
                    <button
                      key={lang.id}
                      type="button"
                      onClick={() => onUpdateSettings({ wordByWordLang: lang.id as any })}
                      className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer font-sans ${
                        settings.wordByWordLang === lang.id
                          ? 'bg-[#7D6B4B] text-white border-[#7D6B4B]'
                          : 'bg-white text-[#4A4A4A] border-[#E5E0D0] hover:border-[#7D6B4B]/40 hover:bg-[#F4F1E6]'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. Verse Translation & Tafseer Preferences */}
          <div className="pt-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#7D6B4B] flex items-center gap-1.5 font-sans">
              <Sliders className="w-4 h-4" />
              <span>Translation & Tafseer Display</span>
            </h4>

            <div>
              <label className="block text-xs font-semibold text-[#4A4A4A] mb-1.5 font-sans">
                Verse Translation Language
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'both', label: 'Urdu & English' },
                  { id: 'ur', label: 'Urdu Only' },
                  { id: 'en', label: 'English Only' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onUpdateSettings({ primaryTranslation: item.id as any })}
                    className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer font-sans ${
                      settings.primaryTranslation === item.id
                        ? 'bg-[#7D6B4B] text-white border-[#7D6B4B]'
                        : 'bg-white text-[#4A4A4A] border-[#E5E0D0] hover:border-[#7D6B4B]/40 hover:bg-[#F4F1E6]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4A4A4A] mb-1.5 font-sans">
                Tafseer Maarif-ul-Quran Language
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'both', label: 'Both Urdu & En' },
                  { id: 'ur', label: 'Urdu Tafseer' },
                  { id: 'en', label: 'English Tafseer' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onUpdateSettings({ tafseerLang: item.id as any })}
                    className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer font-sans ${
                      settings.tafseerLang === item.id
                        ? 'bg-[#7D6B4B] text-white border-[#7D6B4B]'
                        : 'bg-white text-[#4A4A4A] border-[#E5E0D0] hover:border-[#7D6B4B]/40 hover:bg-[#F4F1E6]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Audio Reciter */}
          <div className="pt-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#7D6B4B] flex items-center gap-1.5 font-sans">
              <Volume2 className="w-4 h-4" />
              <span>Audio Recitation (قاری)</span>
            </h4>

            <div>
              <label className="block text-xs font-semibold text-[#4A4A4A] mb-1 font-sans">Reciter (Qari)</label>
              <select
                value={settings.audioReciter}
                onChange={(e) => onUpdateSettings({ audioReciter: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#E5E0D0] rounded-xl text-xs font-medium text-[#2D2D2D] focus:outline-none focus:ring-1 focus:ring-[#7D6B4B]"
              >
                <option value="Alafasy_128kbps">Mishary Rashid Alafasy (مشاري راشد العفاسي)</option>
                <option value="Abdul_Basit_Murattal_192kbps">
                  Abdul Basit Murattal (عبد الباسط عبد الصمد)
                </option>
                <option value="Abdurrahmaan_As-Sudais_192kbps">
                  Abdur-Rahman As-Sudais (عبد الرحمن السديس)
                </option>
                <option value="Abu_Bakr_Ash-Shaatree_128kbps">
                  Abu Bakr Ash-Shatri (أبو بكر الشاطري)
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#2D2D2D] font-sans">
                Auto-play Next Ayah Continuously
              </span>
              <input
                type="checkbox"
                checked={settings.autoPlayNext}
                onChange={(e) => onUpdateSettings({ autoPlayNext: e.target.checked })}
                className="w-4 h-4 accent-[#7D6B4B] rounded cursor-pointer"
              />
            </div>
          </div>

          {/* 5. Theme Palette */}
          <div className="pt-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#7D6B4B] flex items-center gap-1.5 font-sans">
              <Palette className="w-4 h-4" />
              <span>Color Theme</span>
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'light', label: 'Clean Light' },
                { id: 'sepia', label: 'Warm Sepia' },
                { id: 'dark', label: 'Night Dark' },
              ].map((th) => (
                <button
                  key={th.id}
                  type="button"
                  onClick={() => onUpdateSettings({ theme: th.id as any })}
                  className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer font-sans ${
                    settings.theme === th.id
                      ? 'bg-[#7D6B4B] text-white border-[#7D6B4B]'
                      : 'bg-white text-[#4A4A4A] border-[#E5E0D0] hover:border-[#7D6B4B]/40 hover:bg-[#F4F1E6]'
                  }`}
                >
                  {th.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-[#E5E0D0] bg-[#F4F1E6] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#7D6B4B] hover:bg-[#63553C] text-white font-bold text-xs rounded-xl shadow-2xs cursor-pointer font-sans"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
