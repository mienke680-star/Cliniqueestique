import { Hero } from "@/components/Hero";
import { BrandStory } from "@/components/BrandStory";
import { TreatmentExplorer } from "@/components/TreatmentExplorer";
import { FindYourRitual } from "@/components/FindYourRitual";
import { Testimonials } from "@/components/Testimonials";
import { LocationSection } from "@/components/LocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <TreatmentExplorer />
      <FindYourRitual />
      <Testimonials />
      <LocationSection />
    </>
  );
}
