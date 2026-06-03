import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

interface OnboardingProgressProps {
  steps: {
    id: number;
    label: string;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  currentStep: number;
}

const OnboardingProgress = ({
  steps,
  currentStep,
}: OnboardingProgressProps) => {
  const progress = (currentStep / steps.length) * 100;
  const activeStep = steps.find((step) => step.id === currentStep);

  return (
    <div className="sticky top-0 z-20 border-b border-border bg-white/90 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3 px-3 py-3 md:px-5">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-primary">
            Step {currentStep} of {steps.length}
          </p>
          <h3 className="truncate text-sm font-semibold text-text-brand">
            {activeStep?.title}
          </h3>
        </div>

        <div className="hidden flex-1 items-center justify-center gap-2 md:flex">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div
                key={step.id}
                className={cn(
                  "flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-text-muted transition-all",
                  isActive && "border-primary bg-primary text-white",
                  isCompleted && "border-primary bg-primary-soft text-primary",
                )}
              >
                <span
                  className={cn(
                    "flex size-5 items-center justify-center rounded-full bg-primary-soft text-primary",
                    isActive && "bg-white/20 text-white",
                    isCompleted && "bg-primary text-white",
                  )}
                >
                  {isCompleted ? (
                    <Check className="size-3" />
                  ) : (
                    <Icon className="size-3" />
                  )}
                </span>

                {step.label}
              </div>
            );
          })}
        </div>

        <p className="shrink-0 text-xs font-semibold text-text-muted">
          {Math.round(progress)}%
        </p>
      </div>

      <div className="h-1 bg-primary-soft">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default OnboardingProgress;
