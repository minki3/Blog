import { getCardData, getPost } from "@/app/service/products";
import { notFound, redirect } from "next/navigation";

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
  console.log(post);
  if (!post) {
    return notFound();
  }
  return (
    <section>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getCardData();
  return posts.map((item) => ({ slug: item.path }));
}
