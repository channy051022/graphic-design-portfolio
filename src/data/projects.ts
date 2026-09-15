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
    slug: "custom-sticker",
    title: "Custom Sticker",
    category: "Sticker",
    year: "2026",
    role: "Graphic Designer",
    description: "A series of stickers for a custom sticker business.",
    tools: ["Adobe Illustrator",],
    coverImage: "/images/projects/bike1.jpg",
    images: [
      "/images/projects/bike1.jpg",
      "/images/projects/bike2.jpg",
      "/images/projects/bike3.jpg",
    ]
  },
     {
    slug: "Business Branding",
    title: "Business Branding",
    category: "Business Branding",
    year: "2026",
    role: "Graphic Designer",
    description: "A series of Business Branding for a Business.",
    tools: ["Photoshop", "Figma"],
    coverImage: "/images/projects/brand poster 3.jpg",
    images: [
      "/images/projects/brand poster 3.jpg",
      "/images/projects/brand poster 2.jpg",
      "/images/projects/brand poster 1.jpg",
    ]
  },
        {
    slug: "pubmats",
    title: "Pubmats",
    category: "Social Media Campaign",
    year: "2026",
    role: "Graphic Designer",
    description: "A series of editorial posters exploring the relationship between Swiss graphic design principles and modern web brutalism.",
    tools: ["Photoshop", "Figma"],
    coverImage: "/images/projects/pubmats 1.jpg",
    images: [
      "/images/projects/pubmats 1.jpg",
      "/images/projects/pubmats 2.jpg",
      "/images/projects/pubmats 3.jpg",
      "/images/projects/pubmats 4.jpg",
      "/images/projects/pubmats 5.jpg"
    ]
  },
      {
    slug: "posters",
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
  }
  ,
];
