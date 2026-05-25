import ProductFeatureContainer from "../product-feature-container";
import SeparatorContainer from "@/components/separator-container";

const SymphonyProductFeatures = () => {
  return (
    <div>
      <ProductFeatureContainer
        title="Compare your presence in AI with your competitors"
        description="Get a clear and actionable overview on how often your brand is mentioned vs your competitors."
        rightComponent={<div>PlaceHolder</div>}
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        reverse
        title="Compare your presence in AI with your competitors"
        description="Get a clear and actionable overview on how often your brand is mentioned vs your competitors."
        rightComponent={<div>PlaceHolder</div>}
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        title="Compare your presence in AI with your competitors"
        description="Get a clear and actionable overview on how often your brand is mentioned vs your competitors."
        rightComponent={<div>PlaceHolder</div>}
      />
    </div>
  );
};

export default SymphonyProductFeatures;
