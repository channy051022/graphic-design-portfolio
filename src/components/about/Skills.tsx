"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const skillCategories = [
  {
    title: "DESIGN",
    skills: ["Graphic Design", "Branding", "Typography", "Layout", "Visual Identity", "UI/UX"]
  },
  {
    title: "DEVELOPMENT",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue", "Responsive Design"]
  },
  {
    title: "TOOLS",
    skills: ["Figma", "Photoshop", "Illustrator", "Canva", "VS Code", "Git", "GitHub"]
  }
];

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".skill-category");
      
      gsap.fromTo(
        items,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col space-y-12">
      {skillCategories.map((category, index) => (
        <div key={category.title} className="skill-category">
          <h3 className="text-sm font-bold tracking-[0.2em] text-accent mb-6 uppercase">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 border border-background/20 rounded-full text-sm font-medium tracking-wide hover:bg-background hover:text-foreground transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
