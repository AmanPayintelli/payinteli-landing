"use client";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, Save } from "lucide-react";
import Select, { SingleValue, StylesConfig } from "react-select";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BusinessInformationFormData,
  businessInformationSchema,
} from "./schema";
import { useOnboardingStep } from "@/context/onboarding/onboarding-step-context";
import { useOnboardingData } from "@/context/onboarding/onboarding-context";
import { ButtonSecondary } from "@/components/ui/buttonPrimary";
import OnboardingInput from "../input-field";
import { cn } from "@/lib/utils";
import { BUSINESS_INFORMATION_URL } from "@/api";
import { apiRequest } from "@/api/apiClient";

type SelectOption = {
  value: string;
  label: string;
};

const businessTypeOptions: SelectOption[] = [
  { value: "sole_proprietorship", label: "Sole Proprietorship" },
  { value: "partnership", label: "Partnership" },
  { value: "llp", label: "LLP (Limited Liability Partnership)" },
  { value: "llc", label: "LLC (Limited Liability Company)" },
  { value: "corporation", label: "Corporation" },
  { value: "nonprofit", label: "Nonprofit" },
  { value: "trust", label: "Trust" },
  {
    value: "unincorporated_association",
    label: "Unincorporated Association",
  },
  { value: "other", label: "Other" },
];

const selectClassNames = {
  control: () =>
    "!min-h-11 !rounded-lg !border-border !bg-white !text-sm !shadow-none hover:!border-border",
  input: () => "!text-sm",
  placeholder: () => "!text-text-muted/70 !text-sm",
  singleValue: () => "!text-sm !text-text-normal",
  menu: () => "!z-50 !rounded-lg !border !border-border !shadow-lg",
  option: () => "!text-sm",
};

const selectStyles: StylesConfig<SelectOption, false> = {
  menuPortal: (base) => ({
    ...base,
    zIndex: 9999,
  }),
};

const BusinessInformation = () => {
  const { nextStep, prevStep } = useOnboardingStep();
  const { sessionId, applicationId, accountData } = useOnboardingData();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<BusinessInformationFormData>({
    resolver: zodResolver(businessInformationSchema),
    defaultValues: {
      registrationNumber: "",
      taxVatNumber: "",
      businessType: "",
    },
  });

  const onSubmit = async (data: BusinessInformationFormData) => {
    try {
      if (!sessionId) {
        console.error("Session ID missing");
        return;
      }

      if (!applicationId) {
        console.error("Application ID missing");
        return;
      }

      const payload = {
        application_id: applicationId,
        business_structure: data.businessType,
        company_name: accountData?.companyName || "",
        crn: data.registrationNumber,
        vat: data.taxVatNumber,
      };

      await apiRequest({
        method: "post",
        url: BUSINESS_INFORMATION_URL,
        sessionId,
        body: payload,
      });

      nextStep();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-soft bg-primary-soft/60 px-3 py-1 text-xs font-semibold text-primary">
          <BriefcaseBusiness className="size-3.5" />
          Business Information
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-text-brand md:text-4xl">
          Business Information
        </h1>

        <p className="mt-3 text-sm leading-6 text-text-muted">
          Please provide your official business details for verification.
        </p>
      </div>

      <OnboardingInput
        label="Company Registration Number"
        placeholder="Enter registration number"
        register={register("registrationNumber")}
        error={errors.registrationNumber?.message}
      />

      <OnboardingInput
        label="Tax / VAT Number"
        placeholder="Enter tax or VAT number"
        register={register("taxVatNumber")}
        error={errors.taxVatNumber?.message}
      />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-text-normal">
          Business Type / Legal Structure
        </label>

        <Controller
          name="businessType"
          control={control}
          render={({ field }) => (
            <Select<SelectOption, false>
              instanceId="business-type-select"
              isSearchable={false}
              options={businessTypeOptions}
              value={
                businessTypeOptions.find(
                  (option) => option.value === field.value,
                ) || null
              }
              onChange={(option: SingleValue<SelectOption>) => {
                field.onChange(option?.value || "");
              }}
              placeholder="Select Business Type"
              classNames={selectClassNames}
              styles={selectStyles}
              menuPortalTarget={
                typeof window !== "undefined" ? document.body : undefined
              }
              menuPosition="fixed"
            />
          )}
        />

        {errors.businessType?.message && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {errors.businessType.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-white px-5 text-sm font-semibold text-text-brand transition-all hover:bg-primary-soft"
        >
          <ArrowLeft className="size-4" />
          Previous
        </button>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-white px-5 text-sm font-semibold text-text-brand transition-all hover:bg-primary-soft"
          >
            Save & Exit
            <Save className="size-4" />
          </button>

          <ButtonSecondary
            title={isSubmitting ? "Saving..." : "Save & Continue"}
            icon={!isSubmitting && <ArrowRight className="size-4" />}
            height="h-11"
            className={cn(
              "rounded-lg bg-primary text-white hover:bg-primary hover:opacity-90",
              isSubmitting && "pointer-events-none opacity-60",
            )}
          />
        </div>
      </div>
    </form>
  );
};

export default BusinessInformation;
