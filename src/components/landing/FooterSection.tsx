import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo-white.png";
import footerBg from "@/assets/footer-cta-bg.jpg";

const FooterSection = () => {
  return (
    <>
      {/* CTA Section — title + button + full-width image */}
      <section className="relative">
        <div className="relative z-10 text-center pt-24 md:pt-32 pb-0 mb-[-80px] md:mb-[-120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto px-5"
          >
            <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.06] mb-4">
              Pronto para a nova era jurídica?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Solicite seu acesso ou agende uma demonstração de 15 minutos.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-[13px] tracking-wide cta-3d hover:translate-y-[-2px] active:translate-y-[1px] transition-all"
            >
              Solicitar Acesso
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Full-width cinematic image */}
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden">
          <img
            src={footerBg}
            alt=""
            className="w-full h-full object-cover object-center"
            loading="lazy"
            width={1920}
            height={800}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--background)) 0%, transparent 35%, transparent 70%, hsl(213 60% 5%) 100%)",
            }}
          />
        </div>
      </section>
      {/* Footer — 3D cards with depth */}
      <footer
        className="relative py-12 md:py-16"
        style={{ background: "hsl(213 60% 5%)" }}
      >
        <div className="max-w-[1240px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-4">
            {/* Left — Tagline card with 3D depth */}
            <div
              className="relative rounded-2xl p-8 md:p-10 border border-white/[0.06] overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, hsl(213 50% 14%) 0%, hsl(213 55% 9%) 100%)",
                boxShadow:
                  "0 20px 50px -15px hsl(213 60% 4% / 0.8), inset 0 1px 0 hsl(0 0% 100% / 0.04), 0 1px 3px hsl(213 60% 4% / 0.4)",
              }}
            >
              {/* Subtle gradient orbs */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full pointer-events-none opacity-15"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--secondary) / 0.3) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <img
                  src={logo}
                  alt="LegisBrasil.IA"
                  className="h-6 w-auto opacity-40 mb-6"
                />
                <p className="font-heading text-xl md:text-2xl font-bold text-foreground leading-tight max-w-md">
                  A Única IA Jurídica 100% Brasileira,{" "}
                  <span className="text-primary/50">
                    Validada por Especialistas
                  </span>
                  <span className="text-primary">.</span>
                </p>
              </div>
            </div>

            {/* Right — Links card with 3D depth */}
            <div
              className="relative rounded-2xl p-8 md:p-10 border border-white/[0.06] overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, hsl(213 48% 13%) 0%, hsl(213 52% 9%) 100%)",
                boxShadow:
                  "0 20px 50px -15px hsl(213 60% 4% / 0.8), inset 0 1px 0 hsl(0 0% 100% / 0.04), 0 1px 3px hsl(213 60% 4% / 0.4)",
              }}
            >
              <div
                className="absolute top-8 right-8 w-32 h-32 rounded-full pointer-events-none opacity-10"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[11px] font-semibold text-foreground mb-4 tracking-wide uppercase font-mono">
                    Plataforma
                  </p>
                  <div className="space-y-2.5">
                    <a
                      href="#especialistas"
                      className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Especialistas
                    </a>
                    <a
                      href="#diferenciais"
                      className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Diferenciais
                    </a>
                    <a
                      href="#validacao"
                      className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Validação
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-foreground mb-4 tracking-wide uppercase font-mono">
                    Legal
                  </p>
                  <div className="space-y-2.5">
                    <a
                      href="#"
                      className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Termos
                    </a>
                    <a
                      href="#"
                      className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Privacidade
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar with 3D */}
          <div
            className="mt-4 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border border-white/[0.04]"
            style={{
              background: "linear-gradient(180deg, hsl(213 48% 11%) 0%, hsl(213 52% 8%) 100%)",
              boxShadow: "0 8px 25px -10px hsl(213 60% 4% / 0.6), inset 0 1px 0 hsl(0 0% 100% / 0.02)",
            }}
          >
            <p className="text-[11px] text-muted-foreground/40">
              © 2026 LegisBrasil.IA · Todos os direitos reservados
            </p>
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground/40">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                LGPD Compliant
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground/40">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                CNJ Aprovado
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
