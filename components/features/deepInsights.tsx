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

const arrBars = [42, 56, 48, 72, 88, 78];
const cashflowBars = [34, 58, 42, 66, 52, 82];

const DeepInsightsCard = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl  bg-white p-3 border">
      <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-primary/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 size-28 rounded-full bg-sky-200/30 blur-2xl" />

      <div className="relative grid h-full grid-cols-2 gap-2.5 mask-b-from-80%">
        {/* ARR */}
        <div className="flex min-h-0 flex-col overflow-hidden rounded-xl bg-white/85 p-2.5  backdrop-blur">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg  bg-neutral-50 text-neutral-500">
                <BarChart3 className="size-3.5" />
              </div>

              <div>
                <p className="text-[11px] font-medium leading-none text-neutral-500">
                  ARR
                </p>
                <p className="mt-1 text-[10px] text-emerald-500">+18.4%</p>
              </div>
            </div>

            <p className="text-xs font-semibold text-text-brand">$5.4M</p>
          </div>

          <div className="mt-auto flex h-16 items-end gap-1">
            {arrBars.map((height, index) => (
              <div key={index} className="flex h-full flex-1 items-end">
                <div className="flex h-full w-full items-end overflow-hidden rounded-t-md bg-blue-100">
                  <motion.div
                    className="w-full rounded-t-md"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: false, amount: 0.45 }}
                    transition={{
                      duration: 4,
                      delay: index * 0.04,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Debt */}
        <div className="flex min-h-0 flex-col overflow-hidden rounded-xl /70 bg-white/85 p-2.5 backdrop-blur">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg  bg-neutral-50 text-neutral-500">
                <Clock3 className="size-3.5" />
              </div>

              <div>
                <p className="text-[11px] font-medium leading-none text-neutral-500">
                  Debt
                </p>
                <p className="mt-1 text-[10px] text-red-400">-6.2%</p>
              </div>
            </div>

            <p className="text-xs font-semibold text-text-brand">$196K</p>
          </div>

          <div className="mt-auto h-16 overflow-hidden rounded-lg bg-violet-50">
            <svg
              viewBox="0 0 220 80"
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="debtGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7165f7" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#7c6df6" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              <motion.path
                d="M0 26 L28 20 L58 42 L78 30 L108 48 L132 50 L160 66 L180 50 L192 68 L220 62 L220 80 L0 80 Z"
                fill="url(#debtGradient)"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{ duration: 4, ease: "easeOut" }}
              />

              <motion.path
                d="M0 26 L28 20 L58 42 L78 30 L108 48 L132 50 L160 66 L180 50 L192 68 L220 62"
                fill="none"
                stroke="#7165f7"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{ duration: 4, ease: "easeOut" }}
              />
            </svg>
          </div>
        </div>

        {/* Cashflow */}
        <div className="flex min-h-0 flex-col overflow-hidden rounded-xl /70 bg-white/85 p-2.5 backdrop-blur">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg  bg-neutral-50 text-neutral-500">
                <HandCoins className="size-3.5" />
              </div>

              <div>
                <p className="text-[11px] font-medium leading-none text-neutral-500">
                  Cashflow
                </p>
                <p className="mt-1 text-[10px] text-emerald-500">Healthy</p>
              </div>
            </div>

            <p className="text-xs font-semibold text-text-brand">$1.3M</p>
          </div>

          <div className="mt-auto flex h-16 items-end gap-1">
            {cashflowBars.map((height, index) => (
              <div key={index} className="flex h-full flex-1 items-end">
                <motion.div
                  className="w-full rounded-t-md bg-linear-to-b from-teal-400 to-teal-100"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: false, amount: 0.45 }}
                  transition={{
                    duration: 4,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tasks */}
        <div className="flex min-h-0 flex-col overflow-hidden rounded-xl /70 bg-white/85 p-2.5 backdrop-blur">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-1.5">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg  bg-neutral-50 text-neutral-500">
                <ListTodo className="size-3.5" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-[11px] font-medium leading-none text-neutral-600">
                  Action items
                </p>
                <p className="mt-1 text-[10px] text-neutral-400">
                  4 tasks open
                </p>
              </div>
            </div>

            <TrendingUp className="size-3.5 shrink-0 text-emerald-500" />
          </div>

          <div className="mt-auto space-y-1.5   pt-2">
            <div className="group flex items-center justify-between gap-1.5 rounded-lg bg-red-50/70 px-2 py-1.5">
              <div className="flex min-w-0 items-center gap-1.5">
                <CircleAlert className="size-3 shrink-0 text-red-500" />
                <span className="truncate text-[10px] font-medium text-neutral-700">
                  Data loaders not responding
                </span>
              </div>

              <ArrowRight className="size-3 shrink-0 text-neutral-500 transition-transform group-hover:translate-x-0.5" />
            </div>

            <div className="group flex items-center justify-between gap-1.5 rounded-lg bg-neutral-50 px-2 py-1.5">
              <div className="flex min-w-0 items-center gap-1.5">
                <AlertTriangle className="size-3 shrink-0 text-amber-500" />
                <span className="truncate text-[10px] font-medium text-neutral-500">
                  Missing payment methods
                </span>
              </div>

              <ArrowRight className="size-3 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepInsightsCard;
