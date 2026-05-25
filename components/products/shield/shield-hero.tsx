import HeroContainer from "@/components/ui/hero-container";

const ShieldHero = () => {
  return (
    <HeroContainer
      eyebrow="[ Pi Shield ]"
      titleLines={["Intelligent", "Fraud Protection"]}
      bottomTitle="Predict. Prevent. Protect."
      description="Real-time AI fraud defense that predicts threats, blocks suspicious activity instantly, reduces chargebacks, and adapts continuously—without disrupting genuine customers."
      secondaryButtonTitle="Get Started"
      primaryButtonTitle="Book a Demo"
      imageSrc="/shield-hero.png"
      imageAlt="Pi Shield fraud protection visual"
    />
  );
};

export default ShieldHero;
