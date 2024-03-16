import Hero from "@/components/home/Hero/Hero";
import SectionCTA from "@/components/home/SectionCTA/SectionCTA";
import SectionCamp from "@/components/home/SectionCamp/SectionCamp";
import SectionFeatures from "@/components/home/SectionFeatures/SectionFeatures";
import SectionGuide from "@/components/home/SectionGuide/SectionGuide";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionCamp />
      <SectionGuide />
      <SectionFeatures />
      <SectionCTA />
    </>
  );
}
