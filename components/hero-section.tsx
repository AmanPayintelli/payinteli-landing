"use client";
import { useEffect, useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "./buttonPrimary";
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
    <div
      className="relative w-full border border-neutral-200/70"
      style={{
        background: `
    radial-gradient(
      circle at top right,
      rgba(84, 222, 209, 0.75) 0%,
      rgba(84, 222, 209, 0.35) 25%,
      rgba(255,255,255,0) 55%
    ),
    linear-gradient(
      135deg,
      #ffff 0%,
      rgb(241, 237, 234) 45%,
      rgb(228, 247, 245) 75%,
      rgb(165, 232, 226) 100%
    )
  `,
      }}
    >
      <div className=" relative z-10">
        <div className="text-center h-[70vh] md:h-[50vh] w-full flex items-center flex-col justify-center relative">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-[#082832] pt-10 z-10">
            The Future of Payments <br />
            <span className="text-3xl md:text-[50px] md:leading-[1.1] tracking-tighter">
              Isn't Just Fast its
              <span className="relative inline-flex min-w-65 ml-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    className="text-blue-600 relative inline-block tracking-normal  text-left"
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
              </span>
            </span>
          </h1>
          {/* Subtext */}
          <p className="mt-6 text-gray-500 text-sm md:text-[16px] max-w-75 md:max-w-lg mx-auto leading-6 tracking-tighter z-10">
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
    </div>
  );
}
