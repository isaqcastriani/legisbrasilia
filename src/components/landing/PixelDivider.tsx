import { useRef, useEffect, useState, useMemo } from "react";

const COLS = 80;
const ROWS = 8;

const PixelDivider = ({ flip = false, color }: { flip?: boolean; color?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const raw = 1 - (rect.top - viewH * 0.7) / (viewH * 0.5);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cells = useMemo(() => {
    // Simple seeded pseudo-random for stable values
    const seed = (n: number) => {
      let x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
      return x - Math.floor(x);
    };

    const result = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const normalizedRow = flip ? (ROWS - 1 - row) : row;
        const wave = Math.sin(col * 0.35) * 0.8 + Math.cos(col * 0.6) * 0.5;
        const rnd = seed(row * COLS + col) * 0.05;
        const threshold = (normalizedRow / ROWS) + (wave * 0.15) + rnd;
        result.push({ row, col, threshold });
      }
    }
    return result;
  }, [flip]);

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden relative z-10 ${flip ? "rotate-180" : ""}`}
      style={{ height: `${ROWS * 14}px`, marginTop: flip ? 0 : "-1px", marginBottom: flip ? "-1px" : 0 }}
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
                  ? (color || "hsl(var(--background))")
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
