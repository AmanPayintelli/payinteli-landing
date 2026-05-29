"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimationControls } from "motion/react";

const steps = [
  {
    label: "Checkout",
    ai: "/ai/claude.svg",
  },
  {
    label: "Fraud Check",
    ai: "/ai/deepseek.svg",
  },
  {
    label: "Smart Routing",
    ai: "/ai/gemini.svg",
  },
  {
    label: "Authorization",
    ai: "/ai/gpt.svg",
  },
  {
    label: "Reconciliation",
    ai: "/ai/copilot.svg",
  },
  {
    label: "Insights",
    ai: "/ai/grok.svg",
  },
];

const CARD_W = 140;
const GAP = 15;
const STEP = CARD_W + GAP;
const STRIP_PADDING = 40;
const ALIGN_OFFSET = 52;

const LOOP_OFFSET = steps.length;
const TOTAL_STEPS = steps.length * 3;

const beamPath = "M107 0 L107 20 C107 38 100 43 84 43 C68 43 48 48 48 70";

export const AssemblyLine = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  const [slotX, setSlotX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(LOOP_OFFSET);
  const [integrating, setIntegrating] = useState(false);

  const activeStep = steps[activeIndex % steps.length];

  const getX = (index: number) => {
    return slotX - STRIP_PADDING - CARD_W / 2 - index * STEP + ALIGN_OFFSET;
  };

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current) return;
      setSlotX(wrapperRef.current.offsetWidth * 0.48);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!slotX) return;
    controls.set({ x: getX(LOOP_OFFSET) });
  }, [slotX, controls]);

  useEffect(() => {
    if (!slotX) return;

    let cancelled = false;

    const run = async () => {
      while (!cancelled) {
        for (let i = 0; i < steps.length; i++) {
          const realIndex = LOOP_OFFSET + i;

          setActiveIndex(realIndex);

          await controls.start({
            x: getX(realIndex),
            transition: {
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            },
          });

          setIntegrating(true);
          await new Promise((r) => setTimeout(r, 900));

          setIntegrating(false);
          await new Promise((r) => setTimeout(r, 250));
        }

        controls.set({ x: getX(LOOP_OFFSET) });
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [slotX, controls]);

  return (
    <div
      ref={wrapperRef}
      className="relative h-full min-h-64 w-full overflow-hidden bg-background mask-l-from-70%"
    >
      <div className="absolute left-[70%] top-6 z-20 h-20 w-20 rounded-full bg-neutral-100 p-1">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeStep.ai}
              src={activeStep.ai}
              alt={activeStep.label}
              className="h-10 w-10 object-contain"
              initial={{
                opacity: 0,
                scale: 0.82,
                filter: "blur(10px)",
                y: 6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 1.12,
                filter: "blur(10px)",
                y: -6,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </AnimatePresence>
        </div>
      </div>

      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full"
      >
        <defs>
          <linearGradient id="aiBeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="45%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <filter id="beamGlow">
            <feGaussianBlur stdDeviation="1.6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={beamPath}
          fill="none"
          stroke="#d4d4d4"
          strokeWidth="0.4"
          strokeLinecap="round"
        />

        {integrating && (
          <motion.path
            d={beamPath}
            fill="none"
            stroke="url(#aiBeam)"
            strokeWidth="0.4"
            strokeLinecap="round"
            filter="url(#beamGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 0.45, 0.72, 1],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 0.9,
              ease: "easeInOut",
            }}
          />
        )}

        {integrating && (
          <motion.circle
            cx="48"
            cy="70"
            r="1"
            fill="var(--primary)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 2.3, 0.9],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
          />
        )}
      </svg>

      <div
        className="absolute left-1/2 top-1/2 h-40 w-[150%] border bg-white"
        style={{
          transform:
            "translate(-50%, 10%) perspective(900px) rotateX(52deg) rotateZ(24deg)",
        }}
      >
        <motion.div
          className="flex h-full w-max items-center gap-8 px-10"
          animate={controls}
        >
          {Array.from({ length: TOTAL_STEPS }).map((_, index) => {
            const step = steps[index % steps.length];

            return (
              <Box
                key={index}
                label={step.label}
                active={integrating && index === activeIndex}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
const Box = ({ label, active }: { label: string; active: boolean }) => {
  return (
    <motion.div
      className="relative flex h-40 w-35 shrink-0 overflow-hidden rounded-lg border bg-primary-soft p-3"
      animate={{
        y: active ? [-4, -16, 0] : 0,
        scale: active ? [1, 1.05, 1.02] : 1,
        boxShadow: active
          ? "0 20px 50px rgba(103, 59, 246, 0.22)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {active && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.45] }}
          transition={{ duration: 0.8 }}
        />
      )}

      {active && (
        <motion.div
          className="absolute inset-y-0 -left-10 w-10 rotate-12 bg-white/50 blur-md"
          initial={{ x: 0 }}
          animate={{ x: 190 }}
          transition={{
            duration: 0.75,
            ease: "easeInOut",
          }}
        />
      )}

      <div className="relative z-10 flex h-full w-full flex-col justify-between">
        <div>
          <div className="mb-3 text-xs font-semibold text-text-brand">
            {label}
          </div>

          <div className="space-y-2">
            <div className="h-2 w-20 rounded-full bg-white/80" />
            <div className="h-2 w-28 rounded-full bg-white/60" />
            <div className="h-2 w-16 rounded-full bg-white/60" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-8 rounded-md bg-white/70" />
          <div className="h-8 rounded-md bg-white/50" />
          <div className="h-8 rounded-md bg-white/60" />
        </div>

        <div className="flex items-center justify-between">
          <div className="h-1.5 w-12 rounded-full bg-white/70" />
          <div className="h-5 w-5 rounded-full bg-white/80" />
        </div>
      </div>

      {active && (
        <motion.div
          className="absolute inset-0 rounded-lg border border-primary/50"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{
            scale: [0.96, 1.04, 1],
            opacity: [0, 1, 0.6],
          }}
          transition={{ duration: 0.8 }}
        />
      )}
    </motion.div>
  );
};
