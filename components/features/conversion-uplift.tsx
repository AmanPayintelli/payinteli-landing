"use client";

import { motion } from "motion/react";

export const ConversionChartCard = () => {
  return (
    <div className="relative isolate my-4 h-full min-h-65 overflow-hidden rounded-2xl border border-neutral-200/70 bg-white">
      {/* Top stat card */}
      <div className="absolute left-4 top-4 z-20 rounded-lg bg-neutral-100/80 px-3 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-semibold tracking-tight text-text-brand">
            15%
          </p>

          <span className="text-xs font-medium text-emerald-500">▲ 8%</span>
        </div>

        <p className="mt-1 text-[11px] text-neutral-500">Conversion Uplift</p>
      </div>

      {/* Grid lines */}
      <div className="absolute inset-x-0 top-[38%] h-px bg-neutral-100" />
      <div className="absolute inset-x-0 top-[61%] h-px bg-neutral-100" />
      <div className="absolute inset-x-0 top-[84%] h-px bg-neutral-100" />

      {/* Chart */}
      <div className="absolute inset-x-0 bottom-0 h-[64%]">
        <svg
          viewBox="0 0 320 150"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="conversionGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>

          <motion.path
            d="M0 118 C25 105, 45 103, 70 110 C95 118, 105 108, 125 95 C145 82, 165 92, 185 90 C210 88, 210 45, 240 45 C270 45, 270 75, 295 55 C308 44, 315 28, 320 18 L320 150 L0 150 Z"
            fill="url(#conversionGradient)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          <motion.path
            d="M0 118 C25 105, 45 103, 70 110 C95 118, 105 108, 125 95 C145 82, 165 92, 185 90 C210 88, 210 45, 240 45 C270 45, 270 75, 295 55 C308 44, 315 28, 320 18"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 4, ease: "easeOut" }}
          />
        </svg>
      </div>

      {/* Bottom soft mask */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-16 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
};
