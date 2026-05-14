import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar/navbar";
import OurClients from "@/components/our-clients";
import Seperator from "@/components/seperator";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <OurClients /> */}
      <Features />
      {/* <Seperator /> */}
      <div className="mt-500"></div>
    </>
  );
};

export default Home;
