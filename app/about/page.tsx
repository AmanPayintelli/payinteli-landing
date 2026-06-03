import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Cloud,
  Code2,
  Globe2,
  Lock,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import SeparatorContainer from "@/components/separator-container";

const About = () => {
  const values = [
    "Customer-first approach",
    "Measurable impact",
    "Engineering rigor",
    "Privacy-by-default design",
  ];

  const forceMultipliers = [
    {
      icon: Users,
      title: "Fintech Leaders & Advisory Board",
      stat: "50+",
      label: "years in fintech",
      desc: "Guiding strategic direction with deep industry expertise and regulatory insights.",
    },
    {
      icon: BarChart3,
      title: "Product & Solutions",
      stat: "+15%",
      label: "auth uplift in pilots",
      desc: "Designing payment products that improve authorization rates and user experience.",
    },
    {
      icon: Brain,
      title: "Data Scientists",
      stat: "99.8%",
      label: "fraud detection rate",
      desc: "Building fraud detection, behavioral analytics, and payment intelligence models.",
    },
    {
      icon: Code2,
      title: "Core Engineering Team",
      stat: "10K+",
      label: "TPS capacity",
      desc: "Engineering scalable platforms for real-time orchestration and high throughput.",
    },
    {
      icon: Cloud,
      title: "Cloud & Security Infrastructure",
      stat: "99.99%",
      label: "platform uptime",
      desc: "Architecting secure, distributed systems with enterprise-grade reliability.",
    },
    {
      icon: Sparkles,
      title: "Digital Content & Marketing Team",
      stat: "100+",
      label: "content assets",
      desc: "Crafting narratives that amplify PayIntelli’s impact across global audiences.",
    },
  ];

  const life = [
    {
      icon: Rocket,
      title: "Innovation First",
      desc: "We encourage experimentation, creative problem-solving, hackathons, and innovation weeks.",
    },
    {
      icon: Globe2,
      title: "Global Impact",
      desc: "Work on products used by businesses worldwide and help improve millions of transactions.",
    },
    {
      icon: Brain,
      title: "Growth & Learning",
      desc: "Continuous learning through workshops, conferences, and development opportunities.",
    },
  ];

  return (
    <main className="w-full bg-background pt-15">
      <section className="mx-auto max-w-7xl border-x border-border px-4 py-10 md:px-8 md:py-14">
        <div className="relative overflow-hidden border border-border bg-background">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[55%] bg-[radial-gradient(circle_at_80%_35%,rgba(103,59,246,0.14),transparent_45%),linear-gradient(to_left,rgba(229,229,255,0.55),transparent)]" />

          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:px-10 md:py-24">
            <span className="font-mono text-xs uppercase tracking-wide text-text-muted">
              [ About PayIntelli ]
            </span>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text-brand md:text-6xl">
              Intelligent Payment Infrastructure for Global Growth
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-text-muted md:text-lg">
              We help clients improve conversion rate, reduce fraud, simplify
              reconciliation, and unlock deep payment insights through
              orchestration, AI-driven routing, and analytics.
            </p>
          </div>
        </div>
      </section>
      <SeparatorContainer />
      <section className="mx-auto max-w-7xl border-x border-border px-4 pb-12 md:px-8 py-8">
        <div className="grid border border-border lg:grid-cols-2">
          <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
            <h2 className="text-2xl font-semibold text-text-brand">
              Who We Are
            </h2>
            <p className="mt-4 leading-7 text-text-muted">
              Founded by payments and ML practitioners, our mission is to make
              payments reliable and profitable for businesses of all sizes. We
              serve global merchants from our engineering hubs in the
              Netherlands and India.
            </p>
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-text-brand">
              Our Approach
            </h2>
            <p className="mt-4 leading-7 text-text-muted">
              Product-led workflows, modular integrations, and transparent
              reporting. We build scalable solutions that grow with your
              business, backed by expert support.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-x border-border px-4 pb-12 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Rocket,
              title: "Vision",
              desc: "To transform fragmented, costly payment systems into an intelligent, unified growth engine for global commerce.",
            },
            {
              icon: ShieldCheck,
              title: "Mission",
              desc: "To empower businesses with AI-driven payment orchestration, fraud prevention, and predictive optimization.",
            },
            {
              icon: Lock,
              title: "Values",
              desc: "Transparency, continuous improvement, measurable impact, engineering excellence, and privacy-by-default design.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-primary-soft text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-text-brand">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-x border-border px-4 pb-12 md:px-8">
        <div className="border border-border p-6 text-center md:p-10">
          <span className="font-mono text-xs uppercase tracking-wide text-text-muted">
            [ Leadership Team ]
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-text-brand md:text-5xl">
            Meet the Visionaries Behind Our Next-Gen Payments Ecosystem
          </h2>

          <p className="mt-4 text-primary">
            AI-First. Cloud-Native. Future-Ready.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Mr. A. Prakash",
                role: "Founder & Entrepreneur",
                tag: "18+ years — Payments & Large-Scale Projects",
                desc: "Built and scaled payment gateways and CRM platforms. Leads product-market fit, partnerships, and merchant integrations.",
              },
              {
                name: "Mr. S. Chand",
                role: "Product Head",
                tag: "ex-PayPal — AI & Product Innovation",
                desc: "Former PayPal product leader building AI-first payment experiences. Drives product roadmap for routing, retries, and observability.",
              },
              {
                name: "Mr. Srinivasulu",
                role: "Technical Architect",
                tag: "Architecture & Scalable Systems",
                desc: "Leads technical architecture for resilient, secure, and scalable payment infrastructure.",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-border bg-white p-6 text-left shadow-sm"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-primary-soft font-semibold text-primary">
                  {person.name.split(" ").slice(-1)[0].charAt(0)}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-text-brand">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {person.role}
                </p>
                <p className="mt-4 text-sm font-medium text-text-brand">
                  {person.tag}
                </p>
                <p className="mt-3 text-sm leading-6 text-text-muted">
                  {person.desc}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mx-auto mt-8 max-w-4xl rounded-2xl border border-border bg-primary-soft/40 p-6 text-left text-sm leading-7 text-text-brand md:text-base">
            “Every failed payment is a lost customer and lost revenue. We are
            not just building another payment gateway — we are creating an
            intelligent orchestration layer that learns, adapts, and optimizes
            in real-time.”
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-x border-border px-4 pb-12 md:px-8">
        <div className="border border-border p-6 md:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-text-brand md:text-4xl">
            Our Story
          </h2>

          <p className="mt-5 max-w-4xl leading-7 text-text-muted">
            From small pilots to global rollouts, we partnered closely with
            clients to identify the highest-impact improvements. Our founding
            team spent years in banking, fintech, and ML research — we built
            PayIntelli to bring those learnings into a single platform.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-text-muted">
            Today, we&apos;re proud to serve clients worldwide. Our commitment
            to innovation has earned recognition from industry leaders and, more
            importantly, the trust of our clients.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {values.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-text-brand"
              >
                <CheckCircle2 className="size-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-x border-border px-4 pb-12 md:px-8">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-wide text-text-muted">
            [ Our Force Multiplier ]
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-brand md:text-5xl">
            Product, Data & Engineering
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {forceMultipliers.map(({ icon: Icon, title, stat, label, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-primary-soft text-primary">
                <Icon className="size-5" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-text-brand">
                {title}
              </h3>

              <div className="mt-5">
                <p className="text-3xl font-semibold text-primary">{stat}</p>
                <p className="mt-1 text-sm text-text-muted">{label}</p>
              </div>

              <p className="mt-4 text-sm leading-6 text-text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-x border-border px-4 pb-12 md:px-8">
        <div className="border border-border p-6 md:p-10">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-text-brand md:text-4xl">
            Life at PayIntelli
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {life.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-primary-soft/40 p-6">
                <Icon className="size-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-text-brand">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SeparatorContainer />
      <section className="mx-auto max-w-7xl border-x border-border px-4 pb-16 md:px-8">
        <div className="relative overflow-hidden rounded-lg border border-border bg-primary-soft p-8 text-center md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(103,59,246,0.22),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.75),rgba(229,229,255,0.45))]" />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-text-brand md:text-5xl">
              Ready to Transform Payments with AI?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-muted md:text-base">
              Join us in building the future of intelligent payments. Connect
              with our team to explore how our AI-powered payment solutions can
              reduce costs, increase approvals, and improve reliability.
            </p>

            <Link
              href="/contact-us"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 font-semibold text-white shadow-sm transition hover:bg-primary-muted"
            >
              Get Started Today
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
      <SeparatorContainer />
    </main>
  );
};

export default About;
