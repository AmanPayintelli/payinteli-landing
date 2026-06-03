"use client";

import Container from "@/components/container";
import SeparatorContainer from "@/components/separator-container";
import OnboardingAccount from "@/components/onboarding/account/account";
import CompanyProfile from "@/components/onboarding/company-profile/company-profile";
import BusinessInformation from "@/components/onboarding/business-information/business-information";
import ApplicationComplete from "@/components/onboarding/application-complete/application-complete";
import OnboardingProgress from "@/components/onboarding/progress";
import OnboardingSideCard from "@/components/onboarding/onboarding-header";
import OnboardingStepShell from "@/components/onboarding/onboarding-step-shell";

import {
  BriefcaseBusiness,
  Check,
  ClipboardList,
  FileText,
  Rocket,
} from "lucide-react";
import { useOnboardingStep } from "@/context/onboarding/onboarding-step-context";
import { cn } from "@/lib/utils";
import Documents from "@/components/onboarding/docs/documents";

const steps = [
  { id: 1, label: "Account", title: "Account Setup", icon: Rocket },
  {
    id: 2,
    label: "Profile",
    title: "Company Profile",
    icon: BriefcaseBusiness,
  },
  {
    id: 3,
    label: "Business",
    title: "Business Information",
    icon: ClipboardList,
  },
  { id: 4, label: "Docs", title: "Documents", icon: FileText },
  { id: 5, label: "Done", title: "Verification", icon: Check },
];

const StartOnboarding = () => {
  const { currentStep } = useOnboardingStep();
  const isFinalStep = currentStep === 5;

  return (
    <div className="pt-16">
      <SeparatorContainer className="max-w-7xl" />

      <Container className="relative min-h-[90vh] max-w-7xl overflow-hidden border-x px-0">
        <OnboardingProgress steps={steps} currentStep={currentStep} />

        <div className="relative flex min-h-[calc(90vh-61px)] items-center justify-center">
          <div
            className={cn(
              "grid w-full max-w-6xl overflow-hidden rounded-lg border border-border bg-white shadow-[0_24px_90px_rgba(8,40,50,0.09)]",
              isFinalStep
                ? "grid-cols-1"
                : "min-h-180 lg:grid-cols-[0.9fr_1.1fr]",
            )}
          >
            {!isFinalStep && <OnboardingSideCard />}

            <div className="p-5 sm:p-7 md:p-9">
              <OnboardingStepShell
                className={isFinalStep ? "h-auto overflow-visible" : ""}
              >
                {currentStep === 1 && <OnboardingAccount />}
                {currentStep === 2 && <CompanyProfile />}
                {currentStep === 3 && <BusinessInformation />}
                {currentStep === 4 && <Documents />}
                {currentStep === 5 && <ApplicationComplete />}
              </OnboardingStepShell>
            </div>
          </div>
        </div>
      </Container>

      <SeparatorContainer className="max-w-7xl" />
    </div>
  );
};

export default StartOnboarding;
