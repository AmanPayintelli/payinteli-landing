import SeparatorContainer from "@/components/separator-container";
import {
  BookOpen,
  FileText,
  Film,
  Newspaper,
  ShieldCheck,
  Zap,
} from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    type: "GUIDE",
    title: "Payment Orchestration Guide",
    description:
      "Complete guide to modern payment orchestration, multi-acquirer integration, and best practices for scaling your payment infrastructure.",
    button: "Coming Soon",
    disabled: true,
  },
  {
    icon: ShieldCheck,
    type: "WHITEPAPER",
    title: "Fraud Prevention Whitepaper",
    description:
      "AI-powered fraud detection strategies, industry benchmarks, and real-world case studies on reducing fraud by 40%+.",
    button: "Coming Soon",
    disabled: true,
  },
  {
    icon: Zap,
    type: "DOCUMENTATION",
    title: "API Documentation",
    description:
      "Comprehensive integration guides, code samples, SDKs, and developer resources for seamless PayIntelli implementation.",
    button: "View Docs →",
    disabled: false,
  },
  {
    icon: FileText,
    type: "REPORT",
    title: "2025 Payment Trends Report",
    description:
      "Global payment processing insights, emerging trends, and data-driven predictions for the future of digital payments.",
    button: "Coming Soon",
    disabled: true,
  },
  {
    icon: Film,
    type: "VIDEO",
    title: "Video Tutorials",
    description:
      "Step-by-step video guides covering everything from initial setup to advanced configuration and optimization techniques.",
    button: "Coming Soon",
    disabled: true,
  },
  {
    icon: Newspaper,
    type: "BLOG",
    title: "Blog & Insights",
    description:
      "Latest payment industry news, technical deep-dives, best practices, and thought leadership from our experts.",
    button: "Coming Soon",
    disabled: true,
  },
];

const ResourceHub = () => {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-7xl border-x border-border px-4 py-10 md:px-8 md:py-12">
        <div className="relative overflow-hidden border border-border bg-background">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[55%] bg-[radial-gradient(circle_at_80%_35%,rgba(103,59,246,0.16),transparent_45%),linear-gradient(to_left,rgba(229,229,255,0.55),transparent)]" />

          <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:px-10 md:py-24">
            <span className="font-mono text-xs uppercase tracking-wide text-text-muted">
              [ Resources ]
            </span>

            <h2 className="mt-5 text-5xl font-semibold tracking-tight text-text-brand md:text-6xl">
              Resource Hub
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-muted md:text-lg">
              Access our comprehensive library of guides, whitepapers, and
              documentation to help you master payment orchestration.
            </p>
          </div>
        </div>
      </div>

      <SeparatorContainer />

      <div className="mx-auto max-w-7xl border-x border-border bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.015)_0px,rgba(0,0,0,0.015)_1px,transparent_1px,transparent_24px)] p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 border-l border-t border-border bg-white shadow-sm md:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group grid min-h-90 grid-rows-[auto_auto_1fr_auto] border-b border-r border-border bg-white p-7 transition hover:bg-primary-soft/20 md:p-8 lg:min-h-97.5"
              >
                <div className="mb-10 grid grid-cols-[auto_1fr] items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center border border-border bg-primary-soft text-primary transition group-hover:bg-white">
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                    {item.type}
                  </span>
                </div>

                <h3 className="max-w-sm text-2xl font-semibold leading-tight tracking-tight text-text-brand">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-sm text-base leading-7 text-text-muted">
                  {item.description}
                </p>

                <div className="pt-10">
                  <button
                    disabled={item.disabled}
                    className={`h-11 px-5 text-sm font-semibold transition cursor-pointer ${
                      item.disabled
                        ? "cursor-not-allowed bg-neutral-400 text-white"
                        : "bg-text-brand text-white bg-primary hover:text-text-brand"
                    }`}
                  >
                    {item.button}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <SeparatorContainer />
    </section>
  );
};

export default ResourceHub;

const CornerMarks = () => {
  return (
    <>
      <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-border" />
      <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-border" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-border" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-border" />
    </>
  );
};
