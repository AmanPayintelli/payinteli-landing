import React from "react";
import { ChevronRight } from "lucide-react";
import Container from "../container";

const ImageCta = () => {
  return (
    <Container className="relative h-80 w-full overflow-hidden sm:h-96 md:h-120">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/section-img.png"
        alt="Payintelli CTA"
      />

      <div className="absolute inset-0 z-10 bg-linear-to-r from-primary/75 via-primary-muted/35 to-transparent" />

      <div className="absolute inset-0 z-20 flex flex-col justify-between px-5 py-6 text-white sm:px-7 sm:py-8 md:px-10 md:py-10">
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/70 sm:mb-3 sm:text-xs">
            Payintelli Demo
          </p>

          <h2 className="max-w-xs text-3xl font-semibold leading-[1.08] tracking-tight sm:max-w-md sm:text-4xl md:max-w-lg md:text-5xl">
            See Payintelli <br />
            In Action
          </h2>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-primary shadow-sm transition hover:bg-primary-soft hover:shadow-md sm:px-5 sm:py-3 cursor-pointer">
          Book a Demo
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </Container>
  );
};

export default ImageCta;
