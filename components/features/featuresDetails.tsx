import PiInsightsCard from "../fyingmascot";
import { StackCards } from "../ui/stack-cards";
import StackMovingCards from "../ui/stack-moving-cards";
import { ConversionChartCard } from "./conversion-uplift";
import DeepInsightsCard from "./deepInsights";
import { GlobeDemo } from "./globe-demo";
import MultiAquirer from "./multi-aquirer";

export const featureDetails = [
  {
    title: "40%+ Fraud Reduction",
    description:
      "Understand which citations drive visibility and discover what content gets recommended.",
    feature: (
      <div>
        <StackCards />
      </div>
    ),
  },
  {
    title: "Global Reach",
    description:
      "Accept global payments with local methods, multi-currency support, and smarter routing.",
    feature: (
      <div>
        <GlobeDemo />
      </div>
    ),
  },
  {
    title: "15% Conversion Uplift",
    description:
      "Increase approvals and reduce checkout drop-offs with smarter payment routing.",
    feature: (
      <div>
        <ConversionChartCard />
      </div>
    ),
  },

  {
    title: "Seamless Multi-Acquirer Integration",
    description:
      "Connect multiple acquirers and route payments through the best-performing provider.",
    feature: (
      <div>
        <MultiAquirer />
      </div>
    ),
  },
  {
    title: "AI-Driven Payment Orchestration",
    description:
      "Automatically route every payment through the smartest, fastest, and safest path.",
    feature: (
      <div>
        <StackMovingCards />
      </div>
    ),
  },
  {
    title: "Deep Insights",
    description:
      "Track key payment metrics, trends, and alerts in one clear view.",
    feature: (
      <div>
        <DeepInsightsCard />
      </div>
    ),
  },
];
