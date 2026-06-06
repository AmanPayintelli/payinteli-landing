"use client";

import Container from "@/components/container";

import SectionHeader from "@/components/section-header";
import { DeviceIntelligence } from "@/components/ui/device-intelligence";
import { TransactionFlow } from "@/components/ui/user-transaction-flow";

const shieldFeatures = [
  {
    title: "Transactional Behavior Intelligence",
    description:
      "Detect suspicious activity by analyzing user behavior patterns like clicks, navigation, transaction habits, and anomalies in real time.",
    feature: (
      <div>
        <TransactionFlow />
      </div>
    ),
  },
  {
    title: "Device Intelligence.",
    description:
      "Identify high-risk devices using device fingerprinting, spoof detection, VPN/proxy signals, and suspicious environment checks.",
    feature: (
      <div>
        <DeviceIntelligence />{" "}
      </div>
    ),
  },
];

const ShieldFeatures = () => {
  return (
    <section className="w-full">
      <Container className="border-x">
        <SectionHeader
          label="[ Platform ]"
          title={
            <>
              Fraud protection powered by intelligence,{" "}
              <span className="text-primary">not rules.</span>
            </>
          }
          description="Go beyond static fraud checks with real-time behavioral insights and device intelligence that adapt to evolving threats automatically."
        />
      </Container>

      <Container className="border-x">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {shieldFeatures.map((item, index) => (
            <div
              key={index}
              className={`group relative flex min-h-85 flex-col p-4 sm:min-h-90 sm:p-5 md:min-h-95 md:p-6 lg:min-h-100 lg:p-7 ${
                index === 0 ? "md:border-r" : ""
              }`}
            >
              <div className="pr-7 text-lg font-medium tracking-tight text-text-brand transition-colors duration-300 sm:text-xl">
                {item.title}
              </div>

              <p className="w-full py-2 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>

              <div className="mt-2 min-h-47.5 flex-1 overflow-hidden sm:min-h-51.25 md:min-h-55 lg:min-h-57.5">
                {item.feature}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ShieldFeatures;
