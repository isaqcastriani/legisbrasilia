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
    name: "", birthDate: "", cpf: "", email: "", phone: "", profession: "", password: "", confirmPassword: "", terms: false, emails: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setForm((p) => ({ ...p, [field]: value }));
  };

  return (
    <section id="contato" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Eleve o Padrão do seu Escritório para a{" "}
              <span className="text-gradient">Era da Inteligência Segura</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Junte-se aos profissionais que priorizam a técnica, a segurança e a soberania digital. Preencha os dados para ativar sua infraestrutura jurídica de alta performance.
            </p>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 border-primary/30"
          >
            <h3 className="font-heading text-2xl font-bold text-primary text-center mb-2">Crie sua conta</h3>
            <p className="text-center text-sm text-muted-foreground mb-8">
              Inicie sua jornada com a única IA pensada para os tribunais brasileiros
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Nome completo</label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Data de nascimento</label>
                  <input
                    type="text"
                    placeholder="DD/MM/AAAA"
                    value={form.birthDate}
                    onChange={(e) => handleChange("birthDate", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">CPF ou CNPJ</label>
                <input
                  type="text"
                  placeholder="123.456.789-10 ou 12.345.678/0001-90"
                  value={form.cpf}
                  onChange={(e) => handleChange("cpf", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Email</label>
                <input
                  type="email"
                  placeholder="exemplo@legis.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
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
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Sua Profissão</label>
                  <select
                    value={form.profession}
                    onChange={(e) => handleChange("profession", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition appearance-none"
                  >
                    <option value="">Selecione...</option>
                    {professions.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Senha</label>
                  <input
                    type="password"
                    placeholder="••••••••••"
                    value={form.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Confirmar senha</label>
                  <input
                    type="password"
                    placeholder="••••••••••"
                    value={form.confirmPassword}
                    onChange={(e) => handleChange("confirmPassword", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
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
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.emails}
                    onChange={(e) => handleChange("emails", e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-border accent-primary"
                  />
                  <span className="text-sm text-muted-foreground">Permita que lhe enviemos e-mails.</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-base hover:shadow-[0_0_30px_hsl(68_89%_45%/0.4)] transition-all"
              >
                Criar conta
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer bar */}
        <div className="mt-20 pt-10 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={logo} alt="LegisBrasil.IA" className="h-8 w-auto opacity-70" />
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
              <a href="#" className="hover:text-foreground transition-colors">Suporte</a>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 LegisBrasil.IA. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
