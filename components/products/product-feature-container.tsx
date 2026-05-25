import React from "react";
import Container from "../container";
import { ButtonPrimary, ButtonSecondary } from "../ui/buttonPrimary";

interface ProductFeatureContainerProps {
  eyebrow?: string;
  title: string;
  description: string;
  features?: string[];
  primaryButtonTitle?: string;
  secondaryButtonTitle?: string;
  rightComponent: React.ReactNode;
  reverse?: boolean;
}

const ProductFeatureContainer = ({
  eyebrow = "[ competitors ]",
  title,
  description,
  features,
  primaryButtonTitle = "Get Started",
  secondaryButtonTitle = "Book a Demo",
  rightComponent,
  reverse = false,
}: ProductFeatureContainerProps) => {
  return (
    <Container
      className={`grid min-h-120 w-full overflow-hidden border-x border-border bg-background ${
        reverse ? "md:grid-cols-[40fr_60fr]" : "md:grid-cols-[60fr_40fr]"
      }`}
    >
      {/* Content */}
      <section
        className={`relative flex h-full border-border px-5 py-12 md:px-0 md:py-0 ${
          reverse
            ? "md:col-start-2 md:border-l md:pl-12"
            : "md:col-start-1 md:border-r md:pl-12"
        }`}
      >
        <div
          className={`flex h-full w-full flex-col items-start justify-center border-border md:border-dashed ${
            reverse ? "md:border-r md:pr-12" : "md:border-l"
          }`}
        >
          <div className="max-w-xl">
            <span className="mb-5 inline-block font-mono text-sm font-light tracking-normal text-text-muted md:text-[11px]">
              {eyebrow}
            </span>

            <h2 className="text-[32px] font-medium leading-[1.12] tracking-tighter text-text-brand sm:text-[38px] md:text-[42px]">
              {title}
            </h2>

            <p className="mt-6 max-w-[95%] text-sm leading-6 tracking-tight text-text-muted sm:text-base sm:leading-7 md:text-[16px]">
              {description}
            </p>

            {features && features.length > 0 && (
              <div className="mt-7 space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-primary-soft text-[10px] font-semibold text-primary">
                      ✓
                    </span>
                    <span className="text-text-brand">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <ButtonSecondary
                title={secondaryButtonTitle}
                textSize="text-sm font-semibold"
                height="h-11"
                className="w-full rounded-lg px-5 shadow-sm hover:shadow-md sm:w-auto"
              />

              <ButtonPrimary
                title={primaryButtonTitle}
                textSize="text-sm font-semibold"
                height="h-11"
                className="w-full rounded-lg bg-white px-5 shadow-sm hover:bg-primary-soft hover:shadow-md sm:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section
        className={`relative min-h-105 overflow-hidden bg-primary-soft/30 ${
          reverse ? "md:col-start-1 md:row-start-1" : "md:col-start-2"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,hsl(var(--background)/0.85),transparent_30%),linear-gradient(180deg,hsl(var(--primary-soft))_0%,hsl(var(--background))_52%,hsl(var(--primary-soft))_100%)]" />

        <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(hsl(var(--text-brand))_1px,transparent_1px)] bg-size-[4px_4px]" />

        <div className="relative flex h-full min-h-105 items-center justify-center p-6 sm:p-10">
          {rightComponent}
        </div>
      </section>
    </Container>
  );
};

export default ProductFeatureContainer;
