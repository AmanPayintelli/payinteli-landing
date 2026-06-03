import { z } from "zod";

export const companyProfileSchema = z.object({
  addressLine1: z.string().min(1, "Address line 1 is required"),
  addressLine2: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  province: z.string().min(1, "Province is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),

  businessPhone: z
    .string()
    .min(10, "Phone number must be 10 or 11 digits.")
    .max(11, "Phone number must be 10 or 11 digits.")
    .regex(/^[0-9]+$/, "Only numbers are allowed"),

  annualTurnover: z.string().min(1, "Turnover is required"),
  businessWebsite: z.string().optional(),

  socialMediaLinks: z
    .array(
      z.object({
        value: z.string().optional(),
      }),
    )
    .max(3, "Maximum 3 links allowed"),

  productService: z.string().min(1, "Product/Service is required"),
  industryCategory: z.string().min(1, "Industry is required"),
});

export type CompanyProfileFormData = z.infer<typeof companyProfileSchema>;

export interface Country {
  code: string;
  name: string;
  states: {
    code: string;
    name: string;
  }[];
}
