"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Skills } from "./Skills";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div ref={textRef} className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              GRAPHIC DESIGNER. <br />
              <span className="text-accent">PROBLEM SOLVER.</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-background/80 font-medium">
              <p>
                I bridge the gap between creative vision and technical execution. With a background in graphic design and a deep understanding of frontend architecture, I don't just design interfaces—I build them.
              </p>
              <p>
                My approach combines strong typography, bold layouts, and immersive motion design to create digital experiences that are both beautiful and performant.
              </p>
            </div>
            
            <div className="mt-12">
              <Link 
                href="/about"
                className="inline-flex items-center space-x-2 text-background font-bold tracking-widest uppercase hover:text-accent transition-colors text-sm"
              >
                <span>Read Full Story</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
