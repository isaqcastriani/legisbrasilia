import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CtaButton from "./CtaButton";

import imgAguia from "@/assets/specialist-aguia.png";
import imgGolfinho from "@/assets/specialist-golfinho.png";
import imgRobo from "@/assets/specialist-robo.png";
import imgPantera from "@/assets/specialist-pantera.png";
import imgFila from "@/assets/specialist-fila.png";
import imgArara from "@/assets/specialist-arara.png";

const specialists = [
  {
    img: imgAguia,
    name: "Águia",
    role: "Super Analista",
    desc: "Examina processos inteiros, identifica os pontos jurídicos que decidem o caso e extrai o núcleo decisório de volumes documentais que levariam dias. Faz isso em segundos.",
  },
  {
    img: imgGolfinho,
    name: "Golfinho",
    role: "Análise Multimodal",
    desc: "Assiste vídeos e ouve áudios de audiências gravadas. Transcreve, indexa e transforma horas de gravação em 15 minutos de estratégia utilizável.",
  },
  {
    img: imgRobo,
    name: "Robô",
    role: "Juiz Robô (Jurimetria)",
    desc: "Cruza dados de tribunais para identificar tendências, prever probabilidades de êxito e mapear o cenário decisório do seu caso com base no histórico nacional.",
  },
  {
    img: imgPantera,
    name: "Pantera",
    role: "O Estrategista",
    desc: "Utiliza jurimetria e dados técnicos para sugerir caminhos jurídicos, indicando as medidas mais eficazes e as melhores peças para cada situação concreta.",
  },
  {
    img: imgFila,
    name: "Fila Brasileiro",
    role: "Detector de Mentiras",
    desc: "Identifica inconsistências factuais, contradições cronológicas, falácias argumentativas e falsas memórias em depoimentos e documentos.",
  },
  {
    img: imgArara,
    name: "Arara Azul",
    role: "Buscador de Jurisprudência",
    desc: "Localiza precedentes alinhados ao caso com links auditáveis e fontes oficiais, eliminando o risco de citações falsas ou leis revogadas.",
  },
];

const SpecialistsSection = () => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((p) => (p + 1) % specialists.length);
  const prev = () => setIdx((p) => (p - 1 + specialists.length) % specialists.length);

  const getVisible = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const count = getVisible();
  const items = Array.from({ length: count }, (_, i) => ({
    ...specialists[(idx + i) % specialists.length],
    key: (idx + i) % specialists.length,
  }));

  return (
    <section id="especialistas" className="relative section-spacing overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(213 50% 13%) 30%, hsl(213 45% 14%) 70%, hsl(var(--background)) 100%)`,
        }}
      />
      <div className="absolute inset-0 grid-lines-dense pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-label mb-5"
        >
          <span className="text-secondary">🤖</span>
          <span>A Virada</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl md:text-[3rem] lg:text-[3.5rem] font-bold text-foreground leading-[1.08] max-w-3xl mb-4"
        >
          Não é um chatbot com toga.
          <br />
          <span className="text-gradient">É a sua equipe de elite digital.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mb-5 leading-relaxed"
        >
          A LegisBrasil.IA funciona como um escritório inteiro comprimido em especialistas que trabalham integrados, cada um dominando uma etapa do ciclo jurídico que nenhum profissional sozinho dá conta de cobrir com a mesma velocidade.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-foreground font-medium text-sm md:text-base mb-14"
        >
          Sozinho, cada especialista poupa horas. Juntos, eles mudam a lógica do seu escritório.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {items.map((s) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="anti-card group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <div className="badge-glow w-fit text-xs">{s.role}</div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5">
            {specialists.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? "bg-primary w-6" : "bg-border/40 w-1.5"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >
          <CtaButton>CONTRATAR MINHA EQUIPE DE ELITE</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
