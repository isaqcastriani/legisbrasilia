import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

const ProblemSection = () => {
  return (
    <>
      <SectionDivider />

      {/* Problem — Humble centered text block */}
      <section className="relative py-20 md:py-28">
        <div className="relative z-10 max-w-[820px] mx-auto px-6 md:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-foreground leading-[1.08] mb-8"
          >
            Você confia sua reputação a uma IA que não sabe a diferença entre{" "}
            <em className="not-italic text-primary">common law</em> e{" "}
            <em className="not-italic text-primary">direito civil</em>?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-[15px] leading-relaxed space-y-4 max-w-[640px] mx-auto"
          >
            <p>
              Ferramentas genéricas de IA foram treinadas com a média da internet global. Elas não entendem a lógica processual brasileira, não conhecem a jurisprudência do seu tribunal e, pior, <strong className="text-foreground">inventam leis que não existem</strong> com a confiança de quem cita o Código Civil de cor.
            </p>
            <p>
              O resultado? O advogado que confiou na ferramenta descobre a alucinação quando o juiz aponta. O magistrado que buscou agilidade ganha retrabalho. <span className="text-primary font-medium">O parecer que deveria poupar horas custa a credibilidade de quem assinou.</span>
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* The Shift — Humble style centered block with label */}
      <section className="relative py-20 md:py-28">
        <div className="relative z-10 max-w-[820px] mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-sm bg-primary" />
            <span className="section-label">Com a LegisBrasil.IA</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-foreground leading-[1.08] mb-5"
          >
            IAs estrangeiras traduzem sintaxe jurídica.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-[15px] leading-relaxed"
          >
            A LegisBrasil.IA <strong className="text-foreground">raciocina dentro dela</strong>.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
