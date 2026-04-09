import { motion } from "framer-motion";
import logoLegis from "@/assets/logo-legis.png";
import gpt5 from "@/assets/ai-logos/gpt5.png";
import claude from "@/assets/ai-logos/claude.png";
import gemini from "@/assets/ai-logos/gemini.png";
import perplexity from "@/assets/ai-logos/perplexity.png";
import mistral from "@/assets/ai-logos/mistral.png";
import deepseek from "@/assets/ai-logos/deepseek.png";
import llama from "@/assets/ai-logos/llama.png";
import sabia from "@/assets/ai-logos/sabia.png";

const aiModels = [
  { name: "GPT-5", company: "OpenAI", logo: gpt5 },
  { name: "Claude 4", company: "Anthropic", logo: claude },
  { name: "Gemini 3", company: "Google", logo: gemini },
  { name: "Perplexity", company: "Perplexity AI", logo: perplexity },
  { name: "Sabiá-2", company: "Maritaca AI", logo: sabia },
  { name: "Mistral", company: "Mistral AI", logo: mistral },
  { name: "DeepSeek", company: "DeepSeek", logo: deepseek },
  { name: "Llama 4", company: "Meta", logo: llama },
];

const AIOrbitSection = () => {
  const orbitRadius = 260;

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Subtle radial grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-8 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold tracking-widest uppercase text-primary mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Integrações
            </span>
            <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-foreground leading-[1.06] mb-5">
              Curadoria de Inteligência Global
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mb-8">
              Você não precisa de 10 assinaturas separadas.{" "}
              <span className="text-foreground font-semibold">
                Você só precisa da LegisBrasil.
              </span>
            </p>
            <p className="text-muted-foreground/60 text-xs leading-relaxed max-w-sm">
              Combinamos os melhores modelos de IA do mundo — GPT-5, Claude, Gemini, Llama e mais — em uma única plataforma treinada para o Direito brasileiro.
            </p>
          </motion.div>

          {/* Right — Orbital wheel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[340px] h-[340px] md:w-[580px] md:h-[580px]">
              {/* Orbit rings */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 580 580">
                <circle
                  cx="290"
                  cy="290"
                  r={orbitRadius}
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  opacity="0.15"
                />
                <circle
                  cx="290"
                  cy="290"
                  r={orbitRadius * 0.6}
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="0.5"
                  opacity="0.08"
                  strokeDasharray="4 8"
                />
                {/* Cross lines */}
                <line x1="290" y1={290 - orbitRadius - 20} x2="290" y2={290 + orbitRadius + 20} stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.06" />
                <line x1={290 - orbitRadius - 20} y1="290" x2={290 + orbitRadius + 20} y2="290" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.06" />
              </svg>

              {/* Spinning orbit container */}
              <div
                className="absolute inset-0 animate-[spin_60s_linear_infinite]"
                style={{ transformOrigin: "center center" }}
              >
                {aiModels.map((model, i) => {
                  const angle = (i / aiModels.length) * 360;
                  const rad = (angle * Math.PI) / 180;
                  const cx = 50 + (orbitRadius / 580) * 100 * Math.cos(rad);
                  const cy = 50 + (orbitRadius / 580) * 100 * Math.sin(rad);

                  return (
                    <div
                      key={model.name}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${cx}%`,
                        top: `${cy}%`,
                      }}
                    >
                      {/* Counter-rotate to keep icons upright */}
                      <div className="animate-[spin_60s_linear_infinite_reverse] flex flex-col items-center">
                        <div
                          className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/[0.06] shadow-lg"
                          style={{
                            background:
                              "linear-gradient(145deg, hsl(213 50% 15%) 0%, hsl(213 55% 10%) 100%)",
                          }}
                        >
                          <img
                            src={model.logo}
                            alt={model.name}
                            className="w-7 h-7 md:w-9 md:h-9 object-contain"
                            loading="lazy"
                            width={36}
                            height={36}
                          />
                        </div>
                        <span className="mt-1.5 text-[9px] md:text-[11px] font-semibold text-foreground whitespace-nowrap">
                          {model.name}
                        </span>
                        <span className="text-[8px] md:text-[9px] text-muted-foreground/50 whitespace-nowrap">
                          {model.company}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Center — LegisBrasil logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative">
                  {/* Glow */}
                  <div
                    className="absolute -inset-6 rounded-3xl blur-2xl opacity-30"
                    style={{
                      background:
                        "radial-gradient(circle, hsl(var(--primary) / 0.5) 0%, transparent 70%)",
                    }}
                  />
                  <div
                    className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl flex items-center justify-center border-2 shadow-2xl"
                    style={{
                      borderColor: "hsl(var(--primary) / 0.4)",
                      background:
                        "linear-gradient(145deg, hsl(213 50% 14%) 0%, hsl(213 55% 8%) 100%)",
                      boxShadow:
                        "0 0 40px hsl(var(--primary) / 0.15), 0 20px 60px -15px hsl(213 60% 6% / 0.8)",
                    }}
                  >
                    <img
                      src={logoLegis}
                      alt="LegisBrasil.IA"
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      loading="lazy"
                      width={64}
                      height={64}
                    />
                  </div>
                  <span
                    className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-semibold whitespace-nowrap px-3 py-1 rounded-full"
                    style={{
                      background: "hsl(var(--primary) / 0.15)",
                      color: "hsl(var(--primary))",
                    }}
                  >
                    LegisBrasil.IA
                  </span>
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
