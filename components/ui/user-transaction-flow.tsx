"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  CreditCard,
  MousePointerClick,
  ShoppingCart,
  User,
} from "lucide-react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

const users = [
  {
    name: "Jofra Archer",
    avatar: "/avatar-1.png",
    flow: [
      { title: "User", fraud: false, icon: User, note: "Session verified" },
      {
        title: "Browsing",
        fraud: true,
        icon: MousePointerClick,
        note: "VPN detected during browsing.",
      },
      {
        title: "Checkout",
        fraud: false,
        icon: ShoppingCart,
        note: "Normal checkout behavior",
      },
      {
        title: "Payment",
        fraud: true,
        icon: CreditCard,
        note: "High-risk payment signal found",
      },
    ],
  },
  {
    name: "Jos Butler",
    avatar: "/avatar-2.png",
    flow: [
      {
        title: "User",
        fraud: false,
        icon: User,
        note: "Known customer session",
      },
      {
        title: "Browsing",
        fraud: false,
        icon: MousePointerClick,
        note: "Normal browsing pattern",
      },
      {
        title: "Checkout",
        fraud: true,
        icon: ShoppingCart,
        note: "Unusual cart velocity detected",
      },
      {
        title: "Payment",
        fraud: false,
        icon: CreditCard,
        note: "Payment cleared successfully",
      },
    ],
  },
  {
    name: "Jenny",
    avatar: "/avatar-3.png",
    flow: [
      { title: "User", fraud: false, icon: User, note: "Session verified" },
      {
        title: "Browsing",
        fraud: false,
        icon: MousePointerClick,
        note: "Trusted device environment",
      },
      {
        title: "Checkout",
        fraud: false,
        icon: ShoppingCart,
        note: "Normal checkout flow",
      },
      {
        title: "Payment",
        fraud: false,
        icon: CreditCard,
        note: "Transaction approved",
      },
    ],
  },
];

export const TransactionFlow = () => {
  const progress = useMotionValue(0);

  const avatarLeft = useTransform(
    progress,
    [0, 1, 2, 3],
    ["0%", "33.33%", "66.66%", "100%"],
  );

  const lineWidth = useTransform(
    progress,
    [0, 1, 2, 3],
    ["0%", "33.33%", "66.66%", "100%"],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeUserIndex, setActiveUserIndex] = useState(0);

  const activeUser = users[activeUserIndex];
  const activeFlow = activeUser.flow;
  const activeItem = activeFlow[activeIndex];

  useEffect(() => {
    const controls = animate(progress, [0, 1, 2, 3], {
      duration: 7.2,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.34, 0.68, 1],
    });

    const unsubscribe = progress.on("change", (latest) => {
      setActiveIndex(Math.round(latest));
    });

    const userInterval = window.setInterval(() => {
      setActiveUserIndex((prev) => (prev + 1) % users.length);
    }, 7200);

    return () => {
      controls.stop();
      unsubscribe();
      window.clearInterval(userInterval);
    };
  }, [progress]);

  return (
    <div className="relative flex h-full min-h-64 w-full flex-col justify-center overflow-hidden rounded-2xl border border-border/70 bg-linear-to-b from-primary-soft/20 via-white to-white px-5 py-6 shadow-[0_18px_60px_rgba(8,40,50,0.06)]">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      <div className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-primary/6 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 top-4 h-36 w-36 rounded-full bg-sky-300/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-xl">
        <div className="mb-6 flex items-center justify-center">
          <motion.div
            key={activeUser.avatar}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex items-center gap-3 rounded-full border border-border/80 bg-white/85 px-3 py-2 shadow-sm backdrop-blur"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary-soft ring-2 ring-white">
              <Image
                src={activeUser.avatar}
                alt={activeUser.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold leading-none text-text-heading">
                {activeUser.name}
              </p>
              <p className="mt-1 text-[11px] font-medium text-text-brand/45">
                Live transaction scan
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative h-24">
          <div className="absolute left-0 right-0 top-6 h-px bg-border" />

          <motion.div
            className="absolute left-0 top-6 h-px bg-linear-to-r from-primary/50 via-primary/30 to-transparent"
            style={{ width: lineWidth }}
          />

          <motion.div
            className="absolute top-1.75 z-30 h-10 w-10 -translate-x-1/2 overflow-hidden rounded-full border-[3px] border-white bg-primary-soft shadow-[0_10px_28px_rgba(103,59,246,0.18)]"
            style={{ left: avatarLeft }}
          >
            <Image
              src={activeUser.avatar}
              alt={activeUser.name}
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="relative z-20 flex items-start justify-between">
            {activeFlow.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center gap-2"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.055 : 1,
                      y: isActive ? -1 : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`relative flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-300 ${
                      isActive
                        ? item.fraud
                          ? "border-red-200 text-red-500 shadow-red-100/70"
                          : "border-emerald-200 text-emerald-500 shadow-emerald-100/70"
                        : "border-border text-primary/35"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <span
                    className={`text-xs font-medium transition-colors duration-300 ${
                      isActive ? "text-text-heading" : "text-text-brand/45"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <motion.div
        key={`${activeUser.name}-${activeItem.title}`}
        initial={{ opacity: 0, y: 8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border bg-white/90 px-4 py-2 text-xs font-medium shadow-sm backdrop-blur ${
          activeItem.fraud
            ? "border-red-100 text-red-500"
            : "border-emerald-100 text-emerald-600"
        }`}
      >
        {activeItem.fraud ? (
          <AlertTriangle className="h-3.5 w-3.5" />
        ) : (
          <CheckCircle2 className="h-3.5 w-3.5" />
        )}

        <span>{activeItem.note}</span>
      </motion.div>
    </div>
  );
};
