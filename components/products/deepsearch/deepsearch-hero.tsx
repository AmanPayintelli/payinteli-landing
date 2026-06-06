"use client";

import React from "react";
import { motion } from "framer-motion";
import { ButtonPrimary, ButtonSecondary } from "@/components/ui/buttonPrimary";
import Container from "@/components/container";

const DeepSearchHero = () => {
  return (
    <Container className="relative min-h-155 w-full overflow-hidden border-x border-border bg-background md:h-[70vh]">
      {/* Full BG Image */}
      <motion.img
        src="/deep-hero.png"
        alt="Pi Deepsearch conversational analytics visual"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_28%]"
        initial={{ opacity: 0, scale: 1.08, filter: "blur(28px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* White text side + darker owl side */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-background via-background/85 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-l from-black/60 via-black/15 to-transparent" />

      {/* Left Content */}
      <section className="relative z-10 flex min-h-155 w-full px-5 py-16 md:h-full md:w-[58%] md:px-0 md:py-0 md:pl-12">
        <div className="flex h-full w-full flex-col items-start justify-center border-border md:border-l md:border-dashed">
          <div className="max-w-2xl">
            <motion.span
              className="mb-5 inline-block overflow-hidden whitespace-nowrap font-mono text-sm font-bold tracking-normal md:text-[14px]"
              initial={{ width: 0 }}
              animate={{ width: "fit-content" }}
              transition={{
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              [ Pi Deepsearch ]
            </motion.span>

            <h1 className="text-[39px] font-bold leading-[1.08] tracking-tight text-text-brand sm:text-[46px] md:text-[48px] lg:text-[54px]">
              <span className="block">Conversational</span>
              <span className="block">Analytics</span>
              <span className="block text-primary">Ask. Analyze. Act.</span>
            </h1>

            <p className="mt-6 max-w-[95%] text-sm leading-6 tracking-tight text-text-muted sm:text-base sm:leading-7 md:text-[16px]">
              Turn payment data into instant answers, predictions, and
              insights—without SQL, dashboards, or waiting on analysts.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default DeepSearchHero;
