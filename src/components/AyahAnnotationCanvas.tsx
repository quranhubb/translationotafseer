import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Pen,
  Highlighter,
  Eraser,
  Undo2,
  Redo2,
  Trash2,
  Check,
  X,
  Palette,
  Eye,
  EyeOff,
  Download,
  Sparkles
} from 'lucide-react';

export type ToolType = 'pencil' | 'highlighter' | 'eraser';

interface StrokePoint {
  x: number;
  y: number;
}

interface DrawingStroke {
  tool: ToolType;
  color: string;
  size: number;
  opacity: number;
  points: StrokePoint[];
}

interface AyahAnnotationCanvasProps {
  surahNumber: number;
  ayahNumber: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  isActive: boolean;
  onClose: () => void;
}

const PENCIL_COLORS = [
  { name: 'Quran Gold', value: '#7D6B4B' },
  { name: 'Ruby Red', value: '#DC2626' },
  { name: 'Emerald Green', value: '#15803D' },
  { name: 'Deep Blue', value: '#1D4ED8' },
  { name: 'Amber Bronze', value: '#B45309' },
  { name: 'Charcoal Black', value: '#1F2937' },
];

const HIGHLIGHTER_COLORS = [
  { name: 'Sun Yellow', value: '#FACC15', opacity: 0.38 },
  { name: 'Mint Green', value: '#4ADE80', opacity: 0.35 },
  { name: 'Sky Cyan', value: '#38BDF8', opacity: 0.35 },
  { name: 'Peach Coral', value: '#FB7185', opacity: 0.35 },
  { name: 'Lavender', value: '#C084FC', opacity: 0.35 },
];

export const AyahAnnotationCanvas: React.FC<AyahAnnotationCanvasProps> = ({
  surahNumber,
  ayahNumber,
  containerRef,
  isActive,
  onClose,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentTool, setCurrentTool] = useState<ToolType>('pencil');
  const [selectedPencilColor, setSelectedPencilColor] = useState(PENCIL_COLORS[0].value);
  const [selectedHighlightColor, setSelectedHighlightColor] = useState(HIGHLIGHTER_COLORS[0].value);
  const [pencilSize, setPencilSize] = useState<number>(3); // 2, 4, 6
  const [highlighterSize, setHighlighterSize] = useState<number>(20); // 16, 22, 30
  const [eraserSize, setEraserSize] = useState<number>(25); // 15, 25, 40
  
  const [strokes, setStrokes] = useState<DrawingStroke[]>([]);
  const [redoStack, setRedoStack] = useState<DrawingStroke[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 });

  const storageKey = `maarif_draw_${surahNumber}_${ayahNumber}`;

  // Load saved strokes from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setStrokes(parsed);
          setRedoStack([]);
        }
      } else {
        setStrokes([]);
        setRedoStack([]);
      }
    } catch (e) {
      console.error('Failed to load drawing strokes:', e);
      setStrokes([]);
    }
  }, [storageKey]);

  // Save strokes to localStorage
  const saveStrokes = useCallback(
    (newStrokes: DrawingStroke[]) => {
      try {
        if (newStrokes.length === 0) {
          localStorage.removeItem(storageKey);
        } else {
          localStorage.setItem(storageKey, JSON.stringify(newStrokes));
        }
      } catch (e) {
        console.error('Failed to save drawing strokes:', e);
      }
    },
    [storageKey]
  );

  // Resize canvas according to the container element
  const updateCanvasSize = useCallback(() => {
    if (!containerRef.current || !canvasRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollHeight = container.scrollHeight;
    const width = rect.width;
    const height = Math.max(scrollHeight, rect.height, 400);

    setCanvasDimensions({ width, height });

    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
      redrawAllStrokes(ctx, strokes, width, height);
    }
  }, [containerRef, strokes]);

  // Re-calculate on mount, resize, or when active
  useEffect(() => {
    updateCanvasSize();
    const handleResize = () => updateCanvasSize();
    window.addEventListener('resize', handleResize);

    const observer = new ResizeObserver(() => {
      updateCanvasSize();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [updateCanvasSize, containerRef]);

  // Redraw all strokes onto context
  const redrawAllStrokes = (
    ctx: CanvasRenderingContext2D,
    strokeList: DrawingStroke[],
    w: number,
    h: number
  ) => {
    ctx.clearRect(0, 0, w, h);
    if (!isVisible) return;

    strokeList.forEach((stroke) => {
      if (stroke.points.length < 1) return;

      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (stroke.tool === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = stroke.size;
        ctx.strokeStyle = 'rgba(0,0,0,1)';
      } else if (stroke.tool === 'highlighter') {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = stroke.opacity || 0.38;
        ctx.lineWidth = stroke.size;
        ctx.strokeStyle = stroke.color;
      } else {
        // Pencil / Pen
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1;
        ctx.lineWidth = stroke.size;
        ctx.strokeStyle = stroke.color;
      }

      ctx.beginPath();
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);

      if (stroke.points.length === 1) {
        ctx.arc(stroke.points[0].x, stroke.points[0].y, stroke.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = stroke.color;
        ctx.fill();
      } else {
        for (let i = 1; i < stroke.points.length; i++) {
          const pt = stroke.points[i];
          ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
      }

      ctx.restore();
    });
  };

  // Re-render when strokes or visibility change
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    redrawAllStrokes(ctx, strokes, canvasDimensions.width, canvasDimensions.height);
    ctx.restore();
  }, [strokes, isVisible, canvasDimensions]);

  // Coordinate helper
  const getCanvasPoint = (e: React.MouseEvent | React.TouchEvent): StrokePoint | null => {
    if (!canvasRef.current) return null;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      if (e.touches.length === 0) return null;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  // Drawing Event Handlers
  const handleStartDraw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isActive || !isVisible) return;
    
    // Prevent page scroll when drawing on mobile
    if ('touches' in e && e.cancelable) {
      e.preventDefault();
    }

    const point = getCanvasPoint(e);
    if (!point) return;

    setIsDrawing(true);

    const newStroke: DrawingStroke = {
      tool: currentTool,
      color: currentTool === 'highlighter' ? selectedHighlightColor : selectedPencilColor,
      size:
        currentTool === 'highlighter'
          ? highlighterSize
          : currentTool === 'eraser'
          ? eraserSize
          : pencilSize,
      opacity: currentTool === 'highlighter' ? 0.38 : 1,
      points: [point],
    };

    setStrokes((prev) => [...prev, newStroke]);
    setRedoStack([]); // reset redo on new action
  };

  const handleMoveDraw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isActive || !isDrawing || !isVisible) return;
    
    if ('touches' in e && e.cancelable) {
      e.preventDefault();
    }

    const point = getCanvasPoint(e);
    if (!point) return;

    setStrokes((prev) => {
      if (prev.length === 0) return prev;
      const lastIndex = prev.length - 1;
      const current = prev[lastIndex];
      const updatedStroke = {
        ...current,
        points: [...current.points, point],
      };
      return [...prev.slice(0, lastIndex), updatedStroke];
    });
  };

  const handleEndDraw = (e?: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    setIsDrawing(false);
    saveStrokes(strokes);
  };

  // Tool Actions
  const handleUndo = () => {
    if (strokes.length === 0) return;
    const last = strokes[strokes.length - 1];
    const newStrokes = strokes.slice(0, -1);
    setStrokes(newStrokes);
    setRedoStack((prev) => [...prev, last]);
    saveStrokes(newStrokes);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const last = redoStack[redoStack.length - 1];
    const newRedo = redoStack.slice(0, -1);
    const newStrokes = [...strokes, last];
    setStrokes(newStrokes);
    setRedoStack(newRedo);
    saveStrokes(newStrokes);
  };

  const handleClearAll = () => {
    if (strokes.length === 0) return;
    if (window.confirm('کیا آپ تمام پنسل و ہائی لائٹر کے نشانات مٹانا چاہتے ہیں؟')) {
      setStrokes([]);
      setRedoStack([]);
      saveStrokes([]);
    }
  };

  return (
    <>
      {/* 1. Interactive Drawing Canvas Overlay */}
      <canvas
        ref={canvasRef}
        id="ayah-annotation-canvas"
        onMouseDown={handleStartDraw}
        onMouseMove={handleMoveDraw}
        onMouseUp={handleEndDraw}
        onMouseLeave={handleEndDraw}
        onTouchStart={handleStartDraw}
        onTouchMove={handleMoveDraw}
        onTouchEnd={handleEndDraw}
        onTouchCancel={handleEndDraw}
        className={`absolute inset-0 z-20 transition-opacity duration-200 ${
          isActive
            ? 'pointer-events-auto cursor-crosshair touch-none'
            : 'pointer-events-none'
        } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* 2. Sleek Floating Annotation Control Dock (When Tool is Active) */}
      {isActive && (
        <div
          id="annotation-toolbar-dock"
          className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-lg bg-[#2D2D2D]/95 text-white backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-2xl border border-[#7D6B4B]/60 animate-in slide-in-from-bottom-5 duration-200 font-sans"
        >
          <div className="flex items-center justify-between gap-1">
            {/* Primary Drawing Tools: Pencil, Highlighter, Eraser */}
            <div className="flex items-center bg-[#1E1C18] p-1 rounded-xl border border-[#4A4A4A] gap-1">
              {/* Pencil Button */}
              <button
                id="tool-btn-pencil"
                onClick={() => {
                  setCurrentTool('pencil');
                  setShowColorPicker(false);
                }}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currentTool === 'pencil'
                    ? 'bg-[#7D6B4B] text-white shadow-xs'
                    : 'text-[#C5BEB0] hover:text-white hover:bg-white/10'
                }`}
                title="Pencil / قلم (Pen)"
              >
                <Pen className="w-4 h-4" />
                <span className="hidden sm:inline font-urdu text-[13px]">پنسل</span>
              </button>

              {/* Highlighter Button */}
              <button
                id="tool-btn-highlighter"
                onClick={() => {
                  setCurrentTool('highlighter');
                  setShowColorPicker(false);
                }}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currentTool === 'highlighter'
                    ? 'bg-[#B45309] text-white shadow-xs'
                    : 'text-[#C5BEB0] hover:text-white hover:bg-white/10'
                }`}
                title="Highlighter / ہائی لائٹر"
              >
                <Highlighter className="w-4 h-4" />
                <span className="hidden sm:inline font-urdu text-[13px]">ہائی لائٹر</span>
              </button>

              {/* Eraser Button */}
              <button
                id="tool-btn-eraser"
                onClick={() => {
                  setCurrentTool('eraser');
                  setShowColorPicker(false);
                }}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currentTool === 'eraser'
                    ? 'bg-rose-700 text-white shadow-xs'
                    : 'text-[#C5BEB0] hover:text-white hover:bg-white/10'
                }`}
                title="Eraser / ربڑ (صاف کریں)"
              >
                <Eraser className="w-4 h-4" />
                <span className="hidden sm:inline font-urdu text-[13px]">ربڑ</span>
              </button>
            </div>

            {/* Quick Color Picker or Size Selector */}
            <div className="flex items-center gap-1.5">
              {currentTool !== 'eraser' ? (
                <div className="flex items-center gap-1 bg-[#1E1C18] p-1 rounded-xl border border-[#4A4A4A]">
                  {(currentTool === 'pencil' ? PENCIL_COLORS : HIGHLIGHTER_COLORS)
                    .slice(0, 4)
                    .map((col) => {
                      const isSelected =
                        currentTool === 'pencil'
                          ? selectedPencilColor === col.value
                          : selectedHighlightColor === col.value;
                      return (
                        <button
                          key={col.value}
                          onClick={() => {
                            if (currentTool === 'pencil') {
                              setSelectedPencilColor(col.value);
                            } else {
                              setSelectedHighlightColor(col.value);
                            }
                          }}
                          className={`w-6 h-6 rounded-full transition-transform cursor-pointer border ${
                            isSelected
                              ? 'scale-110 border-white ring-2 ring-[#7D6B4B]'
                              : 'border-transparent hover:scale-105'
                          }`}
                          style={{ backgroundColor: col.value }}
                          title={col.name}
                        />
                      );
                    })}
                </div>
              ) : (
                /* Eraser size selector */
                <div className="flex items-center gap-1 bg-[#1E1C18] px-2 py-1 rounded-xl border border-[#4A4A4A] text-xs">
                  <span className="text-[11px] text-[#9A8D70] font-urdu">سائز:</span>
                  {[16, 26, 40].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setEraserSize(sz)}
                      className={`px-1.5 py-0.5 rounded font-mono text-[11px] cursor-pointer ${
                        eraserSize === sz ? 'bg-rose-800 text-white font-bold' : 'text-[#A0A0A0] hover:text-white'
                      }`}
                    >
                      {sz === 16 ? 'S' : sz === 26 ? 'M' : 'L'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Undo, Redo, Clear & Done Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleUndo}
                disabled={strokes.length === 0}
                className="p-2 rounded-xl text-[#EDE9DE] hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                title="Undo / پچھلا عمل"
              >
                <Undo2 className="w-4 h-4" />
              </button>

              <button
                onClick={handleRedo}
                disabled={redoStack.length === 0}
                className="p-2 rounded-xl text-[#EDE9DE] hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                title="Redo / اگلا عمل"
              >
                <Redo2 className="w-4 h-4" />
              </button>

              <button
                onClick={handleClearAll}
                disabled={strokes.length === 0}
                className="p-2 rounded-xl text-rose-300 hover:text-rose-200 hover:bg-rose-950/40 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                title="Clear All / سب مٹائیں"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              {/* Toggle Marks Visibility */}
              <button
                onClick={() => setIsVisible(!isVisible)}
                className={`p-2 rounded-xl transition-colors cursor-pointer ${
                  isVisible ? 'text-[#EDE9DE] hover:bg-white/10' : 'text-amber-400 bg-amber-950/40'
                }`}
                title={isVisible ? 'Hide marks' : 'Show marks'}
              >
                {isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>

              {/* Done / Close Button */}
              <button
                id="btn-done-annotation"
                onClick={onClose}
                className="ml-1 bg-[#7D6B4B] hover:bg-[#63553C] text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm active:scale-95 transition-all cursor-pointer font-sans"
              >
                <Check className="w-4 h-4" />
                <span className="font-urdu text-xs">مکمل</span>
              </button>
            </div>
          </div>

          {/* Quick Urdu helper tip */}
          <div className="mt-1 pt-1 border-t border-[#444] flex items-center justify-between text-[11px] text-[#A09885] px-1 font-urdu">
            <span>
              {currentTool === 'pencil'
                ? '✏️ پنسل سے آیت یا ترجمہ پر نشان اور نوٹس لگائیں'
                : currentTool === 'highlighter'
                ? '🖍️ ہائی لائٹر سے اہم الفاظ اور نکات کو نمایاں کریں'
                : '🧹 ربڑ سے نشانات کو باآسانی صاف کریں'}
            </span>
            <span className="text-[10px] text-[#7D6B4B] font-sans">Auto-saved</span>
          </div>
        </div>
      )}
    </>
  );
};
