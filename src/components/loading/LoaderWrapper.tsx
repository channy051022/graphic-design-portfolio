"use client";

import { useState, useEffect } from "react";
import { CFLogoLoader } from "./CFLogoLoader";
import { useLenis } from "lenis/react";

export function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    // Stop scrolling while loading
    if (lenis) {
      if (isLoading) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [isLoading, lenis]);

  return (
    <>
      {isLoading && <CFLogoLoader onComplete={() => setIsLoading(false)} />}
      
      {/* 
        We use opacity to hide the content while loading, 
        but still allow it to mount so GSAP animations can prepare.
      */}
      <div
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
