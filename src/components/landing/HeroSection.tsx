import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import CtaButton from "./CtaButton";
import heroMacaw from "@/assets/hero-macaw.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl" style={{ background: "hsl(68 89% 45% / 0.07)" }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl" style={{ background: "hsl(178 95% 32% / 0.07)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "hsl(213 40% 18% / 0.3)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="badge-glow">
            <Shield className="w-4 h-4" />
            <span>Primeira IA jurídica 100% Brasileira</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            A Única IA Jurídica 100% Brasileira e{" "}
            <span className="text-gradient">Validada por Especialistas</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Dominamos todo o ciclo jurídico, da transcrição da prova à peça final, através da única inteligência artificial treinada exclusivamente com o raciocínio e a burocracia dos tribunais brasileiros.
          </p>

          <CtaButton>ENTRAR PARA A NOVA ERA JURÍDICA</CtaButton>
        </motion.div>

        {/* Right - Macaw */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: "hsl(68 89% 45% / 0.1)" }} />
            <img
              src={heroMacaw}
              alt="Arara-Azul cibernética - LegisBrasil.IA"
              className="relative w-full max-w-lg animate-float"
              width={896}
              height={1024}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
