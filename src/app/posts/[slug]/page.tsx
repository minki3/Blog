import { getCardData, getPost } from "@/app/service/products";
import { notFound, redirect } from "next/navigation";
import MarkdownViewer from "./markdownViewer";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";

interface Props {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: Props) {
  return {
    title: params.slug,
  };
}

export default async function PostsPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const { title, description, date, category, path, featured, content } = post;
  console.log(post);
  if (!post) {
    return notFound();
  }
  return (
    <article className=" rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-600">
          <AiTwotoneCalendar />
          <p className="font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
        <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getCardData();
  return posts.map((item) => ({ slug: item.path }));
}
