import Link from "next/link";

const BLOG_INFORMATIN = [
  { id: 1, category: "home", href: "/" },
  { id: 2, category: "about", href: "/about" },
  { id: 3, category: "posts", href: "/posts" },
  { id: 4, category: "contact", href: "/contact" },
];

export default function Nav() {
  return (
    <nav className="flex justify-between items-center border-b py-6">
      <Link href="/" className="text-3xl pl-3 font-bold">
        Blog
      </Link>
      <div>
        {BLOG_INFORMATIN.map((items) => {
          const { id, category, href } = items;
          return (
            <Link href={`${href}`} key={id} className="p-2">
              {category}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
