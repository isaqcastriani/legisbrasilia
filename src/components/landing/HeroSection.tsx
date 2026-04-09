import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
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
            <h1 className="font-heading text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.08] tracking-tight text-foreground">
              A Única IA Jurídica{" "}
              <br className="hidden md:block" />
              100% Brasileira e{" "}
              <span className="text-gradient">Validada por Especialistas</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Dominamos todo o ciclo jurídico, da transcrição da prova à peça final, através da única inteligência artificial treinada exclusivamente com o raciocínio e a burocracia dos tribunais brasileiros.
            </p>

            <CtaButton>ENTRAR PARA A NOVA ERA JURÍDICA</CtaButton>
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
