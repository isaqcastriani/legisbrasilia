import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import heroAraraVideo from "@/assets/hero-arara-video.mp4.asset.json";
import heroPanelMockup from "@/assets/hero-panel-mockup.png";
import ushapeLeft from "@/assets/hero-ushape-left.jpg";
import ushapeRight from "@/assets/hero-ushape-right.jpg";

/* Subtle particle dots in background */
const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; r: number; phase: number; speed: number }[] = [];
    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        r: Math.random() * 1.5 + 0.4,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.5,
      });
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w(), h());
      for (const p of particles) {
        const alpha = 0.1 + 0.25 * Math.sin(t * 0.001 * p.speed + p.phase);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(68, 89%, 45%, ${alpha})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-lines" />
      <ParticleCanvas />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 0%, hsl(var(--background)) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        {/* Top: 3-column layout — headline / arara / subtext */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-0 pt-10 lg:pt-16">
          {/* LEFT — Headline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="badge-glow text-xs">Beta Premium</span>
            </motion.div>

            <h1 className="font-heading text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.06] tracking-tight text-foreground">
              A Única IA
              <br />
              Jurídica 100%
              <br />
              Brasileira e
              <br />
              <span className="text-gradient">Validada</span>
              <span className="text-primary">.</span>
            </h1>
          </motion.div>

          {/* CENTER — Arara cibernética VIDEO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center order-first lg:order-none"
          >
            {/* Glow behind arara */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 pointer-events-none"
              style={{ background: "hsl(var(--secondary))" }}
            />
            <video
              src={heroAraraVideo.url}
              autoPlay
              loop
              muted
              playsInline
              className="relative w-[280px] md:w-[340px] lg:w-[420px] drop-shadow-2xl"
              style={{ mixBlendMode: "lighten" }}
            />
          </motion.div>

          {/* RIGHT — Subtext */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-left lg:text-left lg:pl-4"
          >
            <p className="font-heading text-base md:text-lg font-semibold text-foreground leading-snug mb-3 max-w-xs">
              Dominamos todo o ciclo jurídico, da prova à peça final.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              <span className="text-primary font-medium">Validada por especialistas</span> — a única inteligência artificial treinada exclusivamente com o raciocínio dos tribunais brasileiros.
            </p>
          </motion.div>
        </div>

        {/* CTA centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-10 lg:mt-6"
        >
          <CtaButton>ENTRAR PARA A NOVA ERA JURÍDICA</CtaButton>
        </motion.div>

        {/* ====== PANEL SHOWCASE — U-shapes + Glass Card ====== */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14 lg:mt-20 mx-auto"
        >
          {/* Glow behind */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90%] h-[300px] rounded-full blur-[140px] opacity-[0.08] pointer-events-none"
            style={{ background: "hsl(var(--primary))" }}
          />

          {/* Container for U-shapes + card */}
          <div className="relative flex items-end justify-center gap-0 overflow-visible">
            {/* LEFT U-SHAPE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block relative flex-shrink-0 -mr-6 z-0"
              style={{ width: "280px" }}
            >
              <svg
                viewBox="0 0 280 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <defs>
                  <clipPath id="u-clip-left">
                    <path d="M0,0 L0,200 Q0,310 140,310 Q280,310 280,200 L280,0 L240,0 L240,200 Q240,270 140,270 Q40,270 40,200 L40,0 Z" />
                  </clipPath>
                </defs>
                <image
                  href={ushapeLeft}
                  x="-60"
                  y="-20"
                  width="400"
                  height="360"
                  clipPath="url(#u-clip-left)"
                  preserveAspectRatio="xMidYMid slice"
                />
                {/* Subtle border */}
                <path
                  d="M0,0 L0,200 Q0,310 140,310 Q280,310 280,200 L280,0 M40,0 L40,200 Q40,270 140,270 Q240,270 240,200 L240,0"
                  stroke="hsl(213 30% 30%)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </motion.div>

            {/* CENTER — Glass Card with Panel UI */}
            <div className="relative z-10 w-full max-w-[700px] lg:max-w-[680px]">
              {/* Glass card */}
              <div
                className="relative rounded-3xl border overflow-hidden shadow-2xl"
                style={{
                  borderColor: "hsl(var(--border) / 0.25)",
                  background: "hsl(var(--card) / 0.5)",
                  boxShadow: "0 25px 80px -20px hsl(var(--background) / 0.8), 0 0 60px hsl(var(--primary) / 0.04)",
                }}
              >
                {/* Frosted glass overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--foreground) / 0.02) 0%, transparent 50%, hsl(var(--primary) / 0.02) 100%)",
                  }}
                />

                {/* Top bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b" style={{ borderColor: "hsl(var(--border) / 0.15)" }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--destructive) / 0.6)" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--primary) / 0.5)" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--secondary) / 0.5)" }} />
                  <div className="ml-3 flex items-center gap-2 text-[11px] text-muted-foreground/60">
                    <span>LegisBrasil.IA</span>
                    <span className="text-muted-foreground/30">/</span>
                    <span>Análise de Processo</span>
                  </div>
                </div>

                {/* Panel content mockup */}
                <div className="flex">
                  {/* Sidebar mini */}
                  <div
                    className="hidden sm:flex flex-col gap-3 px-3 py-4 border-r"
                    style={{ borderColor: "hsl(var(--border) / 0.1)", width: "56px" }}
                  >
                    {["⚖️", "📄", "🔍", "🤖", "📊"].map((icon, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${
                          i === 0 ? "ring-1 ring-primary/30" : ""
                        }`}
                        style={{
                          background: i === 0 ? "hsl(var(--primary) / 0.12)" : "transparent",
                        }}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>

                  {/* Main content area */}
                  <div className="flex-1 p-4 md:p-5 space-y-3">
                    {/* Chat-like assistant message */}
                    <div
                      className="rounded-xl p-4 max-w-sm"
                      style={{ background: "hsl(var(--primary) / 0.06)", border: "1px solid hsl(var(--primary) / 0.12)" }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold" style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}>AI</div>
                        <span className="text-xs font-semibold text-primary">Assistente Jurídico</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Processo analisado. Encontrei <span className="text-foreground font-medium">3 precedentes favoráveis</span> no STJ e <span className="text-foreground font-medium">2 teses aplicáveis</span>. A jurisprudência está alinhada.
                      </p>
                    </div>

                    {/* Action card */}
                    <div
                      className="rounded-xl p-3 max-w-xs"
                      style={{ background: "hsl(var(--muted) / 0.3)", border: "1px solid hsl(var(--border) / 0.15)" }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs">📋</span>
                        <span className="text-xs font-medium text-foreground">Petição Gerada</span>
                        <span className="ml-auto text-[10px] text-muted-foreground">Agora</span>
                      </div>
                    </div>

                    {/* Input bar */}
                    <div
                      className="flex items-center gap-2 rounded-xl px-4 py-2.5 mt-3"
                      style={{ background: "hsl(var(--muted) / 0.2)", border: "1px solid hsl(var(--border) / 0.12)" }}
                    >
                      <span className="text-xs text-muted-foreground/50 flex-1">Analise o recurso especial...</span>
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: "hsl(var(--primary))" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary-foreground">
                          <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Right sidebar — results panel */}
                  <div
                    className="hidden md:block p-4 border-l"
                    style={{ borderColor: "hsl(var(--border) / 0.1)", width: "220px" }}
                  >
                    <p className="text-[10px] font-semibold text-muted-foreground/70 uppercase tracking-wider mb-3">Especialistas Ativos</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: "Analista", emoji: "🦅", color: "hsl(var(--secondary) / 0.15)" },
                        { label: "Jurimetria", emoji: "🤖", color: "hsl(var(--primary) / 0.12)" },
                        { label: "Estratégia", emoji: "🐆", color: "hsl(var(--secondary) / 0.12)" },
                        { label: "Busca", emoji: "🦜", color: "hsl(var(--primary) / 0.15)" },
                      ].map((s, i) => (
                        <div
                          key={i}
                          className="rounded-xl p-2.5 text-center"
                          style={{ background: s.color, border: "1px solid hsl(var(--border) / 0.1)" }}
                        >
                          <span className="text-lg block mb-1">{s.emoji}</span>
                          <span className="text-[9px] font-medium text-muted-foreground">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom fade */}
              <div
                className="absolute -bottom-1 left-0 right-0 h-20 pointer-events-none"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, hsl(var(--background)) 100%)`,
                }}
              />
            </div>

            {/* RIGHT U-SHAPE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block relative flex-shrink-0 -ml-6 z-0"
              style={{ width: "280px" }}
            >
              <svg
                viewBox="0 0 280 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <defs>
                  <clipPath id="u-clip-right">
                    <path d="M0,0 L0,200 Q0,310 140,310 Q280,310 280,200 L280,0 L240,0 L240,200 Q240,270 140,270 Q40,270 40,200 L40,0 Z" />
                  </clipPath>
                </defs>
                <image
                  href={ushapeRight}
                  x="-60"
                  y="-20"
                  width="400"
                  height="360"
                  clipPath="url(#u-clip-right)"
                  preserveAspectRatio="xMidYMid slice"
                />
                <path
                  d="M0,0 L0,200 Q0,310 140,310 Q280,310 280,200 L280,0 M40,0 L40,200 Q40,270 140,270 Q240,270 240,200 L240,0"
                  stroke="hsl(213 30% 30%)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
