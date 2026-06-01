"use client";

import React, { useState } from "react";
import Container from "@/components/container";
import SeparatorContainer from "@/components/separator-container";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const Partners = () => {
  const [step, setStep] = useState(1);
  const [partnerType, setPartnerType] = useState("reseller");
  const [productSlide, setProductSlide] = useState(0);

  const stats = [
    ["500+", "Active Merchants"],
    ["40%+", "Fraud Reduction"],
    ["15%+", "Conversion Uplift"],
    ["100+", "Global PSPs"],
  ];

  const products = [
    ["Pi Symphony", "AI-powered payment orchestration with adaptive routing"],
    ["Pi Shield", "Real-time fraud defense with predictive AI protection"],
    ["Pi Recon", "Automated reconciliation that cuts manual work by 95%"],
    ["Pi Deepsearch", "Conversational AI analytics for instant insights"],
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Revenue Growth",
      desc: "Access new revenue streams with competitive margins and recurring commission structures.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      desc: "PCI DSS, GDPR, and ISO-ready infrastructure built for trusted payment operations.",
    },
    {
      icon: Zap,
      title: "AI-Powered Technology",
      desc: "Leverage AI for fraud detection, smart routing, retries, and deep insights.",
    },
    {
      icon: Globe2,
      title: "Global Coverage",
      desc: "Connect to 100+ payment processors and APMs across multiple regions worldwide.",
    },
    {
      icon: BadgeCheck,
      title: "Dedicated Support",
      desc: "Get priority access to our partner success team and technical specialists.",
    },
    {
      icon: Sparkles,
      title: "Partner Recognition",
      desc: "Join our partner program with exclusive benefits and co-marketing opportunities.",
    },
  ];

  const partnerModels = [
    {
      id: "reseller",
      title: "Reseller Partner",
      desc: "Sell PayIntelli solutions under your own brand with full support.",
      points: [
        "Dedicated partner portal",
        "Volume-based pricing",
        "Co-marketing support",
        "Technical training",
      ],
    },
    {
      id: "whitelabel",
      title: "Whitelabel Partner",
      desc: "Fully branded payment solution with your identity.",
      points: [
        "Complete brand customization",
        "API-first integration",
        "Custom feature development",
        "Priority support SLA",
      ],
    },
    {
      id: "referral",
      title: "Referral Partner",
      desc: "Earn commissions by referring businesses to PayIntelli.",
      points: [
        "Competitive commission rates",
        "Recurring revenue share",
        "Marketing materials",
        "Referral tracking dashboard",
      ],
    },
  ];

  return (
    <main className="w-full bg-background pt-10">
      {/* Hero */}
      <section>
        <Container className="border-x border-border px-4 py-10 md:px-8 md:py-10">
          <div className="relative overflow-hidden rounded-lg border border-border bg-background px-6 py-16 text-center md:px-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(103,59,246,0.14),transparent_35%),radial-gradient(circle_at_25%_75%,rgba(96,181,255,0.15),transparent_35%),linear-gradient(135deg,rgba(229,229,255,0.5),transparent_45%)]" />

            <div className="relative mx-auto max-w-4xl">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-primary-soft px-4 py-2 text-sm text-text-brand">
                <Zap className="size-4 text-primary" />
                Now Accepting Partner Applications
              </div>

              <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-tight text-text-brand md:text-6xl">
                Grow Your Business <br />
                <span className="text-primary">With PayIntelli</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-muted md:text-lg">
                Join our partner ecosystem and unlock new revenue opportunities.
                Whether you&apos;re a reseller, whitelabel partner, or referral
                partner, we have the right program for you.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-border bg-white/80 p-5 shadow-sm backdrop-blur"
                  >
                    <p className="text-3xl font-semibold text-text-brand">
                      {value}
                    </p>
                    <p className="mt-2 text-sm text-text-muted">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SeparatorContainer />

      {/* Product Niche + Value Proposition Slider */}
      <section>
        <Container className="border-x border-border px-4 py-14 md:px-8">
          <div className="relative overflow-hidden rounded-lg border border-border bg-white p-6 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(96,181,255,0.16),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(103,59,246,0.12),transparent_35%)]" />

            <div className="relative min-h-[470px] pb-14">
              {productSlide === 0 && (
                <div>
                  <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-text-brand">
                    <Layers className="size-4 text-primary" />
                    Our Product Niche
                  </div>

                  <h2 className="mt-6 text-3xl font-semibold tracking-tight text-text-brand md:text-4xl">
                    Enterprise Payment Intelligence Suite
                  </h2>

                  <p className="mt-5 max-w-4xl text-base leading-7 text-text-muted">
                    PayIntelli delivers a comprehensive suite of AI-powered
                    payment solutions designed for modern enterprises. From
                    intelligent transaction routing to predictive fraud
                    prevention and automated reconciliation, our products work
                    together to transform your payment operations.
                  </p>

                  <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {products.map(([title, desc]) => (
                      <div
                        key={title}
                        className="rounded-lg border border-border bg-white p-5 shadow-sm"
                      >
                        <div className="flex gap-4">
                          <Sparkles className="mt-1 size-4 shrink-0 text-primary" />
                          <div>
                            <h3 className="font-semibold text-text-brand">
                              {title}
                            </h3>
                            <p className="mt-2 text-sm text-text-muted">
                              {desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {productSlide === 1 && (
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-semibold tracking-tight text-text-brand md:text-4xl">
                    Our Value Proposition
                  </h2>

                  <p className="mt-5 text-lg text-text-muted">
                    Transform Payments Into a Competitive Advantage
                  </p>

                  <p className="mt-8 text-base leading-7 text-text-muted">
                    We don&apos;t just process payments — we optimize them. Our
                    AI-driven platform analyzes millions of data points to route
                    transactions through the most efficient providers in
                    real-time, prevent fraud before it impacts revenue, and
                    deliver actionable insights that drive business growth.
                  </p>

                  <div className="mx-auto mt-10 max-w-2xl space-y-4 text-left">
                    {[
                      "Up to 15% improvement in authorization rates with Pi Symphony’s intelligent routing",
                      "40%+ reduction in fraud and chargebacks with Pi Shield’s adaptive protection",
                      "95% reduction in manual reconciliation work with Pi Recon’s automation",
                      "Instant business insights through natural language queries with Pi Deepsearch",
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <Check className="mt-1 size-4 shrink-0 text-primary" />
                        <p className="text-sm leading-6 text-text-brand">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 flex items-center gap-6">
                <button
                  onClick={() => setProductSlide(0)}
                  className={`h-1 rounded-full transition-all ${
                    productSlide === 0
                      ? "w-28 bg-primary"
                      : "w-12 bg-primary-soft"
                  }`}
                  aria-label="Show product niche"
                />

                <button
                  onClick={() => setProductSlide(1)}
                  className={`size-2 rounded-full transition-all ${
                    productSlide === 1 ? "bg-primary" : "bg-primary-soft"
                  }`}
                  aria-label="Show value proposition"
                />
              </div>

              <div className="absolute bottom-0 right-0 flex gap-4 text-text-brand">
                <button
                  onClick={() =>
                    setProductSlide((prev) => (prev === 0 ? 1 : 0))
                  }
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="size-5" />
                </button>

                <button
                  onClick={() =>
                    setProductSlide((prev) => (prev === 0 ? 1 : 0))
                  }
                  aria-label="Next slide"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SeparatorContainer />

      {/* Why Partner */}
      <section>
        <Container className="border-x border-border px-4 py-14 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text-brand md:text-5xl">
              Why Partner with PayIntelli?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-muted md:text-lg">
              Join 500+ businesses already transforming their payment
              infrastructure with our AI-powered solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-lg border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-text-brand">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SeparatorContainer />

      {/* Partner Form */}
      <section>
        <Container className="border-x border-border px-4 py-14 md:px-8 md:pb-20">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text-brand md:text-5xl">
              Become a Partner
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-muted">
              Complete the form below to apply for our partner program. Our team
              will review your application and get back to you within 2 to 3
              business days.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-lg border border-border bg-white p-6 shadow-[0_20px_60px_rgba(8,40,50,0.08)] md:p-10">
            <div className="flex justify-center gap-8 md:gap-16">
              {[
                [1, "Partner Type"],
                [2, "Company Info"],
                [3, "Summary"],
              ].map(([number, label]) => (
                <button
                  key={number}
                  onClick={() => setStep(Number(number))}
                  className="flex flex-col items-center gap-2"
                >
                  <span
                    className={`flex size-9 items-center justify-center rounded-full text-sm font-semibold ${
                      step === number
                        ? "bg-primary text-white"
                        : "bg-primary-soft text-text-muted"
                    }`}
                  >
                    {number}
                  </span>
                  <span
                    className={`text-xs ${
                      step === number ? "text-primary" : "text-text-muted"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              ))}
            </div>

            {step === 1 && (
              <div className="mt-10">
                <h3 className="text-center text-xl font-semibold text-text-brand">
                  Choose Your Partnership Model
                </h3>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {partnerModels.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => setPartnerType(model.id)}
                      className={`rounded-lg border p-5 text-left transition ${
                        partnerType === model.id
                          ? "border-primary bg-primary-soft/50"
                          : "border-border bg-white hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                          <Sparkles className="size-5" />
                        </div>
                        <span
                          className={`size-4 rounded-full border ${
                            partnerType === model.id
                              ? "border-primary bg-primary"
                              : "border-border"
                          }`}
                        />
                      </div>

                      <h4 className="mt-5 font-semibold text-text-brand">
                        {model.title}
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-text-muted">
                        {model.desc}
                      </p>

                      <div className="mt-5 space-y-2">
                        {model.points.map((point) => (
                          <div key={point} className="flex gap-2">
                            <span className="mt-2 size-1.5 rounded-full bg-primary" />
                            <p className="text-xs leading-5 text-text-muted">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 font-semibold text-white transition hover:bg-primary-muted"
                  >
                    Next
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="mt-10">
                <h3 className="text-center text-xl font-semibold text-text-brand">
                  Tell Us About Your Company
                </h3>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {[
                    "Company Name *",
                    "Contact Name *",
                    "Business Email *",
                    "Phone Number",
                    "Company Website",
                    "Country *",
                  ].map((label) => (
                    <label key={label} className="text-sm text-text-brand">
                      {label}
                      <input
                        className="mt-2 h-11 w-full rounded-lg border border-border bg-white px-4 text-sm outline-none transition focus:border-primary"
                        placeholder={label.replace(" *", "")}
                      />
                    </label>
                  ))}

                  <label className="text-sm text-text-brand">
                    Company Size *
                    <select className="mt-2 h-11 w-full rounded-lg border border-border bg-white px-4 text-sm outline-none transition focus:border-primary">
                      <option>1–50 employees</option>
                      <option>51–200 employees</option>
                      <option>201–500 employees</option>
                      <option>500+ employees</option>
                    </select>
                  </label>

                  <label className="text-sm text-text-brand md:col-span-2">
                    Partnership Interest *
                    <textarea
                      rows={4}
                      className="mt-2 w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
                      placeholder="Tell us what you’re interested in..."
                    />
                  </label>
                </div>

                <div className="mt-8 flex justify-end gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="h-11 rounded-lg border border-border px-5 font-medium text-text-brand"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="h-11 rounded-lg bg-primary px-5 font-semibold text-white transition hover:bg-primary-muted"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="mt-10">
                <h3 className="text-center text-xl font-semibold text-text-brand">
                  Partnership Details
                </h3>

                <div className="mt-8 space-y-5">
                  <label className="text-sm text-text-brand">
                    Monthly Revenue *
                    <select className="mt-2 h-11 w-full rounded-lg border border-border bg-white px-4 text-sm outline-none transition focus:border-primary">
                      <option>$10K – $100K/month</option>
                      <option>$100K – $500K/month</option>
                      <option>$500K+/month</option>
                    </select>
                  </label>

                  <label className="text-sm text-text-brand">
                    Volume Target / Market / Industry *
                    <input className="mt-2 h-11 w-full rounded-lg border border-border bg-white px-4 text-sm outline-none transition focus:border-primary" />
                  </label>

                  <label className="text-sm text-text-brand">
                    Existing Payment Integrations *
                    <input
                      className="mt-2 h-11 w-full rounded-lg border border-border bg-white px-4 text-sm outline-none transition focus:border-primary"
                      placeholder="e.g. Stripe, Adyen, Worldpay"
                    />
                  </label>
                </div>

                <div className="mt-8 rounded-lg border border-border bg-primary-soft/40 p-5">
                  <h4 className="font-semibold text-text-brand">Summary</h4>
                  <div className="mt-4 grid gap-4 text-sm text-text-muted md:grid-cols-2">
                    <p>
                      <span className="font-medium text-text-brand">
                        Partnership Model:
                      </span>{" "}
                      {partnerType}
                    </p>
                    <p>
                      <span className="font-medium text-text-brand">
                        Company:
                      </span>{" "}
                      Your company details
                    </p>
                    <p>
                      <span className="font-medium text-text-brand">
                        Primary Contact:
                      </span>{" "}
                      Contact information
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-end gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="h-11 rounded-lg border border-border px-5 font-medium text-text-brand"
                  >
                    Back
                  </button>
                  <button className="h-11 rounded-lg bg-primary px-5 font-semibold text-white transition hover:bg-primary-muted">
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
      <SeparatorContainer />
    </main>
  );
};

export default Partners;
