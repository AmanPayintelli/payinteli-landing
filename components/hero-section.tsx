"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ButtonPrimary, ButtonSecondary } from "./buttonPrimary";
import Container from "./container";

export default function Hero() {
  const words = [
    "Smart.",
    "Adaptive.",
    "Predictive.",
    "Optimized.",
    "AI-Driven.",
  ];

  const [text, setText] = useState(words[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setText(words[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const letters = text.split("");

  return (
    <Container className="grid min-h-155 w-full overflow-hidden border-x border-b border-neutral-200/70 bg-white md:h-[70vh] md:grid-cols-[60fr_40fr]">
      {/* Left Content */}

      <section className="flex h-full border-neutral-200/70 px-5 py-16 md:border-r md:px-0 md:py-0 md:pl-12 relative">
        <div className="flex h-full w-full flex-col items-start justify-center border-neutral-200/70 md:border-l md:border-dashed ">
          <div className="max-w-2xl">
            <span className="mb-5 inline-block font-mono text-[11px] font-light tracking-normal text-neutral-500 md:text-xs">
              [ We handle payments, so you can handle growth... ]
            </span>

            <h1 className="text-[39px] font-bold leading-[1.08] tracking-tight text-black sm:text-[46px] md:text-[48px] lg:text-[54px]">
              <span className="block">The Future of Payments</span>

              <span className="block">Isn&apos;t Just Fast.</span>

              <span className="block">
                It&apos;s{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={text}
                    className="inline-flex text-[#0600FF]"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.04,
                        },
                      },
                    }}
                  >
                    {letters.map((char, index) => (
                      <motion.span
                        key={`${char}-${index}`}
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 6,
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                          },
                        }}
                        transition={{
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="mt-6 max-w-[95%] text-sm leading-6 tracking-tight text-neutral-600 sm:text-base sm:leading-7 md:text-[16px]">
              Define your payments with precision. Seamlessly optimize routing,
              improve approvals, reduce fraud, and unlock growth — all in one
              place.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <ButtonSecondary
                title="Get Started"
                textSize="text-sm font-medium"
                className="w-full sm:w-auto"
              />

              <ButtonPrimary
                title="Book a Demo"
                textSize="text-sm font-medium"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Right Visual */}
      <section className="relative hidden h-full overflow-hidden bg-neutral-50/60 md:block"></section>
    </Container>
  );
}
