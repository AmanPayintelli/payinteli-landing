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
  imageSrc,
  imageAlt = "Hero visual",
}: HeroContainerProps) {
  const hasAnimatedWords = animatedWords.length > 0;

  return (
    <Container className="grid min-h-155 w-full overflow-hidden border-x border-border bg-background md:h-[70vh] md:grid-cols-[60fr_40fr]">
      {/* Left Content */}
      <section className="relative flex h-full border-border px-5 py-16 md:border-r md:px-0 md:py-0 md:pl-12">
        <div className="flex h-full w-full flex-col items-start justify-center border-border md:border-l md:border-dashed">
          <div className="max-w-2xl">
            <span className="mb-5 inline-block font-mono text-sm font-light tracking-normal text-text-muted md:text-[11px]">
              {eyebrow}
            </span>

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

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <ButtonSecondary
                title={secondaryButtonTitle}
                textSize="text-sm font-semibold"
                height="h-11"
                className="w-full rounded-lg px-5 shadow-sm hover:shadow-md sm:w-auto"
              />

              <ButtonPrimary
                title={primaryButtonTitle}
                textSize="text-sm font-semibold"
                height="h-11"
                className="w-full rounded-lg bg-white px-5 shadow-sm hover:bg-primary-soft hover:shadow-md sm:w-auto"
              />
            </div>
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
