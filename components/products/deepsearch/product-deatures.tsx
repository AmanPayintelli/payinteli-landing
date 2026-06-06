import { FeatureImage } from "../feature-img";
import ProductFeatureContainer from "../product-feature-container";
import SeparatorContainer from "@/components/separator-container";

const DeepSearchProductFeatures = () => {
  return (
    <div>
      {" "}
      <ProductFeatureContainer
        title="Conversational AI."
        description="Ask natural language questions and get instant, actionable insights without SQL or dashboards."
        rightComponent={
          <FeatureImage src="/ds-1.png" alt="Intelligent Adaptive Routing" />
        }
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        title="Source Agnostic"
        reverse
        description="Connect to any database On-prem or Cloud, switch instantly, integrated Intelligence at your fingertips."
        rightComponent={
          <FeatureImage
            src="/source-agnostic.png"
            alt="Intelligent Adaptive Routing"
          />
        }
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        title="Predictive Intelligence."
        description="Spot churn risks, fraud patterns, and growth opportunities before they happen with AI forecasting."
        rightComponent={
          <FeatureImage src="/ds-2.png" alt="Intelligent Adaptive Routing" />
        }
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        title="Empower Every Team."
        reverse
        description="Give marketing, finance, and ops the power to make smarter, faster decisions—no analysts required."
        rightComponent={
          <FeatureImage src="/ds-3.png" alt="Intelligent Adaptive Routing" />
        }
      />
    </div>
  );
};

export default DeepSearchProductFeatures;
