"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  magneticPull?: number;
}

export function MagneticButton({ children, className = "", magneticPull = 0.3 }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !buttonRef.current) return;

    const button = buttonRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const hx = rect.left + rect.width / 2;
      const hy = rect.top + rect.height / 2;
      const dx = (e.clientX - hx) * magneticPull;
      const dy = (e.clientY - hy) * magneticPull;

      gsap.to(button, {
        x: dx,
        y: dy,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReducedMotion, magneticPull]);

  return (
    <div ref={buttonRef} className={`magnetic-button inline-block ${className}`}>
      {children}
    </div>
  );
}
