import { motion } from "framer-motion";
import { Quote, Users, Target, Link2 } from "lucide-react";
import CtaButton from "./CtaButton";

const seals = [
  {
    icon: Users,
    value: "+50",
    label: "Juristas Validadores",
    desc: "Juristas e magistrados validaram e refinaram o raciocínio da plataforma.",
  },
  {
    icon: Target,
    value: "98%",
    label: "Acurácia Técnica",
    desc: "Acurácia técnica em conformidade com a legislação vigente.",
  },
  {
    icon: Link2,
    value: "100%",
    label: "Links Auditáveis",
    desc: "Das citações possuem links auditáveis para fontes oficiais dos tribunais.",
  },
];

const SocialProofSection = () => {
  return (
    <section id="validacao" className="relative section-spacing overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(213 50% 13%) 40%, hsl(213 50% 13%) 60%, hsl(var(--background)) 100%)`,
        }}
      />
      <div className="absolute inset-0 grid-lines-dense pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-label mb-5"
        >
          <span className="text-secondary">✅</span>
          <span>Validação</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl md:text-[3rem] lg:text-[3.5rem] font-bold text-foreground leading-[1.08] max-w-3xl mb-6"
        >
          Quem carrega o peso da decisão judicial já testou.{" "}
          <span className="text-gradient">E aprovou.</span>
        </motion.h2>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="anti-card max-w-3xl mb-20"
        >
          <div className="flex items-center gap-1.5 px-5 py-3 border-b border-border/15">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--destructive) / 0.5)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--primary) / 0.4)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--secondary) / 0.4)" }} />
          </div>
          <div className="p-8 md:p-12">
            <Quote className="w-8 h-8 text-primary/20 mb-5" />
            <blockquote className="text-xl md:text-2xl font-heading font-medium text-foreground leading-relaxed">
              "A advocacia e a magistratura não aceitam erros. Criamos a LegisBrasil para ser o padrão de integridade digital.{" "}
              <span className="text-primary">Se a ferramenta diz, você pode assinar embaixo.</span>"
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary"
                style={{ background: "hsl(var(--primary) / 0.1)" }}
              >
                AM
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Dr. Ali Mazloum</p>
                <p className="text-xs text-muted-foreground">
                  Desembargador Federal · Fundador da LegisBrasil.IA
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Seals */}
        <div className="anti-divider mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:divide-x sm:divide-border/15">
          {seals.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center px-6 py-8 sm:py-0"
            >
              <s.icon className="w-5 h-5 text-primary mx-auto mb-3" />
              <p className="font-heading text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs font-semibold text-primary mt-1 tracking-wide uppercase">
                {s.label}
              </p>
              <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="anti-divider mt-12" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >
          <CtaButton>ENTRAR PARA A ERA DA INTELIGÊNCIA SEGURA</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
