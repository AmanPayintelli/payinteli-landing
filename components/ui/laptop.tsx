"use client";
import { motion, type Transition } from "motion/react";

export const Laptop = () => {
  const lidVariants = {
    closed: {
      rotateX: -50,
      y: 8,
      scaleY: 0.92,
    },
    open: {
      rotateX: 0,
      y: -2,
      scaleY: 1,
    },
  };

  const lidTransition: Transition = {
    type: "spring",
    stiffness: 140,
    damping: 18,
  };

  return (
    <div className="relative flex w-40 shrink-0 flex-col items-center justify-center gap-2">
      <div className="relative h-28 w-36" style={{ perspective: 700 }}>
        <motion.div
          variants={lidVariants}
          transition={lidTransition}
          style={{
            transformOrigin: "bottom center",
            transformStyle: "preserve-3d",
          }}
          className="absolute bottom-5 left-1/2 h-18 w-28 -translate-x-1/2 overflow-hidden rounded-t-lg border bg-linear-to-b from-white via-primary-soft/25 to-white shadow-sm"
        >
          <motion.div
            variants={{
              closed: { opacity: 0.25 },
              open: { opacity: 1 },
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="absolute inset-1 rounded-t-md border border-primary/20 bg-primary/50"
          />
        </motion.div>

        <div className="absolute bottom-3 left-1/2 h-2 w-36 -translate-x-1/2 rounded-full border border-primary/10 bg-white shadow-sm" />

        <div className="absolute bottom-4 left-1/2 h-1.5 w-18 -translate-x-1/2 rounded-full bg-primary/10" />
      </div>

      <span className="text-[11px] font-medium text-text-brand/45">Device</span>
    </div>
  );
};
