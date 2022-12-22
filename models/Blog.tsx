import { StaticImageData } from "next/image";

export type BlogType = {
  id: number;
  thumbnail: StaticImageData;
  title: string;
  description: string;
  date: string;
};
