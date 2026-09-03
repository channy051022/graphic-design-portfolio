"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CFLogoLoaderProps {
  onComplete: () => void;
}

export function CFLogoLoader({ onComplete }: CFLogoLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const solidLogoRef = useRef<HTMLImageElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [svgPath, setSvgPath] = useState("");

  useEffect(() => {
    setSvgPath("M 573.253 220.074 C 541.397 222.104, 510.169 229.855, 480.705 243.044 C 437.685 262.303, 402.991 291.179, 372.027 333.500 C 368.003 339, 362.378 346.650, 359.527 350.500 C 356.675 354.350, 348.107 366.050, 340.486 376.500 C 332.865 386.950, 308.634 419.575, 286.640 449 C 230.594 523.982, 187.089 582.230, 175.728 597.500 C 157.424 622.101, 151 640.604, 151 668.724 C 151 726.488, 193.422 775.105, 252 784.473 C 260.195 785.783, 281.762 785.987, 409 785.953 L 556.500 785.914 578.571 764.707 C 590.711 753.043, 607.586 737.001, 616.071 729.057 C 652.304 695.140, 697 651.792, 697 650.570 C 697 650.271, 617.013 649.908, 519.250 649.764 L 341.500 649.500 335.650 646.536 C 328.557 642.942, 321.746 635.639, 319.592 629.316 C 317.595 623.455, 317.530 610.355, 319.462 603.095 C 321.935 593.804, 326.662 586.126, 343.238 564.477 C 375.507 522.333, 417.093 467.155, 461.169 408 C 476.268 387.735, 484.650 378.369, 494 371.316 C 506.454 361.921, 525.028 354.076, 539.624 352.046 C 544.536 351.363, 591.332 351, 674.555 351 L 801.964 351 820.709 331.750 C 831.018 321.163, 848.035 303.725, 858.525 293 C 892.330 258.436, 929 220.254, 929 219.618 C 929 218.715, 587.722 219.152, 573.253 220.074 M 800 421.809 C 731.525 490.479, 666.759 555.514, 656.076 566.332 L 636.652 586 690.134 586 L 743.616 586 785.999 544.250 C 809.310 521.288, 848.659 482.374, 873.441 457.776 L 918.500 413.051 1093.500 412.843 C 1189.750 412.728, 1269.656 412.707, 1271.069 412.796 C 1273.223 412.932, 1281.843 404.549, 1324.602 360.729 C 1352.633 332.003, 1377.980 305.913, 1380.929 302.750 L 1386.290 297 1155.395 296.977 L 924.500 296.954 800 421.809 M 862.865 538.277 C 828.564 572.530, 786.550 615.385, 769.500 633.511 C 730.780 674.675, 694.793 712.980, 668.089 741.455 C 656.765 753.530, 639.850 771.448, 630.500 781.274 C 621.150 791.099, 612.231 800.667, 610.681 802.534 L 607.862 805.930 694.572 805.949 C 742.262 805.959, 782.342 805.701, 783.638 805.376 C 786.501 804.657, 804.884 780.053, 860.603 702.364 C 890.371 660.859, 890.438 660.762, 929.910 602.361 C 938.599 589.505, 940.603 587.129, 943.196 586.611 C 944.876 586.275, 983.231 586, 1028.430 586 L 1110.610 586 1140.569 556.750 C 1157.046 540.663, 1182.430 515.913, 1196.978 501.750 L 1223.430 476 1074.330 476 L 925.230 476 862.865 538.277");
  }, []);

  useEffect(() => {
    if (!svgPath || !pathRef.current) return;

    if (prefersReducedMotion) {
      // Skip animation if reduced motion is preferred
      const timer = setTimeout(() => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete,
        });
      }, 1000);
      return () => clearTimeout(timer);
    }

    const path = pathRef.current;
    const length = path.getTotalLength();

    // Prepare SVG Path for drawing
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 1,
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete,
          });
        },
      });

      // 1. Draw the path (the glowing light tracing effect)
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 2.0,
        ease: "power2.inOut",
      })
      // 2. Quick glow flash on the path
      .to(path, {
        filter: "drop-shadow(0px 0px 15px rgba(255,255,255,0.8))",
        duration: 0.2,
      }, "-=0.2")
      // 3. Reveal the solid logo
      .to(solidLogoRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power1.out",
      })
      // 4. Fade out the path stroke
      .to(path, {
        opacity: 0,
        duration: 0.4,
      }, "<")
      // 5. Brief hold
      .to({}, { duration: 0.5 });

    }, containerRef);

    return () => ctx.revert();
  }, [svgPath, onComplete, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-none"
    >
      <div className="relative w-64 md:w-96 lg:w-[500px] aspect-[1.5] flex items-center justify-center">
        {/* The SVG tracing animation */}
        <svg
          viewBox="0 0 1536 1024"
          className="absolute inset-0 w-full h-full overflow-visible"
        >
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {svgPath && (
            <path
              ref={pathRef}
              d={svgPath}
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              className="opacity-0"
            />
          )}
        </svg>

        {/* The final solid logo */}
        <img
          ref={solidLogoRef}
          src="/images/asset/logo.png"
          alt="CF Logo"
          className="absolute inset-0 w-full h-full object-contain opacity-0" 
        />
      </div>
    </div>
  );
}
