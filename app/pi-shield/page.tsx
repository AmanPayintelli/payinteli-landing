import ShieldProductFeatures from "@/components/products/shield/product-features";
import ShieldFeatures from "@/components/products/shield/shield-feature-cards";
import ShieldHero from "@/components/products/shield/shield-hero";
import SeparatorContainer from "@/components/separator-container";
import Testimonials from "@/components/testimonials";
import VideoCta from "@/components/ui/video-cta";

const Shield = () => {
  return (
    <>
      <ShieldHero />
      <SeparatorContainer />
      <VideoCta videoSrc="/shield-video.mp4" />
      <SeparatorContainer />
      <SeparatorContainer height="h-16 md:h-20" />
      <ShieldProductFeatures />
      <ShieldFeatures />
      <SeparatorContainer height="h-16 md:h-20" />
      <Testimonials />
      <SeparatorContainer height="h-16 md:h-20" />
    </>
  );
};

export default Shield;
