"use client";
import { useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "./buttonPrimary";
import Container from "./container";

export default function Hero() {
  const [text, setText] = useState<string>("Smart");
  return (
    <Container className="relative w-full border-x border-b border-neutral-200">
      <div className="md:p-18 relative z-10">
        {/* Corner borders */}
        <div className="absolute top-0 left-0 h-18 w-18 border-r border-b" />
        <div className="absolute top-0 right-0 h-18 w-18 border-l border-b" />
        <div className="absolute bottom-0 left-0 h-18 w-18 border-r border-t" />
        <div className="absolute bottom-0 right-0 h-18 w-18 border-l border-t" />

        {/* Tiny vertex boxes */}
        <div className="absolute top-17 left-17 z-10 h-2 w-2 bg-white border" />
        <div className="absolute top-17 z-10 right-17 h-2 w-2 bg-white border" />
        <div className="absolute bottom-17 left-17 z-10 h-2 w-2 bg-white border" />
        <div className="absolute bottom-17 right-17 z-10 h-2 w-2 bg-white border" />

        <div className="text-center border border-neutral-200 h-[50vh] w-full flex items-center flex-col justify-center relative">
          {" "}
          <div className="absolute inset-0 h-15 w-30 flex">
            <div className="bg-purple-100 h-full w-full"></div>
            <div className="bg-purple-200 h-full w-full"></div>
          </div>
          <div className="absolute right-0 top-0 h-15 w-15">
            <div className="bg-blue-100 h-full w-full"></div>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-15 w-30 flex">
            <div className="bg-red-100 h-full w-full"></div>
            <div className="bg-red-200 h-full w-full"></div>
          </div>
          <div className="absolute top-15 inset-x-0 h-15 w-30 flex">
            <div className="bg-white h-full w-full"></div>
            <div className="bg-purple-100 h-full w-full"></div>
          </div>
          <div className="absolute right-0 bottom-15  h-15 w-15">
            <div className="bg-green-200 h-full w-full"></div>
          </div>
          <div className="absolute bottom-0 right-0  h-15 w-30 flex">
            <div className="bg-green-100 h-full w-full"></div>
            <div className="bg-white h-full w-full"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] text-[#082832] pt-10">
            The Future of Payments <br />
            <span className="text-3xl md:text-[51px] md:leading-[1.1] tracking-tighter">
              Isn't Just Fast its{" "}
              <div className="text-blue-600 relative inline-block tracking-normal">
                Smart
                <span className="absolute left-0 -bottom-2 w-full h-2 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:6px_6px]" />
              </div>
            </span>
          </h1>
          {/* Subtext */}
          <p className="mt-6 text-gray-500 text-sm md:text-[16px] max-w-75 md:max-w-lg mx-auto leading-6 tracking-tighter">
            Define your payments with precision. Seamlessly optimize routing,
            improve approvals, reduce fraud, and unlock growth — all in one
            place.
          </p>
          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <ButtonPrimary
              textSize="md:text-md text-sm"
              title="Book a Demo"
              height="md:h-[40px] h-[35px]"
            />

            <ButtonSecondary
              textSize="md:text-md text-sm"
              title="Get Started"
              height="md:h-[40px] h-[35px]"
            />
          </div>
          {/* ⭐ Rating */}
          {/* <div className="mt-10 gap-10 flex items-center justify-center">
            <img
              src="/gdpr.svg"
              alt="GDPR Compliant"
              className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />
            <img
              src="/gdpr.svg"
              alt="GDPR Compliant"
              className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />
          </div> */}
        </div>
      </div>
    </Container>
  );
}

const cells = Array.from({ length: 10 }, (_, i) => i);

function Grid() {
  return (
    <div className="absolute inset-0 grid grid-cols-10 w-full h-15">
      {cells.map((_, i) => (
        <div
          key={i}
          className={`
            flex items-center justify-center
            border-r border-b
            ${i === 9 ? "border-r-0" : ""}
          `}
        ></div>
      ))}
    </div>
  );
}
