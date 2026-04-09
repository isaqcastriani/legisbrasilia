import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";

/* Particle dot matrix canvas — inspired by Antimetal's hero */
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

    for (let i = 0; i < 180; i++) {
      particles.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        r: Math.random() * 2 + 0.5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.7,
      });
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w(), h());
      for (const p of particles) {
        const alpha = 0.15 + 0.35 * Math.sin(t * 0.001 * p.speed + p.phase);
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Grid lines background */}
      <div className="absolute inset-0 grid-lines" />
      {/* Particle canvas */}
      <ParticleCanvas />
      {/* Radial fade at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, transparent 0%, hsl(var(--background)) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full text-center">
        {/* Announcement banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-10"
        >
          <span className="badge-glow text-xs">Beta Premium</span>
          <span className="text-xs text-muted-foreground">
            Validada por +50 juristas e magistrados
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[2.75rem] md:text-[4rem] lg:text-[4.75rem] font-bold leading-[1.05] tracking-tight text-foreground max-w-4xl mx-auto"
        >
          A Única IA Jurídica{" "}
          <br className="hidden sm:block" />
          100% Brasileira e{" "}
          <span className="text-gradient">Validada por Especialistas</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-7 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Dominamos todo o ciclo jurídico, da transcrição da prova à peça final, através da única inteligência artificial treinada exclusivamente com o raciocínio e a burocracia dos tribunais brasileiros.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10"
        >
          <CtaButton>ENTRAR PARA A NOVA ERA JURÍDICA</CtaButton>
        </motion.div>
      </div>

      {/* Gradient fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, transparent 0%, hsl(var(--background)) 100%)`,
        }}
      />
    </section>
  );
};

export default HeroSection;
