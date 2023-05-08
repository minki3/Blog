import { Metadata } from "next";
import Profile from "../Profile/profile";

const TITLE_CLASS = "text-2xl font-bold, text-gray-800 my-2";

export const metadata: Metadata = {
  title: "about me",
  description: "나의 소개",
};

export default function About() {
  return (
    <>
      <Profile />
      <section className="bg-gary-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who AM I?</h2>
        <p>개발을 사랑하는 프론트엔드 개발자</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Javascript
          <br />
          Git, VS Code
        </p>
      </section>
    </>
  );
}
