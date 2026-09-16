import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, CheckCircle2, Sparkles } from 'lucide-react';

interface InteractiveTafseerTextProps {
  content: string;
  isUrdu?: boolean;
}

export const InteractiveTafseerText: React.FC<InteractiveTafseerTextProps> = ({ content, isUrdu = false }) => {
  // Store revealed state for each question index
  const [revealedQuestions, setRevealedQuestions] = useState<Record<number, boolean>>({});

  const toggleQuestion = (idx: number) => {
    setRevealedQuestions((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const renderInlineFormatted = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, pIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={pIdx} className="font-bold text-[#204025]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const renderFormattedChunk = (chunk: string, keyPrefix: string) => {
    const lines = chunk.split('\n');
    return lines.map((line, lIdx) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return <div key={`${keyPrefix}-${lIdx}`} className="h-2" />;
      }
      if (trimmed === '---') {
        return <hr key={`${keyPrefix}-${lIdx}`} className="my-3 border-t border-[#E5E0D0]/80" />;
      }
      if (trimmed.startsWith('# ')) {
        return (
          <h2
            key={`${keyPrefix}-${lIdx}`}
            className="text-lg sm:text-xl font-extrabold text-[#204025] my-3 pb-1.5 border-b-2 border-[#204025]/20 flex items-center gap-2"
          >
            {renderInlineFormatted(trimmed.replace(/^#\s+/, ''))}
          </h2>
        );
      }
      if (trimmed.startsWith('## ')) {
        return (
          <h3
            key={`${keyPrefix}-${lIdx}`}
            className="text-base sm:text-lg font-bold text-[#7D6B4B] mt-4 mb-2 flex items-center gap-1.5"
          >
            {renderInlineFormatted(trimmed.replace(/^##\s+/, ''))}
          </h3>
        );
      }
      if (trimmed.startsWith('### ')) {
        return (
          <h4
            key={`${keyPrefix}-${lIdx}`}
            className="text-base font-bold text-[#2E5A36] my-2 pb-0.5"
          >
            {renderInlineFormatted(trimmed.replace(/^###\s+/, ''))}
          </h4>
        );
      }
      if (trimmed.startsWith('👉 ')) {
        return (
          <div
            key={`${keyPrefix}-${lIdx}`}
            className="my-2 p-2.5 sm:p-3 rounded-xl bg-[#EBF3EC] border border-[#A3C9A8]/70 text-[#204025] font-bold text-sm sm:text-base flex items-start gap-2 shadow-2xs"
          >
            <span className="text-lg shrink-0">👉</span>
            <div className="flex-1 leading-relaxed">
              {renderInlineFormatted(trimmed.replace(/^👉\s+/, ''))}
            </div>
          </div>
        );
      }
      return (
        <p key={`${keyPrefix}-${lIdx}`} className="leading-relaxed my-1.5">
          {renderInlineFormatted(line)}
        </p>
      );
    });
  };

  // Regular expression to match inline interactive questions:
  // [QUESTION: ... | ANSWER: ...] or [سوال: ... | جواب: ...]
  const questionRegex = /\[(?:QUESTION|سوال):\s*(.+?)\s*\|\s*(?:ANSWER|جواب):\s*(.+?)\]/g;

  // Split content into parts (regular text segments and question matches)
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let qCount = 0;

  while ((match = questionRegex.exec(content)) !== null) {
    const matchStart = match.index;
    const matchEnd = questionRegex.lastIndex;

    // Push text before the question
    if (matchStart > lastIndex) {
      const textChunk = content.substring(lastIndex, matchStart);
      elements.push(
        <div key={`text-${lastIndex}`}>
          {renderFormattedChunk(textChunk, `c-${lastIndex}`)}
        </div>
      );
    }

    const questionIndex = qCount++;
    const questionText = match[1].trim();
    const answerText = match[2].trim();
    const isRevealed = !!revealedQuestions[questionIndex];

    // Push interactive Question Card
    elements.push(
      <div
        key={`q-${questionIndex}`}
        className={`my-3 p-3.5 sm:p-4 rounded-xl border transition-all duration-200 ${
          isRevealed
            ? 'bg-[#EBF3EC] border-[#A3C9A8] shadow-xs'
            : 'bg-[#FAF6EC] border-[#E3D9C0] hover:border-[#7D6B4B]/50'
        } ${isUrdu ? 'text-right font-urdu dir-rtl' : 'text-left font-sans dir-ltr'}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2 flex-1">
            <span
              className={`p-1 rounded-lg shrink-0 mt-0.5 ${
                isRevealed ? 'bg-[#2E5A36] text-white' : 'bg-[#7D6B4B] text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
            </span>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#7D6B4B] flex items-center gap-1 mb-1">
                <Sparkles className="w-3 h-3 text-[#B89758]" />
                {isUrdu ? 'آپ کے لیے ایک پیارا سوال (سوچئے!)' : 'Quick Question for You! (Think & Answer)'}
              </div>
              <p className={`text-sm sm:text-[15px] font-bold ${isUrdu ? 'leading-[2.1] text-[#2C3E2D]' : 'leading-snug text-[#2D2D2D]'}`}>
                {questionText}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => toggleQuestion(questionIndex)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 shadow-2xs ${
              isRevealed
                ? 'bg-[#2E5A36] text-white hover:bg-[#234529]'
                : 'bg-[#7D6B4B] text-white hover:bg-[#63553C]'
            }`}
          >
            {isRevealed ? (
              <>
                <span>{isUrdu ? 'جواب چھپائیں' : 'Hide Answer'}</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>{isUrdu ? 'جواب دیکھیں' : 'Reveal Answer'}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

        {/* Revealed Answer Box */}
        {isRevealed && (
          <div className={`mt-3 pt-2.5 border-t border-[#A3C9A8]/70 flex items-start gap-2 ${isUrdu ? 'flex-row-reverse text-right' : 'text-left'}`}>
            <CheckCircle2 className="w-4 h-4 text-[#2E5A36] shrink-0 mt-1" />
            <div className="flex-1">
              <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-[#2E5A36]/15 text-[#2E5A36] mb-1">
                {isUrdu ? 'درست جواب:' : 'Answer:'}
              </span>
              <p className={`text-sm sm:text-[14.5px] font-medium text-[#204025] ${isUrdu ? 'leading-[2.2]' : 'leading-relaxed'}`}>
                {answerText}
              </p>
            </div>
          </div>
        )}
      </div>
    );

    lastIndex = matchEnd;
  }

  // Push any remaining text after the last match
  if (lastIndex < content.length) {
    elements.push(
      <div key="text-final">
        {renderFormattedChunk(content.substring(lastIndex), 'c-final')}
      </div>
    );
  }

  return (
    <div className={isUrdu ? 'font-urdu dir-rtl text-right' : 'font-sans dir-ltr text-left'}>
      {elements}
    </div>
  );
};
