import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo-white.png";

const professions = [
  "Advogado(a)",
  "Magistrado(a)",
  "Procurador(a)",
  "Defensor(a) Público(a)",
  "Estudante de Direito",
  "Outro",
];

const benefits = [
  "Acesso imediato a todos os especialistas IA",
  "Suporte jurídico com validação real",
  "100% em conformidade com LGPD e CNJ",
  "Cancelamento a qualquer momento",
];

const FooterSection = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", profession: "", terms: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setForm((p) => ({ ...p, [field]: value }));
  };

  return (
    <section id="contato" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA container with rounded corners like Alpha House */}
        <div className="rounded-3xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--muted) / 0.4) 100%)" }}>
          {/* Decorative blurs */}
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[150px] opacity-15" style={{ background: "hsl(var(--primary))" }} />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-10" style={{ background: "hsl(var(--secondary))" }} />

          <div className="relative z-10 p-8 md:p-14 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left text + benefits */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="badge-glow w-fit">✦ Comece Agora</div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Eleve o Padrão do seu Escritório para a{" "}
                  <span className="text-gradient">Era da Inteligência Segura</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Junte-se aos profissionais que priorizam a técnica, a segurança e a soberania digital.
                </p>
                
                {/* Benefits list like Agência Get checklist */}
                <ul className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Right form - simplified */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-10 border-primary/20"
              >
                <h3 className="font-heading text-2xl font-bold text-primary text-center mb-2">Solicitar Acesso</h3>
                <p className="text-center text-sm text-muted-foreground mb-8">
                  Preencha os dados para ativar sua infraestrutura jurídica
                </p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Nome completo</label>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Email</label>
                    <input
                      type="email"
                      placeholder="exemplo@escritorio.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Telefone</label>
                      <input
                        type="text"
                        placeholder="(55) 99999-9999"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Profissão</label>
                      <select
                        value={form.profession}
                        onChange={(e) => handleChange("profession", e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition appearance-none"
                      >
                        <option value="">Selecione...</option>
                        {professions.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer pt-2">
                    <input
                      type="checkbox"
                      checked={form.terms}
                      onChange={(e) => handleChange("terms", e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-border accent-primary"
                    />
                    <span className="text-sm text-muted-foreground">
                      Concordo com os <a href="#" className="text-primary hover:underline">Termos de Uso</a> e <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-base cta-3d hover:translate-y-[-1px] active:translate-y-[1px] transition-all mt-2"
                  >
                    Solicitar Acesso
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="mt-16 pt-10 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={logo} alt="LegisBrasil.IA" className="h-8 w-auto opacity-60" />
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
              <a href="#" className="hover:text-foreground transition-colors">Suporte</a>
            </div>
            <p className="text-sm text-muted-foreground/60">© 2026 LegisBrasil.IA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
