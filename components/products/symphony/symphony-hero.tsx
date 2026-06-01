"use client";
import Container from "@/components/container";
import { ButtonPrimary, ButtonSecondary } from "@/components/ui/buttonPrimary";
import HeroContainer from "@/components/ui/hero-container";
import { motion } from "framer-motion";

const SymphonyHero = () => {
  const eyebrowText = "[ Pi Symphony ]";
  return (
    <Container className="relative min-h-155 w-full overflow-hidden border-x border-border bg-background md:h-[70vh]">
      {/* Full BG Image */}
      <motion.img
        src="/symphony-hero.png"
        alt="Pi Deepsearch conversational analytics visual"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_28%]"
        initial={{ opacity: 0, scale: 1.08, filter: "blur(30px)" }}
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
              {eyebrowText}
            </motion.span>

            <h1 className="text-[39px] font-bold leading-[1.08] tracking-tight text-text-brand sm:text-[46px] md:text-[48px] lg:text-[54px]">
              <span className="block">Orchestrating Intelligent Payments.</span>

              <span className="block whitespace-nowrap text-primary">
                Built to Maximize Conversion.
              </span>
            </h1>

            <p className="mt-6 max-w-[95%] text-sm leading-6 tracking-tight text-text-muted sm:text-base sm:leading-7 md:text-[16px]">
              AI-powered precision that intelligently routes every transaction,
              reduces costs, handles provider failover, and helps meet
              contractual fulfilment without compromising performance.
            </p>

            {/* <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <ButtonSecondary
                title="Get Started"
                textSize="text-sm font-semibold"
                height="h-11"
                className="w-full rounded-lg px-5 shadow-sm hover:shadow-md sm:w-auto"
              />

              <ButtonPrimary
                title="Book a Demo"
                textSize="text-sm font-semibold"
                height="h-11"
                className="w-full rounded-lg bg-white px-5 shadow-sm hover:bg-primary-soft hover:shadow-md sm:w-auto"
              />
            </div> */}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default SymphonyHero;

// <HeroContainer
//   eyebrow="[ Pi Symphony ]"
//   titleLines={["Orchestrating", "Intelligent Payments"]}
//   bottomTitle="Built to Maximize Conversion."
//   description="AI-powered precision that intelligently routes every transaction, reduces costs, handles provider failover, and helps meet contractual fulfilment without compromising performance."
//   secondaryButtonTitle="Get Started"
//   primaryButtonTitle="Book a Demo"
//   imageSrc="/symphony-hero.png"
//   imageAlt="Pi Symphony payment orchestration visual"
// />
