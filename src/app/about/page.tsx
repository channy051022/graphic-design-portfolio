import { AboutSection } from "@/components/about/AboutSection";

export const metadata = {
  title: "About — CHRISTIAN FAITH MESTOLA",
  description: "Learn more about my background, skills, and creative process.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <AboutSection />
    </div>
  );
}
