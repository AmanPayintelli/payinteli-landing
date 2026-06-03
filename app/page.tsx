import DashboardCta from "@/components/dashboard-cta";
import Features from "@/components/features/features";
import HeroSection from "@/components/hero-section";
import ImageCta from "@/components/ui/image-cta";
import Security from "@/components/security";
import SeparatorContainer from "@/components/separator-container";
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
      <SeparatorContainer height="h-16 md:h-20" />
      <ImageCta />
      <SeparatorContainer height="h-16 md:h-20" />
      <Security />
      <SeparatorContainer />
    </>
  );
};

export default Home;
