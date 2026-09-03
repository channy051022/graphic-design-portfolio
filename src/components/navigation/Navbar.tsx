"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { href: "/work", label: "WORK" },
  { href: "/about", label: "ABOUT" },
  { href: "/experiments", label: "EXPERIMENTS" },
  { href: "/contact", label: "CONTACT" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-4 bg-background/80 backdrop-blur-md border-b border-border"
            : "py-6 bg-transparent border-b-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity z-50 relative flex items-center"
          >
            <div className="relative w-20 h-10 md:w-24 md:h-12">
              <Image 
                src="/images/asset/logo.png" 
                alt="Christian Faith Mestola Logo" 
                fill 
                className="object-contain object-left" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-widest transition-colors hover:text-accent relative",
                    isActive ? "text-accent" : "text-foreground"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
            
            <Link
              href="/contact"
              className="px-6 py-2 border border-foreground hover:bg-foreground hover:text-background transition-colors rounded-full text-sm font-medium tracking-wider"
            >
              LET'S TALK
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 relative p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
        currentPath={pathname}
      />
    </>
  );
}
