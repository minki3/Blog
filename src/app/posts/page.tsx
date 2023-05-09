import { getCardData, getFeaturedPosts } from "../service/products";
import Filter from "./filter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "모든 글",
  description: "모든 글",
};

export default async function Posts() {
  const posts = await getCardData();
  const categories = [...new Set(posts.map((item) => item.category))];

  return <Filter posts={posts} categories={categories}></Filter>;
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((item) => ({ slug: item.path }));
}
