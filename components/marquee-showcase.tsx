"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import Container from "./container";

export function MarqueeShowCase() {
  const images = Array(31).fill("/pxp-landing.png");

  return (
    <section className="w-full bg-white">
      <Container className="border-x">
        <div className="grid  w-full grid-cols-1 overflow-hidden lg:grid-cols-2">
          {/* Left - Marquee */}
          <div className="relative flex h-50 w-full items-center justify-start overflow-hidden">
            <ThreeDMarquee images={images} />
          </div>

          {/* Right - Content */}
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-4xl font-semibold text-white">Aman</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
