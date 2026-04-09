import { motion } from "framer-motion";
import { ArrowDown, Clock, AlertTriangle } from "lucide-react";
import CtaButton from "./CtaButton";
import heroMacaw from "@/assets/hero-macaw.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-[160px] opacity-20" style={{ background: "hsl(var(--primary))" }} />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full blur-[140px] opacity-10" style={{ background: "hsl(var(--secondary))" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Richard: Awareness Level 4 — "Por que nós, por que agora" */}
            {/* Loss aversion headline — cost of inaction */}
            <h1 className="font-heading text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.08] tracking-tight text-foreground">
              Cada Hora Manual é{" "}
              <br className="hidden md:block" />
              Uma Hora{" "}
              <span className="text-gradient">Perdida</span>
            </h1>

            {/* Richard: Contextualizar dor — não vender feature, vender custo da inação */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Enquanto você revisa 200 páginas manualmente, a IA jurídica brasileira faz em <span className="text-foreground font-medium">3 minutos</span> — com precisão validada por magistrados federais.
            </p>

            {/* Richard: Anchoring numérica — números grandes ao lado de esforço mínimo */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "hsl(var(--destructive) / 0.08)" }}>
                <AlertTriangle className="w-3.5 h-3.5 text-destructive" />
                <span className="text-destructive/80">Sem IA: ~8h por processo</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "hsl(var(--primary) / 0.08)" }}>
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span className="text-primary">Com LEGIS: 3 min</span>
              </div>
            </div>

            <CtaButton>TESTAR COM MEU PROCESSO REAL</CtaButton>

            {/* Richard: North Star Metric = largest. Round numbers. */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-12 pt-2"
            >
              <div>
                <p className="font-heading text-4xl font-bold text-primary">98%</p>
                <p className="text-xs text-muted-foreground mt-0.5">Precisão</p>
              </div>
              <div className="w-px h-8" style={{ background: "hsl(var(--border) / 0.4)" }} />
              <div>
                <p className="font-heading text-4xl font-bold text-foreground">+50</p>
                <p className="text-xs text-muted-foreground mt-0.5">Juristas</p>
              </div>
              <div className="w-px h-8" style={{ background: "hsl(var(--border) / 0.4)" }} />
              <div>
                <p className="font-heading text-4xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground mt-0.5">LGPD</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-[120px] opacity-15" style={{ background: "hsl(var(--primary))" }} />
              <img
                src={heroMacaw}
                alt="Arara-Azul cibernética — LegisBrasil.IA"
                className="relative w-full max-w-md lg:max-w-lg animate-float drop-shadow-2xl"
                width={896}
                height={1024}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] uppercase tracking-widest text-muted-foreground/60">Scroll</span>
          <ArrowDown className="w-4 h-4 text-muted-foreground/40 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
