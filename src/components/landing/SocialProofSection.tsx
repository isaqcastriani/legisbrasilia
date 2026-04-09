import { motion } from "framer-motion";
import { Quote, Users, Target, ShieldCheck } from "lucide-react";
import CtaButton from "./CtaButton";

const seals = [
  { icon: Users, label: "+50 Juristas", sub: "Validadores" },
  { icon: Target, label: "98% Precisão", sub: "Certificada" },
  { icon: ShieldCheck, label: "Compliance", sub: "LGPD/CNJ" },
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
          <div className="badge-glow mb-6 mx-auto w-fit">Prova Social</div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Onde a Autoridade encontra a{" "}
            <span className="text-gradient">Integridade Digital</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A LegisBrasil.IA não é apenas testada; ela é auditada e aprovada por quem carrega a responsabilidade da decisão judicial no Brasil.
          </p>
        </motion.div>

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-14 max-w-4xl mx-auto mb-16 relative"
        >
          <Quote className="w-12 h-12 text-primary/30 absolute top-8 left-8" />
          <blockquote className="text-xl md:text-2xl font-heading font-medium text-foreground text-center leading-relaxed relative z-10 pt-4">
            "A advocacia e a magistratura não aceitam erros. Criamos a LEGIS BRASIL para ser o padrão de integridade digital.{" "}
            <span className="text-primary">Se a ferramenta diz, você pode assinar embaixo.</span>"
          </blockquote>
          <p className="text-center mt-8 text-muted-foreground">
            <strong className="text-foreground">Dr. Ali Mazloum</strong> — Desembargador Federal e Fundador da LegisBrasil.IA
          </p>
        </motion.div>

        {/* Seals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {seals.map((seal, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-24 h-24 rounded-full border-2 border-primary/30 flex items-center justify-center glow-primary">
                <seal.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-heading font-bold text-foreground text-lg">{seal.label}</p>
                <p className="text-sm text-muted-foreground">{seal.sub}</p>
              </div>
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
