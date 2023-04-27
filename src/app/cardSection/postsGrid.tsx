import { CardData } from "../service/products";
import Card from "./card";

interface Props {
  items: CardData[];
}

export default function PostsGrid({ items }: Props) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((items) => {
        const { path } = items;
        return <Card key={path} items={items}></Card>;
      })}
    </div>
  );
}
