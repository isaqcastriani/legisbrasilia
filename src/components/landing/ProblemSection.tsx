import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, X, Scale } from "lucide-react";
import CtaButton from "./CtaButton";

const comparisonRows = [
  "Treinamento jurídico brasileiro",
  "Validação por magistrados",
  "Dados 100% no Brasil (LGPD)",
  "Anti-alucinação com fontes",
  "Links auditáveis",
  "Curadoria de doutrina",
];

const ProblemSection = () => {
  return (
    <section className="relative section-spacing">
      <div className="absolute inset-0 grid-lines pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-5"
        >
          <span className="text-primary">⚠️</span>
          <span>O Problema</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column — Copy */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl md:text-[3rem] lg:text-[3.5rem] font-bold text-foreground leading-[1.08] mb-6"
            >
              Por Que Não Usar{" "}
              <span className="text-gradient">Uma IA Genérica?</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed mb-8"
            >
              <p>
                O ChatGPT inventa leis. O Gemini alucina precedentes. No direito,{" "}
                <strong className="text-foreground">um erro de citação pode custar o processo inteiro.</strong>
              </p>
              <p>
                Ferramentas genéricas de IA foram treinadas com a média da internet global. Elas não entendem a lógica processual brasileira, não conhecem a jurisprudência do seu tribunal e, pior, inventam leis que não existem com a confiança de quem cita o Código Civil de cor.
              </p>
              <p>
                O resultado? O advogado que confiou na ferramenta descobre a alucinação quando o juiz aponta. O magistrado que buscou agilidade ganha retrabalho. O parecer que deveria poupar horas custa a credibilidade de quem assinou.
              </p>
              <p className="text-foreground font-medium">
                IAs estrangeiras traduzem sintaxe jurídica. A LegisBrasil.IA raciocina dentro dela.
              </p>
            </motion.div>

            {/* Risk callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="anti-card p-5 mb-6"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Risco real:</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Em 2024, advogados nos EUA foram multados por citar jurisprudência inventada por IA genérica.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Authority card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="anti-card p-5 flex items-center gap-4"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "hsl(var(--primary) / 0.1)" }}
              >
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-sm">Dr. Ali Mazloum</p>
                <p className="text-xs text-muted-foreground">
                  Desembargador Federal · Fundador
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right column — Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="rounded-2xl border overflow-hidden"
              style={{
                borderColor: "hsl(var(--border) / 0.2)",
                background: "hsl(var(--card) / 0.4)",
              }}
            >
              {/* Table header */}
              <div
                className="grid grid-cols-[1fr_80px_80px] px-5 py-3 text-xs font-semibold uppercase tracking-wider border-b"
                style={{ borderColor: "hsl(var(--border) / 0.15)" }}
              >
                <span className="text-muted-foreground/60">Critério</span>
                <span className="text-center text-primary">Legis</span>
                <span className="text-center text-muted-foreground/60">Genérica</span>
              </div>

              {/* Table rows */}
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_80px_80px] px-5 py-4 border-b last:border-b-0 hover:bg-card/30 transition-colors"
                  style={{ borderColor: "hsl(var(--border) / 0.1)" }}
                >
                  <span className="text-sm text-foreground">{row}</span>
                  <span className="flex justify-center">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </span>
                  <span className="flex justify-center">
                    <X className="w-5 h-5 text-muted-foreground/40" />
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
