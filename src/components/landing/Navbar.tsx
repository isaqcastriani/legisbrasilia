import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-white.png";

const navLinks = [
  { label: "Especialistas", href: "#especialistas" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Validação", href: "#validacao" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/20" style={{ backdropFilter: "blur(20px)", background: "hsl(var(--background) / 0.8)" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="LegisBrasil.IA" className="h-8 md:h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contato" className="px-5 py-2.5 rounded-full border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-colors">
            Solicitar Acesso
          </a>
          <a href="#" className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            Entrar
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/20 px-6 py-6 space-y-4" style={{ background: "hsl(var(--background) / 0.95)", backdropFilter: "blur(20px)" }}>
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
          <a href="#contato" className="block w-full text-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium">
            Solicitar Acesso
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
