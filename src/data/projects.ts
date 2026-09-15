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
    slug: "Custom Sticker",
    title: "Custom Sticker",
    category: "Sticker",
    year: "2026",
    role: "Graphic Designer",
    description: "A series of stickers for a custom sticker business.",
    tools: ["Photoshop", "Figma"],
    coverImage: "/images/projects/Motorcycle Sticker.png",
    images: [
      "/images/projects/Motorcycle Sticker.png"
    ]
  },
      {
    slug: "Pubmats 2",
    title: "Pubmats 2",
    category: "Social Media Campaign",
    year: "2026",
    role: "Graphic Designer",
    description: "A series of editorial posters exploring the relationship between Swiss graphic design principles and modern web brutalism.",
    tools: ["Photoshop", "Figma"],
    coverImage: "/images/projects/pubmats 2.jpg",
    images: [
      "/images/projects/pubmats 2.jpg"
    ]
  },
      {
    slug: "Posters",
    title: "Posters",
    category: "Posters",
    year: "2026",
    role: "Graphic Designer",
    description: "A series of posters that i made for a school event.",
    tools: ["Photoshop", "Figma"],
    coverImage: "/images/projects/poster design.jpg",
    images: [
      "/images/projects/poster design.jpg"
    ]
  },
      {
    slug: "Corporation",
    title: "Corporation",
    category: "Corporation",
    year: "2026",
    role: "Graphic Designer",
    description: "A series of posters for a corporation.",
    tools: ["Photoshop", "Figma"],
    coverImage: "/images/projects/corporation.jpg",
    images: [
      "/images/projects/corporation.jpg"
    ]
  },
      {
    slug: "Pubmats",
    title: "Pubmats",
    category: "Social Media Campaign",
    year: "2026",
    role: "Graphic Designer",
    description: "A series of editorial posters exploring the relationship between Swiss graphic design principles and modern web brutalism.",
    tools: ["Photoshop", "Figma"],
    coverImage: "/images/projects/pubmats 1.jpg",
    images: [
      "/images/projects/pubmats 1.jpg"
    ]
  },

  {
    slug: "xforce",
    title: "XFORCE",
    category: "Brand Identity",
    year: "2026",
    role: "Graphic Designer",
    description: "A complete brand identity redesign for a modern urban food delivery service. The goal was to create a vibrant, energetic visual system that stands out in a crowded market.",
    tools: ["Illustrator", "Photoshop", "Figma"],
    coverImage: "/images/projects/XFORCE.jpg",
    images: [
      "/images/projects/XFORCE.jpg"
    ]
  },
  {
    slug: "project-02",
    title: "PROJECT 02",
    category: "Social Media Campaign",
    year: "2025",
    role: "Art Director",
    description: "An exploratory social media campaign for a conceptual tech startup focused on space exploration and satellite data.",
    tools: ["Photoshop", "After Effects", "Figma"],
    coverImage: "/images/projects/IMG_3168.jpeg",
    images: [
      "/images/projects/IMG_3168.jpeg"
    ]
  },
  {
    slug: "triton",
    title: "TRITON",
    category: "UI/UX Concept",
    year: "2025",
    role: "UI/UX Designer",
    description: "A conceptual redesign for an architecture firm's portfolio website. The focus was on minimalism, strong typography, and large imagery.",
    tools: ["Figma", "Next.js", "Tailwind CSS"],
    coverImage: "/images/projects/triton.jpg",
    images: [
      "/images/projects/triton.jpg"
    ]
    },
];
