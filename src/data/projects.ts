export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  tools: string[];
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "urban-bites",
    title: "URBAN BITES",
    category: "Brand Identity",
    year: "2026",
    role: "Graphic Designer",
    description: "A complete brand identity redesign for a modern urban food delivery service. The goal was to create a vibrant, energetic visual system that stands out in a crowded market.",
    tools: ["Illustrator", "Photoshop", "Figma"],
    coverImage: "/images/projects/placeholder.jpg",
    images: [
      "/images/projects/placeholder.jpg",
      "/images/projects/placeholder.jpg",
      "/images/projects/placeholder.jpg"
    ]
  },
  {
    slug: "nova",
    title: "NOVA",
    category: "Social Media Campaign",
    year: "2025",
    role: "Art Director",
    description: "An exploratory social media campaign for a conceptual tech startup focused on space exploration and satellite data.",
    tools: ["Photoshop", "After Effects", "Figma"],
    coverImage: "/images/projects/placeholder.jpg",
    images: [
      "/images/projects/placeholder.jpg",
      "/images/projects/placeholder.jpg"
    ]
  },
  {
    slug: "form",
    title: "FORM",
    category: "UI/UX Concept",
    year: "2025",
    role: "UI/UX Designer",
    description: "A conceptual redesign for an architecture firm's portfolio website. The focus was on minimalism, strong typography, and large imagery.",
    tools: ["Figma", "Next.js", "Tailwind CSS"],
    coverImage: "/images/projects/placeholder.jpg",
    images: [
      "/images/projects/placeholder.jpg",
      "/images/projects/placeholder.jpg"
    ]
  },
  {
    slug: "frame",
    title: "FRAME",
    category: "Editorial Poster Series",
    year: "2024",
    role: "Graphic Designer",
    description: "A series of editorial posters exploring the relationship between Swiss graphic design principles and modern web brutalism.",
    tools: ["InDesign", "Illustrator"],
    coverImage: "/images/projects/placeholder.jpg",
    images: [
      "/images/projects/placeholder.jpg",
      "/images/projects/placeholder.jpg",
      "/images/projects/placeholder.jpg"
    ]
  }
];
