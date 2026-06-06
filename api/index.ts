export const BASE_API_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://xx1ulrq8s3.execute-api.ap-south-1.amazonaws.com/api";

/** Newsletter */
export const SUBSCRIBE_PAYINTELLI_API = `${BASE_API_URL}/newsletter/subscribe`;

/** Contact / Forms */
export const SEND_MAIL_URL = `${BASE_API_URL}/send-mail`;

/** Onboarding */
export const OTP_REQUEST_URL = `${BASE_API_URL}/otp/request`;
export const OTP_VERIFY_URL = `${BASE_API_URL}/otp/verify`;

export const COUNTRIES_STATES_URL = `${BASE_API_URL}/getCountriesStates`;

export const COMPANY_PROFILE_URL = `${BASE_API_URL}/onboarding/company-profile`;

export const BUSINESS_INFORMATION_URL = `${BASE_API_URL}/onboarding/business-info`;

export const DOCUMENT_PRESIGNED_URL_URL = `${BASE_API_URL}/onboarding/generate-presigned-url`;
export const DOCUMENT_UPLOAD_URL = `${BASE_API_URL}/onboarding/document-upload`;
export const DOCUMENT_CONFIRM_URL = `${BASE_API_URL}/onboarding/confirm-upload-completion`;
