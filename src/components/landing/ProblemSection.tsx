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

const ProblemSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-5">
            Sua Equipe de Elite Digital:{" "}
            <span className="text-gradient">Inteligência que entende o Direito Brasileiro.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Somos a primeira infraestrutura de IA desenvolvida por magistrados e juristas para dominar todo o ciclo jurídico brasileiro, da prova à peça final.
          </p>
        </motion.div>

        {/* Grid de 3 cards minimalistas e simétricos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group rounded-2xl border border-border/20 hover:border-primary/20 p-8 transition-all relative overflow-hidden"
              style={{ background: "hsl(var(--card) / 0.3)" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.04), transparent 70%)" }} />
              <div className="relative z-10">
                <f.icon className="w-7 h-7 text-primary mb-5" strokeWidth={1.5} />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <CtaButton>ASSINAR A INTELIGÊNCIA QUE ENTENDE O DIREITO</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
