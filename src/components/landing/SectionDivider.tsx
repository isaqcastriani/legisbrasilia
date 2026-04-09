const SectionDivider = () => (
  <div className="flex flex-col items-center py-8 md:py-12">
    <div className="w-[3px] h-[3px] rounded-full bg-primary/50" />
    <div className="w-px h-10 md:h-16" style={{ background: "hsl(var(--border) / 0.15)" }} />
    <div className="w-[3px] h-[3px] rounded-full bg-primary/50" />
  </div>
);

export default SectionDivider;
