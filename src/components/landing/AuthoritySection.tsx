import { motion } from "framer-motion";
import { Scale, Globe, Lock, Brain, Link2 } from "lucide-react";
import CtaButton from "./CtaButton";

const pillars = [
  { icon: Scale, title: "Curadoria de Magistrados", desc: "30+ anos de magistratura federal." },
  { icon: Globe, title: "Soberania Digital", desc: "Treinada 100% com doutrina brasileira." },
  { icon: Lock, title: "LGPD & CNJ Nativo", desc: "Dados nunca saem do Brasil." },
  { icon: Brain, title: "Anti-Alucinação", desc: "Impede leis ou precedentes falsos." },
  { icon: Link2, title: "Rastreabilidade", desc: "Links auditáveis para cada citação." },
];

const AuthoritySection = () => {
  return (
    <section id="diferenciais" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Biuro-inspired full-width container */}
        <div className="section-container">
          <div className="p-8 md:p-14 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left — Cernel-style left-aligned */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-7"
              >
                <div className="badge-glow w-fit">✦ Autoridade</div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight">
                  Validada pela{" "}
                  <span className="text-gradient">Elite do Direito</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A única infraestrutura jurídica desenvolvida por quem conhece o rigor dos tribunais e a responsabilidade de uma decisão.
                </p>

                {/* Authority card */}
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

              {/* Right — Pillars */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="space-y-3"
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
                    <p.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground">{p.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
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
