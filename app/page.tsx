import DashboardCta from "@/components/dashboard-cta";
import Features from "@/components/features/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ImageCta from "@/components/ui/image-cta";
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
      <ImageCta />
      <SeparatorContainer height="h-16 md:h-20" />
      <WhyUs />
      <SeparatorContainer />

      <SeparatorContainer />
      <Testimonials />
      <SeparatorContainer />
      <Security />
      <SeparatorContainer />
    </>
  );
};

export default Home;
