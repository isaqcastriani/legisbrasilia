import { motion } from "framer-motion";
import { Quote, CheckCircle2, X } from "lucide-react";
import SectionDivider from "./SectionDivider";
import CtaButton from "./CtaButton";

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
  { value: "+50", label: "Juristas Validadores", desc: "Juristas e magistrados validaram o raciocínio da plataforma." },
  { value: "98%", label: "Acurácia Técnica", desc: "Em conformidade com a legislação brasileira vigente." },
  { value: "100%", label: "Links Auditáveis", desc: "Das citações possuem links para fontes oficiais dos tribunais." },
];

const SocialProofSection = () => {
  return (
    <>
      <SectionDivider />

      <section id="validacao" className="relative py-20 md:py-28">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Humble split header */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-0 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-5 md:gap-7"
            >
              <div
                className="hidden lg:block w-[2px] flex-shrink-0 rounded-full mt-2"
                style={{ background: "hsl(var(--primary) / 0.4)", height: "100px" }}
              />
              <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-foreground leading-[1.08]">
                Quem carrega o peso
                <br />
                da decisão judicial já testou
                <span className="text-primary">.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start lg:justify-end"
            >
              <div className="lg:max-w-[380px] lg:border-l lg:pl-8" style={{ borderColor: "hsl(var(--border) / 0.15)" }}>
                <p className="font-heading text-[15px] md:text-base font-semibold text-foreground leading-snug mb-3">
                  E aprovou.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Validada por mais de 50 juristas e magistrados antes de chegar ao seu escritório.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quote — Humble clean card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border p-8 md:p-12 mb-12 max-w-[900px] mx-auto"
            style={{ borderColor: "hsl(var(--border) / 0.12)", background: "hsl(var(--card) / 0.3)" }}
          >
            <Quote className="w-7 h-7 text-primary/20 mb-5" />
            <blockquote className="text-base md:text-xl font-heading font-medium text-foreground leading-relaxed mb-8">
              "A advocacia e a magistratura não aceitam erros. Criamos a LegisBrasil para ser o padrão de integridade digital.{" "}
              <span className="text-primary">Se a ferramenta diz, você pode assinar embaixo.</span>"
            </blockquote>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-primary"
                style={{ background: "hsl(var(--primary) / 0.08)" }}
              >
                AM
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Dr. Ali Mazloum</p>
                <p className="text-xs text-muted-foreground">Desembargador Federal · Fundador da LegisBrasil.IA</p>
              </div>
            </div>
          </motion.div>

          {/* Metrics row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border p-6 text-center"
                style={{ borderColor: "hsl(var(--border) / 0.1)", background: "hsl(var(--card) / 0.2)" }}
              >
                <p className="font-heading text-3xl font-bold text-foreground">{m.value}</p>
                <p className="text-[11px] font-semibold text-primary mt-1 tracking-wide uppercase font-mono">{m.label}</p>
                <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "hsl(var(--border) / 0.12)" }}
            >
              {/* Table header */}
              <div
                className="grid grid-cols-[1.5fr_80px_80px_80px] md:grid-cols-[1.5fr_1fr_1fr_1fr] text-[11px] font-semibold uppercase tracking-wider"
                style={{ background: "hsl(var(--muted) / 0.2)" }}
              >
                <div className="px-5 py-3.5" />
                <div className="px-3 py-3.5 text-center">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-primary font-bold font-mono">Legis</span>
                  </span>
                </div>
                <div className="px-3 py-3.5 text-center text-muted-foreground/40 font-mono">IA Gen.</div>
                <div className="px-3 py-3.5 text-center text-muted-foreground/40 font-mono">Manual</div>
              </div>

              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1.5fr_80px_80px_80px] md:grid-cols-[1.5fr_1fr_1fr_1fr] border-t"
                  style={{ borderColor: "hsl(var(--border) / 0.06)" }}
                >
                  <div className="px-5 py-3.5 text-[13px] text-foreground/80">{row}</div>
                  <div className="px-3 py-3.5 flex justify-center" style={{ background: "hsl(var(--primary) / 0.03)" }}>
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div className="px-3 py-3.5 flex justify-center">
                    <X className="w-4 h-4 text-muted-foreground/20" />
                  </div>
                  <div className="px-3 py-3.5 flex justify-center">
                    <X className="w-4 h-4 text-muted-foreground/20" />
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
