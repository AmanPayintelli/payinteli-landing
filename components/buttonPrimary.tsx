import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import React from "react";

interface ButtonProps {
  textSize?: string;
  height?: string;
  title: string;
}

export const ButtonSecondary = ({
  textSize = "text-base",
  height = "h-9",
  title,
}: ButtonProps) => {
  return (
    <div className="relative">
      <button
        className={`bg-[#0063EE] hover:bg-[#3B82F6] transition-colors duration-300 cursor-pointer px-4 ${height} text-white rounded-md flex items-center gap-1.5  justify-center whitespace-nowrap border-[0.5px] focus-visible:ring-1 focus-visible:ring-white/30 active:scale-[0.99]`}
      >
        <span className="absolute inset-0 rounded-md border border-white/20"></span>
        <span className="absolute inset-0.5 rounded-md border border-white/10"></span>

        <span className={cn(`${textSize}`)}>{title}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="size-4"
        >
          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
        </svg>
      </button>
    </div>
  );
};

export const ButtonPrimary = ({
  textSize = "text-base",
  height = "h-9",
  title,
}: ButtonProps) => {
  return (
    <div className="relative">
      <button
        className={`bg-white px-4 ${height} text-black rounded-md flex items-center gap-3 justify-center whitespace-nowrap border-[0.5px] focus-visible:ring-1 focus-visible:ring-white/30 active:scale-[0.99] cursor-pointer shadow-sm border-neutral-400/50 hover:bg-neutral-100 hover:shadow-none transition-colors duration-300`}
      >
        <span className="absolute inset-0 rounded-md border border-white/20"></span>
        <span className="absolute inset-0.5 rounded-md border border-white/10"></span>

        <span className={cn(`${textSize} text-black `)}>{title}</span>
      </button>
    </div>
  );
};
