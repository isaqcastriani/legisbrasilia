import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CtaButton from "./CtaButton";

const specialists = [
  {
    name: "Super Analista",
    animal: "Águia",
    image: "https://legisbrasilia.com.br/images/characters/eagle.png",
    description: "Responsável por examinar processos na íntegra, identificar pontos jurídicos cruciais e extrair o núcleo decisório de grandes volumes documentais em segundos.",
  },
  {
    name: "Análise Multimodal",
    animal: "Golfinho",
    image: "https://legisbrasilia.com.br/images/characters/dolphin.png",
    description: "Assiste a vídeos e ouve áudios de audiências gravadas, transcrevendo e indexando o conteúdo para transformar horas de gravação em 15 minutos de estratégia pura.",
  },
  {
    name: "Juiz Robô (Jurimetria)",
    animal: "Robô",
    image: "https://legisbrasilia.com.br/images/characters/robot.png",
    description: "Aplica inteligência de dados para identificar tendências de tribunais e prever as probabilidades de êxito e resultados do processo com base no cenário nacional.",
  },
  {
    name: "O Estrategista",
    animal: "Pantera",
    image: "https://legisbrasilia.com.br/images/characters/panther.png",
    description: "Utiliza jurimetria e dados técnicos para sugerir caminhos jurídicos, indicando as medidas mais eficazes e as melhores peças para cada situação concreta.",
  },
  {
    name: "Detector de Mentiras",
    animal: "Fila Brasileiro",
    image: "https://legisbrasilia.com.br/images/characters/dog.png",
    description: "Identifica inconsistências factuais, contradições cronológicas, falácias argumentativas e falsas memórias em depoimentos e documentos.",
  },
  {
    name: "Buscador de Jurisprudência",
    animal: "Arara Azul",
    image: "https://legisbrasilia.com.br/images/characters/macaw.png",
    description: "Localiza precedentes alinhados ao caso com links auditáveis e fontes oficiais, eliminando o risco de citações falsas ou leis revogadas.",
  },
];

const SpecialistsSection = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1;

  const next = () => setCurrent((p) => Math.min(p + 1, specialists.length - visibleCount));
  const prev = () => setCurrent((p) => Math.max(p - 1, 0));

  return (
    <section id="especialistas" className="section-spacing relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="badge-glow mb-6 mx-auto w-fit">Inteligência Especializada</div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Pare de trabalhar sozinho.{" "}
            <span className="text-gradient">Ative sua Equipe de Especialistas.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Muito mais que um software, a LegisBrasil.IA funciona como uma equipe digital de apoio, onde diferentes especialistas trabalham integrados para garantir precisão e rapidez em cada caso.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {specialists.slice(current, current + (typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1)).map((spec) => (
                <motion.div
                  key={spec.name}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.4 }}
                  className="flex-1 min-w-0 glass-card overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={spec.image}
                      alt={spec.animal}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(213 60% 11%) 0%, transparent 60%)" }} />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="badge-glow text-xs">{spec.name}</span>
                    <h3 className="font-heading text-xl font-bold text-foreground">{spec.animal}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{spec.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {specialists.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i >= current && i < current + 3 ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={current >= specialists.length - 3}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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
