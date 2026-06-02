"use client";

import Container from "@/components/container";
import SeparatorContainer from "@/components/separator-container";
import { ButtonSecondary } from "@/components/ui/buttonPrimary";
import { APP_CONFIG } from "@/constants/ndex";
import { useState } from "react";

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

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    company: "",
    website: "",
    transactions: "",
    solutions: [] as string[],
    otherSolution: "",
    challenge: "",
  });

  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedSolutions = prev.solutions.includes(value)
          ? prev.solutions.filter((item) => item !== value)
          : [...prev.solutions, value];

        return {
          ...prev,
          solutions: updatedSolutions,
          ...(value === "Other" && prev.solutions.includes("Other")
            ? { otherSolution: "" }
            : {}),
        };
      });

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(`${APP_CONFIG.API_BASE_URL}/send-mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          email: "",
          fullName: "",
          company: "",
          website: "",
          transactions: "",
          solutions: [],
          otherSolution: "",
          challenge: "",
        });
      } else {
        setSubmitStatus(data?.error || "error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background pt-17">
      <SeparatorContainer />

      <Container className="relative h-full overflow-hidden border-x bg-white">
        <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Form */}
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
              onSubmit={handleSubmit}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className="h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm text-text-brand outline-none transition placeholder:text-text-muted/60 focus:border-primary focus:shadow-[0_0_0_4px_rgba(103,59,246,0.08)]"
                  />
                  <p className="mt-1.5 text-xs text-text-muted">
                    Please provide a professional email
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-text-brand">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm text-text-brand outline-none transition placeholder:text-text-muted/60 focus:border-primary focus:shadow-[0_0_0_4px_rgba(103,59,246,0.08)]"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-text-brand">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    required
                    className="h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm text-text-brand outline-none transition placeholder:text-text-muted/60 focus:border-primary focus:shadow-[0_0_0_4px_rgba(103,59,246,0.08)]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-text-brand">
                    Company Website
                  </label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="company.com"
                    required
                    className="h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm text-text-brand outline-none transition placeholder:text-text-muted/60 focus:border-primary focus:shadow-[0_0_0_4px_rgba(103,59,246,0.08)]"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-primary-soft bg-primary-soft/45 p-4">
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
                        name="transactions"
                        value={item}
                        checked={formData.transactions === item}
                        onChange={handleChange}
                        className="accent-primary"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-white p-4">
                <label className="mb-4 block text-sm font-semibold text-text-brand">
                  What solutions are you most interested in?
                </label>

                <div className="grid gap-3">
                  {solutionOptions.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-text-brand transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary-soft/50 hover:shadow-sm"
                    >
                      <input
                        type="checkbox"
                        name="solutions"
                        value={item}
                        checked={formData.solutions.includes(item)}
                        onChange={handleChange}
                        className="accent-primary"
                      />
                      <span>{item}</span>
                    </label>
                  ))}

                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-text-brand transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary-soft/50 hover:shadow-sm">
                    <input
                      type="checkbox"
                      name="solutions"
                      value="Other"
                      checked={formData.solutions.includes("Other")}
                      onChange={handleChange}
                      className="accent-primary"
                    />
                    <span>Other (please specify)</span>
                  </label>

                  {formData.solutions.includes("Other") && (
                    <input
                      type="text"
                      name="otherSolution"
                      value={formData.otherSolution}
                      onChange={handleChange}
                      placeholder="Your solution"
                      className="h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm text-text-brand outline-none transition placeholder:text-text-muted/60 focus:border-primary focus:shadow-[0_0_0_4px_rgba(103,59,246,0.08)]"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-brand">
                  What’s your biggest payment challenge today?
                </label>
                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Type your response here..."
                  className="w-full resize-none rounded-3xl border border-border bg-white px-4 py-3 text-sm text-text-brand outline-none transition placeholder:text-text-muted/60 focus:border-primary focus:shadow-[0_0_0_4px_rgba(103,59,246,0.08)]"
                />
              </div>

              <ButtonSecondary
                title={
                  isSubmitting
                    ? "Submitting..."
                    : submitStatus === "success"
                      ? "Submitted"
                      : "Submit"
                }
                height="h-12"
                className="w-full px-6 disabled:pointer-events-none disabled:opacity-70"
              />

              {submitStatus === "success" && (
                <div className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-600">
                  Your message has been sent successfully!
                </div>
              )}

              {submitStatus && submitStatus !== "success" && (
                <div className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  There was a problem sending your message. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Right Visual */}
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
