import DashboardCta from "@/components/dashboard-cta";
import Features from "@/components/features/features";
import HeroSection from "@/components/hero-section";
import ImageCta from "@/components/image-cta";
import { MarqueeShowCase } from "@/components/marquee-showcase";
import PiDeepsearch from "@/components/products/deepsearch/pi-deepsearch";
import Security from "@/components/security";
import SeparatorContainer from "@/components/separator-container";
import Separator from "@/components/seperator";
import Symphony from "@/components/symphony";
import Testimonials from "@/components/testimonials";
import WhyUs from "@/components/whyChoosePayintelli";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SeparatorContainer height="h-16 md:h-20" />
      <Features />
      <SeparatorContainer height="h-16 md:h-20" />
      <DashboardCta />

      <SeparatorContainer height="h-16 md:h-20" />
      <WhyUs />
      <SeparatorContainer />
      <ImageCta />
      <SeparatorContainer />
      <Testimonials />
      <SeparatorContainer />
      <Security />
      <SeparatorContainer />
      <div className="mt-500"></div>
    </>
  );
};

export default Home;
// Blurr all the things in dashboard expect pi insights
