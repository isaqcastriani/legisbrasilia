import { motion } from "framer-motion";
import { Scale, Shield, Eye, Lock, MessageSquare, FileCheck, Search } from "lucide-react";
import TechArrow from "./TechArrow";

import bgAuth1 from "@/assets/bg-authority-1.jpg";
import bgAuth2 from "@/assets/bg-authority-2.jpg";
import bgAuth3 from "@/assets/bg-authority-3.jpg";

const cards = [
  {
    icon: Scale,
    title: "Curadoria de quem julga,\nnão de quem programa.",
    accent: "Calibrada por magistrados.\nValidada por especialistas.\nCada resposta tem fundamento real.",
    feat1Title: '"Lógica dos Tribunais"',
    feat1Desc:
      "Cada resposta segue a lógica real dos tribunais, não a lógica provável de um modelo estatístico.",
    feat2Title: '"Calibrada por Quem Decide"',
    feat2Desc:
      "Idealizada por Dr. Ali Mazloum, Desembargador Federal com mais de 30 anos de magistratura.",
    bg: bgAuth1,
    floatingIcon: MessageSquare,
    floatingTitle: "Análise fundamentada",
    floatingDesc: "Baseada em 3 precedentes do STJ e 2 súmulas vinculantes.",
    floatingTag: "LegisBrasil.IA",
  },
  {
    icon: Shield,
    title: "Soberania digital\nque não é slogan.",
    accent: "100% brasileira.\nSem modelos importados.\nApenas fontes nacionais.",
    feat1Title: '"Fontes Verificáveis"',
    feat1Desc:
      "Quando a ferramenta cita uma súmula, ela existe. Quando referencia um artigo, ele está vigente.",
    feat2Title: '"Treinamento Nacional"',
    feat2Desc:
      "Treinada exclusivamente com doutrina, legislação e jurisprudência brasileira.",
    bg: bgAuth2,
    floatingIcon: FileCheck,
    floatingTitle: "Verificação de fonte",
    floatingDesc: "Artigo 5º, XXXV — Fonte: Constituição Federal. Vigente.",
    floatingTag: "Verificado",
  },
  {
    icon: Eye,
    title: "A IA que sabe calar.\nZero alucinações.",
    accent: "Sem invenções.\nSem fontes falsas.\nApenas verdade auditável.",
    feat1Title: '"Zero Alucinação"',
    feat1Desc:
      "Mecanismos de validação impedem a criação de leis, precedentes ou jurisprudência inexistentes.",
    feat2Title: '"Links Auditáveis"',
    feat2Desc:
      "Cada citação acompanha link auditável para a fonte oficial. Transparência total.",
    bg: bgAuth3,
    floatingIcon: Search,
    floatingTitle: "Validação completa",
    floatingDesc: "Todas as 7 citações verificadas com fontes oficiais.",
    floatingTag: "Auditável",
  },
];

const AuthoritySection = () => {
  return (
    <section id="diferenciais" className="relative">
      {/* Section bg */}
      <div
        className="relative py-12 md:py-16"
        style={{ background: "hsl(213 55% 8%)" }}
      >
        <div className="max-w-[1240px] mx-auto px-5 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <span className="section-label mb-5 block">Diferenciais</span>
            <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.06]">
              A diferença entre "usar IA"
              <br />
              e <span className="text-gradient">confiar nela.</span>
            </h2>
          </motion.div>

          {/* Cards */}
          {cards.map((card, i) => {
            const Icon = card.icon;
            const FloatingIcon = card.floatingIcon;
            return (
              <div key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-white/[0.08] p-4 md:p-[30px]"
                  style={{
                    background: "hsl(213 45% 9%)",
                    boxShadow: "0 4px 0 0 hsl(213 50% 5%), 0 8px 24px -4px hsl(213 50% 4% / 0.7)",
                  }}
                >
                  <div className="grid md:grid-cols-[1fr_1.3fr] gap-4 md:gap-[30px] min-h-[440px]">
                    {/* Left — Text card */}
                    <div
                      className="rounded-xl p-7 md:p-8 flex flex-col justify-between relative border border-white/[0.04]"
                      style={{
                        background: "hsl(213 50% 12%)",
                      }}
                    >
                      {/* Icon */}
                      <div>
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                          style={{ background: "hsl(var(--primary) / 0.08)" }}
                        >
                          <Icon className="w-5 h-5 text-primary" />
                        </div>

                        <h3 className="font-heading text-lg md:text-xl font-bold text-foreground leading-snug mb-4 whitespace-pre-line">
                          {card.title}
                        </h3>

                        <p className="font-mono text-[11px] md:text-[12px] text-primary leading-relaxed whitespace-pre-line mb-6">
                          {card.accent}
                        </p>
                      </div>

                      {/* Feature blocks */}
                      <div className="space-y-5">
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-1">
                            {card.feat1Title}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {card.feat1Desc}
                          </p>
                        </div>

                        <div className="w-full h-px bg-white/[0.04]" />

                        <div>
                          <p className="text-sm font-semibold text-foreground mb-1">
                            {card.feat2Title}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {card.feat2Desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right — Image card */}
                    <div className="relative overflow-hidden min-h-[260px] md:min-h-0 rounded-xl border border-white/[0.04]">
                      <img
                        src={card.bg}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        width={800}
                        height={600}
                      />
                      {/* Gradient overlays */}
                      <div
                        className="absolute inset-0 pointer-events-none hidden md:block"
                        style={{
                          background:
                            "linear-gradient(90deg, hsl(213 50% 11%) 0%, hsl(213 50% 11% / 0.3) 30%, transparent 60%)",
                        }}
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent 40%, hsl(213 50% 11% / 0.7) 100%)",
                        }}
                      />

                      {/* Floating card */}
                      <div className="absolute bottom-16 md:bottom-20 right-5 md:right-8 w-[260px] md:w-[300px] z-10">
                        <div
                          className="rounded-xl border border-white/[0.08] p-4 backdrop-blur-xl"
                          style={{ background: "hsl(213 50% 11% / 0.85)" }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center"
                              style={{ background: "hsl(var(--primary) / 0.15)" }}
                            >
                              <FloatingIcon className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-xs font-semibold text-foreground">
                              {card.floatingTitle}
                            </span>
                            <span className="ml-auto text-[9px] text-muted-foreground/40 font-mono">
                              1 min
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            {card.floatingDesc}
                          </p>
                          <span className="inline-block mt-2 text-[10px] font-mono text-primary">
                            {card.floatingTag}
                          </span>
                        </div>
                      </div>

                      {/* Bottom action bar */}
                      <div className="absolute bottom-5 md:bottom-8 right-5 md:right-8 w-[260px] md:w-[300px] z-10">
                        <div
                          className="rounded-xl flex items-center overflow-hidden"
                          style={{ background: "hsl(var(--background))" }}
                        >
                          <div className="flex items-center gap-2 px-4 py-3 flex-1">
                            <FloatingIcon className="w-4 h-4 text-muted-foreground/50 shrink-0" />
                            <span className="text-[11px] text-foreground font-medium font-mono">
                              Ver: {card.floatingTitle}
                            </span>
                          </div>
                          <div
                            className="w-9 h-9 flex items-center justify-center rounded-lg m-1 shrink-0"
                            style={{ background: "hsl(var(--primary))" }}
                          >
                            <span className="text-primary-foreground text-sm">→</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {i < cards.length - 1 && <div className="h-4" />}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default AuthoritySection;
