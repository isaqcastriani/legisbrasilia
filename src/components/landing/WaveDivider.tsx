import { useId } from "react";

interface WaveDividerProps {
  flip?: boolean;
  color?: string;
  /** When true, the band fill matches the background making it invisible — only lines/particles show */
  bgMatch?: boolean;
}

const WaveDivider = ({ flip = false, color, bgMatch = false }: WaveDividerProps) => {
  const fillColor = color || "hsl(var(--background))";
  const id = useId().replace(/:/g, "");

  return (
    <div
      className={`relative w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
      style={{
        height: "72px",
        marginTop: flip ? 0 : "-1px",
        marginBottom: flip ? "-1px" : 0,
      }}
    >
      <svg
        viewBox="0 0 1200 72"
        preserveAspectRatio="none"
        className="block h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${id}-beam`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            <stop offset="20%" stopColor="hsl(var(--secondary))" stopOpacity="0.12" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.45" />
            <stop offset="80%" stopColor="hsl(var(--secondary))" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
          </linearGradient>

          <linearGradient id={`${id}-glow`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>

          <filter id={`${id}-blur`} x="-20%" y="-200%" width="140%" height="400%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* Top dashed line — straight */}
        <path
          d="M0 28 L1200 28"
          fill="none"
          stroke={`url(#${id}-beam)`}
          strokeWidth="1.2"
          strokeDasharray="16 18"
          opacity="0.6"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-102" dur="3s" repeatCount="indefinite" />
        </path>

        {/* Bottom dashed line — straight */}
        <path
          d="M0 44 L1200 44"
          fill="none"
          stroke={`url(#${id}-beam)`}
          strokeWidth="1.2"
          strokeDasharray="10 16"
          opacity="0.4"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="84" dur="3.8s" repeatCount="indefinite" />
        </path>

        {/* Center glow line */}
        <path
          d="M0 36 L1200 36"
          fill="none"
          stroke={`url(#${id}-glow)`}
          strokeWidth="1.5"
          filter={`url(#${id}-blur)`}
          opacity="0.3"
        >
          <animate attributeName="opacity" values="0.15;0.35;0.15" dur="4.2s" repeatCount="indefinite" />
        </path>

        {/* Traveling particles */}
        <g opacity="0.7">
          <rect x="120" y="34" width="8" height="3" rx="1.5" fill="hsl(var(--primary))">
            <animate attributeName="x" values="120;980" dur="4.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.8;0.8;0" dur="4.8s" repeatCount="indefinite" />
          </rect>
          <rect x="320" y="38" width="6" height="2.5" rx="1.25" fill="hsl(var(--secondary))">
            <animate attributeName="x" values="320;1080" dur="3.6s" begin="-1.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.6;0.6;0" dur="3.6s" begin="-1.2s" repeatCount="indefinite" />
          </rect>
          <rect x="980" y="33" width="7" height="3" rx="1.5" fill="hsl(var(--primary))">
            <animate attributeName="x" values="980;180" dur="5.2s" begin="-2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.7;0.7;0" dur="5.2s" begin="-2s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Corner dots */}
        <g opacity="0.35">
          <circle cx="200" cy="28" r="1.5" fill="hsl(var(--primary))">
            <animate attributeName="opacity" values="0.15;0.7;0.15" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="44" r="1.5" fill="hsl(var(--secondary))">
            <animate attributeName="opacity" values="0.15;0.7;0.15" dur="2.8s" begin="-1.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="36" r="1.2" fill="hsl(var(--primary))">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3.1s" begin="-0.8s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default WaveDivider;
