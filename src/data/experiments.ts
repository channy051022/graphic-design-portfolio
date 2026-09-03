export interface Experiment {
  id: string;
  title: string;
  type: string;
  image: string;
}

export const experiments: Experiment[] = [
  {
    id: "exp-01",
    title: "Liquid Distortion",
    type: "WebGL",
    image: "/images/projects/placeholder.jpg",
  },
  {
    id: "exp-02",
    title: "Kinetic Typography",
    type: "Motion",
    image: "/images/projects/placeholder.jpg",
  },
  {
    id: "exp-03",
    title: "Brutalism UI",
    type: "Concept",
    image: "/images/projects/placeholder.jpg",
  },
  {
    id: "exp-04",
    title: "Generative Grid",
    type: "Creative Coding",
    image: "/images/projects/placeholder.jpg",
  }
];
