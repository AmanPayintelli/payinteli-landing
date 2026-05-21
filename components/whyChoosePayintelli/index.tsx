"use client";

import Container from "../container";
import SectionHeader from "../section-header";

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
          <div className="flex min-h-[360px] flex-col border-b p-4 sm:min-h-[400px] sm:p-5 md:col-span-2 md:min-h-[430px] md:border-r md:p-6 lg:min-h-[460px] lg:p-7">
            <h3 className="text-lg font-medium tracking-tight text-text-brand sm:text-xl">
              First large card title
            </h3>

            <div className="mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-dashed border-neutral-200 bg-neutral-50 sm:mt-5 md:mt-6">
              {/* Add your component here */}
            </div>
          </div>

          {/* Top Right */}
          <div className="flex min-h-[340px] flex-col border-b p-4 sm:min-h-[380px] sm:p-5 md:min-h-[430px] md:p-6 lg:min-h-[460px] lg:p-7">
            <h3 className="text-lg font-medium tracking-tight text-text-brand sm:text-xl">
              Second card title
            </h3>

            <div className="mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-dashed border-neutral-200 bg-neutral-50 sm:mt-5 md:mt-6">
              {/* Add your component here */}
            </div>
          </div>

          {/* Bottom Left */}
          <div className="flex min-h-[320px] flex-col border-b p-4 sm:min-h-[350px] sm:p-5 md:border-r md:border-b-0 md:p-6 lg:min-h-[380px] lg:p-7">
            <h3 className="text-lg font-medium tracking-tight text-text-brand sm:text-xl">
              Third card title
            </h3>

            <div className="mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-dashed border-neutral-200 bg-neutral-50 sm:mt-5 md:mt-6">
              {/* Add your component here */}
            </div>
          </div>

          {/* Bottom Middle */}
          <div className="flex min-h-[320px] flex-col border-b p-4 sm:min-h-[350px] sm:p-5 md:border-r md:border-b-0 md:p-6 lg:min-h-[380px] lg:p-7">
            <h3 className="text-lg font-medium tracking-tight text-text-brand sm:text-xl">
              Fourth card title
            </h3>

            <div className="mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-dashed border-neutral-200 bg-neutral-50 sm:mt-5 md:mt-6">
              {/* Add your component here */}
            </div>
          </div>

          {/* Bottom Right */}
          <div className="flex min-h-[320px] flex-col p-4 sm:min-h-[350px] sm:p-5 md:p-6 lg:min-h-[380px] lg:p-7">
            <h3 className="text-lg font-medium tracking-tight text-text-brand sm:text-xl">
              Fifth card title
            </h3>

            <div className="mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-dashed border-neutral-200 bg-neutral-50 sm:mt-5 md:mt-6">
              {/* Add your component here */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
