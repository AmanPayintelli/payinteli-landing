import SymphonyProductFeatures from "@/components/products/symphony/product-features";
import SymphonyHero from "@/components/products/symphony/symphony-hero";
import SeparatorContainer from "@/components/separator-container";
import Testimonials from "@/components/testimonials";
import VideoCta from "@/components/ui/video-cta";

export default function PiSymphonyHero() {
  return (
    <>
      <SymphonyHero />
      <SeparatorContainer />
      <VideoCta videoSrc="/symphony-video.mp4" />
      <SeparatorContainer />
      <SeparatorContainer height="h-16 md:h-20" />
      <SymphonyProductFeatures />
      <SeparatorContainer height="h-16 md:h-20" />
      {/* <Testimonials /> */}
      <SeparatorContainer height="h-16 md:h-20" />
    </>
  );
}
