import Image from "next/image";
import profile from "../../../public/images/profile.jpg";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="flex flex-col items-center p-5">
      <Image
        src={profile}
        width={250}
        height={250}
        alt="profile"
        className="rounded-full"
        priority
      />
      <div className="font-bold pt-3 text-xl cursor-default">{`Hi, I'm minki`}</div>
      <div className="font-light p-1 text-s cursor-default">
        Front-End Engineer
      </div>
      <button className="border rounded-full bg-black text-white mt-2 hover:bg-white hover:text-black">
        <Link href="/contact" className="p-5">
          contact me
        </Link>
      </button>
    </div>
  );
}
