"use client";

import { useMemo } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Minus,
  Plus,
  Save,
} from "lucide-react";
import Select, { SingleValue } from "react-select";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CompanyProfileFormData, companyProfileSchema } from "./schema";
import { useOnboardingStep } from "@/context/onboarding/onboarding-step-context";
import { useOnboardingData } from "@/context/onboarding/onboarding-context";
import { ButtonSecondary } from "@/components/ui/buttonPrimary";
import { cn, generateApplicationId } from "@/lib/utils";
import OnboardingInput from "../input-field";
import { COMPANY_PROFILE_URL } from "@/api";
import { apiRequest } from "@/api/apiClient";
import { useCountriesStates } from "@/hooks/use-countries-states";
import {
  COUNTRY_PHONE,
  industrySelectOptions,
  productSelectOptions,
  selectClassNames,
  SelectOption,
  turnoverSelectOptions,
} from ".";

type CompanyProfileResponse = {
  application_id: string;
  business_structure: string;
  company_name: string;
  crn: string;
  vat: string;
};

const CompanyProfile = () => {
  const { nextStep, prevStep } = useOnboardingStep();

  const {
    accountData,
    sessionId,
    applicationId,
    setApplicationId,
    setCompanyProfileData,
  } = useOnboardingData();

  const { countries, isLoadingCountries } = useCountriesStates();

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CompanyProfileFormData>({
    resolver: zodResolver(companyProfileSchema),
    defaultValues: {
      addressLine1: "",
      addressLine2: "",
      country: "",
      province: "",
      city: "",
      postalCode: "",
      businessPhone: "",
      annualTurnover: "",
      businessWebsite: "",
      socialMediaLinks: [{ value: "" }],
      productService: "",
      industryCategory: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialMediaLinks",
  });

  const selectedCountryCode = watch("country");
  const phoneCountry = COUNTRY_PHONE[selectedCountryCode] || COUNTRY_PHONE.GB;

  const selectedCountry = useMemo(() => {
    return countries.find((country) => country.code === selectedCountryCode);
  }, [countries, selectedCountryCode]);

  const provinceLabel =
    selectedCountry?.name === "United Kingdom" ? "Province" : "State";

  const countryOptions = useMemo<SelectOption[]>(() => {
    return countries.map((country) => ({
      value: country.code,
      label: country.name,
    }));
  }, [countries]);

  const provinceOptions = useMemo<SelectOption[]>(() => {
    return (
      selectedCountry?.states?.map((state) => ({
        value: state.code,
        label: state.name,
      })) || []
    );
  }, [selectedCountry]);

  const companyName = accountData?.companyName ?? "your company";

  const onSubmit = async (data: CompanyProfileFormData) => {
    try {
      if (!sessionId) {
        console.error("Session ID missing");
        return;
      }

      const currentApplicationId = applicationId || generateApplicationId();

      if (!applicationId) {
        setApplicationId(currentApplicationId);
      }

      const payload = {
        address1: data.addressLine1,
        address2: data.addressLine2 || "",
        annual_turnover: data.annualTurnover,
        application_id: currentApplicationId,
        city: data.city,
        company_name: accountData?.companyName || "",
        country: data.country,
        industry: data.industryCategory,
        phone: data.businessPhone,
        postal: data.postalCode,
        product: data.productService,
        socials: data.socialMediaLinks
          .map((item) => item.value)
          .filter(Boolean),
        state: data.province,
        website: data.businessWebsite || "",
      };

      const response = await apiRequest<CompanyProfileResponse>({
        method: "post",
        url: COMPANY_PROFILE_URL,
        sessionId,
        body: payload,
      });

      const finalApplicationId =
        response?.application_id || currentApplicationId;

      setApplicationId(finalApplicationId);

      setCompanyProfileData({
        ...data,
        companyName: response?.company_name || accountData?.companyName || "",
        businessStructure: response?.business_structure || "",
        crn: response?.crn || "",
        vat: response?.vat || "",
      } as CompanyProfileFormData);

      nextStep();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-soft bg-primary-soft/60 px-3 py-1 text-xs font-semibold text-primary">
          <Building2 className="size-3.5" />
          Company Profile
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-text-brand md:text-4xl">
          Company Profile for{" "}
          <span className="text-primary">{companyName}</span>
        </h1>

        <p className="mt-3 text-sm leading-6 text-text-muted">
          Please provide your business details for verification and compliance.
        </p>
      </div>

      <h2 className="text-lg font-semibold text-text-brand">
        Business Address
      </h2>

      <OnboardingInput
        label="Address-Line 1"
        placeholder="Enter address line 1"
        register={register("addressLine1")}
        error={errors.addressLine1?.message}
      />

      <OnboardingInput
        label="Address-Line 2"
        placeholder="Enter address line 2"
        register={register("addressLine2")}
        error={errors.addressLine2?.message}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-normal">
            Country
          </label>

          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Select<SelectOption, false>
                instanceId="country-select"
                isSearchable
                isLoading={isLoadingCountries}
                options={countryOptions}
                value={
                  countryOptions.find(
                    (option) => option.value === field.value,
                  ) || null
                }
                onChange={(option: SingleValue<SelectOption>) => {
                  field.onChange(option?.value || "");
                  setValue("province", "");
                  setValue("businessPhone", "");
                }}
                placeholder="Search country"
                classNames={selectClassNames}
              />
            )}
          />

          {errors.country?.message && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.country.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-normal">
            {provinceLabel}
          </label>

          <Controller
            name="province"
            control={control}
            render={({ field }) => (
              <Select<SelectOption, false>
                instanceId="province-select"
                isSearchable
                isDisabled={!selectedCountryCode}
                options={provinceOptions}
                value={
                  provinceOptions.find(
                    (option) => option.value === field.value,
                  ) || null
                }
                onChange={(option: SingleValue<SelectOption>) => {
                  field.onChange(option?.value || "");
                }}
                placeholder={`Select ${provinceLabel}`}
                classNames={selectClassNames}
              />
            )}
          />

          {errors.province?.message && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {provinceLabel} is required
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <OnboardingInput
          label="City"
          placeholder="Enter city"
          register={register("city")}
          error={errors.city?.message}
        />

        <OnboardingInput
          label="Postal code"
          placeholder="Enter postal code"
          register={register("postalCode")}
          error={errors.postalCode?.message}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-normal">
            Business Phone Number
          </label>

          <div
            className={cn(
              "flex h-11 overflow-hidden rounded-lg border border-border bg-white focus-within:border-primary focus-within:ring-4 focus-within:ring-primary-soft",
              errors.businessPhone?.message &&
                "border-red-400 focus-within:border-red-400 focus-within:ring-red-100",
            )}
          >
            <div className="flex items-center gap-2 border-r border-border px-3 text-sm">
              <span>{phoneCountry.emoji}</span>
              <span>{phoneCountry.code}</span>
            </div>

            <input
              {...register("businessPhone")}
              placeholder="7123456789"
              className="w-full px-3 text-sm outline-none placeholder:text-text-muted/60"
            />
          </div>

          {errors.businessPhone?.message && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.businessPhone.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-normal">
            Annual Turnover
          </label>

          <Controller
            name="annualTurnover"
            control={control}
            render={({ field }) => (
              <Select<SelectOption, false>
                instanceId="annual-turnover-select"
                isSearchable={false}
                options={turnoverSelectOptions}
                value={
                  turnoverSelectOptions.find(
                    (option) => option.value === field.value,
                  ) || null
                }
                onChange={(option: SingleValue<SelectOption>) => {
                  field.onChange(option?.value || "");
                }}
                placeholder="Select"
                classNames={selectClassNames}
              />
            )}
          />

          {errors.annualTurnover?.message && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.annualTurnover.message}
            </p>
          )}
        </div>
      </div>

      <OnboardingInput
        label="Business Website"
        placeholder="yourcompany.com"
        register={register("businessWebsite")}
        error={errors.businessWebsite?.message}
      />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-text-normal">
          Social Media Links
        </label>

        <div className="space-y-2">
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-start gap-2">
              <div className="flex-1">
                <input
                  {...register(`socialMediaLinks.${index}.value`)}
                  placeholder="linkedin.com/company/yourcompany"
                  className="h-11 w-full rounded-lg border border-border px-3 text-sm outline-none transition-all placeholder:text-text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary-soft"
                />

                {errors.socialMediaLinks?.[index]?.value?.message && (
                  <p className="mt-1 text-xs font-medium text-red-500">
                    {errors.socialMediaLinks[index]?.value?.message}
                  </p>
                )}
              </div>

              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="mt-1.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary transition-all hover:bg-primary hover:text-white"
                >
                  <Minus className="size-4" />
                </button>
              )}

              {index === fields.length - 1 && fields.length < 3 && (
                <button
                  type="button"
                  onClick={() => append({ value: "" })}
                  className="mt-1.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary transition-all hover:bg-primary hover:text-white"
                >
                  <Plus className="size-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-normal">
            Product/Service
          </label>

          <Controller
            name="productService"
            control={control}
            render={({ field }) => (
              <Select<SelectOption, false>
                instanceId="product-service-select"
                isSearchable={false}
                options={productSelectOptions}
                value={
                  productSelectOptions.find(
                    (option) => option.value === field.value,
                  ) || null
                }
                onChange={(option: SingleValue<SelectOption>) => {
                  field.onChange(option?.value || "");
                }}
                placeholder="Select Product/Service"
                classNames={selectClassNames}
              />
            )}
          />

          {errors.productService?.message && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.productService.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-normal">
            Industry Category
          </label>

          <Controller
            name="industryCategory"
            control={control}
            render={({ field }) => (
              <Select<SelectOption, false>
                instanceId="industry-category-select"
                isSearchable={false}
                options={industrySelectOptions}
                value={
                  industrySelectOptions.find(
                    (option) => option.value === field.value,
                  ) || null
                }
                onChange={(option: SingleValue<SelectOption>) => {
                  field.onChange(option?.value || "");
                }}
                placeholder="Select Industry"
                classNames={selectClassNames}
              />
            )}
          />

          {errors.industryCategory?.message && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.industryCategory.message}
            </p>
          )}
        </div>
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

export default CompanyProfile;
