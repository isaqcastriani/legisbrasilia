import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionDivider from "./SectionDivider";
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
      <SectionDivider />

      <section id="contato" className="relative py-20 md:py-28">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Humble split: headline left, form right */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
            {/* Left — headline */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-5 md:gap-7"
              >
                <div
                  className="hidden lg:block w-[2px] flex-shrink-0 rounded-full mt-2"
                  style={{ background: "hsl(var(--primary) / 0.4)", height: "100px" }}
                />
                <div>
                  <h2 className="font-heading text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-foreground leading-[1.08] mb-6">
                    O padrão do seu
                    <br />
                    escritório muda aqui
                    <span className="text-primary">.</span>
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                    Junte-se aos profissionais que escolheram trocar volume de trabalho mecânico por precisão validada. Preencha os dados abaixo para ativar sua infraestrutura jurídica de alta performance.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right — Form card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="rounded-xl border p-7 md:p-9"
              style={{ borderColor: "hsl(var(--border) / 0.15)", background: "hsl(var(--card) / 0.35)" }}
            >
              <h3 className="font-heading text-lg font-bold text-primary text-center mb-1">
                Solicitar Acesso
              </h3>
              <p className="text-center text-[13px] text-muted-foreground mb-6">
                Ative sua infraestrutura jurídica
              </p>

              <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition"
                  style={{ borderColor: "hsl(var(--border) / 0.15)" }}
                />
                <input
                  type="email"
                  placeholder="Email profissional"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition"
                  style={{ borderColor: "hsl(var(--border) / 0.15)" }}
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Telefone"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition"
                    style={{ borderColor: "hsl(var(--border) / 0.15)" }}
                  />
                  <select
                    value={form.profession}
                    onChange={(e) => set("profession", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition appearance-none"
                    style={{ borderColor: "hsl(var(--border) / 0.15)" }}
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
                  <span className="text-xs text-muted-foreground">
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

                <p className="text-center text-[11px] text-muted-foreground/50 mt-1">
                  Sem cartão de crédito. Sem compromisso. Com a segurança de quem leva o Direito a sério.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer — Humble exact pattern: dark bg, logo + tagline left, links right, bottom bar */}
      <footer
        className="relative border-t"
        style={{ borderColor: "hsl(var(--border) / 0.1)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            {/* Left — Logo + tagline (Humble: big tagline with accent word) */}
            <div>
              <img src={logo} alt="LegisBrasil.IA" className="h-7 w-auto opacity-50 mb-5" />
              <p className="font-heading text-xl md:text-2xl font-bold text-foreground leading-tight max-w-sm">
                A Única IA Jurídica 100% Brasileira,
                <br />
                <span className="text-primary/50">Validada por Especialistas</span>
                <span className="text-primary">.</span>
              </p>
            </div>

            {/* Right — Links column (Humble: single "Company" column) */}
            <div className="flex gap-16">
              <div>
                <p className="text-[11px] font-semibold text-foreground mb-4 tracking-wide uppercase font-mono">Plataforma</p>
                <div className="space-y-3">
                  <a href="#especialistas" className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors">Especialistas</a>
                  <a href="#diferenciais" className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors">Diferenciais</a>
                  <a href="#validacao" className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors">Validação</a>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-foreground mb-4 tracking-wide uppercase font-mono">Legal</p>
                <div className="space-y-3">
                  <a href="#" className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors">Termos</a>
                  <a href="#" className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors">Privacidade</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar (Humble: copyright left, badges right) */}
          <div
            className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderColor: "hsl(var(--border) / 0.08)" }}
          >
            <p className="text-[11px] text-muted-foreground/40">
              © 2026 LegisBrasil.IA · Todos os direitos reservados
            </p>
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground/40">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                LGPD Compliant
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground/40">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
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
