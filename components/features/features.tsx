"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import Container from "../container";
import SectionHeader from "../section-header";
import { featureDetails } from "./featuresDetails";
import DeepInsightsCard from "./deepInsights";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

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

      <Container className="border-x">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {featureDetails.map((item, index) => {
            const isLastRow =
              index >= featureDetails.length - (featureDetails.length % 3 || 3);

            const isClickable = item.isClickable;
            const isOpen = activeFeature === item.title;

            return (
              <div
                key={item.title}
                role={isClickable ? "button" : undefined}
                tabIndex={isClickable ? 0 : undefined}
                onClick={() => {
                  if (!isClickable) return;
                  setActiveFeature(item.title);
                }}
                onKeyDown={(event) => {
                  if (!isClickable) return;

                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveFeature(item.title);
                  }
                }}
                className={`group relative flex min-h-85 flex-col p-4 sm:min-h-90 sm:p-5 md:min-h-95 md:p-6 lg:min-h-100 lg:p-7 md:not-nth-[3n]:border-r ${
                  isLastRow ? "" : "border-b"
                } ${
                  isClickable
                    ? "cursor-pointer transition-colors hover:bg-primary/2"
                    : ""
                }`}
              >
                {isClickable && (
                  <ArrowUpRight className="absolute right-6 top-6 size-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary text-neutral-500" />
                )}

                <div
                  className={`pr-7 text-lg font-medium tracking-tight text-text-brand transition-colors duration-300 sm:text-xl ${
                    isClickable ? "group-hover:text-primary" : ""
                  }`}
                >
                  {item.title}
                </div>

                <p className="w-full py-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>

                <div className="mt-2 min-h-47.5 flex-1 overflow-hidden sm:min-h-51.25 md:min-h-55 lg:min-h-57.5">
                  {item.feature === "deep-insights" ? (
                    <DeepInsightsCard
                      open={isOpen}
                      onOpenChange={(open) => {
                        setActiveFeature(open ? item.title : null);
                      }}
                    />
                  ) : (
                    item.feature
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Features;
