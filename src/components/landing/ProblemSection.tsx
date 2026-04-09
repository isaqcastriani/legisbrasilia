import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Centered headline — Resend/Cernel style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label mb-5 block">O problema</span>
          <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.06] mb-6">
            Você confia sua reputação a uma IA que não sabe a diferença entre{" "}
            <span className="text-primary">common law</span> e{" "}
            <span className="text-primary">direito civil</span>?
          </h2>
        </motion.div>

        {/* Bento grid — Ease Health inspired */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card p-7 md:p-9"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-lg" style={{ background: "hsl(var(--destructive) / 0.08)" }}>
              🎭
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">Alucinações confiantes</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ferramentas genéricas foram treinadas com a média da internet global. Elas <strong className="text-foreground">inventam leis que não existem</strong> com a confiança de quem cita o Código Civil de cor.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="bento-card p-7 md:p-9"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-lg" style={{ background: "hsl(var(--destructive) / 0.08)" }}>
              ⚠️
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">Credibilidade em risco</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O advogado que confiou na ferramenta descobre a alucinação quando o juiz aponta. O magistrado que buscou agilidade ganha retrabalho. <span className="text-primary font-medium">O parecer custa a credibilidade de quem assinou.</span>
            </p>
          </motion.div>

          {/* Full-width accent card — the shift */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="md:col-span-2 accent-card p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <span className="text-[11px] font-mono font-medium uppercase tracking-widest opacity-60 mb-3 block">Com a LegisBrasil.IA</span>
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
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
