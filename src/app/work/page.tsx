"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            SELECTED WORK
          </h1>
          
          <div className="flex flex-wrap gap-4 mt-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-colors border",
                  activeCategory === category
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground border-border hover:border-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.slug} 
              className={cn(
                "transition-all duration-500",
                index % 2 !== 0 ? "md:mt-24" : ""
              )}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-xl text-muted-foreground font-medium tracking-wide">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
