import Card from "../cardSection/card";
import { getNoneFeaturedPosts } from "../service/products";
import MultiCarousel from "./multiCarousel";

export default async function Carousel() {
  const posts = await getNoneFeaturedPosts();
  return (
    <section className="p-5">
      <h2 className="text-3xl font-bold">You May Like !</h2>
      <MultiCarousel>
        {posts.map((items) => {
          const { id } = items;
          return <Card key={id} items={items} />;
        })}
      </MultiCarousel>
    </section>
  );
}
