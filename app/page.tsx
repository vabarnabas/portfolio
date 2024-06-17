import AboutMeSection from "@/components/sections/about-me/about-me";
import ExperienceSection from "@/components/sections/experience/experience";
import HeroSection from "@/components/sections/hero/hero";
import ProjectsSection from "@/components/sections/projects/projects";
import TechnologiesSection from "@/components/sections/technologies/technologies";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-y-16">
      <HeroSection />
      <TechnologiesSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}
