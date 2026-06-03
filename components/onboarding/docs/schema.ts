import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const allowedTypes = [
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
];

const requiredFileSchema = z
  .any()
  .refine((files) => files?.length === 1, "File is required")
  .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
    message: "Maximum file size is 2MB",
  })
  .refine((files) => allowedTypes.includes(files?.[0]?.type), {
    message: "Only PDF, JPG, and PNG files are allowed",
  });

const optionalFileSchema = z
  .any()
  .optional()
  .refine(
    (files) => {
      if (!files || files.length === 0) return true;
      return files[0]?.size <= MAX_FILE_SIZE;
    },
    { message: "Maximum file size is 2MB" },
  )
  .refine(
    (files) => {
      if (!files || files.length === 0) return true;
      return allowedTypes.includes(files[0]?.type);
    },
    { message: "Only PDF, JPG, and PNG files are allowed" },
  );

export const documentsSchema = z.object({
  companyRegistrationCertificate: requiredFileSchema,
  vatRegistration: requiredFileSchema,
  directorVerification: requiredFileSchema,
  otherDocument: optionalFileSchema,
});

export type DocumentsFormData = z.infer<typeof documentsSchema>;
