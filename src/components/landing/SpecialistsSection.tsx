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
    result: "200 páginas → 3 min",
    desc: "Examina processos na íntegra, identifica pontos jurídicos cruciais e extrai o núcleo decisório de grandes volumes documentais em segundos.",
  },
  {
    img: imgGolfinho,
    name: "Golfinho",
    role: "Análise Multimodal",
    result: "4h de audiência → resumo",
    desc: "Assiste a vídeos e ouve áudios de audiências gravadas, transcrevendo e indexando o conteúdo para transformar horas de gravação em estratégia.",
  },
  {
    img: imgRobo,
    name: "Robô",
    role: "Juiz Robô (Jurimetria)",
    result: "Chance de êxito: 73%",
    desc: "Aplica inteligência de dados para identificar tendências de tribunais e prever probabilidades de êxito com base no cenário nacional.",
  },
  {
    img: imgPantera,
    name: "Pantera",
    role: "Estrategista",
    result: "3 teses sugeridas",
    desc: "Sugere caminhos jurídicos ranqueados por probabilidade, baseado em dados reais e jurimetria avançada.",
  },
  {
    img: imgFila,
    name: "Fila Brasileiro",
    role: "Detector de Falhas",
    result: "2 contradições encontradas",
    desc: "Encontra contradições e falácias em depoimentos e documentos automaticamente.",
  },
  {
    img: imgArara,
    name: "Arara Azul",
    role: "Jurisprudência",
    result: "12 precedentes com link",
    desc: "Localiza precedentes com links auditáveis e fontes oficiais dos tribunais brasileiros.",
  },
];

const SpecialistsSection = () => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((p) => (p + 1) % specialists.length);
  const prev = () => setIdx((p) => (p - 1 + specialists.length) % specialists.length);

  // Show 3 on desktop, 2 on tablet, 1 on mobile
  const getVisible = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const count = getVisible();
  const items = Array.from({ length: count }, (_, i) => ({
    ...specialists[(idx + i) % specialists.length],
    originalIdx: (idx + i) % specialists.length,
  }));

  return (
    <section id="especialistas" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-4">
            6 Especialistas.{" "}
            <span className="text-gradient">Uma Equipe.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada um resolve uma etapa diferente — juntos, cobrem todo o ciclo jurídico.
          </p>
        </motion.div>

        {/* Carousel cards with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {items.map((s) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border/20 overflow-hidden group hover:border-primary/20 transition-all"
                style={{ background: "hsl(var(--card) / 0.5)" }}
              >
                {/* Image area */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <div className="badge-glow w-fit text-xs">{s.role}</div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{s.name}</h3>

                  {/* Result highlight */}
                  <div className="px-3 py-2 rounded-lg text-sm font-medium text-primary" style={{ background: "hsl(var(--primary) / 0.06)" }}>
                    ⚡ {s.result}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5">
            {specialists.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "bg-primary w-6" : "bg-border w-1.5"}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >
          <CtaButton>ATIVAR MINHA EQUIPE</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
