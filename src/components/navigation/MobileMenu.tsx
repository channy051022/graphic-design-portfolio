"use client";

import Link from "next/link";
import { useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, links, currentPath }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-background transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <nav className="flex flex-col items-center space-y-8">
        {links.map((link) => {
          const isActive = currentPath === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "text-4xl font-display font-bold uppercase tracking-widest transition-colors hover:text-accent",
                isActive ? "text-accent" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          );
        })}
        
        <Link
          href="/contact"
          onClick={onClose}
          className="mt-8 px-8 py-4 bg-foreground text-background rounded-full text-lg font-medium tracking-widest"
        >
          LET'S TALK
        </Link>
      </nav>
      
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-sm text-muted-foreground uppercase tracking-widest">
          CHRISTIAN FAITH MESTOLA © 2026
        </p>
      </div>
    </div>
  );
}
