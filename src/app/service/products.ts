import { readFile } from "fs/promises";
import path from "path";

export interface CardData {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export const getCardData = async (): Promise<CardData[]> => {
  const filePath = path.join(process.cwd(), "public/data", "data.json");
  return readFile(filePath, "utf-8")
    .then<CardData[]>(JSON.parse)
    .then((data) => data.sort((a, b) => (a.date > b.date ? -1 : 1)));
};

export const getFeaturedPosts = async (): Promise<CardData[]> => {
  return getCardData().then((posts) => posts.filter((post) => post.featured));
};

export const getNoneFeaturedPosts = async (): Promise<CardData[]> => {
  return getCardData().then((posts) => posts.filter((post) => !post.featured));
};
