"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Mail,
  RotateCcw,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OnboardingFormData, onboardingSchema } from "./schema";
import { ButtonSecondary } from "@/components/ui/buttonPrimary";
import { cn } from "@/lib/utils";
import { useOnboardingStep } from "@/context/onboarding/onboarding-step-context";
import { useOnboardingData } from "@/context/onboarding/onboarding-context";
import OnboardingInput from "../input-field";
import { OTP_REQUEST_URL, OTP_VERIFY_URL } from "@/api";
import { apiRequest } from "@/api/apiClient";

const OnboardingAccount = () => {
  const { nextStep } = useOnboardingStep();
  const { setSessionId, setAccountData } = useOnboardingData();

  const [isOtpStep, setIsOtpStep] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [isResendingOtp, setIsResendingOtp] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      role: "",
      agreed: false,
      otp: "",
    },
  });

  const email = watch("email");

  useEffect(() => {
    if (resendTimer <= 0) return;

    const timer = setTimeout(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [resendTimer]);

  const requestOtp = async (email: string) => {
    const result = await apiRequest({
      method: "post",
      url: OTP_REQUEST_URL,
      body: { email },
    });

    setResendTimer(15);

    return result;
  };

  const handleResendOtp = async () => {
    try {
      setIsResendingOtp(true);
      clearErrors("otp");

      await requestOtp(email);
    } catch (error) {
      console.error(error);

      setError("otp", {
        type: "manual",
        message: "Failed to resend OTP. Please try again.",
      });
    } finally {
      setIsResendingOtp(false);
    }
  };

  const verifyOtp = async (data: OnboardingFormData) => {
    if (!data.otp || data.otp.length < 4) {
      setError("otp", {
        type: "manual",
        message: "Enter valid OTP",
      });
      return;
    }

    try {
      const result = await apiRequest<{ session_id: string }>({
        method: "post",
        url: OTP_VERIFY_URL,
        body: {
          email: data.email,
          otp: data.otp,
          name: data.fullName,
          company: data.companyName,
          role: data.role,
        },
      });

      setSessionId(result.session_id);
      setAccountData(data);
      nextStep();
    } catch (error) {
      console.error(error);

      setError("otp", {
        type: "manual",
        message: error instanceof Error ? error.message : "Invalid OTP",
      });
    }
  };

  const onSubmit = async (data: OnboardingFormData) => {
    try {
      clearErrors();

      if (!isOtpStep) {
        await requestOtp(data.email);
        setIsOtpStep(true);
        return;
      }

      await verifyOtp(data);
    } catch (error) {
      console.error(error);

      if (isOtpStep) {
        setError("otp", {
          type: "manual",
          message: "Something went wrong. Please try again.",
        });
        return;
      }

      setError("email", {
        type: "manual",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="overflow-hidden">
      <AnimatePresence mode="wait">
        {!isOtpStep ? (
          <motion.div
            key="account-details"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="mb-5">
              <h1 className="text-3xl font-semibold tracking-tight text-text-brand md:text-4xl">
                Let&apos;s Get You Onboarded
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-text-muted">
                Start with your basic work details. We&apos;ll verify your work
                email before moving ahead.
              </p>
            </div>

            <OnboardingInput
              label="Full Name"
              placeholder="John Doe"
              icon={UserRound}
              register={register("fullName")}
              error={errors.fullName?.message}
            />

            <OnboardingInput
              label="Official Work Email"
              type="email"
              placeholder="you@company.com"
              icon={Mail}
              register={register("email")}
              error={errors.email?.message}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <OnboardingInput
                label="Company Name"
                placeholder="PayIntelli"
                register={register("companyName")}
                error={errors.companyName?.message}
              />

              <OnboardingInput
                label="Designation / Role"
                placeholder="Founder / CTO"
                register={register("role")}
                error={errors.role?.message}
              />
            </div>

            <div>
              <label className="flex items-start gap-3 rounded-lg border border-border bg-primary-soft/25 p-3 text-sm text-text-normal">
                <input
                  type="checkbox"
                  {...register("agreed")}
                  className="mt-0.5 size-4 rounded border-border accent-primary"
                />

                <span>
                  I agree to PayIntelli&apos;s{" "}
                  <a
                    href="/terms-of-service"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    Terms &amp; Conditions
                  </a>
                </span>
              </label>

              {errors.agreed?.message && (
                <p className="mt-1 text-xs font-medium text-red-500">
                  {errors.agreed.message}
                </p>
              )}
            </div>

            <ButtonSecondary
              title={isSubmitting ? "Sending OTP..." : "Continue"}
              icon={!isSubmitting && <ArrowRight className="size-4" />}
              height="h-11"
              className={cn(
                "mt-5 w-full rounded-lg bg-primary text-white shadow-[0_14px_35px_rgba(103,59,246,0.24)] hover:bg-primary hover:opacity-90",
                isSubmitting && "pointer-events-none opacity-60",
              )}
            />
          </motion.div>
        ) : (
          <motion.div
            key="otp-verification"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 28 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="rounded-lg border border-primary-soft bg-primary-soft/25 p-4">
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary text-white">
                <ShieldCheck className="size-5" />
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-text-brand md:text-4xl">
                Verify your email
              </h1>

              <p className="mt-3 text-sm leading-6 text-text-muted">
                We sent a verification code to{" "}
                <span className="font-semibold text-text-brand">{email}</span>.
              </p>
            </div>

            <OnboardingInput
              label="Enter OTP"
              placeholder="873463"
              register={register("otp")}
              error={errors.otp?.message}
            />

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setIsOtpStep(false)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <RotateCcw className="size-4" />
                Change details
              </button>

              <button
                type="button"
                onClick={handleResendOtp}
                disabled={resendTimer > 0 || isResendingOtp}
                className={cn(
                  "text-sm font-semibold text-primary transition-all",
                  (resendTimer > 0 || isResendingOtp) &&
                    "pointer-events-none text-text-muted opacity-70",
                )}
              >
                {isResendingOtp
                  ? "Resending..."
                  : resendTimer > 0
                    ? `Resend in ${resendTimer}s`
                    : "Resend OTP"}
              </button>
            </div>

            <ButtonSecondary
              title={isSubmitting ? "Verifying..." : "Verify & Continue"}
              icon={!isSubmitting && <ArrowRight className="size-4" />}
              height="h-11"
              className={cn(
                "mt-5 w-full rounded-lg bg-primary text-white shadow-[0_14px_35px_rgba(103,59,246,0.24)] hover:bg-primary hover:opacity-90",
                isSubmitting && "pointer-events-none opacity-60",
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default OnboardingAccount;
