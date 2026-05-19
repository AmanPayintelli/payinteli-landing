"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  CircleAlert,
  Clock3,
  HandCoins,
  ListTodo,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

const transactionBars = [42, 56, 48, 72, 88, 78];
const failureBars = [34, 58, 42, 66, 52, 82];

const DeepInsightsCard = () => {
  return (
    <div className="group relative my-4 min-h-65 w-full overflow-hidden rounded-2xl border p-0.5 text-left transition-colors duration-300">
      <div className="relative grid grid-cols-2 mask-b-from-90%">
        {/* Total Transactions */}
        <div className="flex min-h-0 flex-col overflow-hidden rounded-xl p-2.5 backdrop-blur">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg">
                <BarChart3 className="size-3.5" />
              </div>

              <div>
                <p className="text-[11px] font-medium leading-none text-neutral-500">
                  TOTAL TRANSACTIONS
                </p>
                <p className="mt-1 text-[10px] text-emerald-500">+6.7%</p>
              </div>
            </div>

            <p className="text-xs font-semibold text-text-brand">3.9K</p>
          </div>

          <div className="mt-auto flex h-16 items-end gap-1">
            {transactionBars.map((height, index) => (
              <div key={index} className="flex h-full flex-1 items-end">
                <div className="flex h-full w-full items-end overflow-hidden rounded-t-md bg-blue-100">
                  <motion.div
                    className="w-full rounded-t-md bg-primary"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: false, amount: 0.45 }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.04,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Rate */}
        <div className="flex min-h-0 flex-col overflow-hidden rounded-xl bg-white/85 p-2.5 backdrop-blur">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-neutral-500">
                <Clock3 className="size-3.5" />
              </div>

              <div>
                <p className="text-[11px] font-medium leading-none text-neutral-500">
                  SUCCESS RATE
                </p>
                <p className="mt-1 text-[10px] text-emerald-500">+8.06 pp</p>
              </div>
            </div>

            <p className="text-xs font-semibold text-text-brand">82.99%</p>
          </div>

          <div className="mt-auto h-16 overflow-hidden rounded-lg bg-violet-50">
            <svg
              viewBox="0 0 220 80"
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="successGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#7165f7" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#7c6df6" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              <motion.path
                d="M0 58 L28 54 L58 48 L78 44 L108 38 L132 34 L160 28 L180 22 L192 18 L220 14 L220 80 L0 80 Z"
                fill="url(#successGradient)"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              <motion.path
                d="M0 58 L28 54 L58 48 L78 44 L108 38 L132 34 L160 28 L180 22 L192 18 L220 14"
                fill="none"
                stroke="#7165f7"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
            </svg>
          </div>
        </div>

        {/* Failure Rate */}
        <div className="flex min-h-0 flex-col overflow-hidden rounded-xl bg-white/85 p-2.5 backdrop-blur">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-neutral-500">
                <HandCoins className="size-3.5" />
              </div>

              <div>
                <p className="text-[11px] font-medium leading-none text-neutral-500">
                  FAILURE RATE
                </p>
                <p className="mt-1 text-[10px] text-emerald-500">-32.15%</p>
              </div>
            </div>

            <p className="text-xs font-semibold text-text-brand">17.01%</p>
          </div>

          <div className="mt-auto flex h-16 items-end gap-1">
            {failureBars.map((height, index) => (
              <div key={index} className="flex h-full flex-1 items-end">
                <motion.div
                  className="w-full rounded-t-md bg-linear-to-b from-teal-400 to-teal-100"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: false, amount: 0.45 }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Peak Hour */}
        <div className="flex min-h-0 flex-col overflow-hidden rounded-xl bg-white/85 p-2.5 backdrop-blur">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-1.5">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-neutral-500">
                <ListTodo className="size-3.5" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-[11px] font-medium leading-none text-neutral-600">
                  PEAK HOUR
                </p>
                <p className="mt-1 text-[10px] text-neutral-400">
                  Traffic concentration
                </p>
              </div>
            </div>

            <TrendingUp className="size-3.5 shrink-0 text-emerald-500" />
          </div>

          <div className="mt-auto space-y-1.5 pt-2">
            <div className="flex items-center justify-between gap-1.5 rounded-lg bg-red-50/70 px-2 py-1.5">
              <div className="flex min-w-0 items-center gap-1.5">
                <CircleAlert className="size-3 shrink-0 text-red-500" />
                <span className="truncate text-[10px] font-medium text-neutral-700">
                  07:00-08:00
                </span>
              </div>

              <ArrowRight className="size-3 shrink-0 text-neutral-500" />
            </div>

            <div className="flex items-center justify-between gap-1.5 rounded-lg bg-neutral-50 px-2 py-1.5">
              <div className="flex min-w-0 items-center gap-1.5">
                <AlertTriangle className="size-3 shrink-0 text-amber-500" />
                <span className="truncate text-[10px] font-medium text-neutral-500">
                  View Pi insights
                </span>
              </div>

              <ArrowRight className="size-3 shrink-0 text-neutral-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepInsightsCard;
