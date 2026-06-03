import { z } from "zod";

export const businessInformationSchema = z.object({
  registrationNumber: z
    .string()
    .min(1, "Please enter your registration number."),
  taxVatNumber: z.string().min(1, "Please enter your tax or VAT number."),
  businessType: z.string().min(1, "Please select your business type."),
});

export type BusinessInformationFormData = z.infer<
  typeof businessInformationSchema
>;
