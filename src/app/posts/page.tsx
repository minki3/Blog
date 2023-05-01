import { getCardData } from "../service/products";
import Filter from "./filter";

export default async function Posts() {
  const posts = await getCardData();
  const categories = [...new Set(posts.map((item) => item.category))];

  return (
    <Filter posts={posts} categories={categories}>
      <div></div>
    </Filter>
  );
}
