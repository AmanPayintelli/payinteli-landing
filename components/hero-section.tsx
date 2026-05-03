import { Cover } from "./ui/cover";

const HeroSection = () => {
  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center px-6 border-b border-neutral-200">
      <p className="mb-10 px-4 py-2 border rounded-full text-xs md:text-sm tracking-tight text-black font-medium">
        Payments with Intelligence
      </p>
      <div>
        <h1 className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-7xl leading-[1.1] tracking-tight bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500">
          Future of payments
        </h1>
        <h1 className="font-inter text-4xl md:text-6xl lg:text-7xl font-semibold text-center max-w-7xl leading-[1.1] tracking-tighter pt-1">
          Is not just fast... Its <Cover>smart</Cover>
        </h1>
      </div>
      <div className="flex flex-col pt-5">
        <p className="text-center text-neutral-500 font-inter font-normal tracking-tight md:text-xl text-xs justify-center md:w-full w-60">
          PayIntelli is the only payment ecosystem your business will ever need.
        </p>

        <div className="flex items-center gap-3 justify-center pt-12 relative">
          <button className="group md:py-4 py-2 md:px-6 px-3 border rounded-2xl md:text-[15px] text-xs text-white bg-black tracking-tight shadow-2xl ring ring-white relative overflow-hidden transition-colors duration-300 cursor-pointer">
            <div className="absolute inset-0 h-1/2 w-full bg-neutral-100 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <span className="relative z-10">Get Started Now</span>
          </button>
          <button className="md:py-4 py-2 md:px-6 px-3 border rounded-2xl md:text-[15px] text-xs hover:shadow-none transition-colors duration-300  hover:bg-neutral-100 text-black shadow-sm tracking-tight cursor-pointer">
            Book a Free Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
