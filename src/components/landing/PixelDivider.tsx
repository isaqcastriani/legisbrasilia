import { useRef, useEffect, useState, useMemo } from "react";

const COLS = 60;
const ROWS = 12;

const PixelDivider = ({ flip = false, color }: { flip?: boolean; color?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // Start filling when element enters bottom 30% of viewport
      // Complete when element reaches middle of viewport
      const start = viewH * 0.95;
      const end = viewH * 0.3;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cells = useMemo(() => {
    const seed = (n: number) => {
      let x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
      return x - Math.floor(x);
    };

    const result = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const normalizedRow = flip ? (ROWS - 1 - row) : row;
        const wave = Math.sin(col * 0.25) * 0.6 + Math.cos(col * 0.45) * 0.4;
        const rnd = seed(row * COLS + col) * 0.12;
        // Spread thresholds more so the animation is visible longer
        const threshold = (normalizedRow / ROWS) * 0.7 + (wave * 0.12) + rnd * 0.3;
        result.push({ row, col, threshold });
      }
    }
    return result;
  }, [flip]);

  const fillColor = color || "hsl(var(--background))";

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden relative z-10 ${flip ? "rotate-180" : ""}`}
      style={{ height: `${ROWS * 10}px`, marginTop: flip ? 0 : "-1px", marginBottom: flip ? "-1px" : 0 }}
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
                background: filled ? fillColor : "transparent",
                transition: "background 0.25s ease",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PixelDivider;
