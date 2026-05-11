"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DitherShader } from "./dither-shader";
import { ButtonPrimary, ButtonSecondary } from "./buttonPrimary";

export default function Hero() {
  const img = "/hero-img.png";

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
    <section className="relative min-h-155 w-full overflow-hidden border border-neutral-200/70 sm:min-h-170 md:h-[70vh] md:min-h-160">
      {/* Background */}
      <div className="absolute inset-0 bg-transparent">
        <DitherShader
          src={img}
          gridSize={2}
          ditherMode="bayer"
          colorMode="original"
          invert={false}
          animated={false}
          animationSpeed={0.02}
          primaryColor="#000000"
          secondaryColor="#f5f5f5"
          threshold={0.6}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Soft overlays for readability */}
      <div className="absolute inset-0 bg-white/30 sm:bg-white/30 md:bg-white/20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[620px] w-full items-center justify-center px-4 py-20 text-center sm:min-h-[680px] sm:px-6 md:h-full md:min-h-[640px] md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="mx-auto max-w-5xl text-[42px] font-bold leading-[0.98] tracking-[-0.06em] text-foreground sm:text-6xl md:text-7xl lg:text-[88px]">
            The Future of Payments
            <br />
            <span className="mt-4 block text-[28px] leading-[1.12] tracking-[-0.055em] sm:text-4xl md:text-[48px] lg:text-[56px]">
              Isn&apos;t Just Fast,
              <br className="sm:hidden" /> it&apos;s{" "}
              <span className="mt-3 inline-flex min-w-[180px] justify-center sm:mt-0 sm:min-w-[230px] md:min-w-[270px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={text}
                    className="inline-flex rounded-xl bg-emerald-50 px-3 py-1.5 text-left text-foreground shadow-sm sm:px-4 md:py-1"
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
                        className="inline-block"
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 10,
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                          },
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[92%] text-sm font-semibold leading-6 tracking-tight text-black/80 sm:max-w-2xl sm:text-base sm:leading-7 md:max-w-3xl md:text-[17px]">
            Define your payments with precision. Seamlessly optimize routing,
            improve approvals, reduce fraud, and unlock growth — all in one
            place.
          </p>

          {/* Buttons */}
          <div className="mx-auto mt-8 flex w-full max-w-xs flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
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
  );
}
