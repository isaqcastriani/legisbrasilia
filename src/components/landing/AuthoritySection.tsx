import { motion } from "framer-motion";
import { Scale, Globe, Lock, Brain, Link2, AlertTriangle } from "lucide-react";

/*
 * Richard: Awareness Level 4 — "Por que nós, por que agora"
 * Richard: Proof stack — não listar features, provar autoridade com fatos.
 * Richard: "E daí?" — cada diferencial conecta com redução de risco real.
 * Richard: Framing — comparar com alternativa (IA genérica) para ancorar valor.
 */

const comparisons = [
  { label: "Treinamento jurídico brasileiro", us: true, them: false },
  { label: "Validação por magistrados", us: true, them: false },
  { label: "Dados 100% no Brasil (LGPD)", us: true, them: false },
  { label: "Anti-alucinação com fontes", us: true, them: false },
  { label: "Links auditáveis", us: true, them: false },
  { label: "Curadoria de doutrina", us: true, them: false },
];

const AuthoritySection = () => {
  return (
    <section id="diferenciais" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-container">
          <div className="p-8 md:p-14 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-7"
              >
                <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight">
                  Por Que Não Usar{" "}
                  <span className="text-gradient">Uma IA Genérica?</span>
                </h2>
                
                {/* Richard: Framing — custo de erro > custo de ferramenta */}
                <p className="text-muted-foreground text-lg leading-relaxed">
                  O ChatGPT inventa leis. O Gemini alucina precedentes. 
                  No direito, <span className="text-foreground font-medium">um erro de citação pode custar o processo inteiro.</span>
                </p>

                {/* Richard: Loss aversion — mostrar o que está em risco */}
                <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "hsl(var(--destructive) / 0.05)" }}>
                  <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Risco real:</p>
                    <p className="text-sm text-muted-foreground">Em 2024, advogados nos EUA foram multados por citar jurisprudência inventada por IA genérica.</p>
                  </div>
                </div>

                {/* Authority card */}
                <div className="flex items-center gap-4 p-5 rounded-2xl border border-primary/15" style={{ background: "hsl(var(--primary) / 0.04)" }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                    <Scale className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">Dr. Ali Mazloum</p>
                    <p className="text-sm text-muted-foreground">Desembargador Federal · Fundador</p>
                  </div>
                </div>
              </motion.div>

              {/* Right — Richard: Comparison table (controlled framing like Brazil vs Paraguay) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <div className="rounded-2xl border border-border/30 overflow-hidden" style={{ background: "hsl(var(--card) / 0.4)" }}>
                  {/* Table header */}
                  <div className="grid grid-cols-[1fr_80px_80px] px-5 py-3 border-b border-border/20">
                    <span className="text-xs text-muted-foreground/60 uppercase tracking-wider">Critério</span>
                    <span className="text-xs text-primary font-bold text-center uppercase tracking-wider">LEGIS</span>
                    <span className="text-xs text-muted-foreground/40 text-center uppercase tracking-wider">Genérica</span>
                  </div>
                  
                  {comparisons.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="grid grid-cols-[1fr_80px_80px] px-5 py-3.5 border-b border-border/10 last:border-0"
                    >
                      <span className="text-sm text-foreground/80">{c.label}</span>
                      <span className="text-center text-primary text-lg">✓</span>
                      <span className="text-center text-muted-foreground/30 text-lg">✗</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
