import { useId } from "react";

interface WaveDividerProps {
  flip?: boolean;
  color?: string;
}

const WaveDivider = ({ flip = false, color }: WaveDividerProps) => {
  const fillColor = color || "hsl(var(--background))";
  const id = useId().replace(/:/g, "");

  return (
    <div
      className={`relative w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
      style={{
        height: "88px",
        marginTop: flip ? 0 : "-1px",
        marginBottom: flip ? "-1px" : 0,
      }}
    >
      <svg
        viewBox="0 0 1200 88"
        preserveAspectRatio="none"
        className="block h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${id}-band`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={fillColor} stopOpacity="0" />
            <stop offset="18%" stopColor={fillColor} stopOpacity="0.68" />
            <stop offset="50%" stopColor={fillColor} stopOpacity="0.96" />
            <stop offset="82%" stopColor={fillColor} stopOpacity="0.68" />
            <stop offset="100%" stopColor={fillColor} stopOpacity="0" />
          </linearGradient>

          <linearGradient id={`${id}-beam`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            <stop offset="20%" stopColor="hsl(var(--secondary))" stopOpacity="0.18" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.75" />
            <stop offset="80%" stopColor="hsl(var(--secondary))" stopOpacity="0.18" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
          </linearGradient>

          <linearGradient id={`${id}-glow`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>

          <filter id={`${id}-blur`} x="-20%" y="-200%" width="140%" height="400%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <path
          d="M0 34 L180 34 L252 18 L948 18 L1020 34 L1200 34 L1200 54 L1020 54 L948 70 L252 70 L180 54 L0 54 Z"
          fill={`url(#${id}-band)`}
          opacity="0.92"
        />

        <path
          d="M0 34 L180 34 L252 18 L948 18 L1020 34 L1200 34"
          fill="none"
          stroke={`url(#${id}-beam)`}
          strokeWidth="1.5"
          strokeDasharray="18 20"
          opacity="0.8"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-114" dur="3s" repeatCount="indefinite" />
        </path>

        <path
          d="M0 54 L180 54 L252 70 L948 70 L1020 54 L1200 54"
          fill="none"
          stroke={`url(#${id}-beam)`}
          strokeWidth="1.5"
          strokeDasharray="12 18"
          opacity="0.55"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="96" dur="3.8s" repeatCount="indefinite" />
        </path>

        <path
          d="M0 44 L1200 44"
          fill="none"
          stroke={`url(#${id}-glow)`}
          strokeWidth="2"
          filter={`url(#${id}-blur)`}
          opacity="0.45"
        >
          <animate attributeName="opacity" values="0.22;0.48;0.22" dur="4.2s" repeatCount="indefinite" />
        </path>

        <g opacity="0.85">
          <rect x="120" y="40" width="10" height="4" rx="2" fill="hsl(var(--primary))">
            <animate attributeName="x" values="120;980" dur="4.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" dur="4.8s" repeatCount="indefinite" />
          </rect>
          <rect x="320" y="46" width="8" height="3" rx="1.5" fill="hsl(var(--secondary))">
            <animate attributeName="x" values="320;1080" dur="3.6s" begin="-1.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3.6s" begin="-1.2s" repeatCount="indefinite" />
          </rect>
          <rect x="980" y="39" width="9" height="4" rx="2" fill="hsl(var(--primary))">
            <animate attributeName="x" values="980;180" dur="5.2s" begin="-2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.9;0.9;0" dur="5.2s" begin="-2s" repeatCount="indefinite" />
          </rect>
        </g>

        <g opacity="0.45">
          <circle cx="248" cy="18" r="2" fill="hsl(var(--primary))">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="948" cy="70" r="2" fill="hsl(var(--secondary))">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2.8s" begin="-1.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="44" r="1.5" fill="hsl(var(--primary))">
            <animate attributeName="opacity" values="0.15;0.8;0.15" dur="3.1s" begin="-0.8s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default WaveDivider;
