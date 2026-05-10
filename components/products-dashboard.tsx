"use client";

import { cn } from "@/lib/utils";
import {
  Checkout,
  DeepSearch,
  Recon,
  Shield,
  Symphony,
} from "./icons/product-icons";
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
    speed: 8,
  },
  {
    title: "Checkout",
    icon: Checkout,
    video: "/product-showcase-video/checkout.mov",
    speed: 2,
  },
];

const AUTO_SWITCH_TIME = 10000; // 10 seconds

const ProductsDashboard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  // Initially automatic switching is enabled
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeProduct = sidebarItems[activeIndex];

  // Update playback speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = activeProduct.speed || 1;

      videoRef.current.play().catch(() => {});
    }
  }, [activeIndex, activeProduct.speed]);

  // Automatic switching every 10 sec
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

  // Manual selection
  const handleSelectProduct = (index: number) => {
    // Stop all automatic switching forever
    setIsAutoPlaying(false);

    // Switch to clicked product
    setActiveIndex(index);
  };

  return (
    <div className="h-full w-full overflow-hidden border border-neutral-200 bg-white">
      {/* Top Bar */}
      <div className="relative flex h-8 w-full items-center border-b border-neutral-200 bg-stone-100 px-3">
        {/* Mac Dots */}
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
        </div>

        {/* Center Text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="text-[12px] font-medium text-neutral-500">
            Dashboard
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex h-[calc(100%-32px)]">
        {/* Sidebar */}
        <div className="flex w-40 flex-col gap-1.5 border-r border-neutral-200 bg-[#f7f7f7] p-2">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;

            const isActive = activeIndex === index;

            return (
              <button
                key={item.title}
                onClick={() => handleSelectProduct(index)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium transition-all duration-300",
                  isActive
                    ? "border border-neutral-200 bg-white text-black shadow-sm"
                    : "text-neutral-500 hover:bg-neutral-200/40 hover:text-black",
                )}
              >
                <Icon
                  className={cn(
                    "h-4.5 w-4.5 shrink-0 transition-colors",
                    isActive ? "text-[#0063EE]" : "text-neutral-400",
                  )}
                />

                <span className="truncate">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Video Area */}
        <div className="flex-1 overflow-hidden bg-white">
          <video
            key={activeProduct.video}
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop={!isAutoPlaying}
            playsInline
          >
            <source src={activeProduct.video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default ProductsDashboard;
