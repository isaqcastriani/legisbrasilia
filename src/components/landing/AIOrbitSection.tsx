import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import logoLegis from "@/assets/logo-legis.png";
import gpt5 from "@/assets/ai-logos/gpt5.png";
import claude from "@/assets/ai-logos/claude.png";
import gemini from "@/assets/ai-logos/gemini.png";
import perplexity from "@/assets/ai-logos/perplexity.png";
import mistral from "@/assets/ai-logos/mistral.png";
import deepseek from "@/assets/ai-logos/deepseek.png";
import llama from "@/assets/ai-logos/llama.png";
import sabia from "@/assets/ai-logos/sabia.png";

const aiModels = [
  { name: "GPT-5", logo: gpt5, size: "sm" },
  { name: "Claude 4", logo: claude, size: "md" },
  { name: "Gemini 3", logo: gemini, size: "sm" },
  { name: "Perplexity", logo: perplexity, size: "lg" },
  { name: "Sabiá-2", logo: sabia, size: "md" },
  { name: "Mistral", logo: mistral, size: "md" },
  { name: "DeepSeek", logo: deepseek, size: "sm" },
  { name: "Llama 4", logo: llama, size: "lg" },
] as const;

const orbitRadius = 255;
const iconSizeMap = {
  sm: "w-16 h-16 md:w-20 md:h-20",
  md: "w-20 h-20 md:w-24 md:h-24",
  lg: "w-24 h-24 md:w-32 md:h-32",
} as const;
const logoSizeMap = {
  sm: "w-8 h-8 md:w-10 md:h-10",
  md: "w-10 h-10 md:w-12 md:h-12",
  lg: "w-12 h-12 md:w-16 md:h-16",
} as const;

const AIOrbitSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold tracking-widest uppercase text-primary mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Integrações
            </span>

            <h2 className="font-heading text-[1.9rem] md:text-[2.8rem] lg:text-[4rem] font-bold text-foreground leading-[0.98] mb-5 max-w-[11ch]">
              Curadoria de Inteligência Global
            </h2>

            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-xl mb-4">
              Você não precisa de 10 assinaturas separadas.{