import { motion } from "framer-motion";
import { Quote, Users, Target, ShieldCheck } from "lucide-react";
import CtaButton from "./CtaButton";

const seals = [
  { icon: Users, value: "+50", label: "Juristas Validadores" },
  { icon: Target, value: "98%", label: "Precisão Certificada" },
  { icon: ShieldCheck, value: "100%", label: "LGPD Compliant" },
];

const SocialProofSection = () => {
  return (
    <section id="validacao" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Resend-inspired centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="badge-glow mb-5 mx-auto w-fit">✦ Validação</div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight">
            Integridade{" "}
            <span className="text-gradient">Comprovada</span>
          </h2>
        </motion.div>

        {/* Quote — Resend email-card style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20 rounded-2xl border border-border/30 overflow-hidden"
          style={{ background: "hsl(var(--card) / 0.6)" }}
        >
          {/* Window chrome like Resend */}
          <div className="flex items-center gap-1.5 px-5 py-3 border-b border-border/20">
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
          </div>
          <div className="p-8 md:p-12">
            <Quote className="w-8 h-8 text-primary/15 mb-5" />
            <blockquote className="text-xl md:text-2xl font-heading font-medium text-foreground leading-relaxed">
              "A advocacia e a magistratura não aceitam erros. Criamos a LEGIS BRASIL para ser o padrão de integridade digital.{" "}
              <span className="text-primary">Se a ferramenta diz, você pode assinar embaixo.</span>"
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                AM
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Dr. Ali Mazloum</p>
                <p className="text-xs text-muted-foreground">Desembargador Federal · Fundador</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Seals — Console-style horizontal metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-2xl mx-auto">
          {seals.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6 rounded-2xl border border-border/20 hover:border-primary/20 transition-all"
              style={{ background: "hsl(var(--card) / 0.3)" }}
            >
              <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="font-heading text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >
          <CtaButton>ENTRAR PARA A ERA SEGURA</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
