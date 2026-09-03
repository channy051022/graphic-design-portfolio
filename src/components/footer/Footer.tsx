import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-20 border-t border-border mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-2 uppercase">
              CYREL BALAWAG
            </h2>
            <p className="text-muted-foreground">
              Graphic Designer × Creative Developer
            </p>
          </div>
          
          <div className="flex flex-col md:items-end space-y-4">
            <nav className="flex flex-col space-y-2 text-sm font-medium tracking-widest uppercase">
              <Link href="/work" className="hover:text-accent transition-colors md:text-right">Work</Link>
              <Link href="/about" className="hover:text-accent transition-colors md:text-right">About</Link>
              <Link href="/experiments" className="hover:text-accent transition-colors md:text-right">Experiments</Link>
              <Link href="/contact" className="hover:text-accent transition-colors md:text-right">Contact</Link>
            </nav>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <p>© 2026 Cyrel Balawag. All rights reserved.</p>
          <p className="mt-4 md:mt-0 tracking-widest text-xs">BUILT WITH NEXT.JS</p>
        </div>
      </div>
    </footer>
  );
}
