"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".contact-reveal");
      
      gsap.fromTo(
        items,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="contact-reveal text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] mb-8">
            HAVE AN IDEA? <br />
            <span className="text-accent">LET'S MAKE IT REAL.</span>
          </h2>
          
          <p className="contact-reveal text-lg md:text-xl text-background/80 font-medium mb-16 max-w-2xl">
            Available for freelance projects, collaborations, and creative opportunities. Let's build something exceptional together.
          </p>
          
          <div className="contact-reveal group relative">
            <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
            <MagneticButton>
              <Link 
                href="mailto:hello@example.com"
                className="relative inline-flex items-center space-x-4 bg-background text-foreground px-12 py-6 rounded-full font-bold tracking-widest uppercase hover:scale-105 transition-transform duration-300"
              >
                <span>START A PROJECT</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
          </div>
          
          <div className="contact-reveal mt-24 md:mt-32 flex flex-wrap justify-center gap-8 md:gap-16">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm font-bold tracking-[0.2em] uppercase hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm font-bold tracking-[0.2em] uppercase hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="text-sm font-bold tracking-[0.2em] uppercase hover:text-accent transition-colors">
              Behance
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm font-bold tracking-[0.2em] uppercase hover:text-accent transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
