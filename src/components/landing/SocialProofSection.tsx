import { motion } from "framer-motion";
import { Quote, CheckCircle2, X } from "lucide-react";
import SectionDivider from "./SectionDivider";
import CtaButton from "./CtaButton";

const comparisonRows = [
  { criteria: "Treinamento jurídico brasileiro" },
  { criteria: "Validação por magistrados" },
  { criteria: "Dados 100% no Brasil (LGPD)" },
  { criteria: "Anti-alucinação com fontes" },
  { criteria: "Links auditáveis" },
  { criteria: "Curadoria de doutrina" },
  { criteria: "Tempo até primeira resposta útil" },
  { criteria: "Conformidade CNJ" },
];

const metrics = [
  { value: "+50", label: "Juristas Validadores", desc: "Juristas e magistrados validaram e refinaram o raciocínio da plataforma." },
  { value: "98%", label: "Acurácia Técnica", desc: "Em conformidade com a legislação brasileira vigente." },
  { value: "100%", label: "Links Auditáveis", desc: "Das citações possuem links para fontes oficiais dos tribunais." },
];

const SocialProofSection = () => {
  return (
    <>
      <SectionDivider />

      <section id="validacao" className="relative py-20 md:py-28">
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          {/* Centered headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.08] mb-6">
              Quem carrega o peso da decisão judicial já testou.{" "}
              <span className="text-gradient">E aprovou.</span>
            </h2>
          </motion.div>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="anti-card max-w-3xl mx-auto mb-20"
          >
            <div className="p-8 md:p-12">
              <Quote className="w-8 h-8 text-primary/20 mb-5" />
              <blockquote className="text-lg md:text-xl font-heading font-medium text-foreground leading-relaxed">
                "A advocacia e a magistratura não aceitam erros. Criamos a LegisBrasil para ser o padrão de integridade digital.{" "}
                <span className="text-primary">Se a ferramenta diz, você pode assinar embaixo.</span>"
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary"
                  style={{ background: "hsl(var(--primary) / 0.1)" }}
                >
                  AM
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">Dr. Ali Mazloum</p>
                  <p className="text-xs text-muted-foreground">
                    Desembargador Federal · Fundador da LegisBrasil.IA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metrics row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="anti-card p-6 text-center"
              >
                <p className="font-heading text-3xl font-bold text-foreground">{m.value}</p>
                <p className="text-xs font-semibold text-primary mt-1 tracking-wide uppercase">{m.label}</p>
                <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Humble-style Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground text-center mb-8">
              Por Que a LegisBrasil É uma Alternativa Mais{" "}
              <span className="text-primary">Segura e Inteligente</span>
            </h3>

            {/* Table */}
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "hsl(var(--border) / 0.2)" }}>
              {/* Header */}
              <div
                className="grid grid-cols-[1.5fr_1fr_1fr_1fr] text-xs font-semibold uppercase tracking-wider"
                style={{ background: "hsl(var(--muted) / 0.3)" }}
              >
                <div className="px-5 py-4 text-muted-foreground/60"></div>
                <div className="px-5 py-4 text-center">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-primary font-bold">LegisBrasil</span>
                  </span>
                </div>
                <div className="px-5 py-4 text-center text-muted-foreground/60">IA Genérica</div>
                <div className="px-5 py-4 text-center text-muted-foreground/60">Status Quo</div>
              </div>

              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-t"
                  style={{ borderColor: "hsl(var(--border) / 0.1)" }}
                >
                  <div className="px-5 py-4 text-sm text-foreground font-medium">{row.criteria}</div>
                  <div className="px-5 py-4 flex justify-center" style={{ background: "hsl(var(--primary) / 0.04)" }}>
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="px-5 py-4 flex justify-center">
                    <X className="w-5 h-5 text-muted-foreground/30" />
                  </div>
                  <div className="px-5 py-4 flex justify-center">
                    <X className="w-5 h-5 text-muted-foreground/30" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-14"
          >
            <CtaButton>ENTRAR PARA A ERA DA INTELIGÊNCIA SEGURA</CtaButton>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SocialProofSection;
