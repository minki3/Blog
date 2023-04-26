interface Props {
  categories: string[];
  select: string;
  onClick: (select: string) => void;
}

export default function Categories({ categories, select, onClick }: Props) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-sky-500 mb-2 ">
        Category
      </h2>
      <ul>
        {categories.map((item) => {
          return (
            <li
              className={`cursor-pointer hover:text-sky-500 ${
                select === item && `text-sky-600`
              }`}
              key={item}
              onClick={() => onClick(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
