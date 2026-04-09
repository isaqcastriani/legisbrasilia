import { motion } from "framer-motion";
import { Quote, CheckCircle2, X } from "lucide-react";

const comparisonRows = [
  "Treinamento jurídico brasileiro",
  "Validação por magistrados",
  "Dados 100% no Brasil (LGPD)",
  "Anti-alucinação com fontes",
  "Links auditáveis",
  "Curadoria de doutrina",
  "Conformidade CNJ",
];

const metrics = [
  { value: "+50", label: "Juristas", desc: "Validaram o raciocínio da plataforma." },
  { value: "98%", label: "Acurácia", desc: "Conformidade com legislação vigente." },
  { value: "100%", label: "Auditável", desc: "Citações com links para fontes oficiais." },
];

const SocialProofSection = () => {
  return (
    <section id="validacao" className="relative py-24 md:py-32">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label mb-5 block">Validação</span>
          <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.06]">
            Quem carrega o peso da decisão
            <br />
            judicial já testou. <span className="text-gradient">E aprovou.</span>
          </h2>
        </motion.div>

        {/* Bento layout: Quote + Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4 mb-12">
          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <Quote className="w-8 h-8 text-primary/15 mb-5" />
              <blockquote className="text-base md:text-lg font-heading font-medium text-foreground leading-relaxed mb-8">
                "A advocacia e a magistratura não aceitam erros. Criamos a LegisBrasil para ser o padrão de integridade digital.{" "}
                <span className="text-primary">Se a ferramenta diz, você pode assinar embaixo.</span>"
              </blockquote>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-primary"
                style={{ background: "hsl(var(--primary) / 0.08)" }}
              >
                AM
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Dr. Ali Mazloum</p>
                <p className="text-[11px] text-muted-foreground">Desembargador Federal · Fundador</p>
              </div>
            </div>
          </motion.div>

          {/* Metrics stack */}
          <div className="grid grid-cols-1 gap-4">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bento-card p-6 flex items-center gap-5"
              >
                <span className="font-heading text-3xl md:text-4xl font-extrabold text-foreground leading-none">
                  {m.value}
                </span>
                <div>
                  <p className="text-[11px] font-semibold text-primary tracking-wide uppercase font-mono">{m.label}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card overflow-hidden"
        >
          {/* Header */}
          <div
            className="grid grid-cols-[1.5fr_80px_80px_80px] md:grid-cols-[1.5fr_1fr_1fr_1fr] text-[10px] font-semibold uppercase tracking-wider"
            style={{ background: "hsl(var(--muted) / 0.2)" }}
          >
            <div className="px-5 py-3.5" />
            <div className="px-3 py-3.5 text-center">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-primary font-bold font-mono">Legis</span>
              </span>
            </div>
            <div className="px-3 py-3.5 text-center text-muted-foreground/35 font-mono">IA Gen.</div>
            <div className="px-3 py-3.5 text-center text-muted-foreground/35 font-mono">Manual</div>
          </div>

          {comparisonRows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1.5fr_80px_80px_80px] md:grid-cols-[1.5fr_1fr_1fr_1fr] border-t"
              style={{ borderColor: "hsl(var(--border) / 0.06)" }}
            >
              <div className="px-5 py-3 text-[12px] text-foreground/80">{row}</div>
              <div className="px-3 py-3 flex justify-center" style={{ background: "hsl(var(--primary) / 0.02)" }}>
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
              <div className="px-3 py-3 flex justify-center">
                <X className="w-4 h-4 text-muted-foreground/15" />
              </div>
              <div className="px-3 py-3 flex justify-center">
                <X className="w-4 h-4 text-muted-foreground/15" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
