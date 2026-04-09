import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bgContactWide from "@/assets/bg-contact-wide.jpg";

const professions = [
  "Advogado(a)",
  "Magistrado(a)",
  "Procurador(a)",
  "Defensor(a) Público(a)",
  "Estudante de Direito",
  "Outro",
];

/* Animated counter hook */
const useCounter = (end: number, duration = 2000, suffix = "") => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return { count, ref, suffix };
};

/* Orbital speed line SVG */
const OrbitalLine = ({ size = 80, delay = 0 }: { size?: number; delay?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" className="absolute opacity-20">
    <circle cx="40" cy="40" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.4">
      <animateTransform attributeName="transform" type="rotate" values="0 40 40;360 40 40" dur="12s" begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
    <circle cx="40" cy="40" r="20" fill="none" stroke="hsl(var(--secondary))" strokeWidth="0.5" strokeDasharray="3 8" opacity="0.3">
      <animateTransform attributeName="transform" type="rotate" values="360 40 40;0 40 40" dur="8s" begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
    {/* Orbiting dot */}
    <circle cx="40" cy="10" r="2.5" fill="hsl(var(--primary))" opacity="0.6">
      <animateTransform attributeName="transform" type="rotate" values="0 40 40;360 40 40" dur="4s" begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
    <circle cx="40" cy="10" r="5" fill="hsl(var(--primary))" opacity="0.15">
      <animateTransform attributeName="transform" type="rotate" values="0 40 40;360 40 40" dur="4s" begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
  </svg>
);
const metrics = [
  { value: 98, suffix: "%", label: "Acurácia", desc: "em conformidade jurídica" },
  { value: 50, suffix: "+", label: "Juristas", desc: "validaram a plataforma" },
  { value: 10, suffix: "x", label: "Mais rápido", desc: "que pesquisa manual" },
  { value: 100, suffix: "%", label: "Brasileiro", desc: "treinamento nacional" },
];

/* Individual metric card component (hooks-safe) */
const MetricCard = ({ value, suffix, label, desc, delay }: { value: number; suffix: string; label: string; desc: string; delay: number }) => {
  const { count, ref } = useCounter(value, 2000);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="relative w-20 h-20 mb-3 flex items-center justify-center">
        <OrbitalLine size={80} delay={delay * 8} />
        <div ref={ref} className="relative z-10">
          <span className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            {count}{suffix}
          </span>
        </div>
      </div>
      <p className="text-xs font-semibold text-primary tracking-wide uppercase font-mono mb-0.5">
        {label}
      </p>
      <p className="text-[11px] text-muted-foreground">{desc}</p>
    </motion.div>
  );
};

const ContactFormSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    terms: false,
  });
  const set = (k: string, v: string | boolean) =>
    setForm((p) => ({ ...p, [k]: v }));

  return (
    <section id="contato" className="relative">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgContactWide}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={800}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background) / 0.7) 30%, hsl(var(--background) / 0.85) 60%, hsl(var(--background)) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, hsl(var(--background) / 0.9) 0%, transparent 40%, transparent 60%, hsl(var(--background) / 0.9) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 py-14 md:py-20">
        {/* Animated metrics row — Antimetal inspired */}
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Profissionais que usam a LegisBrasil.IA{" "}
              <span className="text-foreground font-semibold">diagnosticam mais rápido</span>{" "}
              e dedicam menos tempo corrigindo erros.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((m, i) => (
              <MetricCard key={i} value={m.value} suffix={m.suffix} label={m.label} desc={m.desc} delay={i * 0.1} />
            ))}
          </div>
        </div>

        {/* Form + CTA card row */}
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5"
          >
            {/* Left — CTA card with primary bg */}
            <div
              className="relative rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[380px] overflow-hidden"
              style={{ background: "hsl(var(--primary))" }}
            >
              <div>
                <span
                  className="inline-block text-[11px] font-mono font-semibold tracking-widest uppercase mb-6"
                  style={{ color: "hsl(var(--primary-foreground) / 0.6)" }}
                >
                  Solicitar Acesso
                </span>
                <h2
                  className="font-heading text-[1.75rem] md:text-[2.25rem] font-bold leading-[1.1] mb-5"
                  style={{ color: "hsl(var(--primary-foreground))" }}
                >
                  O padrão do seu escritório muda aqui.
                </h2>
                <p
                  className="text-sm md:text-base leading-relaxed max-w-md"
                  style={{ color: "hsl(var(--primary-foreground) / 0.7)" }}
                >
                  Junte-se aos profissionais que escolheram trocar volume de trabalho mecânico por precisão validada.
                </p>
              </div>
              <p
                className="text-[12px] leading-relaxed"
                style={{ color: "hsl(var(--primary-foreground) / 0.5)" }}
              >
                Sem cartão de crédito. Sem compromisso. Com a segurança de quem leva o Direito a sério.
              </p>
            </div>

            {/* Right — Form card with 3D effect */}
            <div
              className="relative rounded-2xl overflow-hidden border border-white/[0.06]"
              style={{
                background: "linear-gradient(145deg, hsl(213 50% 18%) 0%, hsl(213 55% 12%) 100%)",
                boxShadow: "0 20px 60px -15px hsl(213 60% 6% / 0.8), inset 0 1px 0 hsl(0 0% 100% / 0.04), 0 1px 3px hsl(213 60% 6% / 0.4)",
              }}
            >
              <div className="p-7 md:p-9 h-full flex flex-col">
                <h3 className="font-heading text-lg font-bold text-primary text-center mb-1">
                  Solicitar Acesso
                </h3>
                <p className="text-center text-[12px] text-muted-foreground mb-6">
                  Ative sua infraestrutura jurídica de alta performance
                </p>

                <form className="space-y-3.5 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Nome completo"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border text-foreground placeholder:text-muted-foreground/35 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                    style={{
                      borderColor: "hsl(var(--border) / 0.15)",
                      background: "linear-gradient(145deg, hsl(213 50% 10%) 0%, hsl(213 55% 7%) 100%)",
                      boxShadow: "inset 0 2px 4px hsl(213 60% 4% / 0.6), inset 0 1px 2px hsl(213 60% 3% / 0.4), 0 1px 0 hsl(0 0% 100% / 0.03)",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email profissional"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border text-foreground placeholder:text-muted-foreground/35 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                    style={{
                      borderColor: "hsl(var(--border) / 0.15)",
                      background: "linear-gradient(145deg, hsl(213 50% 10%) 0%, hsl(213 55% 7%) 100%)",
                      boxShadow: "inset 0 2px 4px hsl(213 60% 4% / 0.6), inset 0 1px 2px hsl(213 60% 3% / 0.4), 0 1px 0 hsl(0 0% 100% / 0.03)",
                    }}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Telefone"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border text-foreground placeholder:text-muted-foreground/35 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                      style={{
                        borderColor: "hsl(var(--border) / 0.15)",
                        background: "linear-gradient(145deg, hsl(213 50% 10%) 0%, hsl(213 55% 7%) 100%)",
                        boxShadow: "inset 0 2px 4px hsl(213 60% 4% / 0.6), inset 0 1px 2px hsl(213 60% 3% / 0.4), 0 1px 0 hsl(0 0% 100% / 0.03)",
                      }}
                    />
                    <select
                      value={form.profession}
                      onChange={(e) => set("profession", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all appearance-none"
                      style={{
                        borderColor: "hsl(var(--border) / 0.15)",
                        background: "linear-gradient(145deg, hsl(213 50% 10%) 0%, hsl(213 55% 7%) 100%)",
                        boxShadow: "inset 0 2px 4px hsl(213 60% 4% / 0.6), inset 0 1px 2px hsl(213 60% 3% / 0.4), 0 1px 0 hsl(0 0% 100% / 0.03)",
                      }}
                    >
                      <option value="">Profissão</option>
                      {professions.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={form.terms}
                      onChange={(e) => set("terms", e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded accent-primary"
                    />
                    <span className="text-[11px] text-muted-foreground">
                      Concordo com os{" "}
                      <a href="#" className="text-primary hover:underline">
                        Termos
                      </a>{" "}
                      e{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacidade
                      </a>
                    </span>
                  </label>

                  <div className="flex-1" />

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm cta-3d hover:translate-y-[-1px] active:translate-y-[1px] transition-all"
                  >
                    Solicitar Acesso
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
