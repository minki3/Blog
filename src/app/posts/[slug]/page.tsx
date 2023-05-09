import { getPost } from "@/app/service/products";
import { notFound, redirect } from "next/navigation";
import PostContent from "../postContent";
import Image from "next/image";
import NextPrev from "../nextPrev";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: Props) {
  const { title, description } = await getPost(slug);
  return {
    title,
    description,
  };
}

export default async function PostsPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const { path, title, next, prev } = post;
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
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <NextPrev post={prev} type="prev" />}
        {next && <NextPrev post={next} type="next" />}
      </section>
    </article>
  );
}
