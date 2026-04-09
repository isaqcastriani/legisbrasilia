import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import imgArara from "@/assets/macaw.png";

const HeroSection = () => {
  return (
    <section className="relative pt-[60px] dot-grid">
      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 0%, hsl(var(--primary) / 0.04) 0%, transparent 60%),
                        radial-gradient(ellipse 40% 40% at 80% 20%, hsl(var(--secondary) / 0.03) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Hero content — centered layout inspired by Mitra/AlphaHouse */}
        <div className="pt-20 md:pt-28 lg:pt-36 pb-12 text-center">
          {/* Badge pill — AlphaHouse style */}

          {/* Headline — large centered, Cernel/Resend inspired */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[2.25rem] md:text-[3.25rem] lg:text-[4rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-foreground max-w-4xl mx-auto mb-6"
          >
            A Única IA Jurídica 100%
            <br className="hidden sm:block" />
            {" "}Brasileira e{" "}
            <span className="text-gradient">Validada por Especialistas</span>
          </motion.h1>

          {/* Subtext — Console/Mitra inspired */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          >
            <span className="text-primary font-medium">Dominamos todo o ciclo jurídico</span>, da transcrição da prova à peça final, através da única inteligência artificial treinada exclusivamente com o raciocínio dos tribunais brasileiros.
          </motion.p>

          {/* CTA — centered pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-center mb-16"
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-[13px] tracking-wide transition-all duration-200 cta-3d hover:translate-y-[-2px] active:translate-y-[1px]"
            >
              ENTRAR PARA A NOVA ERA JURÍDICA
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Bento hero grid — Ease Health inspired */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-8"
        >
          {/* Left card — Problem statement with 3D depth */}
          <div
            className="relative rounded-2xl p-7 md:p-9 flex flex-col justify-between min-h-[300px] overflow-hidden border border-white/[0.06]"
            style={{
              background: "linear-gradient(145deg, hsl(213 50% 18%) 0%, hsl(213 55% 12%) 100%)",
              boxShadow: "0 20px 60px -15px hsl(213 60% 6% / 0.8), inset 0 1px 0 hsl(0 0% 100% / 0.04), 0 1px 3px hsl(213 60% 6% / 0.4)",
            }}
          >
            {/* Subtle gradient orb */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none opacity-30"
              style={{ background: "radial-gradient(circle, hsl(var(--secondary) / 0.4) 0%, transparent 70%)" }}
            />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full pointer-events-none opacity-20"
              style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)" }}
            />
            <div className="relative z-10">
              <p className="font-heading text-lg md:text-xl font-bold text-foreground leading-snug mb-3">
                Ferramentas genéricas inventam leis que não existem.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary font-medium">Dominamos todo o ciclo jurídico</span>, da transcrição da prova à peça final.
              </p>
            </div>
            <div className="relative z-10 mt-6">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Solicitar Acesso <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right card — Product mockup with 3D depth */}
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.06]"
            style={{
              background: "linear-gradient(160deg, hsl(220 45% 16%) 0%, hsl(210 50% 10%) 100%)",
              boxShadow: "0 20px 60px -15px hsl(213 60% 6% / 0.8), inset 0 1px 0 hsl(0 0% 100% / 0.04), 0 1px 3px hsl(213 60% 6% / 0.4)",
            }}
          >
            {/* Subtle gradient orb */}
            <div className="absolute top-10 right-10 w-40 h-40 rounded-full pointer-events-none opacity-20"
              style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)" }}
            />
            {/* Browser chrome */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 border-b relative z-10"
              style={{ borderColor: "hsl(0 0% 100% / 0.04)", background: "hsl(0 0% 100% / 0.02)" }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--destructive) / 0.5)" }} />
              <div className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--primary) / 0.45)" }} />
              <div className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--secondary) / 0.45)" }} />
              <span className="ml-2 text-[10px] text-muted-foreground/40 font-mono">LegisBrasil.IA</span>
            </div>
            {/* Content */}
            <div className="p-5 space-y-3 relative z-10">
              <div
                className="rounded-lg p-3.5"
                style={{ background: "hsl(var(--primary) / 0.06)", border: "1px solid hsl(var(--primary) / 0.1)" }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center text-[6px] font-bold" style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}>AI</div>
                  <span className="text-[10px] font-semibold text-primary font-mono">Assistente Jurídico</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Encontrei <span className="text-foreground font-medium">3 precedentes favoráveis</span> no STJ e <span className="text-foreground font-medium">2 teses aplicáveis</span>.
                </p>
              </div>
              <div
                className="rounded-lg p-2.5 flex items-center gap-2"
                style={{ background: "hsl(0 0% 100% / 0.03)", border: "1px solid hsl(0 0% 100% / 0.04)" }}
              >
                <span className="text-[10px]">📋</span>
                <span className="text-[10px] font-medium text-foreground">Petição Gerada</span>
                <span className="ml-auto text-[9px] text-muted-foreground/40">Agora</span>
              </div>
              <div
                className="flex items-center gap-2 rounded-lg px-3 py-2"
                style={{ background: "hsl(0 0% 100% / 0.02)", border: "1px solid hsl(0 0% 100% / 0.04)" }}
              >
                <span className="text-[10px] text-muted-foreground/30 flex-1">Analise o recurso...</span>
                <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: "hsl(var(--primary))" }}>
                  <ArrowRight className="w-3 h-3 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: `linear-gradient(180deg, transparent 0%, hsl(var(--background)) 100%)` }}
      />
    </section>
  );
};

export default HeroSection;
