"use client";
import Image from "next/image";
import { Sparkles, X } from "lucide-react";
import { motion } from "motion/react";

import Container from "./container";

const DashboardCta = () => {
  return (
    <section className="overflow-hidden border-b bg-white">
      <Container className="relative min-h-140 overflow-hidden border-x bg-white">
        {/* Background glows */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#E5E5FF]/70 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-[#D9FFF0]/80 blur-3xl" />
        <div className="absolute bottom-0 left-[24%] h-72 w-72 rounded-full bg-[#CFB9F8]/30 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 grid min-h-140 grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-[34%_66%] md:px-10 lg:px-12">
          {/* Left copy */}
          <div className="max-w-sm">
            <span className="mb-4 inline-flex rounded-full border border-[#E5EAF1] bg-white px-3 py-1 text-xs font-medium text-[#627188] shadow-sm">
              Embedded payments
            </span>

            <h2 className="text-[34px] font-medium leading-[1.05] tracking-[-0.045em] text-[#082832] md:text-[44px]">
              Embed payments
              <br />
              in your platform
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-6 text-[#627188]">
              Manage transactions, approvals, insights, and payment operations
              from one intelligent dashboard.
            </p>
          </div>

          {/* Dashboard browser mock */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-[#E5EAF1] bg-white shadow-[0_30px_100px_rgba(8,40,50,0.14)] mask-b-from-70%">
              {/* Browser bar */}
              <div className="flex h-11 items-center border-b border-[#E8EEF5] bg-[#FBFCFF] px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                </div>

                <div className="mx-auto flex h-6 w-57.5 items-center justify-center rounded-full border border-[#E7EDF5] bg-white text-[10px] text-[#7B8AA0] shadow-sm">
                  app.payintelli.com/dashboard
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-video w-full bg-white">
                <Image
                  src="/dashboard.png"
                  alt="Payintelli dashboard"
                  fill
                  priority
                  className="object-cover object-top-left"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
              <svg viewBox="0 0 900 600" className="h-full w-full">
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="120%" stopColor="#BF00FF" />
                  </linearGradient>
                </defs>

                {/* base line */}
                <path
                  d="M100 570 L740 570 C780 570 800 550 800 510 L800 330"
                  stroke="#5b61d1"
                  strokeWidth="1"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.25"
                />

                {/* moving glowing part */}
                <motion.path
                  d="M100 570 L740 570 C780 570 800 550 800 510 L800 330"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="100 900"
                  initial={{ strokeDashoffset: 990 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>
            </div>

            {/* Floating Pi Insights Card */}
            <div className="absolute -bottom-10 -left-30 hidden w-65 rounded-2xl bg-linear-to-br from-[#7C5CFF] via-[#FF4FCB] to-[#60B5FF] p-px shadow-[0_20px_60px_rgba(8,40,50,0.15)] lg:block">
              <div className="relative overflow-hidden rounded-2xl bg-white">
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#CFB9F8]/20 via-transparent to-[#60B5FF]/15" />

                <div className="relative px-4 py-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4.5 w-4.5 text-[#A855F7]" />
                      <h3 className="text-lg font-semibold tracking-[-0.04em] text-[#082832]">
                        Pi Insights
                      </h3>
                    </div>
                  </div>

                  <p className="mb-3 text-[11px] text-[#8A8A8A]">2026-05-20</p>

                  <h4 className="mb-3 text-sm font-semibold leading-snug tracking-[-0.03em] text-[#29434D]">
                    Key takeaways
                  </h4>

                  <div className="space-y-2.5 text-[11px] leading-5 text-[#39545E]">
                    <p>
                      <span className="font-semibold">1.</span> Volume dropped{" "}
                      <span className="font-semibold">28.12%</span> vs last
                      week.
                    </p>

                    <p>
                      <span className="font-semibold">2.</span> Peak hour
                      traffic reached{" "}
                      <span className="font-semibold">11.06%</span>.
                    </p>

                    <p>
                      <span className="font-semibold">3.</span> Success rate
                      improved to <span className="font-semibold">83.05%</span>.
                    </p>
                    <p>
                      <span className="font-semibold">4.</span> Payment quality
                      improved: the success rate rose to 83.05% from 81.49%
                      (+1.56 pp, +1.91%)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardCta;
