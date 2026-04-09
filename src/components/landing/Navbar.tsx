import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-white.png";

const navLinks = [
  { label: "Especialistas", href: "#especialistas" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Validação", href: "#validacao" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/15"
          : "border-b border-transparent"
      }`}
      style={{
        backdropFilter: scrolled ? "blur(24px)" : "blur(12px)",
        background: scrolled
          ? "hsl(var(--background) / 0.85)"
          : "hsl(var(--background) / 0.4)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="LegisBrasil.IA" className="h-7 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors">
            Entrar
          </a>
          <a
            href="#contato"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-[13px] font-semibold cta-3d hover:translate-y-[-1px] active:translate-y-[1px] transition-all"
          >
            Solicitar Acesso
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-border/15"
            style={{ background: "hsl(var(--background) / 0.95)", backdropFilter: "blur(24px)" }}
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm cta-3d"
              >
                Solicitar Acesso
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
