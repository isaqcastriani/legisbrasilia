import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo-white.png";

const professions = [
  "Advogado(a)",
  "Magistrado(a)",
  "Procurador(a)",
  "Defensor(a) Público(a)",
  "Estudante de Direito",
  "Outro",
];

const FooterSection = () => {
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
    <>
      {/* CTA Section — Ease Health inspired full-width accent block */}
      <section id="contato" className="relative py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8">
          {/* Grid: CTA card left + Form right */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left — Accent CTA card (Ease Health style) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="accent-card p-8 md:p-10 flex flex-col justify-between min-h-[380px]"
            >
              <div>
                <span className="text-[11px] font-mono font-medium uppercase tracking-widest opacity-50 mb-4 block">
                  Solicitar Acesso
                </span>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-[1.08] mb-4">
                  O padrão do seu escritório muda aqui.
                </h2>
                <p className="text-sm opacity-70 leading-relaxed max-w-md">
                  Junte-se aos profissionais que escolheram trocar volume de trabalho mecânico por precisão validada.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-[11px] opacity-40">
                  Sem cartão de crédito. Sem compromisso. Com a segurança de quem leva o Direito a sério.
                </p>
              </div>
            </motion.div>

            {/* Right — Form card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bento-card p-7 md:p-9"
            >
              <h3 className="font-heading text-lg font-bold text-primary text-center mb-1">
                Solicitar Acesso
              </h3>
              <p className="text-center text-[12px] text-muted-foreground mb-6">
                Ative sua infraestrutura jurídica de alta performance
              </p>

              <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border text-foreground placeholder:text-muted-foreground/35 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition"
                  style={{ borderColor: "hsl(var(--border) / 0.12)" }}
                />
                <input
                  type="email"
                  placeholder="Email profissional"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border text-foreground placeholder:text-muted-foreground/35 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition"
                  style={{ borderColor: "hsl(var(--border) / 0.12)" }}
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Telefone"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border text-foreground placeholder:text-muted-foreground/35 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition"
                    style={{ borderColor: "hsl(var(--border) / 0.12)" }}
                  />
                  <select
                    value={form.profession}
                    onChange={(e) => set("profession", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition appearance-none"
                    style={{ borderColor: "hsl(var(--border) / 0.12)" }}
                  >
                    <option value="">Profissão</option>
                    {professions.map((p) => (
                      <option key={p} value={p}>{p}</option>
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
                    <a href="#" className="text-primary hover:underline">Termos</a> e{" "}
                    <a href="#" className="text-primary hover:underline">Privacidade</a>
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm cta-3d hover:translate-y-[-1px] active:translate-y-[1px] transition-all"
                >
                  Solicitar Acesso
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer — Bento-style grid inspired by Ease Health */}
      <footer className="relative py-12 md:py-16">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-4">
            {/* Left — Tagline card */}
            <div
              className="bento-card p-8 md:p-10"
            >
              <img src={logo} alt="LegisBrasil.IA" className="h-6 w-auto opacity-40 mb-6" />
              <p className="font-heading text-xl md:text-2xl font-bold text-foreground leading-tight max-w-md">
                A Única IA Jurídica 100% Brasileira,{" "}
                <span className="text-primary/50">Validada por Especialistas</span>
                <span className="text-primary">.</span>
              </p>
            </div>

            {/* Right — Links card */}
            <div
              className="bento-card p-8 md:p-10"
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[11px] font-semibold text-foreground mb-4 tracking-wide uppercase font-mono">Plataforma</p>
                  <div className="space-y-2.5">
                    <a href="#especialistas" className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors">Especialistas</a>
                    <a href="#diferenciais" className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors">Diferenciais</a>
                    <a href="#validacao" className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors">Validação</a>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-foreground mb-4 tracking-wide uppercase font-mono">Legal</p>
                  <div className="space-y-2.5">
                    <a href="#" className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors">Termos</a>
                    <a href="#" className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors">Privacidade</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-4 bento-card px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3"
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
