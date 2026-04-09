import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SpecialistsSection from "@/components/landing/SpecialistsSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import FooterSection from "@/components/landing/FooterSection";
import SectionDivider from "@/components/landing/SectionDivider";
import PixelDivider from "@/components/landing/PixelDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      <HeroSection />
      <PixelDivider />
      <ProblemSection />
      <PixelDivider flip />
      <SpecialistsSection />
      <PixelDivider color="hsl(213 55% 8%)" />
      <AuthoritySection />
      <PixelDivider flip />
      <SocialProofSection />
      <PixelDivider />
      <ContactFormSection />
      <SectionDivider />
      <FooterSection />
    </div>
  );
};

export default Index;
