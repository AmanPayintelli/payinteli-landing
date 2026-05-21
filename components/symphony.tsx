import Image from "next/image";
import {
  Route,
  TrendingUp,
  ShieldCheck,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";

import Container from "./container";
import SectionHeader from "./section-header";
import SeparatorContainer from "./separator-container";

const symphonyFeatures: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: Route,
    title: "Smart Routing",
    desc: "Route every payment through the best provider for higher approval rates.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Insights",
    desc: "Track payment performance and uncover where customers drop off.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Signals",
    desc: "Detect unusual payment behavior before it impacts your business.",
  },
  {
    icon: RefreshCcw,
    title: "Auto Optimization",
    desc: "Continuously improve routing decisions with AI-powered learning.",
  },
];

const Symphony = () => {
  return (
    <section className="w-full">
      <Container className="border-x">
        <SectionHeader
          label="[ Pi Symphony ]"
          title={
            <>
              Orchestrating Intelligent{" "}
              <span className="text-primary">Payments</span>
            </>
          }
          description="AI-powered precision that drives smarter payments and maximizes conversion."
        />
      </Container>

      <Container className="border-x p-1">
        <div className="grid min-h-140 w-full overflow-hidden rounded-lg border bg-white p-2 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="flex h-full items-center justify-center overflow-hidden rounded-lg">
            <video
              src="/symphony-demo.mov"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full scale-[1.01] rounded-lg object-contain"
            />
          </div>

          <div className="relative h-full min-h-140 w-full overflow-hidden rounded-r-lg border-l border-neutral-200 bg-neutral-50">
            <Image
              src="/symphony-img.png"
              alt="Pi Symphony visual"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>

      <SeparatorContainer height="h-8 md:h-12" />

      <Container className="border-x">
        <div className="grid w-full grid-cols-1  border-neutral-200 md:grid-cols-2 lg:grid-cols-4">
          {symphonyFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="min-h-36 border-b border-r border-neutral-200 px-8 py-8 last:border-r-0 md:[&:nth-child(2)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r lg:nth-4:border-r-0"
              >
                <div className="mb-5 flex items-center gap-3">
                  <Icon className="size-4 text-primary" strokeWidth={2} />

                  <h3 className="text-[15px] font-semibold text-neutral-950">
                    {item.title}
                  </h3>
                </div>

                <p className="max-w-xs text-[15px] leading-6 text-neutral-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>

      <SeparatorContainer height="h-8 md:h-12" />
    </section>
  );
};

export default Symphony;
