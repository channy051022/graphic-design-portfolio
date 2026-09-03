"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const formattedIndex = (index + 1).toString().padStart(2, "0");

  return (
    <div 
      ref={cardRef} 
      className="group relative flex flex-col w-full project-card-trigger"
    >
      <Link href={`/work/${project.slug}`} className="block w-full overflow-hidden mb-6 relative aspect-[4/3] bg-muted">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="bg-background text-foreground px-6 py-3 rounded-full font-medium tracking-widest text-xs uppercase flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <span>View Project</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </Link>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-sm">
            {project.category}
          </p>
        </div>
        <div className="text-right">
          <span className="text-sm font-display font-bold text-accent">
            {formattedIndex}
          </span>
          <p className="text-muted-foreground text-sm mt-1">
            {project.year}
          </p>
        </div>
      </div>
    </div>
  );
}
