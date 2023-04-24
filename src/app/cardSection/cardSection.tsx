import Card from "./card";
import { getFeaturedPosts } from "../service/products";

export default async function CardSection() {
  const data = await getFeaturedPosts();
  console.log(data);
  return (
    <section className="p-5">
      <p className="font-bold my-3 text-3xl">Featured Posts</p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((items) => {
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
            ></Card>
          );
        })}
      </div>
    </section>
  );
}
