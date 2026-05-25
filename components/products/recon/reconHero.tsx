import HeroContainer from "@/components/ui/hero-container";

const ReconHero = () => {
  return (
    <HeroContainer
      eyebrow="[ Pi Recon ]"
      titleLines={["AI-Powered", "Reconciliation"]}
      bottomTitle="Flawless Books. Zero Chaos."
      description="Automate reconciliation across banks, PSPs, and ledgers with AI-powered precision. Spot anomalies instantly, generate audit-ready reports, and give your finance team time back."
      secondaryButtonTitle="Get Started"
      primaryButtonTitle="Book a Demo"
      imageSrc="/recon-hero.png"
      imageAlt="Pi Recon reconciliation visual"
    />
  );
};

export default ReconHero;
