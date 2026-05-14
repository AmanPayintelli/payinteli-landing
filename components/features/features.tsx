"use client";
import Container from "../container";
import Heading from "../heading";
import SectionHeader from "../section-header";
import { motion } from "motion/react";
import { StackCards } from "../ui/stack-cards";
import { featureDetails } from "./featuresDetails";

const Features = () => {
  return (
    <section className="w-full">
      <Container className="border-x border-neutral-200/70">
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

      <Container className="h-screen border-x border-border">
        <div className="h-full overflow-hidden border-b">
          <div className="grid grid-cols-1 border-b md:grid-cols-3">
            {featureDetails.map((item) => (
              <div
                key={item.title}
                className="flex min-h-105 flex-col border-b p-4 md:min-h-[50vh] md:border-r md:p-7"
              >
                <div className="text-xl font-medium tracking-tight">
                  {item.title}
                </div>

                <p className="w-full py-2 text-sm text-text-muted">
                  {item.description}
                </p>

                {item.feature}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
