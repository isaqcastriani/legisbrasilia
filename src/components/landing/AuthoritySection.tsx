import { motion } from "framer-motion";
import { ArrowRight, Scale, Shield, Eye, Lock } from "lucide-react";

const differentials = [
  {
    icon: Scale,
    title: "Curadoria de quem julga, não de quem programa.",
    desc: "Idealizada por Dr. Ali Mazloum, Desembargador Federal com mais de 30 anos de magistratura. Calibrada por quem decide.",
    result: "Cada resposta segue a lógica real dos tribunais, não a lógica provável de um modelo estatístico.",
  },
  {
    icon: Shield,
    title: "Soberania digital que não é slogan.",
    desc: "Treinada exclusivamente com doutrina, legislação e jurisprudência brasileira. Sem modelos importados.",
    result: "Quando a ferramenta cita uma súmula, ela existe. Quando referencia um artigo, ele está vigente.",
  },
  {
    icon: Eye,
    title: "A IA que sabe calar.",
    desc: "Mecanismos de validação impedem a criação de leis, precedentes ou jurisprudência inexistentes.",
    result: "Zero alucinação jurídica. Cada citação acompanha link auditável para a fonte oficial.",
  },
  {
    icon: Lock,
    title: "LGPD não é checkbox, é arquitetura.",
    desc: "Total conformidade com a LGPD e diretrizes do CNJ. Seus dados nunca saem de solo nacional.",
    result: "O compliance já é a ferramenta.",
  },
];

const AuthoritySection = () => {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label mb-5 block">Diferenciais</span>
          <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.06]">
            A diferença entre "usar IA"
            <br />
            e <span className="text-gradient">confiar nela.</span>
          </h2>
        </motion.div>

        {/* 2x2 Bento grid — inspired by Ease Health features */}
        <div className="grid md:grid-cols-2 gap-4">
          {differentials.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bento-card p-7 md:p-9 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors"
                  style={{ background: "hsl(var(--primary) / 0.08)" }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-2.5 leading-snug">
                  {d.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">
                  {d.desc}
                </p>

                {/* Result callout */}
                <div
                  className="flex items-start gap-3 rounded-xl p-4"
                  style={{ background: "hsl(var(--primary) / 0.04)", border: "1px solid hsl(var(--primary) / 0.08)" }}
                >
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-[13px] font-medium text-primary leading-relaxed">
                    {d.result}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
