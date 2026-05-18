"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { DeepSearchDataItem, ResponsePhase } from "./deepsearchChatData";

type DeepSearchChatProps = {
  chatData: DeepSearchDataItem[];
  activeQuestionIndex: number;
  onActiveQuestionChange?: (index: number) => void;
};

type ParsedTable = {
  headers: string[];
  rows: string[][];
  chartData: Record<string, string | number>[];
  numericKeys: string[];
};

const DEMO_WINDOW = 15000;
const QUESTION_DELAY = 700;
const THINKING_DELAY = 1300;
const NEXT_QUESTION_DELAY = 1200;

const parseNumber = (value: string) => {
  const cleaned = value.replace(/[,%~+()]/g, "").trim();

  if (cleaned.toLowerCase() === "new") return null;
  if (cleaned === "") return null;

  const number = Number.parseFloat(cleaned);

  return Number.isNaN(number) ? null : number;
};

const parseTable = (content: string): ParsedTable | null => {
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) return null;

  const headers = lines[0].split(/\s{2,}/).map((item) => item.trim());

  const rows = lines.slice(1).map((line) =>
    line
      .split(/\s{2,}/)
      .map((item) => item.trim())
      .filter(Boolean),
  );

  const chartData = rows.map((row) => {
    const item: Record<string, string | number> = {};

    headers.forEach((header, index) => {
      const value = row[index] ?? "";
      const number = parseNumber(value);

      item[header] = number ?? value;
    });

    return item;
  });

  const numericKeys = headers.filter((header) =>
    chartData.some((row) => typeof row[header] === "number"),
  );

  return {
    headers,
    rows,
    chartData,
    numericKeys,
  };
};

const ThinkingBubble = () => {
  return (
    <div className="mr-auto max-w-[85%] rounded-tl-sm  bg-transparent p-4">
      <div className="mb-3 flex items-center gap-2">
        <div className="size-2 animate-pulse rounded-full bg-primary" />
        <p className="text-xs font-medium text-neutral-500">
          DeepSearch is thinking
        </p>
      </div>

      <div className="space-y-2">
        <div className="h-3 w-52 animate-pulse rounded-full bg-neutral-200" />
        <div className="h-3 w-40 animate-pulse rounded-full bg-neutral-200" />
        <div className="h-3 w-28 animate-pulse rounded-full bg-neutral-200" />
      </div>
    </div>
  );
};

const TablePhase = ({ content }: { content: string }) => {
  const table = useMemo(() => parseTable(content), [content]);

  if (!table) {
    return (
      <pre className="overflow-x-auto rounded-xl bg-neutral-100 p-3 text-xs leading-relaxed text-neutral-700">
        {content}
      </pre>
    );
  }

  const chartKeys = table.numericKeys.slice(0, 3);
  const labelKey = table.headers[0];

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max text-left text-xs">
            <thead className="bg-neutral-50 text-neutral-500">
              <tr>
                {table.headers.map((header) => (
                  <th key={header} className="px-3 py-2 font-medium">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-neutral-100">
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="text-neutral-700">
                  {table.headers.map((header, columnIndex) => (
                    <td key={header} className="px-3 py-2">
                      {row[columnIndex] ?? "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {chartKeys.length > 0 && table.chartData.length > 1 && (
        <div className="h-36 rounded-xl bg-neutral-50 p-3">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={table.chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey={labelKey}
                tickLine={false}
                axisLine={false}
                fontSize={10}
              />
              <YAxis tickLine={false} axisLine={false} fontSize={10} />
              <Tooltip />
              {chartKeys.map((key) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

const ResponsePhaseBlock = ({ phase }: { phase: ResponsePhase }) => {
  if (phase.type === "table") {
    return <TablePhase content={phase.content} />;
  }

  if (phase.type === "summary") {
    return (
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm leading-relaxed text-neutral-800">
        {phase.content}
      </div>
    );
  }

  if (phase.type === "insight") {
    return (
      <div className="rounded-xl  p-3 text-sm leading-relaxed text-neutral-700">
        {phase.content}
      </div>
    );
  }

  return (
    <p className="text-sm leading-relaxed text-neutral-700">{phase.content}</p>
  );
};

const DeepSearchChat = ({
  chatData,
  activeQuestionIndex,
  onActiveQuestionChange,
}: DeepSearchChatProps) => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [visiblePhaseCount, setVisiblePhaseCount] = useState(0);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const safeActiveQuestionIndex =
    chatData.length > 0
      ? Math.min(activeQuestionIndex, chatData.length - 1)
      : 0;

  const activeItem = chatData[safeActiveQuestionIndex];
  const visiblePhases =
    activeItem?.responsePhases.slice(0, visiblePhaseCount) ?? [];

  useEffect(() => {
    if (!chatData.length || !activeItem) return;

    const timers: NodeJS.Timeout[] = [];

    setShowQuestion(false);
    setIsThinking(false);
    setVisiblePhaseCount(0);

    timers.push(
      setTimeout(() => {
        setShowQuestion(true);
      }, QUESTION_DELAY),
    );

    timers.push(
      setTimeout(() => {
        setIsThinking(true);
      }, QUESTION_DELAY + 500),
    );

    timers.push(
      setTimeout(() => {
        setIsThinking(false);

        const phaseCount = activeItem.responsePhases.length;
        const availableTime =
          DEMO_WINDOW - QUESTION_DELAY - THINKING_DELAY - NEXT_QUESTION_DELAY;

        const phaseDelay = Math.max(
          550,
          Math.floor(availableTime / Math.max(phaseCount, 1)),
        );

        activeItem.responsePhases.forEach((_, index) => {
          timers.push(
            setTimeout(() => {
              setVisiblePhaseCount(index + 1);
            }, index * phaseDelay),
          );
        });

        timers.push(
          setTimeout(
            () => {
              onActiveQuestionChange?.(
                (safeActiveQuestionIndex + 1) % chatData.length,
              );
            },
            phaseCount * phaseDelay + NEXT_QUESTION_DELAY,
          ),
        );
      }, QUESTION_DELAY + THINKING_DELAY),
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [
    safeActiveQuestionIndex,
    activeItem,
    chatData.length,
    onActiveQuestionChange,
  ]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [showQuestion, isThinking, visiblePhaseCount]);

  if (!chatData.length || !activeItem) return null;

  return (
    <div className="flex h-[60vh] flex-col overflow-hidden mask-b-from-80%">
      <div
        ref={scrollRef}
        className="flex-1 space-y-4 overflow-y-auto p-4 scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {showQuestion && (
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-4 py-3 text-sm leading-relaxed text-white">
            {activeItem.question}
          </div>
        )}

        {isThinking && <ThinkingBubble />}

        {visiblePhases.length > 0 && (
          <div className="mr-auto max-w-[92%] space-y-3 rounded-2xl rounded-tl-sm bg-white p-4">
            {visiblePhases.map((phase, index) => (
              <div
                key={`${phase.type}-${index}`}
                className="animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                <ResponsePhaseBlock phase={phase} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DeepSearchChat;
