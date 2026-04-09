import { motion } from "framer-motion";
import { Video, FileText, ShieldCheck } from "lucide-react";
import CtaButton from "./CtaButton";

const features = [
  {
    icon: Video,
    title: "Transcrição Multimodal",
    desc: "Transcreve áudio e vídeo de audiências, transformando horas de gravação em estratégia.",
  },
  {
    icon: FileText,
    title: "Redação Técnica",
    desc: "Gera petições, sentenças e votos com jurisprudência real e verificável.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e LGPD",
    desc: "Proteção total de dados em solo nacional, seguindo rigorosamente as normas do CNJ.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const ProblemSection = () => {
  return (
    <section className="relative section-spacing">
      <div className="absolute inset-0 grid-lines pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section label like Antimetal */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-5"
        >
          <span className="text-primary">⚡</span>
          <span>Infraestrutura Jurídica</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl md:text-[3rem] lg:text-[3.5rem] font-bold text-foreground leading-[1.08] max-w-3xl mb-5"
        >
          Sua Equipe de Elite Digital
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mb-16 leading-relaxed"
        >
          Somos a primeira infraestrutura de IA desenvolvida por magistrados e juristas para dominar todo o ciclo jurídico brasileiro, da prova à peça final.
        </motion.p>

        {/* Feature cards — Antimetal style: horizontal rule + cards */}
        <div className="anti-divider mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-border/15">
          {features.map((f, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group px-0 md:px-8 py-8 md:py-0 first:pl-0 last:pr-0 border-b md:border-b-0 border-border/15 last:border-b-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "hsl(var(--primary) / 0.08)" }}
                >
                  <f.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {f.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="anti-divider mt-12 mb-14" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <CtaButton>ASSINAR A INTELIGÊNCIA QUE ENTENDE O DIREITO</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
