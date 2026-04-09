import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CtaButton from "./CtaButton";

const specialists = [
  {
    name: "Super Analista",
    animal: "Águia",
    desc: "Examina processos na íntegra e extrai o núcleo decisório em segundos.",
    gradient: "from-amber-500/10 via-transparent to-transparent",
  },
  {
    name: "Análise Multimodal",
    animal: "Golfinho",
    desc: "Transcreve e indexa áudio e vídeo de audiências gravadas.",
    gradient: "from-cyan-500/10 via-transparent to-transparent",
  },
  {
    name: "Jurimetria",
    animal: "Robô",
    desc: "Identifica tendências de tribunais e prevê probabilidades de êxito.",
    gradient: "from-violet-500/10 via-transparent to-transparent",
  },
  {
    name: "Estrategista",
    animal: "Pantera",
    desc: "Sugere caminhos jurídicos baseado em dados e jurimetria.",
    gradient: "from-emerald-500/10 via-transparent to-transparent",
  },
  {
    name: "Detector",
    animal: "Fila Brasileiro",
    desc: "Encontra contradições e falácias em depoimentos e documentos.",
    gradient: "from-red-500/10 via-transparent to-transparent",
  },
  {
    name: "Jurisprudência",
    animal: "Arara Azul",
    desc: "Localiza precedentes com links auditáveis e fontes oficiais.",
    gradient: "from-blue-500/10 via-transparent to-transparent",
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
  const items = Array.from({ length: count }, (_, i) => specialists[(idx + i) % specialists.length]);

  return (
    <section id="especialistas" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Resend-inspired centered header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="badge-glow mb-5 mx-auto w-fit">✦ Especialistas</div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-4">
            Ative sua Equipe de{" "}
            <span className="text-gradient">Especialistas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada especialista resolve uma etapa diferente do ciclo jurídico.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {items.map((s) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border/30 overflow-hidden group"
                style={{ background: "hsl(var(--card) / 0.5)" }}
              >
                <div className={`h-28 bg-gradient-to-br ${s.gradient} flex items-end px-6 pb-4`}>
                  <span className="font-heading text-6xl font-bold text-foreground/[0.06] group-hover:text-foreground/[0.12] transition-colors leading-none">
                    {s.animal.charAt(0)}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-[11px] uppercase tracking-widest text-primary font-medium">{s.name}</span>
                  <h3 className="font-heading text-lg font-bold text-foreground">{s.animal}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation — minimal like Resend */}
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
          className="flex justify-center mt-12"
        >
          <CtaButton>CONTRATAR MINHA EQUIPE</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
