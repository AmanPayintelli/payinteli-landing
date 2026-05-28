"use client";
import { motion } from "framer-motion";

const transactions = [
  {
    icon: "🛍",
    name: "Shopify #4821",
    detail: "Mumbai · Card ••2291",
    amount: "₹12,400",
    status: "approved",
  },
  {
    icon: "⚠",
    name: "Unknown VPN Node",
    detail: "185.220.x.x · 3 failed attempts",
    amount: "$8,900",
    status: "blocked",
  },
  {
    icon: "📦",
    name: "Amazon Pay",
    detail: "Bangalore · Verified",
    amount: "₹5,200",
    status: "approved",
  },
  {
    icon: "₿",
    name: "Crypto Exchange",
    detail: "Unverified origin · Tor exit",
    amount: "$14,000",
    status: "blocked",
  },
  {
    icon: "🍱",
    name: "Zomato Orders",
    detail: "Hyderabad · UPI",
    amount: "₹480",
    status: "approved",
  },
  {
    icon: "🤖",
    name: "Anomalous Bot",
    detail: "Velocity: 340 req/min",
    amount: "$3,200",
    status: "blocked",
  },
  {
    icon: "💳",
    name: "Stripe Connect",
    detail: "London · OAuth verified",
    amount: "$890",
    status: "approved",
  },
  {
    icon: "🛒",
    name: "Swiggy Instamart",
    detail: "Pune · Saved card",
    amount: "₹1,800",
    status: "approved",
  },
  {
    icon: "⚡",
    name: "Bulk Transfer API",
    detail: "Unverified · Geo anomaly",
    amount: "$22,500",
    status: "blocked",
  },
  {
    icon: "🎬",
    name: "Netflix Premium",
    detail: "California · MFA passed",
    amount: "$15.99",
    status: "approved",
  },
];

const MovingCards = () => {
  const doubled = [...transactions, ...transactions];

  return (
    <div className="relative h-100 overflow-hidden w-full mask-y-from-80%">
      {/* top fade */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-12 z-10"
        style={{ background: "linear-gradient(to bottom, white, transparent)" }}
      />
      {/* bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 z-10"
        style={{ background: "linear-gradient(to top, white, transparent)" }}
      />

      {/* scrolling stream */}
      <motion.div
        className="flex flex-col gap-2"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((item, idx) => {
          const blocked = item.status === "blocked";
          return (
            <motion.div
              key={idx}
              className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 bg-white shadow-sm ${
                blocked ? "border-red-200 bg-red-50" : "border-gray-100"
              }`}
              animate={
                blocked
                  ? {
                      borderColor: [
                        "rgba(254,202,202,1)",
                        "rgba(252,165,165,1)",
                        "rgba(254,202,202,1)",
                      ],
                      backgroundColor: [
                        "rgba(255,241,242,1)",
                        "rgba(255,228,230,1)",
                        "rgba(255,241,242,1)",
                      ],
                    }
                  : {}
              }
              transition={
                blocked
                  ? { duration: 2.5, ease: "easeInOut", repeat: Infinity }
                  : {}
              }
            >
              {/* icon */}
              <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-sm flex-shrink-0">
                {item.icon}
              </div>

              {/* name + detail */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-800 truncate">
                  {item.name}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5 truncate">
                  {item.detail}
                </p>
              </div>

              {/* amount */}
              <span className="text-xs font-semibold text-gray-600 flex-shrink-0">
                {item.amount}
              </span>

              {/* badge */}
              <motion.span
                className={`text-[10px] font-medium px-2 py-0.5 rounded-full border flex-shrink-0 ${
                  blocked
                    ? "bg-red-50 text-red-600 border-red-200"
                    : "bg-green-50 text-green-600 border-green-200"
                }`}
                animate={blocked ? { opacity: [1, 0.5, 1] } : {}}
                transition={
                  blocked
                    ? { duration: 2.5, ease: "easeInOut", repeat: Infinity }
                    : {}
                }
              >
                {blocked ? "Blocked" : "Approved"}
              </motion.span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MovingCards;
