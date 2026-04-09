const SectionDivider = () => (
  <div className="flex flex-col items-center py-12">
    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
    <div className="w-px h-16" style={{ background: "hsl(var(--border) / 0.3)" }} />
    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
  </div>
);

export default SectionDivider;
