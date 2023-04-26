import Card from "./card";
import { getFeaturedPosts } from "../service/products";
import PostsGrid from "./postsGrid";

export default async function CardSection() {
  const data = await getFeaturedPosts();
  console.log(data);
  return (
    <section className="p-5">
      <p className="font-bold my-3 text-3xl">Featured Posts</p>
      <PostsGrid items={data} />
    </section>
  );
}
