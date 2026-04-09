import { motion } from "framer-motion";
import { Video, FileText, ShieldCheck } from "lucide-react";
import CtaButton from "./CtaButton";

const features = [
  {
    icon: Video,
    title: "Transcrição Multimodal",
    description: "Transcreve áudio e vídeo de audiências, transformando horas de gravação em estratégia.",
  },
  {
    icon: FileText,
    title: "Redação Técnica",
    description: "Gera petições, sentenças e votos com jurisprudência real e verificável.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e LGPD",
    description: "Proteção total de dados em solo nacional, seguindo rigorosamente as normas do CNJ.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProblemSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="badge-glow mb-6 mx-auto w-fit">Infraestrutura Jurídica</div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Sua Equipe de Elite Digital:{" "}
            <span className="text-gradient">Inteligência que entende o Direito Brasileiro</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Somos a primeira infraestrutura de IA desenvolvida por magistrados e juristas para dominar todo o ciclo jurídico brasileiro, da prova à peça final.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card p-8 group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors" style={{ background: "hsl(68 89% 45% / 0.1)" }}>
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <CtaButton>ASSINAR A INTELIGÊNCIA QUE ENTENDE O DIREITO</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
