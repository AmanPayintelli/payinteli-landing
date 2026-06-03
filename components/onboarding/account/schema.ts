import { z } from "zod";

export const onboardingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Enter valid email"),
  companyName: z.string().min(1, "Company name is required"),
  role: z.string().min(1, "Role is required"),
  agreed: z.boolean().refine((val) => val === true, {
    message: "Please accept terms",
  }),
  otp: z.string().optional(),
});

export type OnboardingFormData = z.infer<typeof onboardingSchema>;
