import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export interface CardData {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export type PostData = CardData & {
  content: string;
  next: CardData | null;
  prev: CardData | null;
};

export const getCardData = cache(async () => {
  const filePath = path.join(process.cwd(), "public/data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<CardData[]>(JSON.parse)
    .then((data) => data.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export const getFeaturedPosts = async (): Promise<CardData[]> => {
  return getCardData().then((posts) => posts.filter((post) => post.featured));
};

export const getNoneFeaturedPosts = async (): Promise<CardData[]> => {
  return getCardData().then((posts) => posts.filter((post) => !post.featured));
};

export const getPost = async (fileName: string): Promise<PostData> => {
  const filePath = path.join(
    process.cwd(),
    "public/data/posts",
    `${fileName}.md`
  );
  const posts = await getCardData();
  const post = posts.find((post) => post.path === fileName);
  if (!post) throw new Error(`${fileName}에 해당하는 데이터가 없음.`);

  const index = posts.indexOf(post);

  const next = index > 0 ? posts[index - 1] : null;

  const prev = index < posts.length ? posts[index + 1] : null;

  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
};
