import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const ALLOWED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/jpg",
];

const optionalFileSchema = z
  .any()
  .optional()
  .refine((files) => {
    if (!files?.[0]) return true;
    return ALLOWED_TYPES.includes(files[0].type);
  }, "File type not supported. Allowed formats: PDF, JPG, PNG.")
  .refine((files) => {
    if (!files?.[0]) return true;
    return files[0].size <= MAX_FILE_SIZE;
  }, "File is too large. Maximum file size is 2MB.");

export const documentsSchema = z.object({
  documentOne: optionalFileSchema,
  documentTwo: optionalFileSchema,
  documentThree: optionalFileSchema,
  otherDocument: optionalFileSchema,
});

export type DocumentsFormData = z.infer<typeof documentsSchema>;
