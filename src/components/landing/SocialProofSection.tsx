import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const comparisonData = [
  {
    feature: "Tempo para primeiro valor",
    legis: "Primeiros resultados em segundos",
    iaGen: "Requer prompts complexos e revisão manual",
    manual: "Dias a semanas de pesquisa",
  },
  {
    feature: "Precisão das fontes",
    legis: "100% auditável com links oficiais",
    iaGen: "Inventa leis e jurisprudência",
    manual: "Depende da experiência do profissional",
  },
  {
    feature: "Base de treinamento",
    legis: "Exclusivamente doutrina, legislação e jurisprudência brasileira",
    iaGen: "Modelos genéricos importados",
    manual: "Conhecimento individual limitado",
  },
  {
    feature: "Alucinações",
    legis: "Zero — mecanismos de validação impedem criação de fontes falsas",
    iaGen: "Frequentes e difíceis de detectar",
    manual: "Erros humanos ocasionais",
  },
  {
    feature: "Conformidade LGPD/CNJ",
    legis: "Arquitetura nativa — dados nunca saem do Brasil",
    iaGen: "Dados processados no exterior",
    manual: "Depende de processos internos",
  },
  {
    feature: "Curadoria",
    legis: "Validada por magistrados com 30+ anos de experiência",
    iaGen: "Sem validação jurídica",
    manual: "Limitada ao time disponível",
  },
  {
    feature: "Análise multimodal",
    legis: "Vídeos, áudios e documentos em um só lugar",
    iaGen: "Apenas texto",
    manual: "Fragmentada entre ferramentas",
  },
];

const metrics = [
  { value: "+50", label: "Juristas", desc: "Validaram o raciocínio da plataforma." },
  { value: "98%", label: "Acurácia", desc: "Conformidade com legislação vigente." },
  { value: "100%", label: "Auditável", desc: "Citações com links para fontes oficiais." },
];

const SocialProofSection = () => {
  return (
    <section id="validacao" className="relative pt-8 md:pt-12 pb-24 md:pb-32 z-10">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <span className="section-label mb-5 block">Validação</span>
          <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.06] mb-4">
            Por que a LegisBrasil é mais segura,{" "}
            <span className="text-gradient">mais inteligente.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            A LegisBrasil entrega resultados reais em segundos e melhora continuamente —{" "}
            <span className="text-foreground font-medium">feedback mais rápido, mais valor, menos risco.</span>
          </p>
        </motion.div>

        {/* Comparison Table — Humble style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="overflow-x-auto rounded-2xl bento-card p-0 overflow-hidden">
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="w-[200px] px-6 pt-6 pb-4" />
                  <th
                    className="px-6 pt-6 pb-4 text-center w-[220px]"
                    style={{
                      background: "hsl(var(--primary))",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                    }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: "hsl(0 0% 0% / 0.15)" }}
                      >
                        <span className="text-primary-foreground text-sm font-bold">LB</span>
                      </div>
                    </div>
                  </th>
                  <th className="px-6 pt-6 pb-4 text-center w-[200px]">
                    <span className="font-heading text-sm font-bold text-muted-foreground">
                      IA Genérica
                    </span>
                    <br />
                    <span className="text-[10px] font-mono text-muted-foreground/60">ChatGPT/Gemini/etc</span>
                  </th>
                  <th className="px-6 pt-6 pb-4 text-center w-[200px]">
                    <span className="font-heading text-sm font-bold text-muted-foreground">
                      Status Quo
                    </span>
                    <br />
                    <span className="text-[10px] font-mono text-muted-foreground/60">(Pesquisa Manual)</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonData.map((row, i) => {
                  const isLast = i === comparisonData.length - 1;
                  return (
                    <tr
                      key={i}
                      style={{
                        borderTop: "1px solid hsl(var(--border) / 0.3)",
                      }}
                    >
                      <td className="px-6 py-5 text-[13px] font-medium align-top text-foreground">
                        {row.feature}
                      </td>

                      <td
                        className="px-6 py-5 align-top"
                        style={{
                          background: "hsl(var(--primary))",
                          ...(isLast
                            ? { borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px" }
                            : {}),
                        }}
                      >
                        <span className="text-[12px] font-bold text-primary-foreground leading-relaxed">
                          {row.legis}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-center align-top">
                        <span className="text-[12px] leading-relaxed text-muted-foreground">
                          {row.iaGen}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-center align-top">
                        <span className="text-[12px] leading-relaxed text-muted-foreground">
                          {row.manual}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Quote + Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4">
          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <Quote className="w-8 h-8 text-primary/15 mb-5" />
              <blockquote className="text-base md:text-lg font-heading font-medium text-foreground leading-relaxed mb-8">
                "A advocacia e a magistratura não aceitam erros. Criamos a LegisBrasil para ser o padrão de integridade digital.{" "}
                <span className="text-primary">Se a ferramenta diz, você pode assinar embaixo.</span>"
              </blockquote>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-primary"
                style={{ background: "hsl(var(--primary) / 0.08)" }}
              >
                AM
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Dr. Ali Mazloum</p>
                <p className="text-[11px] text-muted-foreground">Desembargador Federal · Fundador</p>
              </div>
            </div>
          </motion.div>

          {/* Metrics stack */}
          <div className="grid grid-cols-1 gap-4">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bento-card p-6 flex items-center gap-5"
              >
                <span className="font-heading text-3xl md:text-4xl font-extrabold text-foreground leading-none">
                  {m.value}
                </span>
                <div>
                  <p className="text-[11px] font-semibold text-primary tracking-wide uppercase font-mono">{m.label}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
