import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionDivider from "./SectionDivider";
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
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <SectionDivider />

      <section id="especialistas" className="relative py-20 md:py-28">
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          {/* Humble-style centered heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.08] mb-4">
              Não é um chatbot com toga.
              <br />
              <span className="text-gradient">É a sua equipe de elite digital.</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              A LegisBrasil.IA funciona como um escritório inteiro comprimido em especialistas que trabalham integrados, cada um dominando uma etapa do ciclo jurídico que nenhum profissional sozinho dá conta de cobrir com a mesma velocidade.
            </p>
          </motion.div>

          {/* Humble-style dark card with tabs + content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="anti-card overflow-hidden"
          >
            {/* Tab row — Humble numbered tabs */}
            <div className="flex flex-wrap border-b" style={{ borderColor: "hsl(var(--border) / 0.15)" }}>
              {specialists.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`flex items-center gap-2.5 px-5 py-4 text-sm font-medium transition-colors border-b-2 ${
                    i === activeIdx
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  <span className="font-heading text-xs font-bold opacity-50">{i + 1}</span>
                  <span className="hidden sm:inline">{s.name}</span>
                </button>
              ))}
            </div>

            {/* Content area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-[1fr_1.2fr] gap-0"
              >
                {/* Left — Image */}
                <div className="relative h-64 md:h-[400px] overflow-hidden">
                  <img
                    src={specialists[activeIdx].img}
                    alt={specialists[activeIdx].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:hidden" />
                </div>

                {/* Right — Info */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="badge-glow w-fit text-xs mb-4">{specialists[activeIdx].role}</div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {specialists[activeIdx].name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {specialists[activeIdx].desc}
                  </p>

                  {/* Dot navigation */}
                  <div className="flex gap-1.5">
                    {specialists.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIdx(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeIdx ? "bg-primary w-6" : "bg-border/40 w-1.5"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Transition phrase */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-foreground font-heading font-medium text-base md:text-lg mt-12 mb-10"
          >
            Sozinho, cada especialista poupa horas. <span className="text-primary">Juntos, eles mudam a lógica do seu escritório.</span>
          </motion.p>

          <div className="flex justify-center">
            <CtaButton>CONTRATAR MINHA EQUIPE DE ELITE</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialistsSection;
