"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const clients = [
  {
    name: "D2C Brand",
    volume: "$48K",
    label: "Cards + UPI",
    growth: "+32%",
    path: "M60 255 C250 245 430 215 590 175 C760 130 915 82 1210 15",
    fill: "M940 77 C1030 55 1120 34 1210 15 L1210 320 L940 320 Z",
  },
  {
    name: "SaaS Platform",
    volume: "$96K",
    label: "Subscriptions",
    growth: "+46%",
    path: "M60 260 C250 250 430 225 590 165 C750 110 910 70 1210 35",
    fill: "M940 72 C1035 58 1120 42 1210 35 L1210 320 L940 320 Z",
  },
  {
    name: "Marketplace",
    volume: "$180K",
    label: "Split Payments",
    growth: "+58%",
    path: "M60 265 C250 255 420 210 590 150 C780 82 930 58 1210 20",
    fill: "M940 58 C1035 48 1120 35 1210 20 L1210 320 L940 320 Z",
  },
  {
    name: "Fintech App",
    volume: "$240K",
    label: "Global Rails",
    growth: "+71%",
    path: "M60 270 C260 245 430 200 590 135 C770 62 940 45 1210 10",
    fill: "M940 45 C1035 35 1120 24 1210 10 L1210 320 L940 320 Z",
  },
];

const timeline = [
  { day: "START", label: "Setup" },
  { day: "RISK", label: "Fraud" },
  { day: "ROUTE", label: "Smart" },
  { day: "SYNC", label: "Reconcile" },
  { day: "SCALE", label: "Global", active: true },
];

const points = [
  "Smart routing improves approvals across every payment rail",
  "Unified fraud, disputes, reconciliation, and insights in one place",
];

const ScaleGraph = () => {
  const [activeClient, setActiveClient] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveClient((prev) => (prev + 1) % clients.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const client = clients[activeClient];

  const progress = useMemo(
    () => ((activeClient + 1) / clients.length) * 100,
    [activeClient],
  );

  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <div className="absolute inset-0 grid grid-cols-5">
        {timeline.map((item) => (
          <div
            key={item.day}
            className="border-r border-dashed border-neutral-200"
          />
        ))}
      </div>

      <div className="absolute left-5 top-5 z-20 max-w-[55%] sm:left-6 sm:top-6">
        <div className="space-y-2 text-sm text-[#687087]">
          {points.map((point, index) => (
            <motion.p
              key={point}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.2 }}
              className="flex gap-2"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#635BFF]" />
              {point}
            </motion.p>
          ))}
        </div>
      </div>

      <div className="absolute right-4 top-4 z-30 w-37.5 rounded-xl border bg-white/85 p-3 shadow-sm backdrop-blur-md sm:right-5 sm:top-5 sm:w-42.5">
        <AnimatePresence mode="wait">
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ duration: 0.35 }}
          >
            <p className="mt-1 text-sm font-semibold text-[#22283B]">
              {client.name}
            </p>

            <div className="mt-3 flex items-end justify-between">
              <div>
                <p className="text-xs text-[#687087]">{client.label}</p>
                <p className="text-lg font-semibold text-[#22283B]">
                  {client.volume}
                </p>
              </div>

              <span className="rounded-full bg-[#635BFF]/10 px-2 py-1 text-xs font-semibold text-[#635BFF]">
                {client.growth}
              </span>
            </div>

            <div className="mt-3 h-1 overflow-hidden rounded-full bg-neutral-100">
              <motion.div
                key={activeClient}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full rounded-full bg-[#635BFF]"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <svg
        viewBox="0 0 1200 320"
        preserveAspectRatio="none"
        className="absolute inset-0 z-10 h-full w-full"
      >
        <defs>
          <linearGradient id="scaleFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#635BFF" stopOpacity="0.22" />
            <stop offset="70%" stopColor="#635BFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#635BFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d={client.fill}
          fill="url(#scaleFill)"
          animate={{ d: client.fill }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.path
          d={client.path}
          fill="none"
          stroke="#635BFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          animate={{ d: client.path }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </svg>

      <motion.div
        key={client.name}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.7, 1, 0.7], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 1.3, repeat: Infinity }}
        className="absolute right-5 top-[58%] z-20 h-3 w-3 rounded-full bg-[#635BFF] shadow-[0_0_24px_rgba(99,91,255,0.75)]"
      />

      <div className="absolute bottom-0 left-0 z-30 grid w-full grid-cols-5 border-t border-dashed border-neutral-200 bg-white/75 backdrop-blur-sm">
        {timeline.map((item, index) => (
          <motion.div
            key={item.day}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + index * 0.06, duration: 0.35 }}
            className="px-3 py-2 sm:px-5"
          >
            <p className="font-mono text-xs font-bold text-[#1F2433]">
              {item.day}
            </p>

            <p
              className={`mt-0.5 text-xs sm:text-sm ${
                item.active ? "font-semibold text-[#1F2433]" : "text-[#687087]"
              }`}
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScaleGraph;
