import { motion } from "framer-motion";
import { CheckCircle2, Scale, Globe, Lock, Brain, Link2 } from "lucide-react";
import CtaButton from "./CtaButton";

const pillars = [
  {
    icon: Scale,
    title: "Curadoria de Magistrados Federais",
    description: "Idealizada por um Desembargador Federal com mais de 30 anos de magistratura, garantindo que a IA opere sob a lógica real do sistema de justiça nacional.",
  },
  {
    icon: Globe,
    title: "Soberania Digital e Dados Nacionais",
    description: "Treinada exclusivamente com modelos, doutrina e jurisprudência brasileira. Sua inteligência entende a burocracia e o raciocínio jurídico do país.",
  },
  {
    icon: Lock,
    title: "Compliance e Segurança Nativa",
    description: "Operação em total conformidade com a LGPD e as diretrizes normativas do CNJ. Seus dados nunca saem de solo nacional.",
  },
  {
    icon: Brain,
    title: "Inteligência que Sabe Quando Não Falar",
    description: "Nossa infraestrutura possui mecanismos de validação que impedem a criação de leis ou precedentes inexistentes. Se a ferramenta diz, você pode assinar embaixo.",
  },
  {
    icon: Link2,
    title: "Rastreabilidade Total",
    description: "Cada citação gerada acompanha links auditáveis para fontes oficiais, permitindo a conferência imediata e segura da fundamentação jurídica.",
  },
];

const AuthoritySection = () => {
  return (
    <section id="diferenciais" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Photo placeholder + institutional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="badge-glow w-fit">Autoridade Técnica</div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              A Tecnologia Validada pela{" "}
              <span className="text-gradient">Elite do Direito Brasileiro</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Não confie sua reputação a algoritmos genéricos e estrangeiros. Utilize a única infraestrutura jurídica desenvolvida por quem conhece o rigor dos tribunais e a responsabilidade de uma decisão.
            </p>

            {/* Authority image block */}
            <div className="glass-card p-6 flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center" style={{ background: "hsl(68 89% 45% / 0.1)" }}>
                <Scale className="w-10 h-10 text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-lg">Dr. Ali Mazloum</p>
                <p className="text-sm text-muted-foreground">Desembargador Federal e Fundador da LegisBrasil.IA</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex gap-5 group hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <CtaButton>ENTRAR PARA A ELITE JURÍDICA</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
