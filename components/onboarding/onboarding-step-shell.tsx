import React from "react";
import { cn } from "@/lib/utils";

interface OnboardingStepShellProps {
  children: React.ReactNode;
  className?: string;
}

const OnboardingStepShell = ({
  children,
  className,
}: OnboardingStepShellProps) => {
  return (
    <div
      className={cn(
        "h-137.5 overflow-y-auto px-1 pr-2",
        "scrollbar-thin scrollbar-thumb-primary-soft scrollbar-track-transparent",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-2xl pb-2">{children}</div>
    </div>
  );
};

export default OnboardingStepShell;
