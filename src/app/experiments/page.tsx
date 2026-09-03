import { ExperimentGallery } from "@/components/experiments/ExperimentGallery";

export const metadata = {
  title: "Experiments — CYREL BALAWAG",
  description: "A playground for creative coding, motion design, and digital art.",
};

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen pt-20">
      <ExperimentGallery />
    </div>
  );
}
