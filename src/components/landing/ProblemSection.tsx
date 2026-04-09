import { motion } from "framer-motion";
import { Video, FileText, ShieldCheck, Brain, Search, Zap, ArrowRight } from "lucide-react";

/*
 * Richard: "E daí?" test — cada card deve ter um ACIONÁVEL, não só descrição.
 * Richard: Insights > Dados Brutos — contextualizar o valor, não listar features.
 * Richard: Hierarchy — card principal (Transcrição) é maior, é a North Star da seção.
 * Richard: Agrupar por contexto — dividido em "Análise" e "Segurança".
 */

const features = [
  {
    icon: Video,
    title: "Transcrição Multimodal",
    before: "8h ouvindo audiência",
    after: "Relatório em 3 min",
    desc: "Horas de audiência viram estratégia pura. A IA indexa fala, identifica contradições e entrega um resumo acionável.",
    highlight: true,
  },
  {
    icon: FileText,
    title: "Redação Técnica",
    before: "3 dias escrevendo",
    after: "Minuta em 15 min",
    desc: "Petições com jurisprudência verificável e links auditáveis.",
    highlight: false,
  },
  {
    icon: Brain,
    title: "Jurimetria Preditiva",
    before: "Achismo sobre chances",
    after: "Previsão com dados reais",
    desc: "Probabilidade de êxito baseada em milhares de decisões reais.",
    highlight: false,
  },
  {
    icon: Search,
    title: "Jurisprudência Auditável",
    before: "Busca manual sem fim",
    after: "Precedentes em segundos",
    desc: "Cada citação tem link para a fonte oficial. Zero alucinação.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Detector de Falhas",
    before: "Contradições passam batido",
    after: "Alerta automático",
    desc: "Encontra falácias e inconsistências em depoimentos e documentos.",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "LGPD & CNJ Nativo",
    before: "Risco de vazamento",
    after: "Dados no Brasil",
    desc: "Infraestrutura 100% nacional. Seus dados nunca saem do país.",
    highlight: false,
  },
];

const ProblemSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Richard: Headline no nível de consciência 3 — trade-offs e seleção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-5">
            O Que Você{" "}
            <span className="text-gradient">Deixa de Perder</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada ferramenta passa pelo teste: <span className="text-foreground font-medium">"E daí? O que muda na minha rotina?"</span>
          </p>
        </motion.div>

        {/* Richard: Bento grid with hierarchy — hero card is larger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group rounded-2xl border p-7 transition-all relative overflow-hidden ${
                f.highlight
                  ? "lg:col-span-2 lg:row-span-2 border-primary/20"
                  : "border-border/20 hover:border-border/40"
              }`}
              style={{ background: f.highlight ? "hsl(var(--primary) / 0.03)" : "hsl(var(--card) / 0.3)" }}
            >
              <div className="relative z-10">
                <f.icon className={`${f.highlight ? "w-8 h-8" : "w-5 h-5"} text-primary mb-4`} />
                <h3 className={`font-heading font-bold text-foreground mb-3 ${f.highlight ? "text-xl" : "text-base"}`}>
                  {f.title}
                </h3>

                {/* Richard: Before/After — prova tangível do valor */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full line-through text-muted-foreground/60" style={{ background: "hsl(var(--destructive) / 0.06)" }}>
                    {f.before}
                  </span>
                  <ArrowRight className="w-3 h-3 text-primary" />
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium text-primary" style={{ background: "hsl(var(--primary) / 0.08)" }}>
                    {f.after}
                  </span>
                </div>

                <p className={`text-muted-foreground leading-relaxed ${f.highlight ? "text-base max-w-md" : "text-sm"}`}>
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
