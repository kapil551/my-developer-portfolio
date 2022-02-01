export interface Project {
  name: string;
  points: string[];
  image?: StaticImageData;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
  id: number;
}

export type Category = "react" | "express" | "mongo" | "socket" | "tailwind" | "next" | "react-native" | "HTML5" | "CSS3";

export interface Certificate {
  id: number;
  title: string;
  image: StaticImageData;
  certificateLink: string;
  organisation: string;
  duration: string;
}
