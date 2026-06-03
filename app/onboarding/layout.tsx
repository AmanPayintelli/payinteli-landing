import { OnboardingDataProvider } from "@/context/onboarding/onboarding-context";
import { OnboardingStepProvider } from "@/context/onboarding/onboarding-step-context";

const OnboardingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <OnboardingStepProvider>
      <OnboardingDataProvider>{children}</OnboardingDataProvider>
    </OnboardingStepProvider>
  );
};

export default OnboardingLayout;
