import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import CtaButton from "./CtaButton";

/*
 * Richard: Proof stack para nível 4 — cases, demonstração, objeções.
 * Richard: "Faça para humanos" — celebrar, tom humano, não frio.
 * Richard: Hierarchy — quote é o centro, seals são subordinados.
 * Richard: Arredonda tudo — números limpos, sem vírgula.
 */

const SocialProofSection = () => {
  return (
    <section id="validacao" className="section-spacing relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-4">
            Quem Valida Não É{" "}
            <span className="text-gradient">Marketing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            São desembargadores, procuradores e juristas com décadas de tribunal.
          </p>
        </motion.div>

        {/* Richard: Quote card — Resend email-card style with window chrome */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 rounded-2xl border border-border/30 overflow-hidden"
          style={{ background: "hsl(var(--card) / 0.6)" }}
        >
          <div className="flex items-center gap-1.5 px-5 py-3 border-b border-border/20">
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
          </div>
          <div className="p-8 md:p-12">
            <Quote className="w-8 h-8 text-primary/15 mb-5" />
            <blockquote className="text-xl md:text-2xl font-heading font-medium text-foreground leading-relaxed">
              "A advocacia e a magistratura não aceitam erros. Criamos a LEGIS BRASIL para ser o padrão de integridade digital.{" "}
              <span className="text-primary">Se a ferramenta diz, você pode assinar embaixo.</span>"
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                AM
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Dr. Ali Mazloum</p>
                <p className="text-xs text-muted-foreground">Desembargador Federal · Fundador</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Richard: Anchoring numérica — números grandes criam percepção de valor */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-14">
          {[
            { value: "+50", label: "Juristas validadores" },
            { value: "98%", label: "Precisão certificada" },
            { value: "0", label: "Dados fora do Brasil" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center py-6"
            >
              <p className={`font-heading text-3xl font-bold ${i === 2 ? "text-primary" : "text-foreground"}`}>
                {s.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Richard: "E daí?" — objeção handling inline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-6"
        >
          <p className="text-sm text-muted-foreground italic">
            "E se a IA errar?" — Toda resposta vem com link para a fonte oficial. Se não tem fonte, não entrega.
          </p>
          <CtaButton>VER A PRECISÃO NA PRÁTICA</CtaButton>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
