import { motion } from "framer-motion";
import { Scale, Globe, Lock, Brain, Link2, CheckCircle2 } from "lucide-react";
import CtaButton from "./CtaButton";

const pillars = [
  {
    icon: Scale,
    title: "Curadoria de Magistrados Federais",
    desc: "Idealizada por um Desembargador Federal com mais de 30 anos de magistratura, garantindo que a IA opere sob a lógica real do sistema de justiça nacional.",
  },
  {
    icon: Globe,
    title: "Soberania Digital e Dados Nacionais",
    desc: "Treinada exclusivamente com modelos, doutrina e jurisprudência brasileira. Sua inteligência entende a burocracia e o raciocínio jurídico do país, sem ruídos de tradução.",
  },
  {
    icon: Lock,
    title: "Compliance e Segurança Nativa",
    desc: "Operação em total conformidade com a LGPD (Lei nº 13.709/2018) e as diretrizes normativas do CNJ. Seus dados nunca saem de solo nacional.",
  },
  {
    icon: Brain,
    title: "Inteligência que Sabe Quando Não Falar",
    desc: "Diferente de IAs que alucinam, nossa infraestrutura possui mecanismos de validação que impedem a criação de leis ou precedentes inexistentes. Se a ferramenta diz, você pode assinar embaixo.",
  },
  {
    icon: Link2,
    title: "Rastreabilidade Total",
    desc: "Cada citação gerada acompanha links auditáveis para fontes oficiais, permitindo a conferência imediata e segura da fundamentação jurídica.",
  },
];

const AuthoritySection = () => {
  return (
    <section id="diferenciais" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-container">
          <div className="p-8 md:p-14 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-7"
              >
                <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight">
                  A Tecnologia Validada pela{" "}
                  <span className="text-gradient">Elite do Direito Brasileiro.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Não confie sua reputação a algoritmos genéricos e estrangeiros. Utilize a única infraestrutura jurídica desenvolvida por quem conhece o rigor dos tribunais e a responsabilidade de uma decisão.
                </p>

                {/* Authority card — Dr. Ali Mazloum */}
                <div className="flex items-center gap-4 p-5 rounded-2xl border border-primary/15" style={{ background: "hsl(var(--primary) / 0.04)" }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                    <Scale className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">Dr. Ali Mazloum</p>
                    <p className="text-sm text-muted-foreground">Desembargador Federal · Fundador</p>
                  </div>
                </div>
              </motion.div>

              {/* Right — Pillars with check icons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="space-y-4"
              >
                {pillars.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-border/40 transition-all group cursor-default"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground">{p.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
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
