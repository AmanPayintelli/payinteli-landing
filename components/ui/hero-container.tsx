"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Container from "../container";
import AnimatedWords from "./animated-words";
import { ButtonPrimary, ButtonSecondary } from "./buttonPrimary";

interface HeroContainerProps {
  eyebrow?: string;
  titleLines: string[];
  bottomTitle?: string;
  animatedPrefix?: string;
  animatedWords?: string[];
  description: string;
  primaryButtonTitle?: string;
  secondaryButtonTitle?: string;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  imageSrc: string;
  imageAlt?: string;
}

export default function HeroContainer({
  eyebrow = "[ We handle payments, so you can handle growth... ]",
  titleLines,
  bottomTitle,
  animatedPrefix = "It's",
  animatedWords = [],
  description,
  primaryButtonTitle = "Book a Demo",
  secondaryButtonTitle = "Get Started",
  showPrimaryButton = true,
  showSecondaryButton = true,
  imageSrc,
  imageAlt = "Hero visual",
}: HeroContainerProps) {
  const router = useRouter();

  const hasAnimatedWords = animatedWords.length > 0;
  const hasButtons = showPrimaryButton || showSecondaryButton;

  return (
    <Container className="grid min-h-155 w-full overflow-hidden border-x border-border bg-background md:h-[70vh] md:grid-cols-[60fr_40fr]">
      {/* Left Content */}
      <section className="relative flex h-full border-border px-5 py-16 md:border-r md:px-0 md:py-0 md:pl-12">
        <div className="flex h-full w-full flex-col items-start justify-center border-border md:border-l md:border-dashed">
          <div className="max-w-2xl">
            <motion.span
              className="mb-5 inline-block overflow-hidden whitespace-nowrap font-mono text-sm font-bold tracking-normal text-text-brand md:text-[14px]"
              initial={{ width: 0 }}
              animate={{ width: "fit-content" }}
              transition={{
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              {eyebrow}
            </motion.span>

            <h1 className="text-[39px] font-bold leading-[1.08] tracking-tight text-text-brand sm:text-[46px] md:text-[48px] lg:text-[54px]">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}

              {hasAnimatedWords ? (
                <span className="block">
                  {animatedPrefix} <AnimatedWords words={animatedWords} />
                </span>
              ) : bottomTitle ? (
                <span className="block">{bottomTitle}</span>
              ) : null}
            </h1>

            <p className="mt-6 max-w-[95%] text-sm leading-6 tracking-tight text-text-muted sm:text-base sm:leading-7 md:text-[16px]">
              {description}
            </p>

            {hasButtons && (
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
                {showSecondaryButton && (
                  <ButtonSecondary
                    title={secondaryButtonTitle}
                    onClick={() => router.push("/get-started")}
                    textSize="text-sm font-semibold"
                    height="h-11"
                    className="w-full rounded-lg px-5 shadow-sm hover:shadow-md sm:w-auto"
                  />
                )}

                {showPrimaryButton && (
                  <ButtonPrimary
                    title={primaryButtonTitle}
                    onClick={() => router.push("/talk-to-us")}
                    textSize="text-sm font-semibold"
                    height="h-11"
                    className="w-full rounded-lg bg-white px-5 shadow-sm hover:bg-primary-soft hover:shadow-md sm:w-auto"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Right Visual */}
      <section className="relative hidden h-full overflow-hidden bg-primary-soft/30 md:block">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </section>
    </Container>
  );
}
