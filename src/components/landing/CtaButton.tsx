import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CtaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CtaButton = ({ children, onClick, className = "" }: CtaButtonProps) => {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 2 }}
      onClick={onClick}
      className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-base transition-all duration-200 cta-3d ${className}`}
    >
      <span>{children}</span>
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-foreground/15 group-hover:bg-primary-foreground/25 transition-colors">
        <ArrowRight className="w-4 h-4" />
      </span>
    </motion.button>
  );
};

export default CtaButton;
