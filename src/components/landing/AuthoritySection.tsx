import { motion } from "framer-motion";
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
    desc: "Diferente de ferramentas que preenchem lacunas com invenção, a LegisBrasil.IA possui mecanismos de validação que impedem a criação de leis, precedentes ou jurisprudência inexistentes.",
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
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Humble split header */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-0 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-5 md:gap-7"
            >
              <div
                className="hidden lg:block w-[2px] flex-shrink-0 rounded-full mt-2"
                style={{ background: "hsl(var(--primary) / 0.4)", height: "100px" }}
              />
              <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-foreground leading-[1.08]">
                A diferença entre
                <br />
                "usar IA" e confiar nela
                <span className="text-primary">.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start lg:justify-end"
            >
              <div className="lg:max-w-[380px] lg:border-l lg:pl-8" style={{ borderColor: "hsl(var(--border) / 0.15)" }}>
                <p className="font-heading text-[15px] md:text-base font-semibold text-foreground leading-snug mb-3">
                  Calibrada por quem decide, não por quem programa.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary font-medium">Dr. Ali Mazloum</span>, Desembargador Federal com mais de 30 anos de magistratura.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Feature cards — clean grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {differentials.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="rounded-xl border p-6 md:p-8 transition-all duration-300 hover:border-primary/20"
                style={{
                  borderColor: "hsl(var(--border) / 0.12)",
                  background: "hsl(var(--card) / 0.3)",
                }}
              >
                <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-3 leading-snug">
                  {d.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">
                  {d.desc}
                </p>
                <div
                  className="flex items-start gap-3 rounded-lg p-3.5"
                  style={{ background: "hsl(var(--primary) / 0.04)", border: "1px solid hsl(var(--primary) / 0.08)" }}
                >
                  <span className="font-mono text-[11px] text-primary font-semibold flex-shrink-0 mt-0.5">→</span>
                  <p className="text-[13px] font-medium text-primary leading-relaxed">
                    {d.result}
                  </p>
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
