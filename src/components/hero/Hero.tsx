"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
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
        { y: 0, opacity: 1, duration: 1.2, delay: 3.2 }
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
      className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-x-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-end">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 relative w-full pb-0 md:pb-12">
          <div className="max-w-4xl relative z-20 w-full flex flex-col">
            {/* MOBILE ONLY Portrait Image (Moved above text for overlap effect) */}
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] aspect-[3/4] self-center z-10 opacity-95 pointer-events-none md:hidden -mb-16 sm:-mb-24 mt-4">
              <Image
                src="/images/final portrait image .png"
                alt="Christian Faith Mestola - Creative Developer"
                fill
                className="object-contain object-bottom origin-bottom scale-110"
                priority
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>

            <p 
              ref={subtitleRef}
              className="text-accent font-medium tracking-widest uppercase mb-4 md:mb-8 text-[10px] min-[375px]:text-xs sm:text-sm md:text-base opacity-0 relative z-20"
            >
              Graphic Designer
            </p>
            
            <h1 
              ref={titleRef}
              className="text-[8vw] sm:text-[7vw] md:text-7xl lg:text-8xl xl:text-9xl font-display font-black uppercase leading-[0.9] tracking-tighter mb-8 md:mb-12 opacity-0 text-balance mix-blend-difference text-white relative z-20"
            >
              I turn ideas into visual experiences.
            </h1>

            
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0">
              <MagneticButton>
                <Link 
                  href="/work"
                  className="inline-flex items-center justify-center space-x-2 bg-foreground text-background px-8 py-4 rounded-full font-medium tracking-widest text-sm uppercase hover:scale-105 transition-transform w-full sm:w-auto"
                >
                  <span>View My Work</span>
                  <ArrowRight size={18} />
                </Link>
              </MagneticButton>
              
              <MagneticButton>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 border border-border px-8 py-4 rounded-full font-medium tracking-widest text-sm uppercase hover:border-foreground transition-colors mix-blend-difference text-white w-full sm:w-auto"
                >
                  <span>Let's Work Together</span>
                </Link>
              </MagneticButton>
            </div>
          </div>

          {/* DESKTOP ONLY Portrait Image (Absolute positioned on the right) */}
          <div className="relative w-full max-w-[480px] aspect-[3/4] md:absolute md:right-8 md:top-0 lg:right-12 xl:right-24 z-10 opacity-95 transition-all duration-700 pointer-events-none hidden md:block">
            <Image
              src="/images/final portrait image .png"
              alt="Christian Faith Mestola - Creative Developer"
              fill
              className="object-contain object-bottom origin-bottom scale-110"
              priority
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </div>
      </div>

      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 -translate-x-1/4 w-[400px] h-[400px] bg-muted rounded-full blur-3xl -z-10" />
    </section>
  );
}
