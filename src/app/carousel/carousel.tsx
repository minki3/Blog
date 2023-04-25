import Card from "../cardSection/card";
import { getNoneFeaturedPosts } from "../service/products";
import MultiCarousel from "./multiCarousel";

export default async function Carousel() {
  const posts = await getNoneFeaturedPosts();
  console.log(posts);
  return (
    <section className="p-5">
      <h2 className="text-3xl font-bold">You May Like !</h2>
      <MultiCarousel>
        {posts.map((items) => {
          const { id, title, description, date, category, path, featured } =
            items;
          return (
            <Card
              key={id}
              id={id}
              title={title}
              description={description}
              date={date}
              category={category}
              path={path}
              featured={featured}
            />
          );
        })}
      </MultiCarousel>
    </section>
  );
}
