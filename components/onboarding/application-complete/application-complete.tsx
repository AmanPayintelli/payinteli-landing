"use client";

import React from "react";
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

const ApplicationComplete = () => {
  const handleDownload = () => {
    console.log("Download application copy");
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

          <a
            href="https://docs.payintelli.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-primary-soft/25 px-4 py-3 text-sm font-medium text-text-brand transition-all hover:border-primary hover:bg-primary-soft"
          >
            <BookOpen className="size-4" />
            Read API Docs
          </a>

          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg border border-border bg-primary-soft/25 px-4 py-3 text-sm font-medium text-text-brand transition-all hover:border-primary hover:bg-primary-soft"
          >
            <Grid2X2 className="size-4" />
            Go to Homepage
          </Link>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-4">
        <p className="text-sm text-text-muted">
          Get important product updates, new resources, documentation and
          insights.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" />
            <input
              type="email"
              placeholder="Email address"
              className="h-11 w-full rounded-lg border border-border bg-white pl-10 pr-3 text-sm outline-none transition-all placeholder:text-text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary-soft"
            />
          </div>

          <ButtonSecondary
            title="Subscribe"
            height="h-11"
            className="rounded-lg bg-primary text-white hover:bg-primary hover:opacity-90"
          />
        </div>

        <div className="mt-3 flex items-center gap-5 text-sm text-text-brand">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-primary" />
            Blog
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-primary" />
            Newsletter
          </label>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-text-brand">
          Download Application
        </h2>

        <button
          type="button"
          onClick={handleDownload}
          className={cn(
            "mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-green-600 px-5 text-sm font-semibold text-white transition-all hover:bg-green-700",
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
