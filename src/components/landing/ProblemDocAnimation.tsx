import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { AlertTriangle, FileText, Search } from "lucide-react";

const docLines = [
  { text: "EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO", type: "heading" },
  { text: "DA 3ª VARA CÍVEL DA COMARCA DE SÃO PAULO/SP", type: "heading" },
  { text: "", type: "spacer" },
  { text: "AÇÃO DE INDENIZAÇÃO POR DANOS MORAIS", type: "subheading" },
  { text: "", type: "spacer" },
  { text: "Conforme disposto no Art. 927 do Código Civil,", type: "body" },
  { text: "combinado com a Súmula 387 do STJ, que", type: "body" },
  { text: 'estabelece que "É lícita a cumulação das', type: "body" },
  { text: 'indenizações de dano estético e dano moral",', type: "body" },
  { text: "requer-se a condenação do réu ao pagamento", type: "body" },
  { text: "de indenização no valor de R$ 50.000,00.", type: "body" },
  { text: "", type: "spacer" },
  { text: "Fundamentação: Lei nº 8.078/1990, Art. 14,", type: "body" },
  { text: "§4º — responsabilidade objetiva do fornecedor.", type: "body" },
];

const errorLine = 7; // "Súmula 387 do STJ" line
const errorText = "Súmula 387 do STJ";

const ProblemDocAnimation = () => {
  const scanControls = useAnimation();
  const errorControls = useAnimation();
  const badgeControls = useAnimation();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const sequence = async () => {
      // Wait for typing to finish
      await new Promise((r) => setTimeout(r, 3200));

      // Scan line sweeps down
      await scanControls.start({
        top: ["0%", "100%"],
        opacity: [0, 1, 1, 0],
        transition: { duration: 1.8, ease: "easeInOut" },
      });

      // Error highlight appears
      await errorControls.start({
        opacity: 1,
        scaleX: 1,
        transition: { duration: 0.35, ease: "easeOut" },
      });

      // Badge pops in
      await badgeControls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 20 },
      });
    };

    sequence();
  }, [scanControls, errorControls, badgeControls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="w-full"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative rounded-[1.5rem] border border-white/[0.07] overflow-hidden"
        style={{
          background: "hsl(213 50% 6%)",
          boxShadow:
            "0 40px 80px -30px hsl(213 60% 3% / 0.9), 0 0 60px -20px hsl(var(--primary) / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.04)",
          transform: "perspective(1200px) rotateY(-2deg) rotateX(2deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]"
          style={{ background: "hsl(213 50% 8%)" }}
        >
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(0 70% 55%)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(40 80% 55%)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(130 50% 45%)" }} />
          </div>
          <div className="flex items-center gap-1.5 ml-3">
            <FileText className="w-3.5 h-3.5 text-muted-foreground/50" />
            <span className="text-[10px] text-muted-foreground/50 font-mono">petição_inicial.docx</span>
          </div>
        </div>

        {/* Document body */}
        <div className="relative px-6 py-5 md:px-8 md:py-6 min-h-[320px] md:min-h-[360px]">
          {/* Scan line */}
          <motion.div
            animate={scanControls}
            initial={{ top: "0%", opacity: 0 }}
            className="absolute left-0 right-0 h-[2px] z-20 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--secondary)), transparent)",
              boxShadow: "0 0 20px 4px hsl(var(--primary) / 0.4)",
            }}
          />

          {/* Lines */}
          <div className="space-y-0 font-mono text-[9px] md:text-[11px] leading-[1.7]">
            {docLines.map((line, i) => {
              if (line.type === "spacer")
                return <div key={i} className="h-3" />;

              const isError = i === errorLine;
              const delay = i * 0.18 + 0.3;

              return (
                <div key={i} className="relative">
                  {/* Error highlight bg */}
                  {isError && (
                    <motion.div
                      animate={errorControls}
                      initial={{ opacity: 0, scaleX: 0 }}
                      className="absolute -inset-x-1 -inset-y-0.5 rounded origin-left z-0"
                      style={{ background: "hsl(0 80% 50% / 0.15)", border: "1px solid hsl(0 80% 50% / 0.3)" }}
                    />
                  )}

                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.05, delay }}
                    className={`relative z-10 ${
                      line.type === "heading"
                        ? "text-foreground/90 font-semibold tracking-wide"
                        : line.type === "subheading"
                        ? "text-primary/80 font-medium"
                        : "text-muted-foreground/70"
                    } ${isError ? "text-destructive/90" : ""}`}
                  >
                    {line.text}
                  </motion.span>
                </div>
              );
            })}
          </div>

          {/* Typing cursor */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: 5, repeatType: "reverse", delay: 0.2 }}
            className="inline-block w-[2px] h-3 md:h-4 ml-0.5 mt-1"
            style={{ background: "hsl(var(--primary))" }}
          />

          {/* Error badge */}
          <motion.div
            animate={badgeControls}
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            className="absolute right-4 md:right-6 top-14 md:top-16 z-30"
          >
            <div
              className="flex items-center gap-2.5 rounded-xl px-4 py-2.5 border"
              style={{
                background: "hsl(0 50% 12%)",
                borderColor: "hsl(0 70% 40% / 0.5)",
                boxShadow: "0 12px 40px -10px hsl(0 80% 30% / 0.5), 0 0 30px -5px hsl(0 80% 50% / 0.2)",
              }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: "hsl(0 70% 45% / 0.25)" }}>
                <AlertTriangle className="w-4 h-4" style={{ color: "hsl(0 80% 60%)" }} />
              </div>
              <div>
                <span className="block text-[10px] md:text-[11px] font-semibold" style={{ color: "hsl(0 80% 70%)" }}>
                  Erro detectado
                </span>
                <span className="block text-[8px] md:text-[9px] text-muted-foreground/60">
                  {errorText} — não existe
                </span>
              </div>
            </div>
          </motion.div>

          {/* Scan badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.0, duration: 0.4 }}
            className="absolute left-4 md:left-6 bottom-4 md:bottom-6 z-30"
          >
            <div
              className="flex items-center gap-2 rounded-lg px-3 py-2 border"
              style={{
                background: "hsl(var(--primary) / 0.08)",
                borderColor: "hsl(var(--primary) / 0.2)",
              }}
            >
              <Search className="w-3.5 h-3.5 text-primary/70" />
              <span className="text-[9px] md:text-[10px] font-mono text-primary/70">
                Verificando fontes jurídicas...
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProblemDocAnimation;
