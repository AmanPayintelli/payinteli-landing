"use client";

import React, { createContext, useContext, useState } from "react";
import { OnboardingFormData } from "@/components/onboarding/account/schema";
import { CompanyProfileFormData } from "@/components/onboarding/company-profile/schema";

interface OnboardingDataContextType {
  sessionId: string | null;
  setSessionId: React.Dispatch<React.SetStateAction<string | null>>;

  merchantId: number | null;
  setMerchantId: React.Dispatch<React.SetStateAction<number | null>>;

  applicationId: string | null;
  setApplicationId: React.Dispatch<React.SetStateAction<string | null>>;

  accountData: OnboardingFormData | null;
  setAccountData: React.Dispatch<
    React.SetStateAction<OnboardingFormData | null>
  >;

  companyProfileData: CompanyProfileFormData | null;
  setCompanyProfileData: React.Dispatch<
    React.SetStateAction<CompanyProfileFormData | null>
  >;
}

const OnboardingDataContext = createContext<OnboardingDataContextType | null>(
  null,
);

export const OnboardingDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [merchantId, setMerchantId] = useState<number | null>(null);
  const [applicationId, setApplicationId] = useState<string | null>(null);

  const [accountData, setAccountData] = useState<OnboardingFormData | null>(
    null,
  );

  const [companyProfileData, setCompanyProfileData] =
    useState<CompanyProfileFormData | null>(null);

  return (
    <OnboardingDataContext.Provider
      value={{
        sessionId,
        setSessionId,
        merchantId,
        setMerchantId,
        applicationId,
        setApplicationId,
        accountData,
        setAccountData,
        companyProfileData,
        setCompanyProfileData,
      }}
    >
      {children}
    </OnboardingDataContext.Provider>
  );
};

export const useOnboardingData = () => {
  const context = useContext(OnboardingDataContext);

  if (!context) {
    throw new Error(
      "useOnboardingData must be used inside OnboardingDataProvider",
    );
  }

  return context;
};
