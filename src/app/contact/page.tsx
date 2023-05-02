import { AiFillBook, AiFillGithub } from "react-icons/ai";
import ContactForm from "./contactForm";

const LINKS = [
  { icon: <AiFillGithub />, url: "https://github.com/minki3" },
  { icon: <AiFillBook />, url: "https://velog.io/@minki3" },
];

export default function Contact() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me!</h2>
      <p>rlaalsrl2001@gmail.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            className="text-5xl hover:text-yellow-400"
          >
            {item.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold m-8">Or Send Me an email</h2>
      <ContactForm />
    </section>
  );
}
