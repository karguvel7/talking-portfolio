import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { DomainsSection } from "@/components/domains-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { InteractivePortfolioCta } from "@/components/interactive-portfolio-cta";
import { SkillsSection } from "@/components/skills-section";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InteractivePortfolioCta />
      <AboutSection />
      <SkillsSection />
      <DomainsSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
