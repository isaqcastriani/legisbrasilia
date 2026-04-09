import { motion } from "framer-motion";
import { Quote, Users, Target, ShieldCheck } from "lucide-react";
import CtaButton from "./CtaButton";

const seals = [
  { icon: Users, value: "+50", label: "Juristas", sub: "Validadores" },
  { icon: Target, value: "98%", label: "Precisão", sub: "Certificada" },
  { icon: ShieldCheck, value: "100%", label: "Compliance", sub: "LGPD/CNJ" },
];

const SocialProofSection = () => {
  return (
    <section id="validacao" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="badge-glow mb-6 mx-auto w-fit">✦ Prova Social</div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            Onde a Autoridade encontra a{" "}
            <span className="text-gradient">Integridade Digital</span>
          </h2>
        </motion.div>

        {/* Quote Block - Full-width rounded container like Alpha House */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl p-10 md:p-16 max-w-4xl mx-auto mb-16 relative overflow-hidden"
          style={{ background: "linear-gradient(145deg, hsl(var(--card)) 0%, hsl(var(--muted) / 0.5) 100%)" }}
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20" style={{ background: "hsl(var(--primary))" }} />
          
          <Quote className="w-10 h-10 text-primary/20 mb-6" />
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-foreground leading-relaxed relative z-10">
            "A advocacia e a magistratura não aceitam erros. Criamos a LEGIS BRASIL para ser o padrão de integridade digital.{" "}
            <span className="text-primary">Se a ferramenta diz, você pode assinar embaixo.</span>"
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.15)" }}>
              <span className="font-heading font-bold text-primary text-lg">AM</span>
            </div>
            <div>
              <p className="font-heading font-bold text-foreground">Dr. Ali Mazloum</p>
              <p className="text-sm text-muted-foreground">Desembargador Federal e Fundador</p>
            </div>
          </div>
        </motion.div>

        {/* Seals - Horizontal strip like Agência Get stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {seals.map((seal, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center glow-primary" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                <seal.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="font-heading font-bold text-foreground text-3xl mb-1">{seal.value}</p>
              <p className="font-heading font-semibold text-foreground text-sm">{seal.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{seal.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
