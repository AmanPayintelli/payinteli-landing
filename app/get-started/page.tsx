import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Rocket } from "lucide-react";
import SeparatorContainer from "@/components/separator-container";

const ClientOnboarding = () => {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-7xl border-x border-border px-4 py-10 md:px-8 md:py-14">
        {/* Hero Section */}
        <div className="relative overflow-hidden border border-border bg-background">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[55%] bg-[radial-gradient(circle_at_80%_35%,rgba(103,59,246,0.14),transparent_45%),linear-gradient(to_left,rgba(229,229,255,0.55),transparent)]" />

          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:px-10 md:py-20">
            <span className="font-mono text-xs uppercase tracking-wide text-text-muted">
              [ Client Onboarding ]
            </span>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text-brand md:text-6xl">
              Start Your Onboarding Journey
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-muted md:text-lg">
              Get your business set up with PayIntelli through a smooth guided
              onboarding process built for compliance, integration, and scale.
            </p>
          </div>
        </div>

        {/* Onboarding Card */}
        <div className="border-x border-b border-border px-4 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-6  md:p-8">
            <div className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Rocket className="size-6" />
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-brand">
                Start Client Onboarding
              </h2>

              <p className="mt-3 text-sm text-text-muted md:text-base">
                Complete your company details, compliance information, and
                integration setup in one guided flow.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Business profile and company verification",
                "Compliance and document collection",
                "Payment setup and product configuration",
                "Sandbox, API keys, and integration access",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-text-normal md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-border bg-primary-soft/40 p-5">
              <p className="text-sm font-medium text-text-brand">
                Perfect for:
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["New Clients", "Operations Teams", "Technical Teams"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-white px-3 py-1 text-xs text-text-brand"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <Link
              href="/onboarding"
              className="group mt-8 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-text-brand px-5 font-semibold text-black border hover:text-white shadow-lg shadow-text-brand/10 transition hover:-translate-y-0.5 hover:bg-primary"
            >
              Start Exploring Now
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <p className="mt-5 text-center text-sm text-text-muted">
              ⚡ Ready to start in minutes
            </p>
          </div>
        </div>
      </div>
      <SeparatorContainer />
    </section>
  );
};

export default ClientOnboarding;
