"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  DollarSign,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const metricCards = [
  {
    label: "Volume",
    value: "5,115",
    change: "+21.79%",
    icon: Activity,
    tone: "good",
  },
  {
    label: "Revenue",
    value: "$196.2K",
    change: "+21.7%",
    icon: DollarSign,
    tone: "good",
  },
  {
    label: "Success",
    value: "81.6%",
    change: "+12.05pp",
    icon: CheckCircle2,
    tone: "good",
  },
  {
    label: "Pending",
    value: "920",
    change: "+21.05%",
    icon: AlertTriangle,
    tone: "warning",
  },
];

const bars = [42, 58, 47, 72, 64, 88, 76, 92];

const PiInsightsMiniCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative h-full min-h-[340px] overflow-hidden rounded-3xl border border-neutral-200/70 bg-[#fbfbff] p-4 shadow-sm"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-[#CFB9F8]/45 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-6 size-60 rounded-full bg-[#60B5FF]/20 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{
                rotate: [0, 6, -6, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex size-11 items-center justify-center rounded-2xl bg-[#082832] text-white shadow-sm"
            >
              <Sparkles className="size-5" />
            </motion.div>

            <div>
              <h3 className="text-base font-semibold tracking-tight text-[#082832]">
                Pi Insights
              </h3>
              <p className="text-xs text-neutral-500">May 15, 2026</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFB9F8]/60 bg-[#E5E5FF]/70 px-2.5 py-1 text-[11px] font-medium text-[#4b35b8]">
            <Bot className="size-3.5" />
            AI
          </div>
        </div>

        {/* Hero insight */}
        <div className="rounded-2xl border border-neutral-200/70 bg-white/80 p-4 shadow-[0_12px_40px_rgba(8,40,50,0.04)] backdrop-blur">
          <div className="mb-3 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
              <ArrowUpRight className="size-3.5" />
              Demand spike detected
            </div>

            <span className="text-[11px] text-neutral-400">vs last week</span>
          </div>

          <p className="text-sm font-medium leading-relaxed text-[#082832]">
            Transactions surged{" "}
            <span className="font-semibold text-[#5b35ff]">21.79%</span> to{" "}
            <span className="font-semibold">5,115</span>, while success rate
            jumped to <span className="font-semibold">81.6%</span>.
          </p>

          {/* Mini chart */}
          <div className="mt-4 flex h-16 items-end gap-1.5 rounded-2xl bg-gradient-to-b from-[#E5E5FF]/60 to-white px-3 py-2">
            {bars.map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 8 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="flex-1 rounded-full bg-[#60B5FF]"
              />
            ))}
          </div>
        </div>

        {/* Metric pills */}
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {metricCards.map((item, index) => {
            const Icon = item.icon;
            const isWarning = item.tone === "warning";

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + index * 0.06,
                  ease: "easeOut",
                }}
                className="rounded-2xl border border-neutral-200/70 bg-white/75 p-3"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div
                    className={`flex size-7 items-center justify-center rounded-xl ${
                      isWarning
                        ? "bg-orange-50 text-orange-500"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    <Icon className="size-3.5" />
                  </div>

                  <span
                    className={`text-[11px] font-semibold ${
                      isWarning ? "text-orange-500" : "text-emerald-600"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>

                <p className="text-[11px] text-neutral-500">{item.label}</p>
                <p className="mt-0.5 text-lg font-semibold tracking-tight text-[#082832]">
                  {item.value}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom insight strip */}
        <div className="mt-3 flex items-start gap-2 rounded-2xl border border-orange-200/70 bg-orange-50/70 px-3 py-2">
          <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-orange-500" />
          <p className="text-[11px] leading-relaxed text-orange-700">
            Pending count rose by <span className="font-semibold">160</span>. AI
            recommends checking settlement and processing queues.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PiInsightsMiniCard;
