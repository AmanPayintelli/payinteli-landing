import ProductFeatureContainer from "../product-feature-container";
import SeparatorContainer from "@/components/separator-container";
import { FeatureImage } from "../feature-img";

const SymphonyProductFeatures = () => {
  return (
    <div>
      <ProductFeatureContainer
        title="Intelligent Adaptive Routing."
        description="AI-driven dynamic routing that selects the most efficient provider for each transaction, in real time."
        rightComponent={
          <FeatureImage
            src="/adaptive.png"
            alt="Intelligent Adaptive Routing"
          />
        }
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        reverse
        title="Automatic Failover."
        description="Seamless fallback to backup providers ensures zero downtime and uninterrupted transactions."
        rightComponent={
          <FeatureImage
            src="/automatic.png"
            alt="Intelligent Adaptive Routing"
          />
        }
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        title="Contractual FullFilment"
        description="No manual adujustments or switchovers. Contractual obligation are handled intelligently by our algorithm without compromising on performance & conversions"
        rightComponent={
          <FeatureImage
            src="/contractual.png"
            alt="Intelligent Adaptive Routing"
          />
        }
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        reverse
        title="Cost Efficiency"
        description="Reduce transaction costs by optimizing provider usage based on performance and fees."
        rightComponent={
          <FeatureImage
            src="/cost-efficiency.png"
            alt="Intelligent Adaptive Routing"
          />
        }
      />
    </div>
  );
};

export default SymphonyProductFeatures;
