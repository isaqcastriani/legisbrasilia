import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Zap } from "lucide-react";
import logo from "@/assets/logo-white.png";

/*
 * Richard: Awareness Level 5 — "Troque X por Y em Z dias, sem risco"
 * Richard: Reduzir fricção final — garantias, facilidade, zero risco.
 * Richard: Efeito Zeigarnik — form curto para criar loop incompleto.
 * Richard: Loss aversion CTA — urgência sem ser spam.
 */

const professions = [
  "Advogado(a)", "Magistrado(a)", "Procurador(a)",
  "Defensor(a) Público(a)", "Estudante de Direito", "Outro",
];

const FooterSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", profession: "", terms: false });
  const set = (k: string, v: string | boolean) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <section id="contato" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-container">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-10" style={{ background: "hsl(var(--primary))" }} />

          <div className="relative z-10 p-8 md:p-14 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-7"
              >
                {/* Richard: Awareness 5 — risco zero, fricção mínima */}
                <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight">
                  Teste Com Seu{" "}
                  <span className="text-gradient">Processo Real</span>
                  <br />
                  <span className="text-muted-foreground text-2xl md:text-3xl">Sem risco. Sem cartão.</span>
                </h2>

                {/* Richard: Reduzir ansiedade — garantias claras */}
                <ul className="space-y-3">
                  {[
                    { icon: Zap, text: "Resultado em 3 minutos, não em 3 dias" },
                    { icon: CheckCircle2, text: "Validado por +50 magistrados e juristas" },
                    { icon: Clock, text: "Sem contrato. Cancele quando quiser" },
                  ].map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <b.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{b.text}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Richard: Reforço positivo humano */}
                <p className="text-xs text-muted-foreground/50 italic">
                  "O medo de IA errar é válido. Por isso cada resposta tem link para a fonte. Se não tem fonte, não entrega." — Dr. Mazloum
                </p>
              </motion.div>

              {/* Right form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border/30 p-8 md:p-10"
                style={{ background: "hsl(var(--card) / 0.6)" }}
              >
                <h3 className="font-heading text-xl font-bold text-primary text-center mb-1">Solicitar Acesso</h3>
                <p className="text-center text-sm text-muted-foreground mb-7">
                  Leva menos de 30 segundos
                </p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Nome completo"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/40 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 transition"
                  />
                  <input
                    type="email"
                    placeholder="Email profissional"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/40 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 transition"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Telefone"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/40 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 transition"
                    />
                    <select
                      value={form.profession}
                      onChange={(e) => set("profession", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/40 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 transition appearance-none"
                    >
                      <option value="">Profissão</option>
                      {professions.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                    <input type="checkbox" checked={form.terms} onChange={(e) => set("terms", e.target.checked)} className="mt-0.5 w-4 h-4 rounded border-border accent-primary" />
                    <span className="text-xs text-muted-foreground">
                      Concordo com os <a href="#" className="text-primary hover:underline">Termos</a> e <a href="#" className="text-primary hover:underline">Privacidade</a>
                    </span>
                  </label>

                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm cta-3d hover:translate-y-[-1px] active:translate-y-[1px] transition-all">
                    Solicitar Acesso Gratuito
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Richard: Micro-copy para reduzir ansiedade */}
                  <p className="text-center text-[11px] text-muted-foreground/40">
                    Sem cartão de crédito · Sem contrato · Cancele quando quiser
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer minimal */}
        <div className="mt-14 pt-8 border-t border-border/15">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img src={logo} alt="LegisBrasil.IA" className="h-7 w-auto opacity-50" />
            <div className="flex items-center gap-6 text-xs text-muted-foreground/60">
              <a href="#" className="hover:text-foreground transition-colors">Termos</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
              <a href="#" className="hover:text-foreground transition-colors">Suporte</a>
            </div>
            <p className="text-xs text-muted-foreground/40">© 2026 LegisBrasil.IA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
