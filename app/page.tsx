import { ButtonPrimary, ButtonSecondary } from "@/components/buttonPrimary";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import { Cover } from "@/components/ui/cover";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <div className="border border-border-neutral h-px"></div>
      <div className="border border-border-neutral h-px mt-20"></div> */}
    </>
  );
};

export default Home;
