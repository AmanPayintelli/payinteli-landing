import HeroContainer from "@/components/ui/hero-container";

const SymphonyHero = () => {
  return (
    <HeroContainer
      eyebrow="[ Pi Symphony ]"
      titleLines={["Orchestrating", "Intelligent Payments"]}
      bottomTitle="Built to Maximize Conversion."
      description="AI-powered precision that intelligently routes every transaction, reduces costs, handles provider failover, and helps meet contractual fulfilment without compromising performance."
      secondaryButtonTitle="Get Started"
      primaryButtonTitle="Book a Demo"
      imageSrc="/symphony-hero.png"
      imageAlt="Pi Symphony payment orchestration visual"
    />
  );
};

export default SymphonyHero;
