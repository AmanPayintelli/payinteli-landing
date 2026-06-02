import ReconProductFeatures from "@/components/products/recon/product-features";
import ReconHero from "@/components/products/recon/reconHero";
import ShieldProductFeatures from "@/components/products/shield/product-features";
import SeparatorContainer from "@/components/separator-container";
import Testimonials from "@/components/testimonials";

const PiRecon = () => {
  return (
    <>
      <ReconHero />
      <SeparatorContainer height="h-16 md:h-20" />
      <ReconProductFeatures />
      <SeparatorContainer height="h-16 md:h-20" />
      {/* <Testimonials /> */}
      <SeparatorContainer height="h-16 md:h-20" />
    </>
  );
};

export default PiRecon;
