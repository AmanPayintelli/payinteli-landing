"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  MailCheck,
  TriangleAlert,
} from "lucide-react";
import { apiRequest } from "@/api/apiClient";
import { cn } from "@/lib/utils";
import { CONFIRM_SUBSCRIPTION_URL } from "@/api";

type Status = "idle" | "loading" | "success" | "error" | "no-token";

type SubscribeResponse = {
  message?: string;
  error?: string;
};

const Confirmsubscription = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    if (!token) {
      setStatus("no-token");
      setMessage("No subscription token was found.");
      return;
    }

    let aborted = false;

    const confirmSubscription = async () => {
      try {
        setStatus("loading");

        const response = await apiRequest<SubscribeResponse>({
          method: "post",
          url: `${CONFIRM_SUBSCRIPTION_URL}?action=confirm&token=${encodeURIComponent(
            token,
          )}`,
        });

        if (aborted) return;

        setStatus("success");
        setMessage(response?.message || "Subscription confirmed successfully.");
      } catch (error) {
        if (aborted) return;

        const errorMessage =
          error instanceof Error ? error.message : "Something went wrong.";

        setStatus("error");

        if (errorMessage.includes("Invalid or expired subscribe token")) {
          setMessage(
            "Looks like this subscription link has expired or is invalid.",
          );
        } else {
          setMessage(errorMessage);
        }
      }
    };

    confirmSubscription();

    return () => {
      aborted = true;
    };
  }, [token]);

  useEffect(() => {
    if (status !== "success") return;

    const interval = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 1000);

    const timeout = setTimeout(() => {
      router.push("/resource-hub");
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [status, router]);

  const isSuccess = status === "success";
  const isError = status === "error" || status === "no-token";
  const isLoading = status === "loading" || status === "idle";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-soft/70 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-24 size-40 rounded-full bg-primary/10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-20 left-10 size-40 rounded-full bg-primary-muted/10 blur-2xl" />

      <section className="relative w-full max-w-xl rounded-3xl border border-border bg-white/90 p-6 text-center shadow-[0_24px_80px_rgba(8,40,50,0.08)] backdrop-blur sm:p-10">
        <div
          className={cn(
            "mx-auto flex size-16 items-center justify-center rounded-2xl",
            isSuccess && "bg-emerald-50 text-emerald-600",
            isError && "bg-red-50 text-red-500",
            isLoading && "bg-primary-soft text-primary",
          )}
        >
          {isSuccess ? (
            <CheckCircle2 className="size-8" />
          ) : isError ? (
            <TriangleAlert className="size-8" />
          ) : (
            <Loader2 className="size-8 animate-spin" />
          )}
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-soft bg-primary-soft/60 px-3 py-1 text-xs font-semibold text-primary">
          <MailCheck className="size-3.5" />
          Newsletter Subscription
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-text-brand md:text-4xl">
          {isSuccess
            ? "Subscription Confirmed"
            : isError
              ? "Unable to Confirm"
              : "Confirming Subscription"}
        </h1>

        <p
          className={cn(
            "mx-auto mt-4 max-w-md text-sm leading-6 text-text-muted",
            isSuccess && "text-emerald-600",
            isError && "text-red-500",
          )}
        >
          {message ||
            (isLoading
              ? "Please wait while we verify your subscription link."
              : "")}
        </p>

        {isSuccess && (
          <p className="mt-3 text-sm text-text-muted">
            You will be redirected to the resources hub in{" "}
            <span className="font-semibold text-primary">{countdown}s</span>.
          </p>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/resource-hub"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-white transition-all hover:opacity-90"
          >
            Visit Resources
            <ArrowRight className="size-4" />
          </Link>

          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-white px-5 text-sm font-semibold text-text-brand transition-all hover:bg-primary-soft/60"
          >
            Go Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Confirmsubscription;
