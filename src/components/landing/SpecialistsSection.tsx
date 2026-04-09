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
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Humble-style split header: headline left, description right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-0 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-5 md:gap-7"
            >
              <div
                className="hidden lg:block w-[2px] flex-shrink-0 rounded-full mt-2"
                style={{ background: "hsl(var(--primary) / 0.4)", height: "120px" }}
              />
              <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-foreground leading-[1.08]">
                Não é um chatbot
                <br />
                com toga
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
                  É a sua equipe de elite digital.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A LegisBrasil.IA funciona como um escritório inteiro comprimido em especialistas que trabalham integrados, cada um dominando uma etapa do ciclo jurídico.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Specialist tabs — Humble tab bar style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: "hsl(var(--border) / 0.15)", background: "hsl(var(--card) / 0.4)" }}
          >
            {/* Tab bar */}
            <div className="flex overflow-x-auto border-b" style={{ borderColor: "hsl(var(--border) / 0.1)" }}>
              {specialists.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`flex items-center gap-2 px-5 py-3.5 text-[13px] font-medium transition-all whitespace-nowrap border-b-2 ${
                    i === activeIdx
                      ? "text-primary border-primary"
                      : "text-muted-foreground/60 border-transparent hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-40">{String(i + 1).padStart(2, "0")}</span>
                  <span className="hidden sm:inline">{s.name}</span>
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
                transition={{ duration: 0.25 }}
                className="grid md:grid-cols-[1fr_1.3fr] gap-0"
              >
                {/* Image */}
                <div className="relative h-56 md:h-[380px] overflow-hidden">
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
                    style={{ background: "linear-gradient(90deg, transparent 60%, hsl(var(--card) / 0.9) 100%)" }}
                  />
                  <div
                    className="absolute inset-0 md:hidden"
                    style={{ background: "linear-gradient(180deg, transparent 50%, hsl(var(--card) / 0.9) 100%)" }}
                  />
                </div>

                {/* Info */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="section-label mb-3">{specialists[activeIdx].role}</span>
                  <h3 className="font-heading text-2xl md:text-[2rem] font-bold text-foreground mb-4 leading-tight">
                    {specialists[activeIdx].name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                    {specialists[activeIdx].desc}
                  </p>

                  {/* Dot navigation */}
                  <div className="flex gap-1.5">
                    {specialists.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIdx(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeIdx ? "bg-primary w-6" : "w-1.5"
                        }`}
                        style={{ background: i === activeIdx ? undefined : "hsl(var(--border) / 0.3)" }}
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
            className="text-center text-foreground font-heading font-medium text-[15px] md:text-lg mt-14 mb-10"
          >
            Sozinho, cada especialista poupa horas.{" "}
            <span className="text-primary">Juntos, eles mudam a lógica do seu escritório.</span>
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
