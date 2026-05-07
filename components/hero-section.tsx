"use client";
import { useEffect, useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "./buttonPrimary";
import Container from "./container";
import { AnimatePresence, motion } from "motion/react";

export default function Hero() {
  const words = [
    "Smart.",
    "Adaptive.",
    "Predictive.",
    "Optimized.",
    "AI-Driven.",
  ];
  const [text, setText] = useState<string>(words[0]);

  const letters = text.split("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setText(words[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="relative w-full border-x border-b border-neutral-200/70">
      <div className="md:p-18 relative z-10">
        {/* Corner borders */}
        <div className="absolute top-0 left-0 h-18 w-18 border-r border-b border-neutral-200/70" />
        <div className="absolute top-0 right-0 h-18 w-18 border-l border-b border-neutral-200/70" />
        <div className="absolute bottom-0 left-0 h-18 w-18 border-r border-t border-neutral-200/70" />
        <div className="absolute bottom-0 right-0 h-18 w-18 border-l border-t border-neutral-200/70" />

        {/* Tiny vertex boxes */}
        <div className="absolute top-17 left-17 z-10 h-2 w-2 bg-white border" />
        <div className="absolute top-17 z-10 right-17 h-2 w-2 bg-white border" />
        <div className="absolute bottom-17 left-17 z-10 h-2 w-2 bg-white border" />
        <div className="absolute bottom-17 right-17 z-10 h-2 w-2 bg-white border" />

        <div className="text-center border border-neutral-200/70 h-[50vh] w-full flex items-center flex-col justify-center relative">
          {" "}
          <div className="absolute inset-0 h-15 w-30 flex">
            <div className="bg-purple-100 h-full w-full"></div>
            <div className="bg-purple-200 h-full w-full"></div>
          </div>
          <div className="absolute right-0 top-0 h-15 w-15">
            <div className="bg-blue-100 h-full w-full"></div>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-15 w-30 flex">
            <div className="bg-red-100 h-full w-full"></div>
            <div className="bg-red-200 h-full w-full"></div>
          </div>
          <div className="absolute top-15 inset-x-0 h-15 w-30 flex">
            <div className="bg-white h-full w-full"></div>
            <div className="bg-purple-100 h-full w-full"></div>
          </div>
          <div className="absolute right-0 bottom-15  h-15 w-15">
            <div className="bg-green-200 h-full w-full"></div>
          </div>
          <div className="absolute bottom-0 right-0  h-15 w-30 flex">
            <div className="bg-green-100 h-full w-full"></div>
            <div className="bg-white h-full w-full"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] text-[#082832] pt-10">
            The Future of Payments <br />
            <span className="text-3xl md:text-[50px] md:leading-[1.1] tracking-tighter">
              Isn't Just Fast its
              <span className="relative inline-flex min-w-65 ml-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    className="text-blue-600 relative inline-block tracking-normal bg-white text-left"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.04 } },
                    }}
                    key={text}
                  >
                    {letters.map((char, index) => (
                      <motion.span
                        key={`${char}-${index}`}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.div>
                </AnimatePresence>
                <span className="absolute left-0 -bottom-2 w-65 h-2 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[6px_6px]" />
              </span>
            </span>
          </h1>
          {/* Subtext */}
          <p className="mt-6 text-gray-500 text-sm md:text-[16px] max-w-75 md:max-w-lg mx-auto leading-6 tracking-tighter">
            Define your payments with precision. Seamlessly optimize routing,
            improve approvals, reduce fraud, and unlock growth — all in one
            place.
          </p>
          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <ButtonPrimary
              textSize="md:text-md text-sm"
              title="Book a Demo"
              height="md:h-[40px] h-[35px]"
            />

            <ButtonSecondary
              textSize="md:text-md text-sm"
              title="Get Started"
              height="md:h-[40px] h-[35px]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

const cells = Array.from({ length: 10 }, (_, i) => i);

function Grid() {
  return (
    <div className="absolute inset-0 grid grid-cols-10 w-full h-15">
      {cells.map((_, i) => (
        <div
          key={i}
          className={`
            flex items-center justify-center
            border-r border-b
            ${i === 9 ? "border-r-0" : ""}
          `}
        ></div>
      ))}
    </div>
  );
}
// Smart
// Intelligent
// Adaptive
// Predictive
// Optimized
// Orchestrated
// AI-Driven
