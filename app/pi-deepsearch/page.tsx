import DeepSearchHero from "@/components/products/deepsearch/deepsearch-hero";
import DeepSearchProductFeatures from "@/components/products/deepsearch/product-deatures";
import SeparatorContainer from "@/components/separator-container";
import Testimonials from "@/components/testimonials";

const DeepSearch = () => {
  return (
    <>
      <DeepSearchHero />
      <SeparatorContainer height="h-16 md:h-20" />
      <DeepSearchProductFeatures />
      <SeparatorContainer height="h-16 md:h-20" />
      <Testimonials />
      <SeparatorContainer height="h-16 md:h-20" />
    </>
  );
};

export default DeepSearch;
