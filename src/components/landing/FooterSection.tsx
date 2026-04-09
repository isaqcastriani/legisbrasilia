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
    <section id="contato" className="relative section-spacing">
      <div className="absolute inset-0 grid-lines pointer-events-none" />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[200px] opacity-[0.06] pointer-events-none"
        style={{ background: "hsl(var(--primary))" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-label mb-5"
        >
          <span className="text-primary">🚀</span>
          <span>CTA Final</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl md:text-[3rem] lg:text-[3.25rem] font-bold text-foreground leading-[1.08] mb-6"
            >
              O padrão do seu escritório{" "}
              <span className="text-gradient">muda aqui.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              Junte-se aos profissionais que escolheram trocar volume de trabalho mecânico por precisão validada. Preencha os dados abaixo para ativar sua infraestrutura jurídica de alta performance.
            </motion.p>
          </div>

          {/* Right — Form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="anti-card p-8 md:p-10"
          >
            <h3 className="font-heading text-xl font-bold text-primary text-center mb-1">
              Solicitar Acesso
            </h3>
            <p className="text-center text-sm text-muted-foreground mb-7">
              Ative sua infraestrutura jurídica
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Nome completo"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/30 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 transition"
              />
              <input
                type="email"
                placeholder="Email profissional"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/30 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 transition"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Telefone"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/30 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 transition"
                />
                <select
                  value={form.profession}
                  onChange={(e) => set("profession", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/30 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 transition appearance-none"
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
                  className="mt-0.5 w-4 h-4 rounded border-border accent-primary"
                />
                <span className="text-xs text-muted-foreground">
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

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm cta-3d hover:translate-y-[-1px] active:translate-y-[1px] transition-all"
              >
                Solicitar Acesso
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[11px] text-muted-foreground/60 mt-2">
                Sem cartão de crédito. Sem compromisso de permanência. Com a segurança de quem leva o Direito a sério.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 mt-28">
        <div className="anti-divider" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-12">
          <div>
            <img src={logo} alt="LegisBrasil.IA" className="h-7 w-auto opacity-50 mb-6" />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground/60 mb-4 tracking-wide uppercase">
              Plataforma
            </p>
            <div className="space-y-3">
              <a href="#especialistas" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Especialistas
              </a>
              <a href="#diferenciais" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Diferenciais
              </a>
              <a href="#validacao" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Validação
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground/60 mb-4 tracking-wide uppercase">
              Legal
            </p>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Termos
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacidade
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground/60 mb-4 tracking-wide uppercase">
              Contato
            </p>
            <div className="space-y-3">
              <a href="#contato" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Solicitar Acesso
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Suporte
              </a>
            </div>
          </div>
        </div>

        <div className="anti-divider" />
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <p className="text-xs text-muted-foreground/40">
            © 2026 LegisBrasil.IA · Todos os direitos reservados
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              LGPD Compliant
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              CNJ Aprovado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
