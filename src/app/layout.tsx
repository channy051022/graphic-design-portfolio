import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CYREL BALAWAG — Graphic Designer × Creative Developer",
  description: "I turn ideas into visual experiences. Portfolio of Cyrel Balawag, Graphic Designer and Creative Frontend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} antialiased`} suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white">
        <CustomCursor />
        <LenisProvider>
          <Navbar />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
