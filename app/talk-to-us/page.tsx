"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Phone,
  Sparkles,
} from "lucide-react";
import SeparatorContainer from "@/components/separator-container";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const SEND_MAIL_URL =
  "https://xx1ulrq8s3.execute-api.ap-south-1.amazonaws.com/api/send-mail";

const assessmentSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  company: z.string().min(1, "Company name is required"),
  role: z.string().min(1, "Role is required"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type AssessmentFormData = z.infer<typeof assessmentSchema>;

const FreeAssesment = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: AssessmentFormData) => {
    try {
      setApiError("");
      setSuccessMessage("");

      const response = await fetch(SEND_MAIL_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          role: data.role,
          phone: data.phone || "",
          message: data.message,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Failed to submit form");
      }

      setSuccessMessage("Thanks! Our team will reach out within 24 hours.");
      reset();
    } catch (error) {
      console.error(error);
      setApiError("Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "h-12 rounded-lg border border-border bg-white px-4 text-sm outline-none transition focus:border-primary";

  const errorClass = "mt-1 text-xs font-medium text-red-500";

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-7xl border-x border-border px-4 py-10 md:px-8 md:py-14">
        <div className="relative overflow-hidden border border-border bg-background">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[55%] bg-[radial-gradient(circle_at_80%_35%,rgba(103,59,246,0.14),transparent_45%),linear-gradient(to_left,rgba(229,229,255,0.55),transparent)]" />

          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:px-10 md:py-20">
            <span className="font-mono text-xs uppercase tracking-wide text-text-muted">
              [ Free Assessment ]
            </span>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text-brand md:text-6xl">
              Discover Hidden Revenue in Your Payments Ecosystem
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-muted md:text-lg">
              Most businesses are leaving money on the table without realizing
              it. Book a complimentary Payment Intelligence Assessment and let
              our experts identify hidden opportunities.
            </p>
          </div>
        </div>

        <div className="grid border-x border-b border-border lg:grid-cols-[1fr_1.05fr]">
          <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-text-brand md:text-3xl">
                What we’ll help you uncover
              </h2>

              <p className="mt-4 text-sm leading-6 text-text-muted md:text-base">
                Receive a practical opportunity report with actionable
                recommendations tailored to your business.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Revenue leakage and missed growth opportunities",
                  "Payment approval rate optimization opportunities",
                  "Hidden processing costs and inefficiencies",
                  "Fraud and risk management gaps",
                  "Operational bottlenecks impacting scale and performance",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <p className="text-sm leading-6 text-text-normal md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[linear-gradient(135deg,rgba(229,229,255,0.35),transparent_45%)] p-4 md:p-8">
            <div className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-6 shadow-[0_20px_60px_rgba(8,40,50,0.08)] md:p-8">
              <div className="text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ArrowRight className="size-6" />
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-primary">
                  Talk to Our Experts
                </h3>

                <p className="mt-3 text-sm text-text-muted md:text-base">
                  Get personalized guidance and custom solutions
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-4"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      {...register("name")}
                      className={`${inputClass} w-full`}
                    />
                    {errors.name?.message && (
                      <p className={errorClass}>{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Work Email *"
                      {...register("email")}
                      className={`${inputClass} w-full`}
                    />
                    {errors.email?.message && (
                      <p className={errorClass}>{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Company Name *"
                      {...register("company")}
                      className={`${inputClass} w-full`}
                    />
                    {errors.company?.message && (
                      <p className={errorClass}>{errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <select
                      {...register("role")}
                      className={`${inputClass} w-full text-text-muted`}
                    >
                      <option value="">Select Role *</option>
                      <option value="Founder / CEO">Founder / CEO</option>
                      <option value="Finance">Finance</option>
                      <option value="Operations">Operations</option>
                      <option value="Product">Product</option>
                      <option value="Technology">Technology</option>
                    </select>
                    {errors.role?.message && (
                      <p className={errorClass}>{errors.role.message}</p>
                    )}
                  </div>
                </div>

                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  {...register("phone")}
                  className={`${inputClass} w-full`}
                />

                <div>
                  <textarea
                    placeholder="Tell us about your payment challenges... *"
                    rows={5}
                    {...register("message")}
                    className="w-full resize-none rounded-lg border border-border bg-white px-4 py-4 text-sm outline-none transition focus:border-primary"
                  />
                  {errors.message?.message && (
                    <p className={errorClass}>{errors.message.message}</p>
                  )}
                </div>

                {apiError && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {apiError}
                  </p>
                )}

                {successMessage && (
                  <p className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                    {successMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border bg-text-brand px-5 font-semibold text-black shadow-lg shadow-text-brand/10 transition hover:-translate-y-0.5 hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Sparkles className="size-5" />
                      Get Expert Consultation
                    </>
                  )}
                </button>

                <p className="flex items-center justify-center gap-2 pt-2 text-sm text-text-muted">
                  <Phone className="size-4" />
                  We&apos;ll reach out within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <SeparatorContainer />
    </section>
  );
};

export default FreeAssesment;
