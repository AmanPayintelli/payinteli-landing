import { z } from "zod";

export const businessInformationSchema = z.object({
  registrationNumber: z
    .string()
    .min(1, "Company registration number is required"),

  taxVatNumber: z.string().min(1, "Tax / VAT number is required"),

  businessType: z.string().min(1, "Business type is required"),
});

export type BusinessInformationFormData = z.infer<
  typeof businessInformationSchema
>;
