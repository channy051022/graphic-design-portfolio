"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the problem, research the market, and define the core objectives."
  },
  {
    number: "02",
    title: "CONCEPT",
    description: "Develop the visual direction, establish the tone, and explore creative solutions."
  },
  {
    number: "03",
    title: "DESIGN",
    description: "Turn ideas into a cohesive visual system across all required touchpoints."
  },
  {
    number: "04",
    title: "DELIVER",
    description: "Refine the details, build the final experience, and launch the product."
  }
];

export function DesignProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
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
            start: "top 85%",
          }
        }
      );

      const stepElements = gsap.utils.toArray(".process-step");
      
      stepElements.forEach((step: any, i) => {
        gsap.fromTo(
          step,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <h2 
          ref={headingRef}
          className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-16 md:mb-24 text-center md:text-left"
        >
          HOW I CREATE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="process-step flex flex-col relative"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-6 left-16 right-0 h-[1px] bg-border z-0" />
              )}
              
              <div className="relative z-10 flex flex-col items-start bg-background pr-4">
                <span className="text-5xl font-display font-black text-accent mb-6">
                  {step.number}
                </span>
                <h3 className="text-2xl font-display font-bold tracking-tight uppercase mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-medium text-balance">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
