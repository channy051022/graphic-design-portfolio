"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <p 
            ref={subtitleRef}
            className="text-accent font-medium tracking-widest uppercase mb-6 md:mb-8 text-sm md:text-base opacity-0"
          >
            Graphic Designer × Creative Developer
          </p>
          
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black uppercase leading-[0.9] tracking-tighter mb-12 opacity-0 text-balance"
          >
            I turn ideas into visual experiences.
          </h1>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 opacity-0">
            <MagneticButton>
              <Link 
                href="/work"
                className="inline-flex items-center justify-center space-x-2 bg-foreground text-background px-8 py-4 rounded-full font-medium tracking-widest text-sm uppercase hover:scale-105 transition-transform"
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </Link>
            </MagneticButton>
            
            <MagneticButton>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 border border-border px-8 py-4 rounded-full font-medium tracking-widest text-sm uppercase hover:border-foreground transition-colors"
              >
                <span>Let's Work Together</span>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 -translate-x-1/4 w-[400px] h-[400px] bg-muted rounded-full blur-3xl -z-10" />
    </section>
  );
}
