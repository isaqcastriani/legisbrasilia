import { motion } from "framer-motion";
import { Video, FileText, ShieldCheck, Brain, Search, Zap } from "lucide-react";
import CtaButton from "./CtaButton";

const features = [
  {
    icon: Video,
    title: "Transcrição Multimodal",
    desc: "Horas de audiência em minutos de estratégia pura.",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    icon: FileText,
    title: "Redação Técnica",
    desc: "Petições e votos com jurisprudência verificável.",
    span: "md:col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "LGPD & CNJ",
    desc: "Dados em solo nacional. Zero risco.",
    span: "md:col-span-1",
  },
  {
    icon: Brain,
    title: "Jurimetria",
    desc: "Previsão de êxito baseada em dados reais.",
    span: "md:col-span-1",
  },
  {
    icon: Search,
    title: "Jurisprudência",
    desc: "Precedentes com links auditáveis.",
    span: "md:col-span-1",
  },
  {
    icon: Zap,
    title: "Detector de Falhas",
    desc: "Contradições e falácias encontradas automaticamente.",
    span: "md:col-span-2",
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
          className="max-w-2xl mb-20"
        >
          <div className="badge-glow mb-5 w-fit">✦ Infraestrutura</div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-5">
            Sua Equipe de Elite Digital
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A primeira IA desenvolvida por magistrados para dominar todo o ciclo jurídico brasileiro.
          </p>
        </motion.div>

        {/* Biuro-inspired asymmetric bento */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className={`${f.span} group rounded-2xl border border-border/30 p-7 hover:border-primary/20 transition-all relative overflow-hidden`}
              style={{ background: "hsl(var(--card) / 0.5)" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600" style={{ background: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.04), transparent 70%)" }} />
              <div className="relative z-10">
                <f.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-heading text-base font-semibold text-foreground mb-1.5">{f.title}</h3>
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
          <CtaButton>ATIVAR MINHA EQUIPE DE ELITE</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
