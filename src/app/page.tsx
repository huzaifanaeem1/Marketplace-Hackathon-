import {
  ContainerFluid,
  HeroSection,
  HeroSection2,
  HomeBestSeller,
  FeaturedPosts,
  EditorsPick,
} from "@/components/";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <EditorsPick />
      <HomeBestSeller />
      <HeroSection2 />
      <ContainerFluid />
      <FeaturedPosts />
    </div>
  );
}
