import { motion } from "framer-motion";
import { Video, FileText, ShieldCheck, Brain, Search, Zap } from "lucide-react";
import CtaButton from "./CtaButton";

const features = [
  {
    icon: Video,
    title: "Transcrição Multimodal",
    description: "Transcreve áudio e vídeo de audiências, transformando horas de gravação em estratégia pura.",
    span: "md:col-span-2",
  },
  {
    icon: FileText,
    title: "Redação Técnica",
    description: "Gera petições, sentenças e votos com jurisprudência real e verificável.",
    span: "md:col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e LGPD",
    description: "Proteção total de dados em solo nacional, seguindo rigorosamente as normas do CNJ.",
    span: "md:col-span-1",
  },
  {
    icon: Brain,
    title: "Jurimetria Inteligente",
    description: "Análise preditiva de tribunais para identificar tendências e probabilidades de êxito.",
    span: "md:col-span-1",
  },
  {
    icon: Search,
    title: "Busca de Jurisprudência",
    description: "Localiza precedentes com links auditáveis, eliminando citações falsas ou leis revogadas.",
    span: "md:col-span-1",
  },
  {
    icon: Zap,
    title: "Detector de Inconsistências",
    description: "Identifica contradições, falácias e falsas memórias em depoimentos e documentos.",
    span: "md:col-span-2",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header with ✦ badge like Alpha House */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="badge-glow mb-6 mx-auto w-fit">✦ Infraestrutura Jurídica</div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            Sua Equipe de Elite Digital:{" "}
            <span className="text-gradient">Inteligência que entende o Direito Brasileiro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A primeira infraestrutura de IA desenvolvida por magistrados e juristas para dominar todo o ciclo jurídico brasileiro.
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid like Alpha House */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`${feature.span} glass-card p-7 md:p-8 group cursor-default relative overflow-hidden`}
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.06), transparent 70%)" }} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-14"
        >
          <CtaButton>ASSINAR A INTELIGÊNCIA QUE ENTENDE O DIREITO</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
