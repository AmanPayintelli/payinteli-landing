import ShieldProductFeatures from "@/components/products/shield/product-features";
import ShieldHero from "@/components/products/shield/shield-hero";
import SeparatorContainer from "@/components/separator-container";
import Testimonials from "@/components/testimonials";

const Shield = () => {
  return (
    <>
      <ShieldHero />
      <SeparatorContainer height="h-16 md:h-20" />
      <ShieldProductFeatures />
      <SeparatorContainer height="h-16 md:h-20" />
      <Testimonials />
      <SeparatorContainer height="h-16 md:h-20" />
    </>
  );
};

export default Shield;
