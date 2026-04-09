import { useRef, useEffect, useState } from "react";

interface WaveDividerProps {
  flip?: boolean;
  color?: string;
}

const WaveDivider = ({ flip = false, color }: WaveDividerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const start = viewH * 0.95;
      const end = viewH * 0.35;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fillColor = color || "hsl(var(--background))";

  // Generate wave path that reveals based on scroll progress
  const waveHeight = 60;
  const generateWavePath = (p: number) => {
    // Wave moves from bottom to top (or top to bottom if flipped)
    const yOffset = (1 - p) * (waveHeight + 20);
    const amp = 12 + p * 8; // amplitude grows as it reveals
    const freq = 0.008;

    let path = `M 0 ${yOffset}`;
    for (let x = 0; x <= 1200; x += 10) {
      const wave1 = Math.sin(x * freq * 2 + p * 4) * amp;
      const wave2 = Math.sin(x * freq * 3 + p * 2 + 1) * (amp * 0.5);
      const y = yOffset + wave1 + wave2;
      path += ` L ${x} ${y}`;
    }
    path += ` L 1200 ${waveHeight + 30} L 0 ${waveHeight + 30} Z`;
    return path;
  };

  return (
    <div
      ref={ref}
      className={`w-full relative z-10 ${flip ? "rotate-180" : ""}`}
      style={{
        height: `${waveHeight + 30}px`,
        marginTop: flip ? 0 : "-1px",
        marginBottom: flip ? "-1px" : 0,
      }}
    >
      <svg
        viewBox={`0 0 1200 ${waveHeight + 30}`}
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={{ filter: "drop-shadow(0 -2px 8px hsl(var(--primary) / 0.05))" }}
      >
        <defs>
          <linearGradient id={`waveGrad-${flip}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={fillColor} stopOpacity="0.95" />
            <stop offset="50%" stopColor={fillColor} stopOpacity="1" />
            <stop offset="100%" stopColor={fillColor} stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          d={generateWavePath(progress)}
          fill={`url(#waveGrad-${flip})`}
          style={{ transition: "d 0.15s ease-out" }}
        />
        {/* Secondary subtle wave for depth */}
        <path
          d={generateWavePath(Math.max(0, progress - 0.08))}
          fill={fillColor}
          opacity="0.3"
          style={{ transition: "d 0.2s ease-out" }}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
