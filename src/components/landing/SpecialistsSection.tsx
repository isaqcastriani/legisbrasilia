import { motion } from "framer-motion";
import CtaButton from "./CtaButton";

/*
 * Richard: Progressive Disclosure — mostrar 6 especialistas de uma vez sem carousel.
 * Richard: "E daí?" — cada especialista tem um resultado concreto, não descrição genérica.
 * Richard: Hierarchy — nome do especialista grande, resultado em destaque.
 * Richard: Estranheza humana — emojis de animais, personalidade, não template genérico.
 */

const specialists = [
  {
    emoji: "🦅",
    name: "Águia",
    role: "Super Analista",
    result: "200 páginas → 3 min",
    desc: "Extrai o núcleo decisório de qualquer processo na íntegra.",
  },
  {
    emoji: "🐬",
    name: "Golfinho",
    role: "Análise Multimodal",
    result: "4h de audiência → resumo",
    desc: "Transcreve e indexa áudio e vídeo de audiências gravadas.",
  },
  {
    emoji: "🤖",
    name: "Oráculo",
    role: "Jurimetria",
    result: "Chance de êxito: 73%",
    desc: "Prevê probabilidades baseado em milhares de decisões reais.",
  },
  {
    emoji: "🐆",
    name: "Pantera",
    role: "Estrategista",
    result: "3 teses sugeridas",
    desc: "Sugere caminhos jurídicos ranqueados por probabilidade.",
  },
  {
    emoji: "🐕",
    name: "Fila",
    role: "Detector de Falhas",
    result: "2 contradições encontradas",
    desc: "Encontra contradições e falácias em depoimentos.",
  },
  {
    emoji: "🦜",
    name: "Arara",
    role: "Jurisprudência",
    result: "12 precedentes com link",
    desc: "Localiza precedentes auditáveis de fontes oficiais.",
  },
];

const SpecialistsSection = () => {
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

        {/* Richard: All visible, no carousel — reduce friction, scan in Z-pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialists.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -2 }}
              className="group rounded-2xl border border-border/20 hover:border-primary/20 overflow-hidden transition-all"
              style={{ background: "hsl(var(--card) / 0.3)" }}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{s.emoji}</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium">{s.role}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{s.name}</h3>
                
                {/* Richard: Insight > Dado — resultado concreto, não feature */}
                <div className="px-3 py-2 rounded-lg text-sm font-medium text-primary" style={{ background: "hsl(var(--primary) / 0.06)" }}>
                  ⚡ {s.result}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
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
