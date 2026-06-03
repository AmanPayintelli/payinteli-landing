"use client";

import Container from "@/components/container";
import SeparatorContainer from "@/components/separator-container";
import { ButtonSecondary } from "@/components/ui/buttonPrimary";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SEND_MAIL_URL =
  "https://xx1ulrq8s3.execute-api.ap-south-1.amazonaws.com/api/send-mail";

const transactionOptions = [
  "< 10,000",
  "10,000 - 100,000",
  "100,000 - 1 million",
  "1 million +",
];

const solutionOptions = [
  "AI powered fraud detection",
  "Payment orchestration and smart routing",
  "Revenue and cost optimization",
  "Reconciliation and reporting",
];

const contactSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Enter a valid email"),
    fullName: z.string().min(1, "Full name is required"),
    company: z.string().min(1, "Company name is required"),
    website: z.string().min(1, "Company website is required"),
    transactions: z.string().min(1, "Please select monthly transactions"),
    solutions: z
      .array(z.string())
      .min(1, "Please select at least one solution"),
    otherSolution: z.string().optional(),
    challenge: z.string().min(1, "Payment challenge is required"),
  })
  .refine(
    (data) =>
      !data.solutions.includes("Other") || Boolean(data.otherSolution?.trim()),
    {
      message: "Please specify your other solution",
      path: ["otherSolution"],
    },
  );

type ContactFormData = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      fullName: "",
      company: "",
      website: "",
      transactions: "",
      solutions: [],
      otherSolution: "",
      challenge: "",
    },
  });

  const selectedSolutions = watch("solutions");

  const errorClass =
    "mt-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600";

  const inputClass = (hasError?: boolean) =>
    `h-12 w-full rounded-2xl border bg-white px-4 text-sm text-text-brand outline-none transition placeholder:text-text-muted/60 focus:border-primary focus:shadow-[0_0_0_4px_rgba(103,59,246,0.08)] ${
      hasError ? "border-red-400 bg-red-50/40" : "border-border"
    }`;

  const textareaClass = (hasError?: boolean) =>
    `w-full resize-none rounded-3xl border bg-white px-4 py-3 text-sm text-text-brand outline-none transition placeholder:text-text-muted/60 focus:border-primary focus:shadow-[0_0_0_4px_rgba(103,59,246,0.08)] ${
      hasError ? "border-red-400 bg-red-50/40" : "border-border"
    }`;

  const handleSolutionChange = (item: string) => {
    const updatedSolutions = selectedSolutions.includes(item)
      ? selectedSolutions.filter((solution) => solution !== item)
      : [...selectedSolutions, item];

    setValue("solutions", updatedSolutions, {
      shouldValidate: true,
      shouldDirty: true,
    });

    if (item === "Other" && selectedSolutions.includes("Other")) {
      setValue("otherSolution", "");
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      setApiError("");
      setSuccessMessage("");

      const response = await fetch(SEND_MAIL_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          challenge: data.challenge,
          company: data.company,
          email: data.email,
          fullName: data.fullName,
          otherSolution: data.otherSolution || "",
          solutions: data.solutions,
          transactions: data.transactions,
          website: data.website,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Failed to submit form");
      }

      setSuccessMessage(result?.message || "Form submitted successfully");
      reset();
    } catch (error) {
      console.error(error);
      setApiError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-background pt-17">
      <SeparatorContainer />

      <Container className="relative h-full overflow-hidden border-x bg-white">
        <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-5 md:p-6">
            <div className="max-w-xl">
              <span className="font-mono text-xs uppercase tracking-wide text-primary">
                [ Get in touch ]
              </span>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-text-brand md:text-4xl">
                Tell us about your business
              </h3>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
              className="mt-8 grid gap-5 rounded-lg border border-border bg-white/90 p-4 shadow-[0_24px_70px_rgba(8,40,50,0.08)] backdrop-blur-xl md:p-5"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-text-brand">
                    Work email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    {...register("email")}
                    className={inputClass(Boolean(errors.email))}
                  />
                  {errors.email?.message ? (
                    <p className={errorClass}>{errors.email.message}</p>
                  ) : (
                    <p className="mt-1.5 text-xs text-text-muted">
                      Please provide a professional email
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-text-brand">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register("fullName")}
                    className={inputClass(Boolean(errors.fullName))}
                  />
                  {errors.fullName?.message && (
                    <p className={errorClass}>{errors.fullName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-text-brand">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    {...register("company")}
                    className={inputClass(Boolean(errors.company))}
                  />
                  {errors.company?.message && (
                    <p className={errorClass}>{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-text-brand">
                    Company Website
                  </label>
                  <input
                    type="text"
                    placeholder="company.com"
                    {...register("website")}
                    className={inputClass(Boolean(errors.website))}
                  />
                  {errors.website?.message && (
                    <p className={errorClass}>{errors.website.message}</p>
                  )}
                </div>
              </div>

              <div
                className={`rounded-3xl border p-4 ${
                  errors.transactions
                    ? "border-red-300 bg-red-50/40"
                    : "border-primary-soft bg-primary-soft/45"
                }`}
              >
                <label className="mb-4 block text-sm font-semibold text-text-brand">
                  Monthly Transactions
                </label>

                <div className="grid gap-3 sm:grid-cols-2">
                  {transactionOptions.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm text-text-brand transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
                    >
                      <input
                        type="radio"
                        value={item}
                        {...register("transactions")}
                        className="accent-primary"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>

                {errors.transactions?.message && (
                  <p className={errorClass}>{errors.transactions.message}</p>
                )}
              </div>

              <div
                className={`rounded-3xl border bg-white p-4 ${
                  errors.solutions || errors.otherSolution
                    ? "border-red-300"
                    : "border-border"
                }`}
              >
                <label className="mb-4 block text-sm font-semibold text-text-brand">
                  What solutions are you most interested in?
                </label>

                <div className="grid gap-3">
                  {[...solutionOptions, "Other"].map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-text-brand transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary-soft/50 hover:shadow-sm"
                    >
                      <input
                        type="checkbox"
                        value={item}
                        checked={selectedSolutions.includes(item)}
                        onChange={() => handleSolutionChange(item)}
                        className="accent-primary"
                      />
                      <span>
                        {item === "Other" ? "Other (please specify)" : item}
                      </span>
                    </label>
                  ))}

                  {selectedSolutions.includes("Other") && (
                    <div>
                      <input
                        type="text"
                        placeholder="Your solution"
                        {...register("otherSolution")}
                        className={inputClass(Boolean(errors.otherSolution))}
                      />
                      {errors.otherSolution?.message && (
                        <p className={errorClass}>
                          {errors.otherSolution.message}
                        </p>
                      )}
                    </div>
                  )}

                  {errors.solutions?.message && (
                    <p className={errorClass}>{errors.solutions.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-brand">
                  What’s your biggest payment challenge today?
                </label>
                <textarea
                  rows={5}
                  placeholder="Type your response here..."
                  {...register("challenge")}
                  className={textareaClass(Boolean(errors.challenge))}
                />
                {errors.challenge?.message && (
                  <p className={errorClass}>{errors.challenge.message}</p>
                )}
              </div>

              <ButtonSecondary
                title={isSubmitting ? "Submitting..." : "Submit"}
                height="h-12"
                className="w-full px-6 disabled:pointer-events-none disabled:opacity-70"
              />

              {successMessage && (
                <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600" />
                  <div>
                    <p className="text-sm font-semibold text-green-700">
                      Submitted successfully
                    </p>
                    <p className="mt-1 text-xs text-green-600">
                      {successMessage}
                    </p>
                  </div>
                </div>
              )}

              {apiError && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {apiError}
                </div>
              )}
            </form>
          </div>

          <div className="relative min-h-155 overflow-hidden border-t border-border bg-text-brand lg:border-l lg:border-t-0">
            <img
              src="/new-york-city.jpg"
              alt="New York city skyline"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-b from-text-brand/20 via-text-brand/45 to-text-brand/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(103,59,246,0.35),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(229,229,255,0.25),transparent_35%)]" />

            <div className="relative flex h-full flex-col justify-end p-6 text-white md:p-8 lg:p-10">
              <h4 className="mt-6 max-w-md text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                Built for modern payment teams moving at global speed.
              </h4>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
                A cleaner, premium contact experience with enterprise-level
                trust and modern city energy.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <SeparatorContainer />
    </div>
  );
};

export default ContactUs;
