import SeparatorContainer from "@/components/separator-container";
import ProductFeatureContainer from "../product-feature-container";
import { FeatureImage } from "../feature-img";

const ReconProductFeatures = () => {
  return (
    <div>
      {" "}
      <ProductFeatureContainer
        title="Automated Reconciliation"
        description="Match transactions across banks, PSPs, and ledgers automatically with unmatched accuracy."
        rightComponent={
          <FeatureImage src="/recon-1.png" alt="Intelligent Adaptive Routing" />
        }
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        reverse
        title="Real-Time Anomaly Detection"
        description="Instantly spot and resolve mismatches or irregularities to prevent costly errors."
        rightComponent={
          <FeatureImage src="/recon-2.png" alt="Intelligent Adaptive Routing" />
        }
      />
      <SeparatorContainer />
      <ProductFeatureContainer
        title="Audit-Ready Reports"
        description="Generate clear, compliant reports on-demand to simplify financial audits and compliance checks."
        rightComponent={
          <FeatureImage src="/recon-3.png" alt="Intelligent Adaptive Routing" />
        }
      />
    </div>
  );
};

export default ReconProductFeatures;
