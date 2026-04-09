import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SpecialistsSection from "@/components/landing/SpecialistsSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SpecialistsSection />
      <AuthoritySection />
      <SocialProofSection />
      <FooterSection />
    </div>
  );
};

export default Index;
