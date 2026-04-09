import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SpecialistsSection from "@/components/landing/SpecialistsSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import FooterSection from "@/components/landing/FooterSection";
import SectionDivider from "@/components/landing/SectionDivider";
import WaveDivider from "@/components/landing/WaveDivider";
import AIOrbitSection from "@/components/landing/AIOrbitSection";
import IntegrationsSection from "@/components/landing/IntegrationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ overflowClipMargin: "content-box", overflowX: "clip" }}>
      
      <HeroSection />
      <WaveDivider />
      <ProblemSection />
      <WaveDivider flip />
      <SpecialistsSection />
      <WaveDivider color="hsl(213 55% 8%)" />
      <AuthoritySection />
      <WaveDivider flip />
      <AIOrbitSection />
      <WaveDivider />
      <IntegrationsSection />
      <WaveDivider />
      <SocialProofSection />
      <WaveDivider />
      <ContactFormSection />
      <SectionDivider />
      <FooterSection />
    </div>
  );
};

export default Index;
