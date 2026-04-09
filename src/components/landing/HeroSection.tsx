import { motion } from "framer-motion";
import { Shield, ArrowDown } from "lucide-react";
import CtaButton from "./CtaButton";
import heroMacaw from "@/assets/hero-macaw.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-40" style={{ background: "hsl(var(--primary))" }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: "hsl(var(--secondary))" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="badge-glow"
            >
              <Shield className="w-4 h-4" />
              <span>Primeira IA jurídica 100% Brasileira</span>
            </motion.div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] text-foreground">
              A Única IA Jurídica 100% Brasileira e{" "}
              <span className="text-gradient">Validada por Especialistas</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Dominamos todo o ciclo jurídico, da transcrição da prova à peça final, através da única inteligência artificial treinada exclusivamente com o raciocínio dos tribunais brasileiros.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <CtaButton>ENTRAR PARA A NOVA ERA JURÍDICA</CtaButton>
            </div>

            {/* Stats counter row like Agência Get */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 pt-4"
            >
              {[
                { value: "+50", label: "Juristas Validadores" },
                { value: "98%", label: "Precisão Certificada" },
                { value: "100%", label: "LGPD Compliance" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-heading text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Macaw */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-[100px] opacity-20" style={{ background: "hsl(var(--primary))" }} />
              <img
                src={heroMacaw}
                alt="Arara-Azul cibernética - LegisBrasil.IA"
                className="relative w-full max-w-lg animate-float drop-shadow-2xl"
                width={896}
                height={1024}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator like Alpha House */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Continue descendo</span>
          <ArrowDown className="w-4 h-4 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
