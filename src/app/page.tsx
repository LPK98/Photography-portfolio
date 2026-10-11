import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CategoryTiles from "@/components/home/CategoryTiles";
import CallToAction from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <CategoryTiles />
      <CallToAction />
    </>
  );
}
