"use client";

import Link from "next/link";
import {
  BookOpen,
  Download,
  Grid2X2,
  KeyRound,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { ButtonSecondary } from "@/components/ui/buttonPrimary";
import { cn } from "@/lib/utils";
import { useNewsletterSubscribe } from "@/hooks/use-newsletter-subscribe";
import { generateApplicationPDF } from "@/lib/pdfGenerator";
import { useOnboardingData } from "@/context/onboarding/onboarding-context";

const ApplicationComplete = () => {
  const { applicationId, accountData, companyProfileData } =
    useOnboardingData();

  const {
    email,
    setEmail,
    isSubmitting,
    cooldownSeconds,
    message,
    error,
    isBlogChecked,
    isNewsletterChecked,
    formatTime,
    handleBlogChange,
    handleNewsletterChange,
    handleSubscribe,
  } = useNewsletterSubscribe();

  const applicantName =
    // @ts-ignore
    accountData?.companyName || companyProfileData?.companyName || "Applicant";

  const handleDownload = () => {
    if (!applicationId) {
      console.error("Application ID missing");
      return;
    }

    generateApplicationPDF(applicationId, applicantName);
  };

  return (
    <div className="space-y-4">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
          <ShieldCheck className="size-3.5" />
          Submitted
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-text-brand md:text-4xl">
          Application <span className="text-green-600">Complete</span>
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted">
          Your application has been successfully submitted and is now under
          review. Once your details are verified and certified, you will receive
          a confirmation email with your account credentials.
        </p>

        {applicationId && (
          <p className="mt-3 text-sm font-medium text-text-brand">
            Application ID:{" "}
            <span className="font-semibold text-primary">{applicationId}</span>
          </p>
        )}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-text-brand">
          What happens next?
        </h2>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text-brand">
          <li>
            Identity Verification:{" "}
            <span className="text-text-muted">within 24 hours</span>
          </li>
          <li>
            Compliance Review:{" "}
            <span className="text-text-muted">up to 2 business days</span>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-text-brand">Next Steps</h2>

        <div className="mt-4 grid gap-3">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg border border-border bg-primary-soft/25 px-4 py-3 text-sm font-medium text-text-brand transition-all hover:border-primary hover:bg-primary-soft"
          >
            <KeyRound className="size-4" />
            View Products
          </Link>

          <Link
            href="https://docs.payintelli.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-primary-soft/25 px-4 py-3 text-sm font-medium text-text-brand transition-all hover:border-primary hover:bg-primary-soft"
          >
            <BookOpen className="size-4" />
            Read API Docs
          </Link>

          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg border border-border bg-primary-soft/25 px-4 py-3 text-sm font-medium text-text-brand transition-all hover:border-primary hover:bg-primary-soft"
          >
            <Grid2X2 className="size-4" />
            Go to Homepage
          </Link>
        </div>
      </div>

      <form
        onSubmit={handleSubscribe}
        className="rounded-lg border border-border bg-white p-4"
      >
        <p className="text-sm text-text-muted">
          Get important product updates, new resources, documentation and
          insights.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={cooldownSeconds > 0}
              placeholder="Email address"
              className="h-11 w-full rounded-lg border border-border bg-white pl-10 pr-3 text-sm outline-none transition-all placeholder:text-text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary-soft disabled:cursor-not-allowed disabled:bg-gray-50"
            />
          </div>

          <ButtonSecondary
            title={
              isSubmitting
                ? "Subscribing..."
                : cooldownSeconds > 0
                  ? `Try again in ${formatTime(cooldownSeconds)}`
                  : "Subscribe"
            }
            height="h-11"
            className={cn(
              "rounded-lg bg-primary text-white hover:bg-primary hover:opacity-90",
              (isSubmitting || cooldownSeconds > 0) &&
                "pointer-events-none opacity-60",
            )}
          />
        </div>

        <div className="mt-3 flex items-center gap-5 text-sm text-text-brand">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isBlogChecked}
              disabled={cooldownSeconds > 0}
              onChange={(e) => handleBlogChange(e.target.checked)}
              className="accent-primary disabled:cursor-not-allowed"
            />
            Blog
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isNewsletterChecked}
              disabled={cooldownSeconds > 0}
              onChange={(e) => handleNewsletterChange(e.target.checked)}
              className="accent-primary disabled:cursor-not-allowed"
            />
            Newsletter
          </label>
        </div>

        {message && (
          <p className="mt-3 text-sm font-medium text-emerald-600">{message}</p>
        )}

        {error && (
          <p className="mt-3 text-sm font-medium text-red-500">{error}</p>
        )}
      </form>

      <div>
        <h2 className="text-lg font-semibold text-text-brand">
          Download Application
        </h2>

        <button
          type="button"
          onClick={handleDownload}
          disabled={!applicationId}
          className={cn(
            "mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-green-600 px-5 text-sm font-semibold text-white transition-all hover:bg-green-700",
            !applicationId && "cursor-not-allowed opacity-60",
          )}
        >
          <Download className="size-4" />
          Download Application Copy
        </button>

        <p className="mt-2 text-xs text-text-muted">
          A copy of your application will be downloaded as a PDF file.
        </p>
      </div>
    </div>
  );
};

export default ApplicationComplete;
