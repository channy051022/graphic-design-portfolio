"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { usePathname } from "next/navigation";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion || typeof window === "undefined") return;
    
    // Hide default cursor by adding class to body
    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const addHoverEvents = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, select, .project-card-trigger, .magnetic-button"
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", (e) => {
          const target = e.currentTarget as HTMLElement;
          if (target.classList.contains("project-card-trigger")) {
            setCursorText("VIEW");
            gsap.to(cursorRef.current, { scale: 3, backgroundColor: "var(--accent)", mixBlendMode: "normal", duration: 0.3 });
            gsap.to(textRef.current, { opacity: 1, duration: 0.3 });
          } else {
            setCursorText("");
            gsap.to(cursorRef.current, { scale: 1.5, mixBlendMode: "difference", backgroundColor: "white", duration: 0.3 });
            gsap.to(textRef.current, { opacity: 0, duration: 0.3 });
          }
        });

        el.addEventListener("mouseleave", () => {
          setCursorText("");
          gsap.to(cursorRef.current, { scale: 1, mixBlendMode: "difference", backgroundColor: "white", duration: 0.3 });
          gsap.to(textRef.current, { opacity: 0, duration: 0.3 });
        });
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);
    
    // Slight delay to allow DOM to render new elements on page change
    const timeout = setTimeout(addHoverEvents, 500);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      document.body.classList.remove("custom-cursor-active");
      clearTimeout(timeout);
    };
  }, [prefersReducedMotion, pathname]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[100] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:flex transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <span ref={textRef} className="text-[4px] font-bold tracking-widest text-white opacity-0">
        {cursorText}
      </span>
    </div>
  );
}
