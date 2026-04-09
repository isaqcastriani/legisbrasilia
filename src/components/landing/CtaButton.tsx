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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-base transition-all duration-300 hover:shadow-[0_0_30px_hsl(68_89%_45%/0.4)] ${className}`}
    >
      <span>{children}</span>
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-foreground/15 group-hover:bg-primary-foreground/25 transition-colors">
        <ArrowRight className="w-4 h-4" />
      </span>
    </motion.button>
  );
};

export default CtaButton;
