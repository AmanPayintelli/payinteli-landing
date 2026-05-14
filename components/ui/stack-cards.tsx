import { motion } from "motion/react";
export const StackCards = () => {
  return (
    <div className="relative isolate my-4 h-full min-h-65 rounded-2xl border border-neutral-200/70 bg-neutral-100/50">
      {/* Back cards */}
      <div className="absolute inset-x-12 inset-y-9 z-10 rounded-2xl border border-neutral-200/70 bg-white mask-b-from-50%" />
      <div className="absolute inset-x-10 inset-y-8 z-20 translate-y-3 rounded-2xl border border-neutral-200/70 bg-white mask-b-from-50%" />

      {/* Main card */}
      <motion.div
        initial="rest"
        whileHover="hover"
        className="absolute inset-8 z-30 translate-y-5 rounded-2xl border border-neutral-200/70 bg-white py-6 px-8 shadow-sm mask-b-from-50% group"
      >
        {/* Progress Bar */}
        <div className="h-4 w-full overflow-hidden rounded-md border border-neutral-200 bg-neutral-100">
          <div className="flex h-full w-full">
            <motion.div
              variants={{
                rest: { width: "22%" },
                hover: { width: "18%" },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="h-full bg-primary"
            />

            <motion.div
              variants={{
                rest: { width: "24%" },
                hover: { width: "40%" },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="h-full bg-primary-muted"
            />

            <motion.div className="h-full flex-1 bg-[repeating-linear-gradient(135deg,#e5e7eb_0px,#e5e7eb_2px,#f8fafc_2px,#f8fafc_5px)]" />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-3 grid grid-cols-2 border-b border-dashed border-neutral-200 pb-3">
          <div>
            <p className="text-base font-medium leading-none text-text-brand">
              40%
            </p>
            <p className="mt-1 text-[11px] text-neutral-500">Blocked</p>
          </div>

          <div>
            <p className="text-base font-medium leading-none text-text-brand">
              60%
            </p>
            <p className="mt-1 text-[11px] text-neutral-500">Clean</p>
          </div>
        </div>

        {/* Legend / Details */}
        <div className="mt-3 space-y-2 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="size-1.5 shrink-0 rounded-full bg-primary" />
            <p className="text-neutral-700">
              Suspicious IP velocity{" "}
              <span className="text-neutral-400">(23%)</span> detected
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="size-1.5 shrink-0 rounded-full bg-[#FF6B8A]" />
            <p className="text-neutral-700">
              High-risk BIN patterns{" "}
              <span className="text-neutral-400">(12%)</span> flagged
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="size-1.5 shrink-0 rounded-full bg-[#A9C6FF]" />
            <p className="text-neutral-400">
              Checkout abuse reduced <span>(42%)</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
