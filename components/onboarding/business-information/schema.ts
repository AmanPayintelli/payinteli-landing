import { z } from "zod";

export const businessStructureValues = [
  "SOLE_PROPRIETORSHIP",
  "PARTNERSHIP",
  "LLP",
  "LLC",
  "CORPORATION",
  "NONPROFIT",
  "TRUST",
  "UNINCORPORATED_PARTNERSHIP",
  "OTHER",
] as const;

export const businessInformationSchema = z.object({
  registrationNumber: z
    .string()
    .min(1, "Company registration number is required"),

  taxVatNumber: z.string().min(1, "Tax / VAT number is required"),

  businessType: z
    .union([z.enum(businessStructureValues), z.literal("")])
    .refine((value) => value !== "", {
      message: "Business type is required",
    }),
});

export type BusinessInformationFormInput = z.input<
  typeof businessInformationSchema
>;

export type BusinessInformationFormData = z.output<
  typeof businessInformationSchema
>;
