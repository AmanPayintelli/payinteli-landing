"use client";

import { cn } from "@/lib/utils";
import {
  Checkout,
  DeepSearch,
  Recon,
  Shield,
  Symphony,
} from "./icons/product-icons";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const sidebarItems = [
  {
    title: "Symphony",
    icon: Symphony,
    video: "/product-showcase-video/symphony.mov",
    speed: 2,
  },
  {
    title: "Shield",
    icon: Shield,
    video: "/product-showcase-video/Shield.mov",
    speed: 2,
  },
  {
    title: "Recon",
    icon: Recon,
    video: "/product-showcase-video/symphony.mov",
    speed: 2,
  },
  {
    title: "DeepSearch",
    icon: DeepSearch,
    video: "/product-showcase-video/deepsearch.mov",
    speed: 4,
  },
  {
    title: "Checkout",
    icon: Checkout,
    video: "/product-showcase-video/checkout.mov",
    speed: 2,
  },
];

const AUTO_SWITCH_TIME = 10000;

const ProductsDashboard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeProduct = sidebarItems[activeIndex];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = activeProduct.speed || 1;

      videoRef.current.play().catch(() => {});
    }
  }, [activeIndex, activeProduct.speed]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === sidebarItems.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, AUTO_SWITCH_TIME);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSelectProduct = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <div className="min-h-full w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
      {/* Top Bar */}
      <div className="relative flex h-10 w-full items-center border-b border-neutral-200 bg-white px-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-200 bg-white transition hover:bg-neutral-100"
          >
            {sidebarOpen ? (
              <X className="h-4 w-4 text-neutral-600" />
            ) : (
              <Menu className="h-4 w-4 text-neutral-600" />
            )}
          </button>

          {/* Mac Dots */}
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
        </div>

        {/* Center Text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="text-[11px] font-semibold tracking-[0.12em] text-neutral-500">
            DASHBOARD
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex h-[calc(100%-40px)] w-full">
        {/* Sidebar */}
        <div
          className={cn(
            "overflow-hidden border-r border-neutral-200 bg-white transition-all duration-300 ease-in-out",
            sidebarOpen ? "w-[115px] p-2" : "w-0 p-0 border-r-0",
          )}
        >
          <div className="flex flex-col gap-1">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon;

              const isActive = activeIndex === index;

              return (
                <button
                  key={item.title}
                  onClick={() => handleSelectProduct(index)}
                  className={cn(
                    "group flex items-center gap-2 rounded-xl px-2 py-2 text-[11px] font-medium whitespace-nowrap transition-all duration-300",
                    isActive
                      ? "border border-emerald-100 bg-emerald-50 text-emerald-700 shadow-sm"
                      : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-3.5 w-3.5 shrink-0 transition-all duration-300",
                      isActive
                        ? "text-emerald-600"
                        : "text-neutral-400 group-hover:text-emerald-500",
                    )}
                  />

                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Area */}
        <div className="relative flex-1 overflow-hidden bg-black">
          <video
            key={activeProduct.video}
            ref={videoRef}
            className="h-full w-full object-contain"
            autoPlay
            muted
            loop={!isAutoPlaying}
            playsInline
          >
            <source src={activeProduct.video} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />

          {/* Product Badge */}
          <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
            <span className="text-xs font-medium text-white">
              {activeProduct.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDashboard;
