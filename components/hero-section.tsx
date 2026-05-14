import { ButtonPrimary, ButtonSecondary } from "./ui/buttonPrimary";
import Container from "./container";
import AnimatedWords from "./ui/animated-words";

export default function Hero() {
  const words = [
    "Smart.",
    "Adaptive.",
    "Predictive.",
    "Optimized.",
    "AI-Driven.",
  ];

  return (
    <Container className="grid min-h-155 w-full overflow-hidden border-x border-b border-border bg-background md:h-[70vh] md:grid-cols-[60fr_40fr]">
      {/* Left Content */}
      <section className="relative flex h-full border-border px-5 py-16 md:border-r md:px-0 md:py-0 md:pl-12">
        <div className="flex h-full w-full flex-col items-start justify-center border-border md:border-l md:border-dashed">
          <div className="max-w-2xl">
            <span className="mb-5 inline-block font-mono text-sm font-light tracking-normal text-text-muted md:text-[11px]">
              [ We handle payments, so you can handle growth... ]
            </span>

            <h1 className="text-[39px] font-bold leading-[1.08] tracking-tight text-text-brand sm:text-[46px] md:text-[48px] lg:text-[54px]">
              <span className="block ">The Future of Payments</span>
              <span className="block">Isn&apos;t Just Fast.</span>

              <span className="block">
                It&apos;s <AnimatedWords words={words} />
              </span>
            </h1>

            <p className="mt-6 max-w-[95%] text-sm leading-6 tracking-tight text-text-muted sm:text-base sm:leading-7 md:text-[16px]">
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
      <section className="relative hidden h-full overflow-hidden bg-primary-soft/30 md:block">
        <img src="/heroSection-img2.png" className="w-full h-full" />
      </section>
    </Container>
  );
}
