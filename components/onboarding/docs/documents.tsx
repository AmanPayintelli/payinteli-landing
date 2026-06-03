"use client";

import React from "react";
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

interface UploadCardProps {
  title: string;
  description: string;
  required?: boolean;
  file?: File;
  error?: string;
  register: UseFormRegisterReturn;
}

const UploadCard = ({
  title,
  description,
  required = false,
  file,
  error,
  register,
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
                Uploaded
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<DocumentsFormData>({
    resolver: zodResolver(documentsSchema),
  });

  const companyFile = watch("companyRegistrationCertificate")?.[0];
  const vatFile = watch("vatRegistration")?.[0];
  const directorFile = watch("directorVerification")?.[0];
  const otherFile = watch("otherDocument")?.[0];

  const onSubmit = async (data: DocumentsFormData) => {
    console.log("Documents:", {
      companyRegistrationCertificate: data.companyRegistrationCertificate?.[0],
      vatRegistration: data.vatRegistration?.[0],
      directorVerification: data.directorVerification?.[0],
      otherDocument: data.otherDocument?.[0],
    });

    nextStep();
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
          <p>• Company Registration Certificate</p>
          <p>• VAT Registration</p>
          <p>• Director Verification</p>
          <p>• Other Supporting Document optional</p>
        </div>

        <p className="mt-4 text-xs">
          <span className="font-semibold">Allowed:</span> PDF, JPG, PNG ·{" "}
          <span className="font-semibold">Max:</span> 2MB per file
        </p>
      </div>

      <div className="grid gap-3">
        <UploadCard
          title="Company Registration Certificate"
          description="Official registration certificate issued by your authority."
          required
          file={companyFile}
          error={errors.companyRegistrationCertificate?.message as string}
          register={register("companyRegistrationCertificate")}
        />

        <UploadCard
          title="VAT Registration"
          description="VAT registration document or tax registration proof."
          required
          file={vatFile}
          error={errors.vatRegistration?.message as string}
          register={register("vatRegistration")}
        />

        <UploadCard
          title="Director Verification"
          description="Director identity or verification document."
          required
          file={directorFile}
          error={errors.directorVerification?.message as string}
          register={register("directorVerification")}
        />

        <UploadCard
          title="Other Supporting Document"
          description="Any extra document that may help with compliance verification."
          file={otherFile}
          error={errors.otherDocument?.message as string}
          register={register("otherDocument")}
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
          title={isSubmitting ? "Saving..." : "Save & Continue"}
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
