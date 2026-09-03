import { ContactSection } from "@/components/contact/ContactSection";

export const metadata = {
  title: "Contact — CYREL BALAWAG",
  description: "Get in touch for freelance projects, collaborations, and creative opportunities.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 flex flex-col">
      <div className="flex-grow flex items-center">
        <div className="w-full">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
