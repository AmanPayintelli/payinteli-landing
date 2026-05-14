import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  textSize?: string;
  height?: string;
  title: string;
  className?: string;
  icon?: React.ReactNode;
}

export const ButtonPrimary = ({
  title,
  icon,
  textSize = "text-sm",
  height = "h-11",
  className,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center rounded-md justify-center gap-2 bg-black px-6 font-medium text-white transition-all duration-300 hover:bg-[#082832]/90",
        textSize,
        height,
        className,
      )}
    >
      {title}
      {icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
};

export const ButtonSecondary = ({
  title,
  icon,
  textSize = "text-sm",
  height = "h-11",
  className,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md gap-2 bg-[#0000EE]  border border-neutral-200 text-black px-6 font-medium text-white transition-all duration-300 hover:bg-neutral-50",
        textSize,
        height,
        className,
      )}
    >
      {title}
      {icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
};
