import Image from "next/image";
import Link from "next/link";
import profile from "../../../public/images/profile.jpg";
import { CardData } from "../service/products";

export default function Card({
  date,
  title,
  description,
  category,
  path,
}: CardData) {
  return (
    <Link href={`/posts/${path}`} className="shadow-lg rounded-2xl pb-3">
      <Image src={profile} alt={title} className="rounded-t-2xl" />
      <p className="text-end font-light text-sm pt-2 pr-2">{date}</p>
      <div className="flex flex-col items-center">
        <h1 className=" text-base pb-2">{title}</h1>
        <h2 className="font-light px-2 pb-5 text-sm w-full truncate">
          {description}
        </h2>
        <h3 className="text-center text-xs bg-black text-white rounded-lg w-20 p-0.5">
          {category}
        </h3>
      </div>
    </Link>
  );
}
