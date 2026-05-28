import ProductFeatureContainer from "../product-feature-container";
import SeparatorContainer from "@/components/separator-container";
import NeuralNetwork from "@/components/ui/nodes";
import ThreatRadar from "@/components/ui/radar";

const ShieldProductFeatures = () => {
  return (
    <div>
      <ProductFeatureContainer
        title="Real-Time Defense"
        description="Our highly adaptive and custom AI models detect and block potential fraudulent transacrions instantly - before it starts to impact your revenue."
        rightComponent={<ThreatRadar />}
        eyebrow="Pi-Shied"
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        reverse
        title="Adaptive Protection"
        description="Continuously learns and evolves to stop new fraud patterns without disrupting genuine customers."
        rightComponent={<NeuralNetwork />}
      />
      <SeparatorContainer />
    </div>
  );
};

export default ShieldProductFeatures;
