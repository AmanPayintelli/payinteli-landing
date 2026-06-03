"use client";

import React, { createContext, useContext, useState } from "react";

interface OnboardingStepContextType {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
}

const OnboardingStepContext = createContext<OnboardingStepContextType | null>(
  null,
);

export const OnboardingStepProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (step: number) => {
    setCurrentStep(Math.min(Math.max(step, 1), 5));
  };

  return (
    <OnboardingStepContext.Provider
      value={{ currentStep, nextStep, prevStep, goToStep }}
    >
      {children}
    </OnboardingStepContext.Provider>
  );
};

export const useOnboardingStep = () => {
  const context = useContext(OnboardingStepContext);

  if (!context) {
    throw new Error(
      "useOnboardingStep must be used inside OnboardingStepProvider",
    );
  }

  return context;
};
