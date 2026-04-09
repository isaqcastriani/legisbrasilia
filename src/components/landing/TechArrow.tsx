const TechArrow = () => {
  return (
    <div className="flex flex-col items-center py-6 md:py-8 relative">
      <svg
        width="40"
        height="120"
        viewBox="0 0 40 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="tech-arrow"
      >
        <defs>
          {/* Static dim line */}
          <linearGradient id="arrowBase" x1="20" y1="120" x2="20" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
          </linearGradient>

          {/* Animated glow gradient */}
          <linearGradient id="arrowGlow" x1="20" y1="120" x2="20" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0">
              <animate attributeName="offset" values="0;0.6;1" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="15%" stopColor="hsl(var(--primary))" stopOpacity="0.9">
              <animate attributeName="offset" values="0.15;0.75;1.15" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="30%" stopColor="hsl(var(--primary))" stopOpacity="0">
              <animate attributeName="offset" values="0.3;0.9;1.3" dur="2s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          {/* Glow filter */}
          <filter id="arrowBlur" x="-50%" y="-10%" width="200%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base line */}
        <line x1="20" y1="115" x2="20" y2="20" stroke="url(#arrowBase)" strokeWidth="2" />

        {/* Animated glow line */}
        <line x1="20" y1="115" x2="20" y2="20" stroke="url(#arrowGlow)" strokeWidth="2" filter="url(#arrowBlur)" />

        {/* Arrowhead */}
        <path
          d="M12 28 L20 14 L28 28"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.6"
        />

        {/* Small decorative nodes */}
        <circle cx="20" cy="115" r="2.5" fill="hsl(var(--primary))" opacity="0.2" />
        <circle cx="20" cy="14" r="2" fill="hsl(var(--primary))" opacity="0.5" />
      </svg>
    </div>
  );
};

export default TechArrow;
