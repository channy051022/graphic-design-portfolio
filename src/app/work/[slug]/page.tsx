import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";
import { NextProject } from "@/components/projects/NextProject";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — CYREL BALAWAG`,
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
  const projectIndex = projects.findIndex(p => p.slug === resolvedParams.slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="min-h-screen bg-background">
      {/* Project Hero */}
      <header className="pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              {project.title}
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-border mt-12 mb-16">
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

        <div className="container mx-auto px-6 mt-8">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-muted">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </header>

      {/* Overview & Content */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-6">
                Overview
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-balance">
                {project.description}
              </p>
            </div>
          </div>
          
          {/* Visual Gallery */}
          <div className="mt-32 space-y-8 md:space-y-16">
            {project.images.map((image, index) => (
              <div 
                key={index}
                className={`relative w-full bg-muted ${
                  index % 3 === 0 ? "aspect-[16/9]" : 
                  index % 3 === 1 ? "aspect-[4/5] w-full md:w-[60%] ml-auto" : 
                  "aspect-[4/3] w-full md:w-[80%]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${project.title} visual ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <NextProject project={nextProject} />
    </article>
  );
}
