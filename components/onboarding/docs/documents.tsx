"use client";

import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Lock,
  Save,
  UploadCloud,
} from "lucide-react";
import { UseFormRegisterReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { documentsSchema, DocumentsFormData } from "./schema";
import { ButtonSecondary } from "@/components/ui/buttonPrimary";
import { cn } from "@/lib/utils";
import { useOnboardingStep } from "@/context/onboarding/onboarding-step-context";
import { useOnboardingData } from "@/context/onboarding/onboarding-context";
import { apiRequest } from "@/api/apiClient";
import {
  DOCUMENT_CONFIRM_URL,
  DOCUMENT_PRESIGNED_URL_URL,
  DOCUMENT_UPLOAD_URL,
} from "@/api";
const MAX_FILE_SIZE = 2 * 1024 * 1024;

const ALLOWED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/jpg",
];

type DocumentFieldName =
  | "documentOne"
  | "documentTwo"
  | "documentThree"
  | "otherDocument";

type CountryDocument = {
  field: DocumentFieldName;
  value: string;
  label: string;
  description: string;
  apiType: string;
  required: boolean;
};

const DOCUMENT_CONFIG: Record<string, CountryDocument[]> = {
  IND: [
    {
      field: "documentOne",
      value: "company_pan_card",
      label: "Company PAN Card",
      description: "Upload your company PAN card for business verification.",
      apiType: "COMPANY_PAN_CARD",
      required: true,
    },
    {
      field: "documentTwo",
      value: "gst_certificate",
      label: "GST Certificate",
      description: "Upload your GST certificate or GST registration proof.",
      apiType: "GST_CERTIFICATE",
      required: true,
    },
    {
      field: "documentThree",
      value: "cin_document",
      label: "CIN Document",
      description: "Upload your Corporate Identification Number document.",
      apiType: "CIN_DOCUMENT",
      required: true,
    },
  ],

  USA: [
    {
      field: "documentOne",
      value: "ein_letter",
      label: "EIN Letter",
      description: "Upload your EIN confirmation letter.",
      apiType: "EIN_LETTER",
      required: true,
    },
    {
      field: "documentTwo",
      value: "state_registration_certificate",
      label: "State Registration Certificate",
      description: "Upload your company state registration certificate.",
      apiType: "STATE_REGISTRATION_CERTIFICATE",
      required: true,
    },
    {
      field: "documentThree",
      value: "irs_tax_id_certificate",
      label: "IRS Tax ID Certificate",
      description: "Upload your IRS tax identification certificate.",
      apiType: "IRS_TAX_ID_CERTIFICATE",
      required: true,
    },
  ],

  UK: [
    {
      field: "documentOne",
      value: "company_registration_certificate",
      label: "Company Registration Certificate",
      description:
        "Official registration certificate issued by your authority.",
      apiType: "CERTIFICATE_OF_INCORPORATION",
      required: true,
    },
    {
      field: "documentTwo",
      value: "vat_registration",
      label: "VAT Registration",
      description: "VAT registration document or tax registration proof.",
      apiType: "TAX_REGISTRATION",
      required: true,
    },
    {
      field: "documentThree",
      value: "director_verification",
      label: "Director Verification",
      description: "Director identity or verification document.",
      apiType: "OTHER",
      required: true,
    },
  ],

  UAE: [
    {
      field: "documentOne",
      value: "trade_license",
      label: "Trade License",
      description: "Upload your UAE trade license document.",
      apiType: "TRADE_LICENSE",
      required: true,
    },
    {
      field: "documentTwo",
      value: "trn_certificate",
      label: "Tax Registration Number (TRN)",
      description: "Upload your TRN certificate or tax registration proof.",
      apiType: "TRN_CERTIFICATE",
      required: true,
    },
    {
      field: "documentThree",
      value: "emirates_id",
      label: "Emirates ID of Representative",
      description: "Upload Emirates ID of the authorized representative.",
      apiType: "EMIRATES_ID",
      required: true,
    },
  ],

  SGP: [
    {
      field: "documentOne",
      value: "acra_bizfile",
      label: "ACRA BizFile",
      description: "Upload your ACRA BizFile document.",
      apiType: "ACRA_BIZFILE",
      required: true,
    },
    {
      field: "documentTwo",
      value: "gst_registration",
      label: "GST Registration",
      description: "Upload GST registration or tax registration proof.",
      apiType: "GST_REGISTRATION",
      required: true,
    },
    {
      field: "documentThree",
      value: "uen_proof",
      label: "UEN Proof",
      description: "Upload your Unique Entity Number proof.",
      apiType: "UEN_PROOF",
      required: true,
    },
  ],

  OTH: [
    {
      field: "documentOne",
      value: "company_registration_document",
      label: "Company Registration Document",
      description: "Upload official company registration document.",
      apiType: "COMPANY_REGISTRATION_DOCUMENT",
      required: true,
    },
    {
      field: "documentTwo",
      value: "national_tax_id",
      label: "National Tax ID",
      description: "Upload your national tax identification document.",
      apiType: "NATIONAL_TAX_ID",
      required: true,
    },
    {
      field: "documentThree",
      value: "proof_of_legal_entity",
      label: "Proof of Legal Entity",
      description: "Upload proof confirming your legal business entity.",
      apiType: "PROOF_OF_LEGAL_ENTITY",
      required: true,
    },
  ],
};

const normalizeCountryForDocs = (country?: string) => {
  const value = country?.toUpperCase();

  if (value === "IN" || value === "IND") return "IND";
  if (value === "US" || value === "USA") return "USA";
  if (value === "GB" || value === "UK") return "UK";
  if (value === "AE" || value === "UAE") return "UAE";
  if (value === "SG" || value === "SGP") return "SGP";

  return "OTH";
};

const getDocumentFile = (value?: FileList | File[]) => {
  return value?.[0];
};

const isValidFile = (file?: File) => {
  if (!file) return false;
  return ALLOWED_TYPES.includes(file.type) && file.size <= MAX_FILE_SIZE;
};

interface UploadCardProps {
  title: string;
  description: string;
  required?: boolean;
  file?: File;
  error?: string;
  register: UseFormRegisterReturn;
  progress?: number;
}

const UploadCard = ({
  title,
  description,
  required = false,
  file,
  error,
  register,
  progress,
}: UploadCardProps) => {
  return (
    <motion.label
      whileHover={{ scale: 1.012 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={cn(
        "group block cursor-pointer rounded-xl border border-dashed border-border bg-white p-4 transition-colors",
        "hover:border-primary hover:bg-primary-soft/20",
        file && "border-green-500 bg-green-50",
        error && "border-red-400 bg-red-50/40",
      )}
    >
      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
        {...register}
      />

      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white",
            file && "bg-green-500 text-white group-hover:bg-green-500",
            error &&
              "bg-red-100 text-red-500 group-hover:bg-red-100 group-hover:text-red-500",
          )}
        >
          {file ? (
            <CheckCircle2 className="size-5" />
          ) : (
            <UploadCloud className="size-5" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-text-brand">{title}</p>

            {required ? (
              <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-500">
                Required
              </span>
            ) : (
              <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-semibold text-primary">
                Optional
              </span>
            )}

            {file && (
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                Selected
              </span>
            )}
          </div>

          <p className="mt-1 text-xs leading-5 text-text-muted">
            {description}
          </p>

          <div
            className={cn(
              "mt-3 flex items-center justify-between gap-3 rounded-lg border border-border bg-background px-3 py-2 transition-colors",
              "group-hover:border-primary-soft group-hover:bg-white",
              file && "border-green-200 bg-white",
            )}
          >
            <p
              className={cn(
                "flex min-w-0 items-center gap-2 truncate text-xs text-text-muted",
                file && "font-medium text-green-700",
              )}
            >
              <FileText className="size-3.5 shrink-0" />
              <span className="truncate">
                {file ? file.name : "Click to upload file"}
              </span>
            </p>

            {!file && (
              <span className="shrink-0 text-[11px] font-semibold text-primary">
                Browse
              </span>
            )}
          </div>

          {typeof progress === "number" && progress > 0 && (
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-primary-soft">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          <p className="mt-2 text-[11px] text-text-muted">
            PDF, JPG or PNG · Max 2MB
          </p>

          {error && (
            <p className="mt-2 text-xs font-medium text-red-500">{error}</p>
          )}
        </div>
      </div>
    </motion.label>
  );
};

const Documents = () => {
  const { nextStep } = useOnboardingStep();

  const { sessionId, merchantId, companyProfileData } = useOnboardingData();

  const [formError, setFormError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>(
    {},
  );

  const countryKey = normalizeCountryForDocs(companyProfileData?.country);

  const documents = useMemo(() => {
    return DOCUMENT_CONFIG[countryKey] || DOCUMENT_CONFIG.OTH;
  }, [countryKey]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<DocumentsFormData>({
    resolver: zodResolver(documentsSchema),
  });

  const otherFile = getDocumentFile(watch("otherDocument"));

  const uploadFileToS3 = async (
    file: File,
    uploadUrl: string,
    field: string,
  ) => {
    return new Promise<void>((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open("PUT", uploadUrl);

      xhr.upload.onprogress = (event) => {
        if (!event.lengthComputable) return;

        setUploadProgress((prev) => ({
          ...prev,
          [field]: Math.round((event.loaded / event.total) * 100),
        }));
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve();
        } else {
          reject(new Error(`Upload failed: ${xhr.status} ${xhr.statusText}`));
        }
      };

      xhr.onerror = () => {
        reject(new Error("Network error while uploading document"));
      };

      const normalizedType =
        file.type === "image/jpg" ? "image/jpeg" : file.type;

      xhr.setRequestHeader("Content-Type", normalizedType);
      xhr.send(file);
    });
  };

  const uploadSingleDocument = async ({
    file,
    apiType,
    field,
  }: {
    file: File;
    apiType: string;
    field: string;
  }) => {
    if (!sessionId) {
      throw new Error("Session ID missing. Please restart onboarding.");
    }

    if (!merchantId) {
      throw new Error("Merchant ID missing. Please complete company profile.");
    }

    const normalizedType = file.type === "image/jpg" ? "image/jpeg" : file.type;

    const presignedResponse = await apiRequest<{
      uploadUrl: string;
      fileKey: string;
    }>({
      method: "post",
      url: DOCUMENT_PRESIGNED_URL_URL,
      sessionId,
      body: {
        merchantId,
        fileName: file.name,
        fileType: normalizedType,
      },
    });

    await uploadFileToS3(file, presignedResponse.uploadUrl, field);

    return {
      type: apiType,
      file_key: presignedResponse.fileKey,
    };
  };

  const onSubmit = async (data: DocumentsFormData) => {
    try {
      setFormError(null);
      setUploadProgress({});

      if (!sessionId) {
        setFormError("Session ID missing. Please restart onboarding.");
        return;
      }

      if (!merchantId) {
        setFormError("Merchant ID missing. Please complete company profile.");
        return;
      }

      const filesToUpload = documents.map((doc) => {
        const file = getDocumentFile(data[doc.field]);

        return {
          ...doc,
          file,
        };
      });

      const missingDocuments = filesToUpload.filter(
        (doc) => doc.required && !doc.file,
      );

      if (missingDocuments.length > 0) {
        setFormError(
          `Please upload all required documents: ${missingDocuments
            .map((doc) => doc.label)
            .join(", ")}.`,
        );
        return;
      }

      const invalidDocument = filesToUpload.find(
        (doc) => doc.file && !isValidFile(doc.file),
      );

      if (invalidDocument) {
        setFormError(
          `${invalidDocument.label} must be PDF, JPG or PNG and less than 2MB.`,
        );
        return;
      }

      if (otherFile && !isValidFile(otherFile)) {
        setFormError(
          "Other document must be PDF, JPG or PNG and less than 2MB.",
        );
        return;
      }

      const uploadItems = [
        ...filesToUpload
          .filter((doc): doc is typeof doc & { file: File } =>
            Boolean(doc.file),
          )
          .map((doc) => ({
            file: doc.file,
            apiType: doc.apiType,
            field: doc.field,
          })),

        ...(otherFile
          ? [
              {
                file: otherFile,
                apiType: "OTHER",
                field: "otherDocument",
              },
            ]
          : []),
      ];

      const uploadedDocuments = await Promise.all(
        uploadItems.map(uploadSingleDocument),
      );

      await apiRequest({
        method: "post",
        url: DOCUMENT_UPLOAD_URL,
        sessionId,
        body: {
          documents: uploadedDocuments,
        },
      });

      await Promise.all(
        uploadedDocuments.map((doc) =>
          apiRequest({
            method: "post",
            url: DOCUMENT_CONFIRM_URL,
            sessionId,
            body: {
              merchantId,
              fileKey: doc.file_key,
            },
          }),
        ),
      );

      nextStep();
    } catch (error) {
      console.error(error);
      setFormError(
        error instanceof Error
          ? error.message
          : "Something went wrong while uploading documents.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-text-brand md:text-4xl">
          Documents
        </h1>

        <p className="mt-3 text-sm leading-6 text-text-muted">
          Upload the required documents to complete business verification.
        </p>
      </div>

      <div className="rounded-lg border border-border bg-primary-soft/20 p-4 text-sm text-text-brand">
        <p className="font-medium">Required documents</p>

        <div className="mt-3 grid gap-2 text-xs text-text-muted sm:grid-cols-2">
          {documents.map((doc) => (
            <p key={doc.value}>• {doc.label}</p>
          ))}
          <p>• Other Supporting Document optional</p>
        </div>

        <p className="mt-4 text-xs">
          <span className="font-semibold">Allowed:</span> PDF, JPG, PNG ·{" "}
          <span className="font-semibold">Max:</span> 2MB per file
        </p>
      </div>

      {formError && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {formError}
        </div>
      )}

      <div className="grid gap-3">
        {documents.map((doc) => {
          const file = getDocumentFile(watch(doc.field));

          return (
            <UploadCard
              key={doc.value}
              title={doc.label}
              description={doc.description}
              required={doc.required}
              file={file}
              error={errors[doc.field]?.message as string}
              register={register(doc.field)}
              progress={uploadProgress[doc.field]}
            />
          );
        })}

        <UploadCard
          title="Other Supporting Document"
          description="Any extra document that may help with compliance verification."
          file={otherFile}
          error={errors.otherDocument?.message as string}
          register={register("otherDocument")}
          progress={uploadProgress.otherDocument}
        />
      </div>

      <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-end">
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-white px-5 text-sm font-semibold text-text-brand transition-all hover:bg-primary-soft"
        >
          Save & Exit
          <Save className="size-4" />
        </button>

        <ButtonSecondary
          title={isSubmitting ? "Uploading..." : "Save & Continue"}
          icon={!isSubmitting && <ArrowRight className="size-4" />}
          height="h-11"
          className={cn(
            "rounded-lg bg-primary text-white hover:bg-primary hover:opacity-90",
            isSubmitting && "pointer-events-none opacity-60",
          )}
        />
      </div>

      <div className="flex items-center gap-3 rounded-lg border border-border bg-primary-soft/20 p-4 text-sm text-text-brand">
        <Lock className="size-4 text-primary" />
        Your documents are securely stored and used only for compliance
        verification.
      </div>
    </form>
  );
};

export default Documents;
