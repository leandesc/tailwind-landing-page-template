export const metadata = {
  title: "Endly - Your AI Voice Agent for Workplace Feedback",
  description: "Transform how your company collects and acts on employee feedback with Endly's AI-powered voice conversations. Get deeper insights, foster engagement, and drive meaningful change.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <BusinessCategories /> */}
      {/* <FeaturesPlanet /> */}
      {/* <LargeTestimonial /> */}
      <Cta />
    </>
  );
}
