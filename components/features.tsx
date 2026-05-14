import React from "react";
import Container from "./container";

const Features = () => {
  return (
    <>
      <Container className="w-full border-x border-neutral-200/70 h-screen">
        <header className="flex items-center justify-start border-b border-neutral-200/70 bg-neutral-50/30 px-4 py-10 md:h-[30%] md:px-8 md:py-0">
          <div className="flex max-w-full flex-col items-start justify-between gap-4 md:max-w-[60%] md:gap-6">
            <span className="font-mono text-[11px] font-thin tracking-normal text-neutral-500 md:text-xs">
              {`[ Platform ]`}
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              The only payment ecosystem your business will{" "}
              <span className="text-[#0600FF]">ever need.</span>
            </h2>

            <p className="text-md leading-6 tracking-wide text-neutral-500 md:text-md">
              PayIntelli helps you track, analyze, and optimize your complete
              payment flow — from checkout to reconciliation — with intelligent
              automation.
            </p>
          </div>
        </header>
        <div className="grid md:grid-cols-3 grid-cols-1  h-[50%]">
          <div className="border-r border-neutral-200/70 flex h-full flex-col gap-3 w-full relative px-8 py-6">
            <h3 className="text-xl font-medium text-foreground">
              Agent Anaytics
            </h3>
            <p className="text-sm w-80 text-neutral-500">
              Monitor your visibility score, sentiment, and share of voice
              across all AI platforms.
            </p>
            <div className="relative isolate h-full rounded-2xl border border-neutral-200/70 bg-neutral-100/50 p-8 ">
              <div className="absolute inset-x-12 inset-y-9 z-10 rounded-2xl border bg-white border-neutral-200 mask-b-from-50%" />

              <div className="absolute inset-x-10 inset-y-8 z-20 translate-y-3 rounded-2xl border border-neutral-200 bg-white mask-b-from-50%" />
              <div className="absolute inset-8 z-30 translate-y-5 rounded-2xl border border-neutral-200 bg-white mask-b-from-50%"></div>
            </div>
          </div>
          <div className="border-r border-neutral-200/70">Aman</div>
          <div className=""></div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 border h-[35%]">
          <div className="border">Aman</div>
          <div className="border">Aman</div>
          <div className="border">Aman</div>
        </div>
      </Container>
    </>
  );
};

export default Features;
