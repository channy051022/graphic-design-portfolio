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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16">
          
          {/* Sidebar Info (Left Side) */}
          <div className="lg:col-span-5 xl:col-span-4 min-w-0">
            <div className="sticky top-28 z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display font-black uppercase tracking-tight mb-8 leading-[0.95] break-words">
                {project.title}
              </h1>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 py-6 border-t border-b border-border">
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

              {project.description && (
                <p className="mt-8 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              )}
            </div>
          </div>

          {/* Images (Right Side) */}
          <div className="lg:col-span-7 xl:col-span-8 min-w-0">
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
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 58vw, 66vw"
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
