import { Hero } from "@/components/hero/Hero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { AboutSection } from "@/components/about/AboutSection";
import { DesignProcess } from "@/components/process/DesignProcess";
import { ExperimentGallery } from "@/components/experiments/ExperimentGallery";
import { ContactSection } from "@/components/contact/ContactSection";
import { LoaderWrapper } from "@/components/loading/LoaderWrapper";

export default function Home() {
  return (
    <LoaderWrapper>
      <div className="flex flex-col w-full">
        <Hero />
        <ProjectGrid />
        <AboutSection />
        <DesignProcess />
        <ExperimentGallery />
        <ContactSection />
      </div>
    </LoaderWrapper>
  );
}
