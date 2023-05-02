"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerType } from "./banner";

interface Formtype {
  from: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<Formtype>({
    from: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<BannerType | null>();

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setBanner({ message: "성공", state: "error" });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2 my-2 p-4 bg-slate-700 rounded-xl text-white "
      >
        <label htmlFor="from" className=" font-semibold">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          onChange={onChange}
          className="text-black"
        />
        <label htmlFor="subject" className=" font-semibold">
          Your Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          onChange={onChange}
          className="text-black"
        />
        <label htmlFor="message" className=" font-semibold">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={10}
          required
          onChange={onChange}
          className="text-black"
        />
        <button className="bg-yellow-300 hover:bg-yellow-600">Submit</button>
      </form>
    </section>
  );
}
