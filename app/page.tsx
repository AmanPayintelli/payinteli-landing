import Features from "@/components/features/features";
import HeroSection from "@/components/hero-section";
import OurCients from "@/components/our-clients";
import SeparatorContainer from "@/components/separator-container";
import Separator from "@/components/seperator";

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurCients />
      <Features />
      <SeparatorContainer />
      <div className="mt-500"></div>
    </>
  );
};

export default Home;
