import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, Search, FileText } from "lucide-react";

import imgAguia from "@/assets/eagle.png";
import imgGolfinho from "@/assets/dolphin.png";
import imgRobo from "@/assets/robot.png";
import imgPantera from "@/assets/panther.png";
import imgFila from "@/assets/dog.png";
import imgArara from "@/assets/macaw.png";

const specialists = [
  {
    img: imgAguia,
    name: "Águia",
    tab: "SUPER ANALISTA",
    headline: "Análise Profunda\nem Segundos.",
    accent: "Sem leitura manual.\nSem perda de tempo.\nApenas o essencial.",
    featureTitle: '"Encontre o Ponto Decisório"',
    featureDesc:
      "Examina processos inteiros, identifica os pontos jurídicos que decidem o caso e extrai o núcleo decisório de volumes documentais que levariam dias.",
    feature2Title: '"Análise Cirúrgica"',
    feature2Desc:
      "Mapeia automaticamente teses, pedidos e fundamentos — entregando uma visão estruturada do caso em segundos.",
    floatingLabel: "Análise concluída",
    floatingDetail: "12 pontos decisórios encontrados",
    floatingAction: "Ver: Resumo Executivo",
  },
  {
    img: imgGolfinho,
    name: "Golfinho",
    tab: "MULTIMODAL",
    headline: "Vídeos e Áudios\nViram Estratégia.",
    accent: "Sem transcrever manualmente.\nSem perder detalhes.\nApenas insights.",
    featureTitle: '"Transcrição Inteligente"',
    featureDesc:
      "Assiste vídeos e ouve áudios de audiências gravadas. Transcreve, indexa e transforma horas de gravação em minutos de estratégia.",
    feature2Title: '"Análise Multimodal"',
    feature2Desc:
      "Identifica momentos-chave, contradições e oportunidades estratégicas diretamente das mídias do processo.",
    floatingLabel: "Audiência processada",
    floatingDetail: "2h34min → 8 insights extraídos",
    floatingAction: "Ver: Momentos-chave",
  },
  {
    img: imgRobo,
    name: "Robô",
    tab: "JURIMETRIA",
    headline: "Previsão com\nDados Reais.",
    accent: "Sem achismo.\nSem feeling.\nApenas dados.",
    featureTitle: '"Probabilidade de Êxito"',
    featureDesc:
      "Cruza dados de tribunais para identificar tendências, prever probabilidades de êxito e mapear o cenário decisório nacional.",
    feature2Title: '"Inteligência Jurimétrica"',
    feature2Desc:
      "Analisa padrões de decisão por vara, turma e relator — revelando caminhos estatisticamente favoráveis.",
    floatingLabel: "Jurimetria completa",
    floatingDetail: "87% probabilidade de êxito",
    floatingAction: "Ver: Dashboard",
  },
  {
    img: imgPantera,
    name: "Pantera",
    tab: "ESTRATEGISTA",
    headline: "Estratégia Jurídica\ncom Precisão.",
    accent: "Sem tentativa e erro.\nSem improviso.\nApenas eficácia.",
    featureTitle: '"Caminho Mais Eficaz"',
    featureDesc:
      "Utiliza jurimetria e dados técnicos para sugerir caminhos jurídicos, indicando as medidas mais eficazes para cada situação.",
    feature2Title: '"Peças Sob Medida"',
    feature2Desc:
      "Recomenda a melhor peça processual, o melhor argumento e o melhor momento para cada ação estratégica.",
    floatingLabel: "Estratégia gerada",
    floatingDetail: "3 caminhos mapeados",
    floatingAction: "Ver: Plano de Ação",
  },
  {
    img: imgFila,
    name: "Fila Brasileiro",
    tab: "DETECTOR",
    headline: "Mentiras Não\nPassam Despercebidas.",
    accent: "Sem contradições ocultas.\nSem falhas ignoradas.\nApenas verdade.",
    featureTitle: '"Detector de Inconsistências"',
    featureDesc:
      "Identifica inconsistências factuais, contradições cronológicas, falácias argumentativas e falsas memórias em depoimentos.",
    feature2Title: '"Análise de Credibilidade"',
    feature2Desc:
      "Cruza declarações com provas documentais para revelar divergências que podem mudar o rumo do processo.",
    floatingLabel: "Análise de credibilidade",
    floatingDetail: "4 contradições identificadas",
    floatingAction: "Ver: Relatório",
  },
  {
    img: imgArara,
    name: "Arara Azul",
    tab: "JURISPRUDÊNCIA",
    headline: "Precedentes Reais,\nFontes Oficiais.",
    accent: "Sem alucinações.\nSem leis revogadas.\nApenas fontes auditáveis.",
    featureTitle: '"Busca Auditável"',
    featureDesc:
      "Localiza precedentes alinhados ao caso com links auditáveis e fontes oficiais, eliminando citações falsas ou revogadas.",
    feature2Title: '"Jurisprudência Inteligente"',
    feature2Desc:
      "Encontra decisões por contexto semântico — não apenas por palavras-chave — garantindo relevância real.",
    floatingLabel: "Precedentes encontrados",
    floatingDetail: "23 decisões relevantes",
    floatingAction: "Ver: Jurisprudência",
  },
];

const floatingIcons = [MessageSquare, Search, FileText, MessageSquare, Search, FileText];

const SpecialistsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = specialists[activeIdx];
  const FloatingIcon = floatingIcons[activeIdx];

  return (
    <section id="especialistas" className="relative py-24 md:py-36">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.06] mb-5">
            Sua equipe de elite,{" "}
            <span className="text-primary">não nossa.</span>
          </h2>
        </motion.div>

        {/* Outer card wrapping tabs + content */}
        <div className="rounded-2xl border border-border/20 overflow-hidden" style={{ background: "hsl(var(--card) / 0.5)" }}>
          {/* Numbered tabs — Kode Mono */}
          <div className="flex items-center border-b border-border/20">
            {specialists.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`relative flex-1 flex items-center justify-center gap-2 py-4 font-mono text-[10px] md:text-[12px] tracking-[0.08em] uppercase whitespace-nowrap transition-all duration-300 border-b-2 -mb-px ${
                  i === activeIdx
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground/50 hover:text-muted-foreground"
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold border transition-colors duration-300 ${
                    i === activeIdx
                      ? "border-primary text-primary"
                      : "border-muted-foreground/20 text-muted-foreground/40"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="hidden sm:inline">{s.tab}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
            {/* Inner content with blurred border glow */}
            <div className="relative">
              {/* Blurred glow border effect */}
              <div className="absolute -inset-[1px] rounded-b-2xl pointer-events-none" style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.1), hsl(var(--primary) / 0.08))",
                filter: "blur(20px)",
              }} />
              <div className="absolute inset-0 rounded-b-2xl pointer-events-none border border-white/[0.06]" />
              
              <div className="relative grid md:grid-cols-[1fr_1.4fr] min-h-[380px] max-h-[480px] rounded-b-2xl overflow-hidden" style={{ background: "hsl(var(--card) / 0.35)" }}>
              {/* Left — Text content */}
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg border border-border/30 flex items-center justify-center mb-6">
                    <FloatingIcon className="w-5 h-5 text-muted-foreground/60" />
                  </div>

                  {/* Headline */}
                  <h3 className="font-heading text-xl md:text-2xl lg:text-[1.75rem] font-bold text-foreground leading-[1.15] mb-4 whitespace-pre-line">
                    {active.headline}
                  </h3>

                  {/* Accent text — Kode Mono, primary color */}
                  <p className="font-mono text-[12px] md:text-[13px] text-primary leading-relaxed whitespace-pre-line mb-8">
                    {active.accent}
                  </p>
                </div>

                {/* Feature blocks */}
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">
                      {active.featureTitle}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {active.featureDesc}
                    </p>
                  </div>

                  <div className="w-full h-px bg-border/20" />

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">
                      {active.feature2Title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {active.feature2Desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — Image + floating UI elements */}
              <div className="relative overflow-hidden rounded-br-2xl">
                {/* Agent image */}
                <img
                  src={active.img}
                  alt={active.name}
                  className="w-full h-full object-cover min-h-[320px] md:min-h-full"
                  loading="lazy"
                  width={640}
                  height={640}
                />

                {/* Gradient overlays */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 30%, hsl(var(--background) / 0.6) 100%)",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none hidden md:block"
                  style={{
                    background:
                      "linear-gradient(90deg, hsl(var(--card) / 0.4) 0%, transparent 30%)",
                  }}
                />

                {/* Floating card — status */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="absolute bottom-24 md:bottom-28 right-6 md:right-10 w-[260px] md:w-[300px] rounded-xl border border-border/30 p-4 backdrop-blur-xl"
                  style={{ background: "hsl(var(--card) / 0.85)" }}
                >
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-sm font-medium text-foreground">
                      {active.floatingLabel}
                    </p>
                    <span className="text-[10px] text-muted-foreground/50 font-mono">
                      2s atrás
                    </span>
                  </div>
                  <span className="inline-block text-[11px] text-primary font-mono">
                    {active.floatingDetail}
                  </span>
                </motion.div>

                {/* Floating card — action bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="absolute bottom-6 md:bottom-10 right-6 md:right-10 w-[260px] md:w-[300px] rounded-xl overflow-hidden flex items-center"
                  style={{ background: "hsl(var(--background))" }}
                >
                  <div className="flex items-center gap-2 px-4 py-3 flex-1">
                    <FileText className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                    <span className="text-sm text-foreground font-medium truncate">
                      {active.floatingAction}
                    </span>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-lg m-1 shrink-0">
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                </motion.div>
              </div>
            </div>
            </div>
          </motion.div>
        </AnimatePresence>
        </div>

        {/* Transition phrase */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-foreground font-heading font-medium text-[15px] md:text-lg mt-14"
        >
          Sozinho, cada especialista poupa horas.{" "}
          <span className="text-primary">
            Juntos, eles mudam a lógica do seu escritório.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default SpecialistsSection;
