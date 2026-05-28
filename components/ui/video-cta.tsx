"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface VideoCtaProps {
  videoSrc: string;
}

const VideoCta = ({ videoSrc }: VideoCtaProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "start 35%"],
  });

  const rawWidth = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["72%", "100%", "100%"],
  );

  const rawHeight = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["600px", "800px", "800px"],
  );

  const width = useSpring(rawWidth, {
    stiffness: 80,
    damping: 22,
    mass: 0.8,
  });

  const height = useSpring(rawHeight, {
    stiffness: 80,
    damping: 22,
    mass: 0.8,
  });

  return (
    <div
      ref={sectionRef}
      className="w-full border-x border-border bg-primary-soft px-4 py-6 sm:px-6 sm:py-8 md:px-6 md:py-6"
    >
      <motion.div
        style={{ width, height }}
        className="relative mx-auto overflow-hidden rounded-lg bg-white shadow-sm md:h-150"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-white/10" />
      </motion.div>
    </div>
  );
};

export default VideoCta;
