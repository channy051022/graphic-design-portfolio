import { Hero } from "@/components/hero/Hero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { AboutSection } from "@/components/about/AboutSection";
import { DesignProcess } from "@/components/process/DesignProcess";
import { ExperimentGallery } from "@/components/experiments/ExperimentGallery";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ProjectGrid />
      <AboutSection />
      <DesignProcess />
      <ExperimentGallery />
      <ContactSection />
    </div>
  );
}
