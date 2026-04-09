import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Scale,
  BookOpen,
  Landmark,
  FileText,
  Gavel,
  Shield,
  Search,
  Database,
  Globe,
  ScrollText,
  Building2,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

/* ── integration data ── */
const integrations = [
  { name: "STF", icon: Landmark, color: "hsl(var(--primary))" },
  { name: "STJ", icon: Scale, color: "hsl(var(--secondary))" },
  { name: "TST", icon: Gavel, color: "hsl(40 85% 55%)" },
  { name: "Diário Oficial", icon: ScrollText, color: "hsl(var(--primary))" },
  { name: "JusBrasil", icon: Search, color: "hsl(200 80% 55%)" },
  { name: "PJe", icon: FileText, color: "hsl(var(--secondary))" },
  { name: "Legislação", icon: BookOpen, color: "hsl(280 60% 60%)" },
  { name: "TJSP", icon: Building2, color: "hsl(var(--primary))" },
  { name: "Doutrina", icon: Database, color: "hsl(340 65% 55%)" },
  { name: "TJRJ", icon: Building2, color: "hsl(var(--secondary))" },
  { name: "Planalto", icon: Globe, color: "hsl(140 55% 45%)" },
  { name: "OAB", icon: BriefcaseBusiness, color: "hsl(25 80% 55%)" },
  { name: "CNJ", icon: Shield, color: "hsl(200 70% 50%)" },
  { name: "Súmulas", icon: ScrollText, color: "hsl(var(--primary))" },
];

const statusMessages = [
  { icon: Landmark, text: "Conectado ao acervo do STF" },
  { icon: Scale, text: "Indexando jurisprudência do STJ" },
  { icon: FileText, text: "Sincronizando petições do PJe" },
  { icon: Search, text: "Buscando precedentes no JusBrasil" },
  { icon: ScrollText, text: "Importando Diário Oficial" },
  { icon: Shield, text: "Verificando normas do CNJ" },
  { icon: BookOpen, text: "Analisando legislação vigente" },
  { icon: Gavel, text: "Conectado ao TST" },
];

/* ── bubble grid positions (scattered layout) ── */
const bubblePositions = [
  // col 1
  { x: "0%", y: "0%" },
  { x: "5%", y: "22%" },
  { x: "2%", y: "44%" },
  { x: "8%", y: "66%" },
  { x: "0%", y: "88%" },
  // col 2
  { x: "36%", y: "8%" },
  { x: "32%", y: "30%" },
  { x: "38%", y: "52%" },
  { x: "34%", y: "74%" },
  // col 3
  { x: "68%", y: "2%" },
  { x: "64%", y: "24%" },
  { x: "70%", y: "46%" },
  { x: "66%", y: "68%" },
  { x: "72%", y: "90%" },
];

const IntegrationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [msgIndex, setMsgIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax upward movement for the bubble grid
  const bubblesY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  // Rotate status messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % statusMessages.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const currentMsg = statusMessages[msgIndex];
  const StatusIcon = currentMsg.icon;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Dot grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-12 lg:gap-8 items-start min-h-[600px] md:min-h-[700px]">
          {/* ── Left: sticky text ── */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="section-label">Integrações</span>
              </div>

              <h2 className="font-heading text-[2rem] md:text-[3rem] lg:text-[3.8rem] font-bold text-foreground leading-[0.94] mb-6">
                Conectado às
                <br />
                fontes que
                <br />
                importam.
              </h2>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-[26ch] mb-8">
                Tribunais, legislação, jurisprudência, diários oficiais e
                doutrina — tudo indexado, verificado e pronto para uso.
              </p>

              <a
                href="#contato"
                className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-primary/20 hover:border-primary/50"
                style={{
                  boxShadow: "0 0 20px -8px hsl(var(--primary) / 0.3)",
                }}
              >
                Comece agora
              </a>
            </motion.div>

            {/* Status bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 rounded-xl border border-border/40 px-5 py-4 overflow-hidden"
              style={{ background: "hsl(40 50% 95%)" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={msgIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-3"
                >
                  <StatusIcon className="w-4.5 h-4.5 shrink-0" style={{ color: "hsl(213 40% 25%)" }} />
                  <span className="text-sm font-medium" style={{ color: "hsl(213 40% 18%)" }}>
                    {currentMsg.text}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* ── Right: floating bubbles ── */}
          <motion.div
            className="relative h-[500px] md:h-[650px] lg:h-[700px]"
            style={{ y: bubblesY }}
          >
            {/* Connecting lines (subtle) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line x1="15" y1="12" x2="50" y2="20" stroke="white" strokeWidth="0.15" />
              <line x1="50" y1="20" x2="82" y2="14" stroke="white" strokeWidth="0.15" />
              <line x1="18" y1="34" x2="46" y2="42" stroke="white" strokeWidth="0.15" />
              <line x1="46" y1="42" x2="78" y2="36" stroke="white" strokeWidth="0.15" />
              <line x1="14" y1="56" x2="52" y2="64" stroke="white" strokeWidth="0.15" />
              <line x1="52" y1="64" x2="84" y2="58" stroke="white" strokeWidth="0.15" />
              <line x1="22" y1="78" x2="48" y2="86" stroke="white" strokeWidth="0.15" />
              <line x1="48" y1="86" x2="80" y2="80" stroke="white" strokeWidth="0.15" />
            </svg>

            {integrations.map((item, i) => {
              const pos = bubblePositions[i % bubblePositions.length];
              const Icon = item.icon;
              const size = i % 3 === 0 ? "w-[90px] h-[90px] md:w-[120px] md:h-[120px]" : "w-[72px] h-[72px] md:w-[100px] md:h-[100px]";
              const iconSize = i % 3 === 0 ? "w-8 h-8 md:w-10 md:h-10" : "w-6 h-6 md:w-8 md:h-8";

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: "easeOut",
                  }}
                  className={`absolute ${size} rounded-full border border-white/[0.07] flex items-center justify-center`}
                  style={{
                    left: pos.x,
                    top: pos.y,
                    background: "hsl(213 45% 10%)",
                    boxShadow: `inset 0 1px 0 hsl(0 0% 100% / 0.04), 0 8px 30px -12px hsl(213 60% 4% / 0.6)`,
                  }}
                >
                  {/* Subtle ring glow on some */}
                  {i % 3 === 0 && (
                    <div
                      className="absolute inset-0 rounded-full opacity-20"
                      style={{
                        border: `1.5px solid ${item.color}`,
                        boxShadow: `0 0 20px -4px ${item.color}`,
                      }}
                    />
                  )}
                  <Icon className={iconSize} style={{ color: item.color }} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
