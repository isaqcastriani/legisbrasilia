import { type MouseEvent, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

import logoLegis from "@/assets/logo-legis.png";
import gpt5 from "@/assets/ai-logos/openai-upload.png";
import claude from "@/assets/ai-logos/claude-upload.png";
import gemini from "@/assets/ai-logos/gemini-upload.png";
import perplexity from "@/assets/ai-logos/perplexity-upload.png";
import mistral from "@/assets/ai-logos/mistral-upload.png";
import deepseek from "@/assets/ai-logos/deepseek-upload.png";
import llama from "@/assets/ai-logos/meta-upload.png";
import sabia from "@/assets/ai-logos/sabia-upload.png";

const aiModels = [
  { name: "GPT-5", logo: gpt5 },
  { name: "Claude 4", logo: claude },
  { name: "Gemini 3", logo: gemini },
  { name: "Perplexity", logo: perplexity },
  { name: "Sabiá-2", logo: sabia },
  { name: "Mistral", logo: mistral },
  { name: "DeepSeek", logo: deepseek },
  { name: "Llama 4", logo: llama },
];

const orbitRadius = 240;
const stepAngle = 360 / aiModels.length;
const diskSize = "w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28";
const logoSize = "w-9 h-9 md:w-11 md:h-11";

const AIOrbitSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHighlighting, setIsHighlighting] = useState(false);
  const activeModel = aiModels[activeIndex];

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 22, mass: 0.35 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 22, mass: 0.35 });

  const tiltX = useTransform(smoothY, [0, 1], [5, -5]);
  const tiltY = useTransform(smoothX, [0, 1], [-7, 7]);
  const driftX = useTransform(smoothX, [0, 1], [-18, 18]);
  const driftY = useTransform(smoothY, [0, 1], [-14, 14]);
  const revealX = useTransform(smoothX, (value) => `${value * 100}%`);
  const revealY = useTransform(smoothY, (value) => `${value * 100}%`);

  const pixelPlaneTransform = useMotionTemplate`perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${driftX}px, ${driftY}px, 0px)`;
  const pixelGlowTransform = useMotionTemplate`translate3d(${driftX}px, ${driftY}px, 0px)`;
  const hoverMask = useMotionTemplate`radial-gradient(260px circle at ${revealX} ${revealY}, black 0%, rgba(0,0,0,0.94) 28%, transparent 74%)`;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIsHighlighting(true);
      setActiveIndex((prev) => (prev + 1) % aiModels.length);
      window.setTimeout(() => setIsHighlighting(false), 550);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextX = (event.clientX - rect.left) / rect.width;
    const nextY = (event.clientY - rect.top) / rect.height;

    mouseX.set(Math.min(1, Math.max(0, nextX)));
    mouseY.set(Math.min(1, Math.max(0, nextY)));
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section
      className="relative overflow-hidden py-20 md:py-32"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 hidden h-[72%] w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-[42px] lg:block"
          style={{
            transform: pixelPlaneTransform,
            backgroundImage:
              "radial-gradient(circle, hsl(var(--primary) / 0.22) 0 1.2px, transparent 1.8px), radial-gradient(circle, hsl(var(--secondary) / 0.18) 0 1px, transparent 1.6px)",
            backgroundSize: "18px 18px, 24px 24px",
            backgroundPosition: "0 0, 9px 9px",
            opacity: 0.22,
            border: "1px solid hsl(var(--primary) / 0.08)",
            boxShadow: "inset 0 1px 0 hsl(var(--foreground) / 0.05)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 24%, rgba(0,0,0,0.9) 50%, transparent 80%)",
            maskImage:
              "radial-gradient(circle at center, black 24%, rgba(0,0,0,0.9) 50%, transparent 80%)",
          }}
        />

        <motion.div
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--primary) / 0.42) 0 1.4px, transparent 2px), radial-gradient(circle, hsl(var(--secondary) / 0.32) 0 1.1px, transparent 1.7px)",
            backgroundSize: "18px 18px, 24px 24px",
            backgroundPosition: "0 0, 9px 9px",
            opacity: 0.55,
            WebkitMaskImage: hoverMask,
            maskImage: hoverMask,
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 hidden h-[320px] w-[320px] rounded-full blur-3xl lg:block"
          style={{
            transform: pixelGlowTransform,
            x: driftX,
            y: driftY,
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, hsl(var(--secondary) / 0.08) 35%, transparent 72%)",
            opacity: 0.45,
          }}
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold tracking-widest uppercase text-primary mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Integrações
            </span>

            <h2 className="font-heading text-[1.9rem] md:text-[2.8rem] lg:text-[4rem] font-bold text-foreground leading-[0.98] mb-5 max-w-[11ch]">
              Curadoria de Inteligência Global
            </h2>

            <div className="relative z-30">
              <p className="relative text-muted-foreground text-sm md:text-lg leading-relaxed max-w-xl mb-4" style={{ textShadow: "0 0 20px hsl(213 60% 11%), 0 0 40px hsl(213 60% 11%), 0 0 60px hsl(213 60% 11%)" }}>
                Você não precisa de 10 assinaturas separadas.{" "}
                <span className="text-foreground font-semibold">
                  Você só precisa da LegisBrasil.
                </span>
              </p>

              <div className="mb-8" />

              <a
                href="#contato"
                className="relative inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-heading font-semibold text-primary-foreground cta-3d hover:translate-y-[-1px] active:translate-y-[1px] transition-all"
              >
                Solicitar Acesso
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-4 min-h-[52px] max-w-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModel.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-3 px-1 py-1"
                >
                  <img src={activeModel.logo} alt={activeModel.name} className="h-6 w-6 object-cover rounded-full overflow-hidden" loading="lazy" />
                  <span className="text-sm font-semibold text-foreground">{activeModel.name}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex items-center justify-center lg:-ml-48 xl:-ml-56"
          >
            <div className="relative w-[360px] h-[360px] md:w-[520px] md:h-[520px] lg:w-[680px] lg:h-[620px]">
              <svg
                className="absolute inset-0 w-full h-full opacity-30"
                viewBox="0 0 680 620"
                aria-hidden="true"
              >
                <ellipse
                  cx="390"
                  cy="300"
                  rx="255"
                  ry="220"
                  fill="none"
                  stroke="hsl(var(--border) / 0.18)"
                  strokeWidth="1"
                />
                <ellipse
                  cx="390"
                  cy="300"
                  rx="180"
                  ry="150"
                  fill="none"
                  stroke="hsl(var(--border) / 0.12)"
                  strokeWidth="1"
                  strokeDasharray="5 8"
                />
              </svg>

              <motion.div
                className="absolute inset-0"
                style={{ transformOrigin: "390px 300px" }}
                animate={{ rotate: -(activeIndex * stepAngle) }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {aiModels.map((model, i) => {
                  const angle = (i * 360) / aiModels.length;
                  const rad = (angle * Math.PI) / 180;
                  const x = 390 + orbitRadius * Math.cos(rad);
                  const y = 300 + orbitRadius * 0.78 * Math.sin(rad);

                  return (
                    <div
                      key={model.name}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: x, top: y }}
                    >
                      <motion.div
                        animate={{ rotate: activeIndex * stepAngle }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div
                          className={`${diskSize} rounded-full border border-primary/30 backdrop-blur-md flex items-center justify-center`}
                          style={{
                            background:
                              "radial-gradient(circle at 30% 30%, hsl(var(--foreground) / 0.06), hsl(var(--background) / 0.98) 72%)",
                            boxShadow:
                              "0 24px 50px -28px hsl(var(--background) / 0.95), inset 0 1px 0 hsl(var(--foreground) / 0.08)",
                          }}
                        >
                          <img
                            src={model.logo}
                            alt={model.name}
                            className={`${logoSize} object-cover rounded-full overflow-hidden`}
                            loading="lazy"
                          />
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <motion.div
                    className="absolute -inset-10 rounded-full blur-3xl"
                    animate={{
                      opacity: isHighlighting ? 0.42 : 0.2,
                      scale: isHighlighting ? 1.14 : 1,
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      background:
                        "radial-gradient(circle, hsl(var(--primary) / 0.45) 0%, hsl(var(--secondary) / 0.18) 45%, transparent 72%)",
                    }}
                  />
                  <motion.div
                    className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border border-primary/30 flex items-center justify-center"
                    animate={{
                      scale: isHighlighting ? 1.06 : 1,
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, hsl(var(--foreground) / 0.05), hsl(var(--background) / 0.99) 74%)",
                      boxShadow: isHighlighting
                        ? "0 0 0 1px hsl(var(--primary) / 0.26), 0 0 34px hsl(var(--primary) / 0.22), 0 24px 50px -28px hsl(var(--background) / 0.95), inset 0 1px 0 hsl(var(--foreground) / 0.08)"
                        : "0 24px 50px -28px hsl(var(--background) / 0.95), inset 0 1px 0 hsl(var(--foreground) / 0.08)",
                    }}
                  >
                    <img
                      src={logoLegis}
                      alt="LegisBrasil.IA"
                      className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain brightness-0 invert"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIOrbitSection;
