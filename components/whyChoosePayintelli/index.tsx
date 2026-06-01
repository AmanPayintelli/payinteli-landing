"use client";

import Container from "../container";
import ScaleGraph from "../scale-graph";
import SectionHeader from "../section-header";
import { AssemblyLine } from "../ui/assembly-line";

const WhyUs = () => {
  return (
    <section className="w-full">
      <Container className="border-x">
        <SectionHeader
          label="[ Platform ]"
          title={
            <>
              Why Choose <span className="text-primary">PayIntelli?</span>
            </>
          }
          description="Join 500+ businesses already transforming their payment infrastructure with AI-powered solutions."
        />
      </Container>

      <Container className="border-x">
        <div className="grid grid-cols-1 overflow-hidden border-t md:grid-cols-3">
          {/* Top Left - Large Card */}
          <div className="flex min-h-90 flex-col border-b p-4 sm:min-h-100 sm:p-5 md:col-span-2 md:min-h-107.5 md:border-r md:p-6 lg:min-h-115 lg:p-7">
            <h3 className="text-lg font-medium tracking-tight text-text-brand sm:text-xl">
              AI Embedded at every step
            </h3>

            <div className="mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-dashed border-neutral-200 bg-neutral-50 sm:mt-5 md:mt-6">
              <AssemblyLine />
            </div>
          </div>

          {/* Top Right */}
          <div className="flex min-h-85 flex-col border-b p-4 sm:min-h-95 sm:p-5 md:min-h-107.5 md:p-6 lg:min-h-115 lg:p-7">
            <h3 className="text-lg font-medium tracking-tight text-text-brand sm:text-xl">
              All in one Ecosystem{" "}
            </h3>

            <div className="mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-xl  sm:mt-5 md:mt-6">
              <div className="w-full overflow-hidden rounded-xl border border-neutral-300 bg-white p-1.5 shadow-md ring-1 ring-black/5">
                <img
                  src="/all-in-one.png"
                  alt="All in one ecosystem"
                  className="max-h-85 w-full rounded-lg object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="flex min-h-80 flex-col border-b p-4 sm:min-h-87.5 sm:p-5 md:border-r md:border-b-0 md:p-6 lg:min-h-95 lg:p-7">
            <h3 className="text-lg font-medium tracking-tight text-text-brand sm:text-xl">
              Frictionless Integration
            </h3>
            <div className="mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-xl sm:mt-5 md:mt-6">
              <div className="w-full overflow-hidden rounded-xl border border-neutral-300 bg-white p-1.5 shadow-md ring-1 ring-black/5">
                <img
                  src="/integration.png"
                  alt="All in one ecosystem"
                  className="max-h-85 w-full rounded-lg object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Bottom Full Width */}
          <div className="flex min-h-80 flex-col border-b p-4 sm:min-h-87.5 sm:p-5 md:col-span-2 md:border-b-0 md:p-6 lg:min-h-95 lg:p-7">
            <h3 className="text-lg font-medium tracking-tight text-text-brand sm:text-xl">
              Built For Scale
            </h3>

            <div className="mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-dashed border-neutral-200 bg-neutral-50 sm:mt-5 md:mt-6">
              <ScaleGraph />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
