const PixelDivider = ({ flip = false }: { flip?: boolean }) => {
  // Generate a pixelated transition pattern
  const cols = 40;
  const rows = 4;
  
  return (
    <div 
      className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
      style={{ height: `${rows * 16}px` }}
    >
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: cols * rows }).map((_, idx) => {
          const col = idx % cols;
          const row = Math.floor(idx / cols);
          // Create a wave-like pixelated transition
          const threshold = row + (Math.sin(col * 0.4) * 1.2) + (Math.cos(col * 0.7) * 0.8);
          const filled = threshold < 2;
          
          return (
            <div
              key={idx}
              style={{
                background: filled
                  ? "hsl(var(--background))"
                  : "transparent",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PixelDivider;
