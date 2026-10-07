import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { DomainsSection } from "@/components/domains-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <DomainsSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
