export type SelectOption = {
  value: string;
  label: string;
};
export const COUNTRY_PHONE: Record<string, { code: string; emoji: string }> = {
  GB: { code: "+44", emoji: "🇬🇧" },
  IN: { code: "+91", emoji: "🇮🇳" },
  US: { code: "+1", emoji: "🇺🇸" },
  AE: { code: "+971", emoji: "🇦🇪" },
  SG: { code: "+65", emoji: "🇸🇬" },
};

export const turnoverSelectOptions: SelectOption[] = [
  { value: "LESS THAN £100K", label: "Less than £100K" },
  { value: "£100K - £500K", label: "£100K - £500K" },
  { value: "£500K - £1M", label: "£500K - £1M" },
  { value: "£1M - £10M", label: "£1M - £10M" },
  { value: "MORE THAN £10M", label: "More than £10M" },
];

export const productSelectOptions: SelectOption[] = [
  { value: "Payments", label: "Payments" },
  { value: "Consulting", label: "Consulting" },
  { value: "Software", label: "Software" },
  { value: "Retail", label: "Retail" },
  { value: "Other", label: "Other" },
];

export const industrySelectOptions: SelectOption[] = [
  { value: "Finance", label: "Finance" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Education", label: "Education" },
  { value: "Technology", label: "Technology" },
  { value: "Retail", label: "Retail" },
  { value: "Other", label: "Other" },
];

export const selectClassNames = {
  control: () =>
    "!min-h-11 !rounded-lg !border-border !bg-white !text-sm !shadow-none hover:!border-border",
  input: () => "!text-sm",
  placeholder: () => "!text-text-muted/70 !text-sm",
  singleValue: () => "!text-sm !text-text-normal",
  menu: () => "!z-50 !rounded-lg !border !border-border !shadow-lg",
  option: () => "!text-sm",
};
