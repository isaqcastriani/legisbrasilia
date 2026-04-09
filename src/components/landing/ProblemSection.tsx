import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Link2, ShieldAlert } from "lucide-react";
import ProblemDocAnimation from "./ProblemDocAnimation";

const problemCards = [
  {
    icon: AlertTriangle,
    eyebrow: "Risco 01",
    title: "Alucinações com convicção de petição pronta.",
    desc: "A IA genérica inventa artigo, precedente e tese com a mesma segurança visual de uma resposta correta.",
    accent: "hsl(var(--primary) / 0.28)",
    glow: "hsl(var(--primary) / 0.18)",
  },
  {
    icon: ShieldAlert,
    eyebrow: "Risco 02",
    title: "Um erro pequeno vira um problema reputacional grande.",
    desc: "Quando a fonte está errada, não é só a resposta que quebra. Quebra a confiança de quem lê, revisa e assina.",
    accent: "hsl(var(--secondary) / 0.26)",
    glow: "hsl(var(--secondary) / 0.16)",
  },
  {
    icon: Link2,
    eyebrow: "Risco 03",
    title: "Sem trilha de auditoria, não existe segurança jurídica.",
    desc: "Sem links verificáveis e sem origem clara, a resposta pode até parecer boa — mas não se sustenta quando importa.",
    accent: "hsl(var(--primary) / 0.22)",
    glow: "hsl(var(--primary) / 0.14)",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-start mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-5 block">O problema</span>
            <h2 className="font-heading text-[2rem] md:text-[3rem] lg:text-[4.6rem] font-bold text-foreground leading-[0.92] max-w-[9ch]">
              O erro parece pequeno.
              <br />
              O dano não.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:pt-9"
          >
            <p className="text-muted-foreground text-base md:text-[1.05rem] leading-relaxed max-w-[18ch] md:max-w-[24ch] mb-8">
              IAs generalistas escrevem com fluidez, mas ainda erram no que mais importa no Direito:
              fonte, contexto, vigência e lógica jurisprudencial.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center gap-4 rounded-2xl border border-border/60 bg-background/40 px-5 py-4 text-foreground transition-all hover:border-primary/30 hover:bg-muted/20"
            >
              <span className="text-sm md:text-base font-medium">Ver como evitar isso</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/70">
                <ArrowRight className="w-5 h-5" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* 3D Document Animation */}
        <div className="mb-12 md:mb-16 w-full">
          <ProblemDocAnimation />
        </div>

        <div className="space-y-5 md:space-y-7">
          {problemCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative rounded-[2rem] border border-white/[0.08] overflow-hidden pl-20 md:pl-28"
                style={{
                  background: "hsl(213 45% 8%)",
                  boxShadow: "0 8px 30px -18px hsl(213 60% 4% / 0.8), inset 0 1px 0 hsl(0 0% 100% / 0.03)",
                }}
              >
                <div
                  className="absolute inset-y-0 left-0 w-[38%]"
                  style={{
                    background: `linear-gradient(90deg, ${card.accent} 0%, ${card.glow} 28%, transparent 100%)`,
                  }}
                />

                <div className="absolute left-4 top-1/2 -translate-y-1/2 md:left-6">
                  <div
                    className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full border border-white/[0.08]"
                    style={{
                      background: "hsl(213 45% 7%)",
                      boxShadow: `0 0 0 8px hsl(213 45% 8%), 0 16px 34px -20px ${card.glow}`,
                    }}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-4 md:gap-8 px-6 py-7 md:px-9 md:py-9 items-center min-h-[132px] md:min-h-[150px]">
                  <div>
                    <span className="block text-[11px] md:text-xs font-mono uppercase tracking-[0.22em] text-primary/70 mb-3">
                      {card.eyebrow}
                    </span>
                    <h3 className="font-heading text-xl md:text-[2rem] font-bold text-foreground leading-[1.02] max-w-[14ch]">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[34rem]">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
