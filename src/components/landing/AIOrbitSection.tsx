import { type MouseEvent } from "react";
import {
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
  { name: "GPT-5", logo: gpt5, size: "sm", angle: -148 },
  { name: "Claude 4", logo: claude, size: "sm", angle: -110 },
  { name: "Gemini 3", logo: gemini, size: "sm", angle: -72 },
  { name: "Perplexity", logo: perplexity, size: "md", angle: -28 },
  { name: "Sabiá-2", logo: sabia, size: "sm", angle: 14 },
  { name: "Mistral", logo: mistral, size: "sm", angle: 58 },
  { name: "DeepSeek", logo: deepseek, size: "md", angle: 102 },
  { name: "Llama 4", logo: llama, size: "lg", angle: 142 },
] as const;

const orbitRadius = 235;
const diskSizeMap = {
  sm: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
  md: "w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28",
  lg: "w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36",
} as const;
const logoSizeMap = {
  sm: "w-8 h-8 md:w-10 md:h-10",
  md: "w-10 h-10 md:w-12 md:h-12",
  lg: "w-12 h-12 md:w-16 md:h-16",
} as const;

const AIOrbitSection = () => {
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
          className="absolute left-1/2 top-1/2 hidden h-[72%] w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-[42px] lg:block"
          style={{
            transform: pixelGlowTransform,
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

            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-xl mb-4">
              Você não precisa de 10 assinaturas separadas.{" "}
              <span className="text-foreground font-semibold">
                Você só precisa da LegisBrasil.
              </span>
            </p>

            <p className="text-muted-foreground/70 text-xs md:text-sm leading-relaxed max-w-md mb-8">
              Os melhores modelos de IA trabalham juntos em uma única camada jurídica,
              com curadoria para o contexto brasileiro.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-heading font-semibold text-primary-foreground cta-3d hover:translate-y-[-1px] active:translate-y-[1px] transition-all"
            >
              Solicitar Acesso
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex items-center justify-center lg:-ml-24 xl:-ml-32"
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

              <div
                className="absolute inset-0 animate-[spin_60s_linear_infinite]"
                style={{ transformOrigin: "390px 300px" }}
              >
                {aiModels.map((model) => {
                  const rad = (model.angle * Math.PI) / 180;
                  const x = 390 + orbitRadius * Math.cos(rad);
                  const y = 300 + 220 * Math.sin(rad);

                  return (
                    <div
                      key={model.name}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: x, top: y }}
                    >
                      <div className="animate-[spin_60s_linear_infinite_reverse]">
                        <div
                          className={`${diskSizeMap[model.size]} rounded-full border border-primary/30 backdrop-blur-md flex items-center justify-center`}
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
                            className={`${logoSizeMap[model.size]} object-contain`}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <div
                    className="absolute -inset-10 rounded-full blur-3xl opacity-20"
                    style={{
                      background:
                        "radial-gradient(circle, hsl(var(--primary) / 0.35) 0%, transparent 70%)",
                    }}
                  />
                  <div
                    className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border border-primary/30 flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, hsl(var(--foreground) / 0.05), hsl(var(--background) / 0.99) 74%)",
                      boxShadow:
                        "0 24px 50px -28px hsl(var(--background) / 0.95), inset 0 1px 0 hsl(var(--foreground) / 0.08)",
                    }}
                  >
                    <img
                      src={logoLegis}
                      alt="LegisBrasil.IA"
                      className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain brightness-0 invert"
                      loading="lazy"
                    />
                  </div>
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
