import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import heroAraraVideo from "@/assets/hero-arara-video.mp4.asset.json";

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

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        r: Math.random() * 1.2 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.5,
      });
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w(), h());
      for (const p of particles) {
        const alpha = 0.08 + 0.2 * Math.sin(t * 0.001 * p.speed + p.phase);
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
      <ParticleCanvas />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        {/* Humble-style split hero: headline left | subtext right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-0 pt-16 lg:pt-24">
          {/* LEFT — Headline with vertical accent line */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-6"
          >
            {/* Vertical accent line */}
            <div className="hidden lg:block w-px flex-shrink-0 mt-2" style={{ background: "hsl(var(--border) / 0.3)", height: "200px" }} />

            <div>
              <h1 className="font-heading text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.06] tracking-tight text-foreground">
                A Única IA Jurídica 100% Brasileira e{" "}
                <span className="text-gradient">Validada por Especialistas</span>
                <span className="text-primary">.</span>
              </h1>
            </div>
          </motion.div>

          {/* RIGHT — Subtext (Humble style: bold problem + colored solution) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start lg:pl-12 lg:pt-4"
          >
            <div className="lg:border-l lg:pl-8" style={{ borderColor: "hsl(var(--border) / 0.2)" }}>
              <p className="font-heading text-base md:text-lg font-semibold text-foreground leading-snug mb-3">
                Ferramentas genéricas inventam leis que não existem.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary font-medium">Dominamos todo o ciclo jurídico</span>, da transcrição da prova à peça final, através da única inteligência artificial treinada exclusivamente com o raciocínio e a burocracia dos tribunais brasileiros.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Arara centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center mt-8 lg:mt-2"
        >
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
            className="relative w-[220px] md:w-[300px] lg:w-[360px] drop-shadow-2xl"
            style={{ mixBlendMode: "lighten" }}
          />
        </motion.div>

        {/* CTA centered — Humble pill style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex justify-center -mt-4"
        >
          <CtaButton>ENTRAR PARA A NOVA ERA JURÍDICA</CtaButton>
        </motion.div>

        {/* Product screenshot / Panel — Humble style: large rounded card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 mx-auto max-w-[960px]"
        >
          <div
            className="relative rounded-2xl border overflow-hidden shadow-2xl"
            style={{
              borderColor: "hsl(var(--border) / 0.25)",
              background: "hsl(var(--card) / 0.5)",
              boxShadow: "0 25px 80px -20px hsl(var(--background) / 0.8)",
            }}
          >
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

            {/* Panel content */}
            <div className="flex">
              {/* Sidebar mini */}
              <div
                className="hidden sm:flex flex-col gap-3 px-3 py-4 border-r"
                style={{ borderColor: "hsl(var(--border) / 0.1)", width: "56px" }}
              >
                {["⚖️", "📄", "🔍", "🤖", "📊"].map((icon, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${i === 0 ? "ring-1 ring-primary/30" : ""}`}
                    style={{ background: i === 0 ? "hsl(var(--primary) / 0.12)" : "transparent" }}
                  >
                    {icon}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 md:p-5 space-y-3">
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

                <div
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5 mt-3"
                  style={{ background: "hsl(var(--muted) / 0.2)", border: "1px solid hsl(var(--border) / 0.12)" }}
                >
                  <span className="text-xs text-muted-foreground/50 flex-1">Analise o recurso especial...</span>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "hsl(var(--primary))" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary-foreground">
                      <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right sidebar */}
              <div className="hidden md:block p-4 border-l" style={{ borderColor: "hsl(var(--border) / 0.1)", width: "220px" }}>
                <p className="text-[10px] font-semibold text-muted-foreground/70 uppercase tracking-wider mb-3">Especialistas Ativos</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Analista", emoji: "🦅", color: "hsl(var(--secondary) / 0.15)" },
                    { label: "Jurimetria", emoji: "🤖", color: "hsl(var(--primary) / 0.12)" },
                    { label: "Estratégia", emoji: "🐆", color: "hsl(var(--secondary) / 0.12)" },
                    { label: "Busca", emoji: "🦜", color: "hsl(var(--primary) / 0.15)" },
                  ].map((s, i) => (
                    <div key={i} className="rounded-xl p-2.5 text-center" style={{ background: s.color, border: "1px solid hsl(var(--border) / 0.1)" }}>
                      <span className="text-lg block mb-1">{s.emoji}</span>
                      <span className="text-[9px] font-medium text-muted-foreground">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute -bottom-1 left-0 right-0 h-20 pointer-events-none" style={{ background: `linear-gradient(180deg, transparent 0%, hsl(var(--background)) 100%)` }} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
