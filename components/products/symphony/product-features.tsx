import ProductFeatureContainer from "../product-feature-container";
import SeparatorContainer from "@/components/separator-container";

const SymphonyProductFeatures = () => {
  return (
    <div>
      <ProductFeatureContainer
        title="Intelligent Adaptive Routing."
        description="AI-driven dynamic routing that selects the most efficient provider for each transaction, in real time."
        rightComponent={<div>PlaceHolder</div>}
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        reverse
        title="Automatic Failover."
        description="eamless fallback to backup providers ensures zero downtime and uninterrupted transactions."
        rightComponent={<div>PlaceHolder</div>}
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        title="Contractual Fillfilment"
        description="No manual adujustments or switchovers. Contractual obligation are handled intelligently by our algorithm without compromising on performance & conversions"
        rightComponent={<div>PlaceHolder</div>}
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        reverse
        title="Cost Efficiency"
        description="Reduce transaction costs by optimizing provider usage based on performance and fees."
        rightComponent={<div>PlaceHolder</div>}
      />
    </div>
  );
};

export default SymphonyProductFeatures;
