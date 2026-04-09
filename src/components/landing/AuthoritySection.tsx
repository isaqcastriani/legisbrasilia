import { motion } from "framer-motion";
import { CheckCircle2, Scale } from "lucide-react";
import CtaButton from "./CtaButton";

const pillars = [
  {
    title: "Curadoria de Magistrados Federais",
    desc: "Idealizada por um Desembargador Federal com mais de 30 anos de magistratura, garantindo que a IA opere sob a lógica real do sistema de justiça nacional.",
  },
  {
    title: "Soberania Digital e Dados Nacionais",
    desc: "Treinada exclusivamente com modelos, doutrina e jurisprudência brasileira. Sua inteligência entende a burocracia e o raciocínio jurídico do país, sem ruídos de tradução.",
  },
  {
    title: "Compliance e Segurança Nativa",
    desc: "Operação em total conformidade com a LGPD (Lei nº 13.709/2018) e as diretrizes normativas do CNJ. Seus dados nunca saem de solo nacional.",
  },
  {
    title: "Inteligência que Sabe Quando Não Falar",
    desc: "Diferente de IAs que alucinam, nossa infraestrutura possui mecanismos de validação que impedem a criação de leis ou precedentes inexistentes. Se a ferramenta diz, você pode assinar embaixo.",
  },
  {
    title: "Rastreabilidade Total",
    desc: "Cada citação gerada acompanha links auditáveis para fontes oficiais, permitindo a conferência imediata e segura da fundamentação jurídica.",
  },
];

const AuthoritySection = () => {
  return (
    <section id="diferenciais" className="relative section-spacing">
      <div className="absolute inset-0 grid-lines pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-label mb-5"
        >
          <span className="text-primary">🛡️</span>
          <span>Diferenciais</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl md:text-[3rem] lg:text-[3.5rem] font-bold text-foreground leading-[1.08] mb-6"
            >
              A Tecnologia Validada pela Elite do Direito Brasileiro.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10"
            >
              Não confie sua reputação a algoritmos genéricos e estrangeiros. Utilize a única infraestrutura jurídica desenvolvida por quem conhece o rigor dos tribunais e a responsabilidade de uma decisão.
            </motion.p>

            {/* Authority card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="anti-card p-6 flex items-center gap-5"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "hsl(var(--primary) / 0.1)" }}
              >
                <Scale className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground">Dr. Ali Mazloum</p>
                <p className="text-sm text-muted-foreground">
                  Desembargador Federal · Fundador
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right column — Checklist pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-1"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="flex gap-4 p-5 rounded-xl hover:bg-card/30 transition-colors group cursor-default"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <CtaButton>ENTRAR PARA A ELITE JURÍDICA</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
