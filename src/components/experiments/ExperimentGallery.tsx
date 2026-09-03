"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { experiments } from "@/data/experiments";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ExperimentGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".experiment-item");
      
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">
          EXPERIMENTS
        </h2>
        <p className="text-muted-foreground mt-4 max-w-md font-medium tracking-wide">
          Playground for creative coding, motion design, and digital art.
        </p>
      </div>

      <div ref={galleryRef} className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {experiments.map((exp, index) => (
            <div 
              key={exp.id}
              className={`experiment-item group relative aspect-[4/5] bg-muted overflow-hidden ${index % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-2">
                  {exp.type}
                </p>
                <h3 className="text-xl font-display font-bold text-foreground">
                  {exp.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-24 lg:mt-32 flex justify-center">
        <Link 
          href="/experiments"
          className="inline-flex items-center space-x-2 text-foreground font-bold tracking-widest uppercase hover:text-accent transition-colors text-sm"
        >
          <span>View All Experiments</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
