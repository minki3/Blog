import Profile from "./Profile/profile";
import CardSection from "./cardSection/cardSection";
import Carousel from "./carousel/carousel";

export default function Home() {
  return (
    <section>
      <Profile />
      {/* @ts-expect-error Server Component */}
      <CardSection />
      {/* @ts-expect-error Server Component */}
      <Carousel />
    </section>
  );
}
