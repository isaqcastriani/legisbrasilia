import { useRef, useEffect, useState } from "react";

const COLS = 60;
const ROWS = 6;
const CELL_SIZE = 100 / COLS; // percentage width

const PixelDivider = ({ flip = false }: { flip?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // Start revealing when element enters viewport, complete when it's centered
      const raw = 1 - (rect.top - viewH * 0.7) / (viewH * 0.5);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pre-compute thresholds for each cell (wave pattern)
  const cells = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // Normalize position. Row 0 = top (fills first when not flipped)
      const normalizedRow = flip ? (ROWS - 1 - row) : row;
      // Wave pattern based on column
      const wave = Math.sin(col * 0.35) * 0.8 + Math.cos(col * 0.6) * 0.5;
      // Threshold: lower = fills earlier. Top rows + wave peaks fill first
      const threshold = (normalizedRow / ROWS) + (wave * 0.15) + (Math.random() * 0.05);
      cells.push({ row, col, threshold });
    }
  }

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden relative z-10 ${flip ? "rotate-180" : ""}`}
      style={{ height: `${ROWS * 16}px`, marginTop: flip ? 0 : "-1px", marginBottom: flip ? "-1px" : 0 }}
    >
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {cells.map((cell, idx) => {
          const filled = progress > cell.threshold;
          return (
            <div
              key={idx}
              style={{
                background: filled
                  ? "hsl(213 55% 8%)"
                  : "transparent",
                transition: "background 0.15s ease",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PixelDivider;
