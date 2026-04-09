import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const professions = [
  "Advogado(a)",
  "Magistrado(a)",
  "Procurador(a)",
  "Defensor(a) Público(a)",
  "Estudante de Direito",
  "Outro",
];

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
    <section
      id="contato"
      className="relative py-16 md:py-24"
    >
      <div className="max-w-[600px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-[1px]"
          style={{
            background:
              "linear-gradient(145deg, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.1), hsl(var(--primary) / 0.05))",
          }}
        >
          <div
            className="rounded-2xl p-7 md:p-9"
            style={{
              background: "hsl(213 50% 10%)",
              boxShadow:
                "0 25px 60px -15px hsl(213 60% 4% / 0.8), inset 0 1px 0 hsl(0 0% 100% / 0.03)",
            }}
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
                className="w-full px-4 py-3 rounded-xl border text-foreground placeholder:text-muted-foreground/35 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition"
                style={{
                  borderColor: "hsl(var(--border) / 0.12)",
                  background: "hsl(213 50% 8%)",
                }}
              />
              <input
                type="email"
                placeholder="Email profissional"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border text-foreground placeholder:text-muted-foreground/35 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition"
                style={{
                  borderColor: "hsl(var(--border) / 0.12)",
                  background: "hsl(213 50% 8%)",
                }}
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Telefone"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border text-foreground placeholder:text-muted-foreground/35 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition"
                  style={{
                    borderColor: "hsl(var(--border) / 0.12)",
                    background: "hsl(213 50% 8%)",
                  }}
                />
                <select
                  value={form.profession}
                  onChange={(e) => set("profession", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition appearance-none"
                  style={{
                    borderColor: "hsl(var(--border) / 0.12)",
                    background: "hsl(213 50% 8%)",
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

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm cta-3d hover:translate-y-[-1px] active:translate-y-[1px] transition-all"
              >
                Solicitar Acesso
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;
