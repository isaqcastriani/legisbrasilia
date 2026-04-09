import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import heroAraraVideo from "@/assets/hero-arara-video.mp4.asset.json";

const HeroSection = () => {
  return (
    <section className="relative pt-[56px]">
      {/* Hero content — Humble split layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 md:pt-24 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-0">
          {/* LEFT — Headline with vertical accent line (Humble pattern) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-5 md:gap-7"
          >
            {/* Thin vertical accent line */}
            <div
              className="hidden lg:block w-[2px] flex-shrink-0 rounded-full mt-2"
              style={{
                background: "hsl(var(--primary) / 0.4)",
                height: "180px",
              }}
            />
            <h1 className="font-heading text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.06] tracking-[-0.03em] text-foreground">
              A Única IA Jurídica
              <br />
              100% Brasileira e
              <br />
              Validada por Especialistas
              <span className="text-primary">.</span>
            </h1>
          </motion.div>

          {/* RIGHT — Problem statement + solution (Humble pattern) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start lg:justify-end"
          >
            <div className="lg:max-w-[380px] lg:border-l lg:pl-8" style={{ borderColor: "hsl(var(--border) / 0.15)" }}>
              <p className="font-heading text-[15px] md:text-base font-semibold text-foreground leading-snug mb-3">
                Ferramentas genéricas inventam leis que não existem.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary font-medium">Dominamos todo o ciclo jurídico</span>
                , da transcrição da prova à peça final, através da única inteligência artificial treinada exclusivamente com o raciocínio e a burocracia dos tribunais brasileiros.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Arara illustration — centered (Humble character pattern) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center mt-6 lg:-mt-4"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full blur-[100px] opacity-10 pointer-events-none"
            style={{ background: "hsl(var(--secondary))" }}
          />
          <video
            src={heroAraraVideo.url}
            autoPlay
            loop
            muted
            playsInline
            className="relative w-[200px] md:w-[280px] lg:w-[340px] drop-shadow-2xl"
            style={{ mixBlendMode: "lighten" }}
          />
        </motion.div>

        {/* CTA — centered pill (Humble pattern) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex justify-center -mt-6"
        >
          <CtaButton>ENTRAR PARA A NOVA ERA JURÍDICA</CtaButton>
        </motion.div>

        {/* Product mockup — browser frame (Humble pattern) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14 md:mt-20 mx-auto"
        >
          <div
            className="relative rounded-xl overflow-hidden border"
            style={{
              borderColor: "hsl(var(--border) / 0.2)",
              background: "hsl(var(--card) / 0.6)",
              boxShadow: "0 30px 80px -20px hsl(var(--background) / 0.9)",
            }}
          >
            {/* Browser chrome — Humble style tab bar */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 border-b"
              style={{ borderColor: "hsl(var(--border) / 0.1)", background: "hsl(var(--muted) / 0.3)" }}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--destructive) / 0.5)" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--primary) / 0.4)" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--secondary) / 0.4)" }} />
              <div className="ml-3 flex items-center gap-3 text-[11px] text-muted-foreground/50 font-mono">
                <span className="px-3 py-1 rounded-md" style={{ background: "hsl(var(--card) / 0.5)" }}>LegisBrasil.IA</span>
                <span>Análise de Processo</span>
                <span>Jurimetria</span>
              </div>
            </div>

            {/* Product content area */}
            <div className="flex min-h-[280px] md:min-h-[380px]">
              {/* Sidebar */}
              <div
                className="hidden sm:flex flex-col gap-3 px-3 py-5 border-r"
                style={{ borderColor: "hsl(var(--border) / 0.08)", width: "52px" }}
              >
                {["⚖️", "📄", "🔍", "🤖", "📊"].map((icon, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${i === 0 ? "ring-1 ring-primary/20" : ""}`}
                    style={{ background: i === 0 ? "hsl(var(--primary) / 0.08)" : "transparent" }}
                  >
                    {icon}
                  </div>
                ))}
              </div>

              {/* Main panel */}
              <div className="flex-1 p-5 md:p-6 space-y-3">
                <div
                  className="rounded-lg p-4 max-w-sm"
                  style={{ background: "hsl(var(--primary) / 0.04)", border: "1px solid hsl(var(--primary) / 0.08)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold" style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}>AI</div>
                    <span className="text-[11px] font-semibold text-primary font-mono">Assistente Jurídico</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Processo analisado. Encontrei <span className="text-foreground font-medium">3 precedentes favoráveis</span> no STJ e <span className="text-foreground font-medium">2 teses aplicáveis</span>.
                  </p>
                </div>

                <div
                  className="rounded-lg p-3 max-w-xs"
                  style={{ background: "hsl(var(--muted) / 0.2)", border: "1px solid hsl(var(--border) / 0.1)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs">📋</span>
                    <span className="text-[11px] font-medium text-foreground">Petição Gerada</span>
                    <span className="ml-auto text-[10px] text-muted-foreground/50">Agora</span>
                  </div>
                </div>

                <div
                  className="flex items-center gap-2 rounded-lg px-4 py-2.5"
                  style={{ background: "hsl(var(--muted) / 0.15)", border: "1px solid hsl(var(--border) / 0.08)" }}
                >
                  <span className="text-xs text-muted-foreground/40 flex-1">Analise o recurso especial...</span>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "hsl(var(--primary))" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary-foreground">
                      <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right sidebar */}
              <div className="hidden md:block p-5 border-l" style={{ borderColor: "hsl(var(--border) / 0.08)", width: "200px" }}>
                <p className="text-[10px] font-semibold text-muted-foreground/50 uppercase tracking-wider mb-3 font-mono">Especialistas</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Analista", emoji: "🦅" },
                    { label: "Jurimetria", emoji: "🤖" },
                    { label: "Estratégia", emoji: "🐆" },
                    { label: "Busca", emoji: "🦜" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-lg p-2 text-center"
                      style={{ background: "hsl(var(--muted) / 0.2)", border: "1px solid hsl(var(--border) / 0.06)" }}
                    >
                      <span className="text-base block mb-0.5">{s.emoji}</span>
                      <span className="text-[9px] font-medium text-muted-foreground/60">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div
            className="absolute -bottom-1 left-0 right-0 h-24 pointer-events-none"
            style={{ background: `linear-gradient(180deg, transparent 0%, hsl(var(--background)) 100%)` }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
