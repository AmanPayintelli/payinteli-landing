"use client";

import { useState } from "react";
import { Activity, AlertTriangle, BarChart3, ShieldCheck } from "lucide-react";

import Container from "../../container";
import SectionHeader from "../../section-header";
import DeepSearchChat from "./deepsearchChat";
import { deepSearchData } from "./deepsearchChatData";

const questionMeta = [
  {
    icon: BarChart3,
    description:
      "Track daily volume, success count, failures, and approval rate.",
  },
  {
    icon: AlertTriangle,
    description:
      "Compare decline codes week-over-week and spot unusual increases.",
  },
  {
    icon: ShieldCheck,
    description: "Review fraud activity, fraud flags, and recent risk signals.",
  },
  {
    icon: Activity,
    description:
      "Detect hourly spikes, dips, decline-rate changes, and anomalies.",
  },
];

const PiDeepsearch = () => {
  const chatData = deepSearchData;
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  return (
    <section className="w-full">
      <Container className="border-x">
        <SectionHeader
          label="[ Pi Deepsearch ]"
          title={
            <>
              Conversational Analytics for
              <span className="text-primary"> Smarter Payment</span> Decisions.
            </>
          }
          description="Ask questions in plain English and turn raw payment data into instant insights, predictions, and visualizations—without waiting on analysts."
        />
      </Container>

      <Container className="grid h-[60vh] w-full grid-cols-1 border-x md:grid-cols-[35%_65%] bg-neutral-100">
        {/* Questions */}
        <div className="hidden h-full min-w-0 overflow-hidden border-r md:block ">
          <div className="grid h-full w-full grid-rows-4">
            {chatData.slice(0, 4).map((item, index) => {
              const isActive = index === activeQuestionIndex;
              const Icon = questionMeta[index]?.icon ?? BarChart3;

              return (
                <button
                  key={item.question}
                  type="button"
                  onClick={() => setActiveQuestionIndex(index)}
                  className={[
                    "group relative flex h-full w-full items-center overflow-hidden border-b px-5 text-left transition-all duration-300 last:border-b-0",
                    isActive
                      ? "border-primary/30 "
                      : "border-neutral-200 bg-white hover:bg-neutral-50",
                  ].join(" ")}
                >
                  {isActive && (
                    <div className="absolute inset-y-0 left-0 w-1 " />
                  )}

                  <div className="flex w-full items-start gap-4">
                    <div
                      className={[
                        "flex size-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300",
                        isActive
                          ? "border-primary/20 bg-primary/10 text-primary shadow-sm"
                          : "border-neutral-200 bg-neutral-50 text-neutral-500 group-hover:border-primary/20 group-hover:text-primary",
                      ].join(" ")}
                    >
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={[
                          "text-[15px] font-medium leading-snug tracking-tight",
                          isActive ? "text-neutral-950" : "text-neutral-800",
                        ].join(" ")}
                      >
                        {item.question}
                      </p>

                      <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-neutral-500">
                        {questionMeta[index]?.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat */}
        <div className="min-w-0 overflow-hidden">
          <DeepSearchChat
            chatData={chatData}
            activeQuestionIndex={activeQuestionIndex}
            onActiveQuestionChange={setActiveQuestionIndex}
          />
        </div>
      </Container>
    </section>
  );
};

export default PiDeepsearch;
