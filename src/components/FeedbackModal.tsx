import React, { useState } from 'react';
import { MessageSquare, X, Send, CheckCircle } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-3">
      <div className="bg-[#FDFCF8] w-full max-w-sm rounded-2xl shadow-2xl border border-[#E5E0D0] p-5 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E0D0] mb-3">
          <div className="flex items-center gap-2 text-[#7D6B4B]">
            <MessageSquare className="w-5 h-5" />
            <h3 className="font-bold text-[#2D2D2D] text-base font-serif">Feedback & Suggestions</h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#9A8D70] hover:text-[#2D2D2D] cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-2">
            <CheckCircle className="w-12 h-12 text-[#7D6B4B] mx-auto animate-bounce" />
            <h4 className="font-bold text-[#2D2D2D] text-base font-serif">جزاكم الله خيراً</h4>
            <p className="text-xs text-[#5A5A5A] font-sans">
              Thank you for your valuable feedback! We appreciate your suggestions to improve the Maarif ul Quran app.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 font-sans">
            <p className="text-xs text-[#5A5A5A]">
              We welcome corrections, suggestions, and feature ideas for the Maarif ul Quran Para 1 application.
            </p>

            <div>
              <label className="block text-[11px] font-bold text-[#4A4A4A] mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#E5E0D0] rounded-xl text-xs text-[#2D2D2D] focus:ring-2 focus:ring-[#7D6B4B] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#4A4A4A] mb-1">Email (Optional)</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#E5E0D0] rounded-xl text-xs text-[#2D2D2D] focus:ring-2 focus:ring-[#7D6B4B] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#4A4A4A] mb-1">
                Your Feedback / Message *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Share your thoughts, report any typo or suggest improvements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#E5E0D0] rounded-xl text-xs text-[#2D2D2D] focus:ring-2 focus:ring-[#7D6B4B] focus:outline-none"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 text-xs text-[#5A5A5A] hover:text-[#2D2D2D] font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#7D6B4B] hover:bg-[#63553C] text-white text-xs font-bold rounded-xl shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Feedback</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
