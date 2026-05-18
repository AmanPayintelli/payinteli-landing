"use client";

import Container from "../container";
import FlyingOwlMascot from "../fyingmascot";
import SectionHeader from "../section-header";
import { featureDetails } from "./featuresDetails";

const Features = () => {
  return (
    <section className="w-full">
      <Container className="border-x">
        <SectionHeader
          label="[ Platform ]"
          title={
            <>
              The only payment ecosystem your business will{" "}
              <span className="text-primary">ever need.</span>
            </>
          }
          description="PayIntelli helps you track, analyze, and optimize your complete payment flow — from checkout to reconciliation — with intelligent automation."
        />
      </Container>
      {/* <FlyingOwlMascot /> */}

      <Container className="border-x">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {featureDetails.map((item) => (
            <div
              key={item.title}
              className="flex min-h-85 flex-col p-4 sm:min-h-90 sm:p-5 md:min-h-95 md:p-6 lg:min-h-100 lg:p-7 md:not-nth-[3n]:border-r border-b"
            >
              <div className="text-lg font-medium tracking-tight text-text-brand sm:text-xl">
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

export default Features;
