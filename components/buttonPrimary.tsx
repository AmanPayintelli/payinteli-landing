import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  textSize?: string;
  height?: string;
  title: string;
  className?: string;
  icon?: React.ReactNode;
}

export const ButtonSecondary = ({
  textSize = "text-base",
  height = "h-9",
  title,
  className,
}: ButtonProps) => {
  return (
    <div className="relative">
      <button
        className={cn(
          `bg-[#0063EE] hover:bg-[#3B82F6] transition-colors duration-300 cursor-pointer px-4 ${height} text-white rounded-md flex items-center gap-1.5 justify-center whitespace-nowrap border-[0.5px] focus-visible:ring-1 focus-visible:ring-white/30 active:scale-[0.99]`,
          className,
        )}
      >
        <span className="absolute inset-0 rounded-md border border-white/20"></span>
        <span className="absolute inset-0.5 rounded-md border border-white/10"></span>

        <span className={cn(textSize)}>{title}</span>

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
  className,
}: ButtonProps) => {
  return (
    <div className="relative">
      <button
        className={cn(
          `bg-white px-4 ${height} text-black rounded-md flex items-center gap-3 justify-center whitespace-nowrap border-[0.5px] focus-visible:ring-1 focus-visible:ring-white/30 active:scale-[0.99] cursor-pointer shadow-sm border-neutral-400/50 hover:bg-neutral-100 hover:shadow-none transition-colors duration-300`,
          className,
        )}
      >
        <span className="absolute inset-0 rounded-md border border-white/20"></span>
        <span className="absolute inset-0.5 rounded-md border border-white/10"></span>

        <span className={cn(`${textSize} text-black`)}>{title}</span>
      </button>
    </div>
  );
};

export const ButtonRounded = ({
  textSize = "text-base",
  height = "h-9",
  title,
  className,
  icon,
}: ButtonProps) => {
  return (
    <div className="relative">
      <button
        className={cn(
          `bg-white px-4 ${height} text-black rounded-full flex items-center gap-2 justify-center whitespace-nowrap border-[0.5px] focus-visible:ring-1 focus-visible:ring-white/30 active:scale-[0.99] cursor-pointer border-gray-200  transition-colors duration-200 hover:border-gray-300 hover:bg-gray-50`,
          className,
        )}
      >
        <span className="absolute inset-0 rounded-full border border-white/20"></span>
        <span className="absolute inset-0.5 rounded-full border border-white/10"></span>

        {icon && <span className="shrink-0">{icon}</span>}

        <span className={cn(`${textSize} text-black`)}>{title}</span>
      </button>
    </div>
  );
};
