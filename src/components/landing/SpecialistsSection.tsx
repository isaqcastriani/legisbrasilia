import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    emoji: "🦅",
  },
  {
    img: imgGolfinho,
    name: "Golfinho",
    role: "Análise Multimodal",
    desc: "Assiste vídeos e ouve áudios de audiências gravadas. Transcreve, indexa e transforma horas de gravação em 15 minutos de estratégia utilizável.",
    emoji: "🐬",
  },
  {
    img: imgRobo,
    name: "Robô",
    role: "Juiz Robô (Jurimetria)",
    desc: "Cruza dados de tribunais para identificar tendências, prever probabilidades de êxito e mapear o cenário decisório com base no histórico nacional.",
    emoji: "🤖",
  },
  {
    img: imgPantera,
    name: "Pantera",
    role: "O Estrategista",
    desc: "Utiliza jurimetria e dados técnicos para sugerir caminhos jurídicos, indicando as medidas mais eficazes e as melhores peças para cada situação.",
    emoji: "🐆",
  },
  {
    img: imgFila,
    name: "Fila Brasileiro",
    role: "Detector de Mentiras",
    desc: "Identifica inconsistências factuais, contradições cronológicas, falácias argumentativas e falsas memórias em depoimentos e documentos.",
    emoji: "🐕",
  },
  {
    img: imgArara,
    name: "Arara Azul",
    role: "Buscador de Jurisprudência",
    desc: "Localiza precedentes alinhados ao caso com links auditáveis e fontes oficiais, eliminando o risco de citações falsas ou leis revogadas.",
    emoji: "🦜",
  },
];

const SpecialistsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="especialistas" className="relative py-24 md:py-32">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label mb-5 block">Especialistas</span>
          <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.06] mb-5">
            Não é um chatbot com toga.
            <br />
            <span className="text-gradient">É a sua equipe de elite digital.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            A LegisBrasil.IA funciona como um escritório inteiro comprimido em especialistas integrados, cada um dominando uma etapa do ciclo jurídico.
          </p>
        </motion.div>

        {/* Bento grid of specialists — top row 3, bottom row 3 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6">
          {specialists.map((s, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActiveIdx(i)}
              className={`bento-card p-4 md:p-5 text-left transition-all duration-300 cursor-pointer ${
                i === activeIdx ? "!border-primary/30 ring-1 ring-primary/20" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{s.emoji}</span>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground">{s.name}</p>
                  <p className="text-[10px] text-muted-foreground/60 font-mono uppercase tracking-wider">{s.role}</p>
                </div>
              </div>
              <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed line-clamp-2">{s.desc}</p>
            </motion.button>
          ))}
        </div>

        {/* Active specialist detail — large card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bento-card overflow-hidden"
          >
            <div className="grid md:grid-cols-[1fr_1.5fr]">
              {/* Image */}
              <div className="relative h-56 md:h-[360px] overflow-hidden">
                <img
                  src={specialists[activeIdx].img}
                  alt={specialists[activeIdx].name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={512}
                  height={512}
                />
                <div
                  className="absolute inset-0 hidden md:block"
                  style={{ background: "linear-gradient(90deg, transparent 50%, hsl(var(--card) / 0.95) 100%)" }}
                />
                <div
                  className="absolute inset-0 md:hidden"
                  style={{ background: "linear-gradient(180deg, transparent 40%, hsl(var(--card) / 0.95) 100%)" }}
                />
              </div>

              {/* Info */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="section-label mb-3">{specialists[activeIdx].role}</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {specialists[activeIdx].name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {specialists[activeIdx].desc}
                </p>
                {/* Dots */}
                <div className="flex gap-1.5">
                  {specialists.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIdx ? "bg-primary w-6" : "w-1.5"
                      }`}
                      style={{ background: i === activeIdx ? undefined : "hsl(var(--border) / 0.25)" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Transition phrase */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-foreground font-heading font-medium text-[15px] md:text-lg mt-14"
        >
          Sozinho, cada especialista poupa horas.{" "}
          <span className="text-primary">Juntos, eles mudam a lógica do seu escritório.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default SpecialistsSection;
