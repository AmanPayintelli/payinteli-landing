"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Clock,
  Globe2,
  HeartPulse,
  Lightbulb,
  MapPin,
  Rocket,
  Sparkles,
  Trophy,
  Users,
  WalletCards,
} from "lucide-react";

import Container from "@/components/container";
import SeparatorContainer from "@/components/separator-container";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const benefits = [
  {
    icon: Rocket,
    title: "Impactful Work",
    description:
      "Shape AI-driven payment intelligence used by merchants across global markets.",
  },
  {
    icon: BrainCircuit,
    title: "Collaborative Innovation",
    description:
      "Build with AI engineers, data scientists, fintech operators, and product thinkers.",
  },
  {
    icon: BadgeCheck,
    title: "Autonomy & Ownership",
    description:
      "Own initiatives end-to-end and influence real product and business decisions.",
  },
  {
    icon: Trophy,
    title: "Competitive Rewards",
    description:
      "Get competitive compensation, early-stage incentives, and performance rewards.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Culture",
    description:
      "Work in a fast-moving environment that values creativity, clarity, and execution.",
  },
  {
    icon: Users,
    title: "High-Caliber Team",
    description:
      "Join people who care about product quality, speed, reliability, and impact.",
  },
];

const offers = [
  { icon: WalletCards, title: "Competitive salary" },
  { icon: Clock, title: "Flexible working hours" },
  { icon: HeartPulse, title: "Health & wellness benefits" },
  { icon: Lightbulb, title: "Learning & development budget" },
  { icon: Globe2, title: "Remote-friendly culture" },
  { icon: BadgeCheck, title: "Early-stage ownership" },
];

const positions = [
  {
    title: "Growth Manager – Payments & AI Solutions",
    location: "Amsterdam, Netherlands",
    type: "Hybrid / Remote within EU",
    department: "Growth",
  },
  {
    title: "Business Development Manager",
    location: "London, United Kingdom",
    type: "Hybrid",
    department: "Business",
  },
  {
    title: "Quality Assurance – AI & ML Systems",
    location: "Hyderabad / Remote",
    type: "Full-time",
    department: "AI / ML",
  },
  {
    title: "Backend Engineer",
    location: "Hyderabad / Remote",
    type: "Full-time",
    department: "Engineering",
  },
];

const stats = [
  { value: "AI-first", label: "Product culture" },
  { value: "Global", label: "Payment infrastructure" },
  { value: "0 → 1", label: "Ownership from day one" },
];

const CareersPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-17">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:82px_82px]" />

        <Container className="relative border-x border-border">
          <div className="px-4 py-20 md:px-8 md:py-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
                <Sparkles className="h-4 w-4" />
                Careers at PayIntelli
              </div>

              <h1 className="text-heading text-4xl font-semibold tracking-[-0.055em] md:text-6xl lg:text-7xl">
                Build the Future of{" "}
                <span className="text-primary">AI-Powered Payments.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
                Work on complex fintech systems, AI-driven payment intelligence,
                and infrastructure that helps businesses optimize every
                transaction.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="#open-positions"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-muted"
                >
                  View Open Roles
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="mailto:careers@payintelli.com"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-white px-6 text-sm font-semibold text-primary shadow-sm transition hover:-translate-y-0.5 hover:bg-primary-soft"
                >
                  Send Your CV
                </a>
              </div>
            </motion.div>
          </div>

          <div className="grid border-y border-border bg-white/70 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.08 }}
                className="border-b border-border p-8 text-center md:border-b-0 md:border-r last:md:border-r-0"
              >
                <p className="text-3xl font-semibold tracking-[-0.04em] text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <SeparatorContainer height="h-16 md:h-20" />

      <section>
        <Container className="border-x border-border">
          <div className="border-y border-border px-4 py-14 md:px-8 md:py-18">
            <div className="max-w-2xl">
              <p className="font-mono text-sm text-muted">[ Why PayIntelli ]</p>
              <h2 className="mt-5 text-heading text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Do meaningful work with real ownership.
              </h2>
            </div>
          </div>

          <div className="grid border-b border-border md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                  className="group min-h-[260px] border-r border-t border-border p-7 transition hover:bg-primary-soft/35 lg:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:md:[&:nth-child(2n)]:border-r"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-white text-primary shadow-sm transition group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-mono text-sm text-muted">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-text-heading">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <SeparatorContainer height="h-16 md:h-20" />

      <section>
        <Container className="border-x border-border">
          <div className="grid border-y border-border lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-border p-8 lg:border-r lg:p-12">
              <p className="font-mono text-sm text-muted">[ What We Offer ]</p>

              <h2 className="mt-5 text-heading text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Built for people who love building.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-muted md:text-base">
                We give you the environment, trust, and support to do your best
                work while solving hard fintech problems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2">
              {offers.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group border-b border-border p-7 transition hover:bg-primary-soft/35 sm:border-r even:sm:border-r-0"
                  >
                    <Icon className="mb-5 h-5 w-5 text-primary transition group-hover:scale-110" />
                    <p className="text-sm font-semibold text-text-heading">
                      {item.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <SeparatorContainer height="h-16 md:h-20" />

      <section id="open-positions">
        <Container className="border-x border-border">
          <div className="border-t border-border px-4 py-14 md:px-8 md:py-18">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-sm text-muted">
                  [ Open Positions ]
                </p>
                <h2 className="mt-5 text-heading text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                  Find your next role.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-muted">
                Join a team building AI-powered infrastructure for modern
                payment orchestration.
              </p>
            </div>
          </div>

          <div className="border-y border-border">
            {positions.map((role, index) => (
              <motion.div
                key={role.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className="group grid gap-6 border-b border-border p-6 transition last:border-b-0 hover:bg-primary-soft/35 md:grid-cols-[1fr_280px_140px] md:p-8"
              >
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-primary">
                    <BriefcaseBusiness className="h-3.5 w-3.5" />
                    {role.department}
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-text-heading">
                    {role.title}
                  </h3>
                </div>

                <div className="space-y-3 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {role.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    {role.type}
                  </div>
                </div>

                <Link
                  href="#"
                  className="inline-flex items-center justify-start gap-2 text-sm font-semibold text-primary md:justify-end"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <SeparatorContainer height="h-16 md:h-20" />

      <section>
        <Container className="border-x border-border">
          <div className="relative overflow-hidden border-y border-border bg-white p-8 text-center md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(103,59,246,0.12),transparent_45%)]" />

            <div className="relative mx-auto max-w-2xl">
              <p className="font-mono text-sm text-muted">[ Join Us ]</p>

              <h2 className="mt-5 text-heading text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Don&apos;t see the right role?
              </h2>

              <p className="mt-4 text-base leading-7 text-muted">
                Send us your CV — we&apos;re always looking for talented people
                who want to build the future of fintech with us.
              </p>

              <a
                href="mailto:careers@payintelli.com"
                className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-muted"
              >
                Send Your CV
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CareersPage;
