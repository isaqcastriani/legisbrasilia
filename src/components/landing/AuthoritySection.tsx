import { motion } from "framer-motion";
import { Scale, Globe, Lock, Brain, Link2 } from "lucide-react";
import CtaButton from "./CtaButton";

const pillars = [
  {
    icon: Scale,
    title: "Curadoria de Magistrados Federais",
    description: "Idealizada por um Desembargador Federal com mais de 30 anos de magistratura.",
  },
  {
    icon: Globe,
    title: "Soberania Digital e Dados Nacionais",
    description: "Treinada exclusivamente com modelos, doutrina e jurisprudência brasileira.",
  },
  {
    icon: Lock,
    title: "Compliance e Segurança Nativa",
    description: "Operação em total conformidade com a LGPD e diretrizes normativas do CNJ.",
  },
  {
    icon: Brain,
    title: "Inteligência que Sabe Quando Não Falar",
    description: "Mecanismos de validação que impedem a criação de leis ou precedentes inexistentes.",
  },
  {
    icon: Link2,
    title: "Rastreabilidade Total",
    description: "Cada citação acompanha links auditáveis para fontes oficiais.",
  },
];

const AuthoritySection = () => {
  return (
    <section id="diferenciais" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Full-width rounded container like Alpha House sections */}
        <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)" }}>
          <div className="p-8 md:p-14 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left - Headline + authority card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="badge-glow w-fit">✦ Autoridade Técnica</div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  A Tecnologia Validada pela{" "}
                  <span className="text-gradient">Elite do Direito Brasileiro</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Não confie sua reputação a algoritmos genéricos e estrangeiros. Utilize a única infraestrutura jurídica desenvolvida por quem conhece o rigor dos tribunais.
                </p>

                {/* Authority card like Agência Get quote block */}
                <div className="glass-card p-6 flex items-center gap-5 border-primary/20">
                  <div className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center glow-primary" style={{ background: "hsl(var(--primary) / 0.12)" }}>
                    <Scale className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-lg">Dr. Ali Mazloum</p>
                    <p className="text-sm text-muted-foreground">Desembargador Federal e Fundador da LegisBrasil.IA</p>
                  </div>
                </div>
              </motion.div>

              {/* Right - Pillar list */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                {pillars.map((pillar, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex gap-4 p-5 rounded-2xl border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all group cursor-default"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                      <pillar.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1 text-sm">{pillar.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mt-14"
            >
              <CtaButton>ENTRAR PARA A ELITE JURÍDICA</CtaButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
