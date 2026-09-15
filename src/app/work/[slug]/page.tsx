import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";
import { NextProject } from "@/components/projects/NextProject";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === decodeURIComponent(resolvedParams.slug));
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — CHRISTIAN FAITH MESTOLA`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const projectIndex = projects.findIndex(p => p.slug === decodeURIComponent(resolvedParams.slug));
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="min-h-screen bg-background">
      <div className="container mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Sidebar Info (Left Side) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4 py-6 border-t border-b border-border">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2">Category</p>
                  <p className="text-sm font-medium tracking-wide">{project.category}</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2">Year</p>
                  <p className="text-sm font-medium tracking-wide">{project.year}</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2">Role</p>
                  <p className="text-sm font-medium tracking-wide">{project.role}</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2">Tools</p>
                  <p className="text-sm font-medium tracking-wide">{project.tools.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images (Right Side) */}
          <div className="lg:col-span-8">
            <div className="space-y-8 md:space-y-16">
              {/* Visual Gallery */}
              {project.images.map((image, index) => (
                <div 
                  key={index}
                  className="relative w-full bg-muted flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${project.title} visual ${index + 1}`}
                    width={1920}
                    height={1080}
                    priority={index === 0}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* Next Project */}
      <NextProject project={nextProject} />
    </article>
  );
}
