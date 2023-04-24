import Profile from "./Profile/profile";
import CardSection from "./cardSection/cardSection";

export default function Home() {
  return (
    <section>
      <Profile />
      {/* @ts-expect-error Server Component */}
      <CardSection />
    </section>
  );
}
