import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-20 border-t border-border mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="relative w-24 h-12 md:w-32 md:h-16 mb-4">
              <Image 
                src="/images/asset/logo.png" 
                alt="Christian Faith Mestola Logo" 
                fill 
                className="object-contain object-left" 
              />
            </div>
            <p className="text-muted-foreground">
              Graphic Designer × Creative Developer
            </p>
          </div>
          
          <div className="flex flex-col md:items-end space-y-4">
            <nav className="flex flex-col space-y-2 text-sm font-medium tracking-widest uppercase">
              <Link href="/work" className="hover:text-accent transition-colors md:text-right">Work</Link>
              <Link href="/about" className="hover:text-accent transition-colors md:text-right">About</Link>
              {/* <Link href="/experiments" className="hover:text-accent transition-colors md:text-right">Experiments</Link> */}
              <Link href="/contact" className="hover:text-accent transition-colors md:text-right">Contact</Link>
            </nav>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <p>© 2026 Christian Faith Mestola - asyncdev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
