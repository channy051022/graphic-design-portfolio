import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const animateFadeInUp = (element: Element | Element[], options: gsap.TweenVars = {}) => {
  return gsap.fromTo(
    element,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      ...options,
    }
  );
};

export const animateTextReveal = (element: Element | Element[], options: gsap.TweenVars = {}) => {
  return gsap.fromTo(
    element,
    { y: "100%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      ...options,
    }
  );
};

export const registerScrollTrigger = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
};
