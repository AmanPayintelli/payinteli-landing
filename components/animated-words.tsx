"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface AnimatedWordsProps {
  words: string[];
  intervalTime?: number;
  className?: string;
}

export default function AnimatedWords({
  words,
  intervalTime = 2000,
  className = "inline-flex text-primary",
}: AnimatedWordsProps) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setText(words[index]);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [words, intervalTime]);

  const letters = text.split("");

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={text}
        className={className}
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
  );
}
