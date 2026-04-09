const SectionDivider = () => (
  <div className="flex flex-col items-center py-10 md:py-14">
    <div className="w-2 h-2 rounded-full bg-primary" />
    <div className="w-px h-12 md:h-20" style={{ background: "hsl(var(--border) / 0.25)" }} />
    <div className="w-2 h-2 rounded-full bg-primary" />
  </div>
);

export default SectionDivider;
