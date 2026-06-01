"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const steps = [
  {
    label: "Checkout",
    desc: "Payment intent created",
    metric: "98ms",
    ai: "/ai/claude.svg",
    color: "#FBBF24",
  },
  {
    label: "Fraud Check",
    desc: "Risk scored in real time",
    metric: "-40%",
    ai: "/ai/deepseek.svg",
    color: "#38BDF8",
  },
  {
    label: "Smart Routing",
    desc: "Best acquirer selected",
    metric: "+15%",
    ai: "/ai/gemini.svg",
    color: "#A78BFA",
  },
  {
    label: "Authorization",
    desc: "Approval optimized",
    metric: "Live",
    ai: "/ai/gpt.svg",
    color: "#22C55E",
  },
  {
    label: "Reconciliation",
    desc: "Transactions auto-matched",
    metric: "100%",
    ai: "/ai/copilot.svg",
    color: "#60A5FA",
  },
  {
    label: "Insights",
    desc: "Revenue signals generated",
    metric: "AI",
    ai: "/ai/grok.svg",
    color: "#F472B6",
  },
];

const CARD_W = 150;
const GAP = 78;
const STEP = CARD_W + GAP;

const CENTER_INDEX = steps.length;
const loopSteps = [...steps, ...steps, ...steps];

const beamPath = "M107 0 L107 20 C107 38 100 43 84 43 C68 43 48 48 48 70";

export const AssemblyLine = () => {
  const [activeIndex, setActiveIndex] = useState(CENTER_INDEX);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) =>
        prev >= CENTER_INDEX + steps.length - 1 ? CENTER_INDEX : prev + 1,
      );
    }, 1650);

    return () => clearInterval(timer);
  }, []);

  const activeStep = loopSteps[activeIndex];

  return (
    <div className="relative h-full min-h-64 w-full overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(96,181,255,0.18),transparent_34%),radial-gradient(circle_at_35%_72%,rgba(207,185,248,0.18),transparent_40%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,rgba(8,40,50,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(8,40,50,0.06)_1px,transparent_1px)] bg-size-[28px_28px]" />

      <div
        className="absolute left-[70%] top-6 z-30 h-20 w-20 rounded-full bg-white/70 p-1 shadow-xl backdrop-blur-md"
        style={{
          boxShadow: `0 0 36px ${activeStep.color}55, 0 20px 60px rgba(8,40,50,0.12)`,
        }}
      >
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white bg-white shadow-sm">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle, ${activeStep.color}55, transparent 62%)`,
            }}
          />

          <motion.img
            key={activeStep.label}
            src={activeStep.ai}
            alt={activeStep.label}
            className="relative z-10 h-10 w-10 object-contain"
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -8,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              filter: "blur(0px)",
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <motion.div
        key={activeStep.label}
        className="absolute left-[70%] top-28 z-30 -translate-x-6 rounded-full border border-white/80 bg-white/85 px-3 py-1 text-[11px] font-medium text-text-brand shadow-lg backdrop-blur-md"
        initial={{ opacity: 0, y: 8, scale: 0.96, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        AI optimizing{" "}
        <span style={{ color: activeStep.color }}>{activeStep.label}</span>
      </motion.div>

      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute left-0 top-0 z-20 h-full w-full"
      >
        <path
          d={beamPath}
          fill="none"
          stroke="#d4d4d4"
          strokeWidth="0.45"
          strokeLinecap="round"
          opacity="0.45"
        />

        <motion.path
          key={`${activeStep.label}-beam`}
          d={beamPath}
          fill="none"
          stroke={activeStep.color}
          strokeWidth="0.85"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.12,
            ease: "easeInOut",
            times: [0, 0.78, 1],
          }}
          style={{
            filter: `drop-shadow(0 0 10px ${activeStep.color})`,
          }}
        />

        <motion.circle
          key={`${activeStep.label}-dot`}
          cx="48"
          cy="70"
          r="1.35"
          fill={activeStep.color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.6, 1],
            opacity: [0, 1, 0.85],
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            filter: `drop-shadow(0 0 10px ${activeStep.color})`,
          }}
        />

        <motion.circle
          key={`${activeStep.label}-pulse`}
          cx="48"
          cy="70"
          r="1.35"
          fill="none"
          stroke={activeStep.color}
          strokeWidth="0.35"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{
            scale: [0.6, 3.5],
            opacity: [0.9, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      </svg>

      <div
        className="absolute left-1/2 top-1/2 h-50 w-[150%] overflow-visible rounded-3xl border border-white/80 bg-white/80 shadow-[0_30px_90px_rgba(8,40,50,0.14)] backdrop-blur-md"
        style={{
          transform:
            "translate(-50%, 10%) perspective(900px) rotateX(50deg) rotateZ(24deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl opacity-60 bg-[linear-gradient(to_right,rgba(8,40,50,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(8,40,50,0.04)_1px,transparent_1px)] bg-size-[34px_34px]" />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/5" />

        <motion.div
          className="relative z-10 flex h-full w-max items-center gap-[78px] px-10"
          animate={{
            x: -activeIndex * STEP + STEP * CENTER_INDEX,
          }}
          transition={{
            duration: 0.82,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {loopSteps.map((step, index) => (
            <Box
              key={`${step.label}-${index}`}
              step={step}
              active={index === activeIndex}
              activeIndex={activeIndex}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Box = ({
  step,
  active,
  activeIndex,
}: {
  step: {
    label: string;
    desc: string;
    metric: string;
    ai: string;
    color: string;
  };
  active: boolean;
  activeIndex: number;
}) => {
  return (
    <motion.div className="relative flex h-40 w-37.5 shrink-0 overflow-hidden rounded-2xl border bg-white p-3 ">
      <div className="relative z-10 flex h-full w-full flex-col">
        <div className="flex items-start justify-between">
          <div
            className="rounded-full px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-white shadow-sm"
            style={{ backgroundColor: step.color }}
          >
            {step.metric}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[13px] font-semibold leading-tight text-text-brand">
            {step.label}
          </p>
          <p className="mt-1 line-clamp-2 text-[10px] leading-snug text-text-brand/55">
            {step.desc}
          </p>
        </div>

        <div className="mt-auto">
          <div className="mb-2 flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: step.color }}
            />
            <span className="text-[9px] font-medium text-text-brand/50">
              PayIntelli AI layer
            </span>
          </div>

          <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: step.color }}
              initial={false}
              animate={{ width: active ? "82%" : "46%" }}
              transition={{ duration: 0.45 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
