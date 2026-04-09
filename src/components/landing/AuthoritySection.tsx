import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import SectionDivider from "./SectionDivider";
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
    <>
      <SectionDivider />

      <section id="diferenciais" className="relative py-20 md:py-28">
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          {/* Humble-style: Centered headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-6"
          >
            <h2 className="font-heading text-3xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.08]">
              A diferença entre "usar IA" e{" "}
              <span className="text-gradient">confiar nela.</span>
            </h2>
          </motion.div>

          {/* Founder card — Humble style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center mb-16"
          >
            <div className="anti-card px-6 py-4 inline-flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "hsl(var(--primary) / 0.1)" }}
              >
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-sm">Dr. Ali Mazloum</p>
                <p className="text-xs text-muted-foreground">Desembargador Federal · Fundador</p>
              </div>
            </div>
          </motion.div>

          {/* Humble-style: Feature cards as dark rounded cards stacked */}
          <div className="space-y-4">
            {differentials.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="anti-card"
              >
                <div className="p-6 md:p-8">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {d.desc}
                  </p>
                  <div className="flex items-start gap-3 rounded-xl p-4" style={{ background: "hsl(var(--primary) / 0.05)", border: "1px solid hsl(var(--primary) / 0.1)" }}>
                    <span className="font-mono text-xs text-primary font-semibold flex-shrink-0 mt-0.5">→ E daí?</span>
                    <p className="text-sm font-medium text-primary leading-relaxed">
                      {d.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
      </section>
    </>
  );
};

export default AuthoritySection;
