import HeroContainer from "@/components/ui/hero-container";

const ReconHero = () => {
  return (
    <HeroContainer
      eyebrow="[ Pi Recon ]"
      titleLines={["Reconcile Smarter"]}
      bottomTitle="Close Books Faster."
      description="AI-powered reconciliation across banks, PSPs, and ledgers. Detect mismatches instantly, generate audit-ready reports, and reduce manual finance work."
      secondaryButtonTitle="Get Started"
      primaryButtonTitle="Book a Demo"
      imageSrc="/recon-hero.png"
      imageAlt="Pi Recon reconciliation visual"
    />
  );
};

export default ReconHero;
