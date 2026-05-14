import Container from "@/components/container";
import Features from "@/components/features/features";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar/navbar";
import SectionHeader from "@/components/section-header";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <div className="mt-500"></div>
    </>
  );
};

export default Home;
