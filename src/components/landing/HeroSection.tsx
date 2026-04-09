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

        {/* Panel mockup below — with perspective tilt like the reference */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14 lg:mt-16 mx-auto max-w-[1100px]"
          style={{ perspective: "1200px" }}
        >
          {/* Glow behind panel */}
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-[80%] h-[200px] rounded-full blur-[100px] opacity-10 pointer-events-none"
            style={{ background: "hsl(var(--primary))" }}
          />

          {/* Browser-style frame */}
          <div className="relative rounded-2xl border border-border/30 overflow-hidden shadow-2xl" style={{ background: "hsl(var(--card) / 0.6)" }}>
            {/* Top bar dots */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/15">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--destructive) / 0.5)" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--primary) / 0.4)" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--secondary) / 0.4)" }} />
              <div className="ml-4 flex-1 h-6 rounded-lg max-w-xs" style={{ background: "hsl(var(--muted) / 0.3)" }} />
            </div>
            {/* Mockup image */}
            <img
              src={heroPanelMockup}
              alt="Painel LegisBrasil.IA — Análise de Processo"
              className="w-full h-auto"
              width={1920}
              height={1080}
            />
          </div>

          {/* Fade to background at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: `linear-gradient(180deg, transparent 0%, hsl(var(--background)) 100%)`,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
