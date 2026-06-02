export const APP_CONFIG = {
  APP_NAME: "PayIntelli",
  COMPANY_NAME: "PayIntelli",
  SUPPORT_EMAIL: "support@payintelli.com",
  // API Gateway URL - can be overridden via NEXT_PUBLIC_API_BASE_URL environment variable
  // Default uses the API Gateway invoke URL from AWS
  // For production, update this or set NEXT_PUBLIC_API_BASE_URL
  API_BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://xx1ulrq8s3.execute-api.ap-south-1.amazonaws.com/api",
  DOCS_URL: "https://docs.payintelli.com",
  DASHBOARD_URL: "https://client.payintelli.com/",
  STORAGE_PREFIX: "payintelli_",
} as const;

export const ROUTES = {
  HOME: "/",
  ONBOARDING: {
    START: "/onboarding/start",
    COMPANY_PROFILE: "/onboarding/company-profile",
    BUSINESS_INFO: "/onboarding/business-info",
    BANK_INFO: "/onboarding/bank-info",
    DOCUMENTS: "/onboarding/documents",
    REVIEW: "/onboarding/review",
    DONE: "/onboarding/done",
  },
  DASHBOARD: "/dashboard",
  API_KEYS: "/dashboard/api-keys",
} as const;

export const STORAGE_KEYS = {
  ONBOARDING_DATA: "onboarding_data",
  USER_EMAIL: "onboarding_email",
  BUSINESS_INFO: "businessInfoForm",
  BANK_INFO: "bankInfoForm",
  DOCUMENTS: "documentsForm",
} as const;

export const BUSINESS_TYPES = [
  { value: "", label: "Select Business Type" },
  { value: "sole_trader", label: "Sole Trader" },
  { value: "partnership", label: "Partnership" },
  { value: "limited_company", label: "Limited Company" },
  { value: "llp", label: "Limited Liability Partnership" },
  { value: "charity", label: "Charity" },
  { value: "other", label: "Other" },
] as const;

export const INDUSTRY_OPTIONS = [
  { value: "", label: "Select Industry" },
  { value: "finance", label: "Finance" },
  { value: "technology", label: "Technology" },
  { value: "healthcare", label: "Healthcare" },
  { value: "retail", label: "Retail" },
  { value: "education", label: "Education" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "consulting", label: "Consulting" },
  { value: "other", label: "Other" },
] as const;

export const PRODUCT_OPTIONS = [
  { value: "", label: "Select Product/Service" },
  { value: "payments", label: "Payments" },
  { value: "consulting", label: "Consulting" },
  { value: "software", label: "Software" },
  { value: "retail", label: "Retail" },
  { value: "other", label: "Other" },
] as const;

export const COUNTRIES = {
  UK: {
    code: "uk" as const,
    name: "United Kingdom",
    documentRequirements: [
      "Company Registration Certificate",
      "VAT Registration",
      "Director Verification",
    ],
    businessTypes: BUSINESS_TYPES,
  },
  USA: {
    code: "usa" as const,
    name: "United States",
    documentRequirements: [
      "EIN Letter",
      "State Registration Certificate",
      "IRS Tax ID Certificate",
    ],
    businessTypes: BUSINESS_TYPES,
  },
  SGP: {
    code: "sgp" as const,
    name: "Singapore",
    documentRequirements: ["ACRA BizFile", "GST Registration", "UEN Proof"],
    businessTypes: BUSINESS_TYPES,
  },
  UAE: {
    code: "uae" as const,
    name: "United Arab Emirates",
    documentRequirements: [
      "Trade License",
      "Tax Registration Number (TRN)",
      "Emirates ID of Representative",
    ],
    businessTypes: BUSINESS_TYPES,
  },
  IND: {
    code: "ind" as const,
    name: "India",
    documentRequirements: [
      "Company PAN Card",
      "GST Certificate",
      "CIN Document",
    ],
    businessTypes: BUSINESS_TYPES,
  },
  OTHER: {
    code: "oth" as const,
    name: "Other",
    documentRequirements: [
      "Company Registration Document",
      "National Tax ID",
      "Proof of Legal Entity",
    ],
    businessTypes: BUSINESS_TYPES,
  },
} as const;

export const ONBOARDING_STEPS = [
  {
    id: 1,
    title: "Getting Started",
    description: "Basic information and verification",
    path: ROUTES.ONBOARDING.START,
  },
  {
    id: 2,
    title: "Company Profile",
    description: "Company details and profile",
    path: ROUTES.ONBOARDING.COMPANY_PROFILE,
  },
  {
    id: 3,
    title: "Business Information",
    description: "Business registration and compliance",
    path: ROUTES.ONBOARDING.BUSINESS_INFO,
  },
  {
    id: 4,
    title: "Documents",
    description: "Upload required documents",
    path: ROUTES.ONBOARDING.DOCUMENTS,
  },
  {
    id: 5,
    title: "Complete",
    description: "Review and submit",
    path: ROUTES.ONBOARDING.DONE,
  },
] as const;
