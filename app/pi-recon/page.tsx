import ReconProductFeatures from "@/components/products/recon/product-features";
import ReconHero from "@/components/products/recon/reconHero";
import SeparatorContainer from "@/components/separator-container";

const PiRecon = () => {
  return (
    <>
      <ReconHero />
      <SeparatorContainer height="h-16 md:h-20" />
      <ReconProductFeatures />
      <SeparatorContainer height="h-16 md:h-20" />
    </>
  );
};

export default PiRecon;
