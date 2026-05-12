import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar/navbar";
import Products from "@/components/products";
import ProductsShowCase from "@/components/products-showCase";
import Seperator from "@/components/seperator";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <Products /> */}
      {/* <ProductsShowCase /> */}
      <Seperator />

      <div className="mt-500"></div>
    </>
  );
};

export default Home;
