import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert, ArrowRight } from "lucide-react";
import bgProblem from "@/assets/bg-problem.jpg";

const problems = [
  {
    title: "Alucinações confiantes",
    desc: "Ferramentas genéricas inventam leis que não existem com a confiança de quem cita o Código Civil de cor.",
  },
  {
    title: "Credibilidade em risco",
    desc: "O parecer custa a credibilidade de quem assinou. O juiz aponta o erro, o retrabalho começa.",
  },
  {
    title: "Fontes não rastreáveis",
    desc: "Sem links auditáveis, sem referências verificáveis. Impossível saber se a citação é real.",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Centered headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="section-label mb-5 block">O problema</span>
          <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.06]">
            Você confia sua reputação a uma IA que não sabe a diferença entre{" "}
            <span className="text-primary">common law</span> e{" "}
            <span className="text-primary">direito civil</span>?
          </h2>
        </motion.div>

        {/* Bento grid — reference-inspired layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden mb-4"
          style={{
            background: "hsl(213 45% 9%)",
            boxShadow: "0 4px 0 0 hsl(213 50% 5%), 0 8px 24px -4px hsl(213 50% 4% / 0.7)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] min-h-[420px]">
            {/* Left — Image with floating UI overlay */}
            <div className="relative overflow-hidden min-h-[300px] lg:min-h-0">
              <img
                src={bgProblem}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={768}
              />
              {/* Gradient overlays */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent 50%, hsl(213 45% 9%) 100%)",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, transparent 40%, hsl(213 45% 9% / 0.6) 100%)",
                }}
              />

              {/* Floating error card — animated */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute bottom-8 left-6 right-6 lg:right-16 z-10"
              >
                <div
                  className="rounded-xl border border-white/[0.08] p-4 backdrop-blur-xl"
                  style={{ background: "hsl(213 50% 11% / 0.9)" }}
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: "hsl(var(--destructive) / 0.15)" }}
                    >
                      <AlertTriangle className="w-3 h-3 text-destructive" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">Erro detectado</span>
                    <span className="ml-auto text-[9px] text-muted-foreground/40 font-mono">ChatGPT</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mb-2">
                    "Art. 927 do CPC prevê responsabilidade objetiva do fornecedor..."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive/60" />
                    <span className="text-[10px] font-mono text-destructive/80">
                      Artigo inexistente — alucinação confirmada
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right — Content with problem list */}
            <div className="p-7 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-5">
                <ShieldAlert className="w-5 h-5 text-destructive" />
                <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-destructive">
                  Riscos reais
                </span>
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-snug mb-6">
                IAs genéricas criam riscos que você{" "}
                <span className="text-primary">não pode medir.</span>
              </h3>

              <div className="space-y-0">
                {problems.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="py-4 border-b border-white/[0.06] last:border-0"
                  >
                    <p className="text-sm font-semibold text-foreground mb-1">{p.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Full-width accent card — the shift */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="accent-card p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl"
          style={{
            boxShadow: "0 4px 0 0 hsl(65 100% 30%), 0 8px 24px -4px hsl(65 100% 20% / 0.4)",
          }}
        >
          <div>
            <span className="text-[11px] font-mono font-medium uppercase tracking-widest opacity-60 mb-3 block">
              Com a LegisBrasil.IA
            </span>
            <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
              IAs estrangeiras traduzem sintaxe jurídica.
              <br />
              A LegisBrasil.IA raciocina dentro dela.
            </h3>
          </div>
          <a
            href="#contato"
            className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
