import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CtaButton from "./CtaButton";

const differentials = [
  {
    title: "Curadoria de quem julga, não de quem programa.",
    desc: "Idealizada por Dr. Ali Mazloum, Desembargador Federal com mais de 30 anos de magistratura. A IA não foi calibrada por engenheiros tentando adivinhar o que um juiz pensa. Foi calibrada por quem decide.",
    result: "Cada resposta segue a lógica real dos tribunais, não a lógica provável de um modelo estatístico.",
  },
  {
    title: "Soberania digital que não é slogan.",
    desc: "Treinada exclusivamente com doutrina, legislação e jurisprudência brasileira. Sem ruídos de tradução, sem modelos importados tentando encaixar o sistema romano-germânico em precedentes de common law.",
    result: "Quando a ferramenta cita uma súmula, ela existe. Quando referencia um artigo, ele está vigente.",
  },
  {
    title: "A IA que sabe calar.",
    desc: "Diferente de ferramentas que preenchem lacunas com invenção, a LegisBrasil.IA possui mecanismos de validação que impedem a criação de leis, precedentes ou jurisprudência inexistentes. Se não encontra fundamento, não fabrica um.",
    result: "Zero alucinação jurídica. Cada citação acompanha link auditável para a fonte oficial.",
  },
  {
    title: "LGPD não é checkbox, é arquitetura.",
    desc: "Operação em total conformidade com a LGPD e as diretrizes normativas do CNJ. Seus dados e os dados dos seus clientes nunca saem de solo nacional.",
    result: "Você não precisa de um parecer de compliance para usar a ferramenta. O compliance já é a ferramenta.",
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
          <span>Por Que Nós</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl md:text-[3rem] lg:text-[3.5rem] font-bold text-foreground leading-[1.08] max-w-3xl mb-6"
        >
          A diferença entre "usar IA" e{" "}
          <span className="text-gradient">confiar nela.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mb-16 leading-relaxed"
        >
          Não confie sua reputação a algoritmos genéricos e estrangeiros. Utilize a única infraestrutura jurídica desenvolvida por quem conhece o rigor dos tribunais e a responsabilidade de uma decisão.
        </motion.p>

        {/* Differentials */}
        <div className="space-y-6">
          {differentials.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="anti-card p-6 md:p-8"
            >
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">
                {d.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {d.desc}
              </p>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium text-primary">
                  E daí? {d.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
