import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface NextProjectProps {
  project: Project;
}

export function NextProject({ project }: NextProjectProps) {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground mb-8">
            NEXT PROJECT
          </p>
          
          <Link 
            href={`/work/${project.slug}`}
            className="group block relative w-full max-w-4xl aspect-[21/9] bg-muted overflow-hidden mb-12"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-70 group-hover:opacity-100"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-background text-foreground px-8 py-4 rounded-full font-medium tracking-widest text-sm uppercase flex items-center gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <span>View Project</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </Link>
          
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter hover:text-accent transition-colors">
            <Link href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h2>
          <p className="text-muted-foreground mt-4 font-medium tracking-widest uppercase">
            {project.category}
          </p>
        </div>
      </div>
    </section>
  );
}
