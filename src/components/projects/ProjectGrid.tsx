"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          }
        }
      );

      // Project cards stagger reveal
      const projectCards = gsap.utils.toArray(".project-card-trigger");
      
      projectCards.forEach((card: any, i) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 
              ref={headingRef}
              className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter"
            >
              SELECTED WORK
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md font-medium tracking-wide">
              A selection of visual identities, digital experiences, and creative projects.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {projects.slice(0, 4).map((project, index) => (
            <div 
              key={project.slug} 
              className={index % 2 !== 0 ? "md:mt-24" : ""}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
