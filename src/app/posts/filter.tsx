"use client";
import { useState } from "react";
import CardSection from "../cardSection/cardSection";
import PostsGrid from "../cardSection/postsGrid";
import { CardData } from "../service/products";
import Categories from "./categories";

interface Props {
  posts: CardData[];
  categories: string[];
}
const ALL_POSTS = "All Posts";

export default function Filter({ posts, categories }: Props) {
  const [select, setSelect] = useState(ALL_POSTS);
  const filterd =
    select === ALL_POSTS
      ? posts
      : posts.filter((item) => item.category === select);
  return (
    <section className="flex">
      <PostsGrid items={filterd} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        select={select}
        onClick={setSelect}
      />
    </section>
  );
}
