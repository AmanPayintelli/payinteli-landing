import HeroContainer from "./ui/hero-container";

export default function Hero() {
  return (
    <HeroContainer
      titleLines={["The Future of Payments", "Isn't Just Fast."]}
      animatedPrefix="It's"
      animatedWords={[
        "Smart.",
        "Adaptive.",
        "Predictive.",
        "Optimized.",
        "AI-Driven.",
      ]}
      description="Define your payments with precision. Seamlessly optimize routing, improve approvals, reduce fraud, and unlock growth — all in one place."
      imageSrc="/heroSection-img2.png"
      imageAlt="Payments platform visual"
      primaryButtonTitle="Request your Free Assesment"
      secondaryButtonTitle="Get Started"
    />
  );
}
