import HeroContainer from "@/components/ui/hero-container";
import React from "react";

const DeepSearchHero = () => {
  return (
    <HeroContainer
      eyebrow="[ Pi Deepsearch ]"
      titleLines={["Conversational", "Analytics"]}
      bottomTitle="Ask. Analyze. Act."
      description="Turn payment data into instant answers, predictions, and insights—without SQL, dashboards, or waiting on analysts."
      secondaryButtonTitle="Get Started"
      primaryButtonTitle="Book a Demo"
      imageSrc="/deep-hero.png"
      imageAlt="Pi Deepsearch conversational analytics visual"
    />
  );
};

export default DeepSearchHero;
