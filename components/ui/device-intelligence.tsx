"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Laptop } from "./laptop";

const devices = [
  {
    id: "device-01",
    name: "MacBook Pro",
    fingerprint: "FP-82A9-KL21",
    location: "Italy, EU",
    network: "Trusted WiFi",
    proxy: "No VPN",
    spoofing: "Clean environment",
    riskScore: 18,
    status: "Trusted",
  },
  {
    id: "device-02",
    name: "iPhone",
    fingerprint: "FP-71XZ-QP90",
    location: "London, UK",
    network: "Mobile Data",
    proxy: "Proxy suspected",
    spoofing: "Timezone mismatch",
    riskScore: 76,
    status: "Review",
  },
  {
    id: "device-03",
    name: "Android",
    fingerprint: "FP-71XZ-QKJ0",
    location: "Netharlands, EU",
    network: "Mobile Data",
    proxy: "Proxy suspected",
    spoofing: "Timezone mismatch",
    riskScore: 76,
    status: "Review",
  },
  {
    id: "device-03",
    name: "Windows Desktop",
    fingerprint: "FP-44RT-MN62",
    location: "Claifornia, US",
    network: "Unknown network",
    proxy: "VPN detected",
    spoofing: "Browser mismatch",
    riskScore: 91,
    status: "Blocked",
  },
];

export const DeviceIntelligence = () => {
  const [hovered, setHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!hovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % devices.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [hovered]);

  const activeDevice = devices[activeIndex];

  return (
    <motion.div
      initial="closed"
      animate={hovered ? "open" : "closed"}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => {
        setHovered(false);
        setActiveIndex(0);
      }}
      className="flex min-h-64 w-full items-center overflow-hidden rounded-lg bg-linear-to-b from-primary-soft/15 via-white to-white px-2 py-6 cursor-pointer"
    >
      <Laptop />

      <svg
        className="h-8 flex-1"
        viewBox="0 0 240 32"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="16"
          x2="240"
          y2="16"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary/10"
        />

        <motion.line
          x1="0"
          y1="16"
          x2="240"
          y2="16"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary/25"
          variants={{
            closed: { pathLength: 0 },
            open: { pathLength: 1 },
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />

        {hovered && (
          <motion.line
            x1="0"
            y1="16"
            x2="64"
            y2="16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary/75"
            initial={{ x: -72, opacity: 0 }}
            animate={{ x: 260, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </svg>

      <div className="relative h-58 w-68 shrink-0 overflow-hidden rounded-2xl bg-white/80 p-4 backdrop-blur">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-brand/35">
            Device check
          </span>

          <span className="rounded-full border border-primary/10 bg-primary-soft/35 px-2 py-1 text-[10px] font-semibold text-primary">
            Live
          </span>
        </div>

        <motion.div
          animate={{
            filter: hovered ? "blur(0px)" : "blur(7px)",
            opacity: hovered ? 1 : 0.45,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-x-4 top-12"
        >
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <AnimatedValue
                value={activeDevice.name}
                className="text-sm font-semibold text-text-heading"
              />

              <AnimatedValue
                value={activeDevice.fingerprint}
                className="mt-1 text-[11px] text-text-brand/40"
              />
            </div>

            <AnimatedValue
              value={activeDevice.status}
              className="rounded-full bg-primary-soft/45 px-2 py-1 text-[10px] font-semibold text-primary"
            />
          </div>

          <div className="space-y-2">
            <Detail label="Location" value={activeDevice.location} />
            <Detail label="Network" value={activeDevice.network} />
            <Detail label="Proxy" value={activeDevice.proxy} />
            <Detail label="Spoofing" value={activeDevice.spoofing} />
          </div>

          <div className="mt-4">
            <div className="mb-1.5 flex items-center justify-between text-[11px]">
              <span className="text-text-brand/40">Risk score</span>

              <AnimatedValue
                value={`${activeDevice.riskScore}/100`}
                className="font-semibold text-text-heading"
              />
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-primary-soft/40">
              <motion.div
                animate={{ width: `${activeDevice.riskScore}%` }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="h-full rounded-full bg-primary"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const AnimatedValue = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => {
  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className={className}
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Detail = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-primary-soft/15 px-3 py-2 text-xs">
      <span className="text-text-brand/40">{label}</span>

      <AnimatedValue
        value={value}
        className="text-right font-medium text-text-brand/70"
      />
    </div>
  );
};
