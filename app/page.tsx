import Features from "@/components/features/features";
import HeroSection from "@/components/hero-section";
import OurCients from "@/components/our-clients";
import PiDeepsearch from "@/components/products/deepsearch/pi-deepsearch";
import SeparatorContainer from "@/components/separator-container";

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurCients />
      <Features />
      <SeparatorContainer />
      <PiDeepsearch />
      <SeparatorContainer />
      <div className="mt-500"></div>
    </>
  );
};

export default Home;
