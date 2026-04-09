import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CtaButton from "./CtaButton";

const specialists = [
  {
    name: "Super Analista",
    animal: "Águia",
    description: "Examina processos na íntegra, identifica pontos jurídicos cruciais e extrai o núcleo decisório de grandes volumes documentais em segundos.",
    color: "from-amber-500/20 to-transparent",
  },
  {
    name: "Análise Multimodal",
    animal: "Golfinho",
    description: "Assiste a vídeos e ouve áudios de audiências gravadas, transcrevendo e indexando o conteúdo para transformar horas de gravação em estratégia.",
    color: "from-cyan-500/20 to-transparent",
  },
  {
    name: "Juiz Robô (Jurimetria)",
    animal: "Robô",
    description: "Aplica inteligência de dados para identificar tendências de tribunais e prever probabilidades de êxito com base no cenário nacional.",
    color: "from-violet-500/20 to-transparent",
  },
  {
    name: "O Estrategista",
    animal: "Pantera",
    description: "Utiliza jurimetria e dados técnicos para sugerir caminhos jurídicos, indicando as medidas mais eficazes para cada situação concreta.",
    color: "from-emerald-500/20 to-transparent",
  },
  {
    name: "Detector de Mentiras",
    animal: "Fila Brasileiro",
    description: "Identifica inconsistências factuais, contradições cronológicas e falácias argumentativas em depoimentos e documentos.",
    color: "from-red-500/20 to-transparent",
  },
  {
    name: "Buscador de Jurisprudência",
    animal: "Arara Azul",
    description: "Localiza precedentes alinhados ao caso com links auditáveis e fontes oficiais, eliminando o risco de citações falsas.",
    color: "from-blue-500/20 to-transparent",
  },
];

const SpecialistsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % specialists.length);
  const prev = () => setCurrent((p) => (p - 1 + specialists.length) % specialists.length);

  // Show 3 on lg, 2 on md, 1 on sm
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const visibleCount = getVisibleCount();
  const visibleSpecs = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleSpecs.push(specialists[(current + i) % specialists.length]);
  }

  return (
    <section id="especialistas" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="badge-glow mb-6 mx-auto w-fit">✦ Especialistas</div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            Pare de trabalhar sozinho.{" "}
            <span className="text-gradient">Ative sua Equipe de Especialistas.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Muito mais que um software. Uma equipe digital de apoio onde diferentes especialistas trabalham integrados para cada caso.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {visibleSpecs.map((spec) => (
                <motion.div
                  key={spec.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="glass-card overflow-hidden group"
                >
                  {/* Colored top gradient */}
                  <div className={`h-32 bg-gradient-to-b ${spec.color} flex items-center justify-center`}>
                    <span className="font-heading text-5xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                      {spec.animal.charAt(0)}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="badge-glow text-xs w-fit">{spec.name}</div>
                    <h3 className="font-heading text-xl font-bold text-foreground">{spec.animal}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{spec.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center text-foreground hover:bg-muted hover:border-primary/40 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {specialists.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center text-foreground hover:bg-muted hover:border-primary/40 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <CtaButton>CONTRATAR MINHA EQUIPE DE ELITE</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
