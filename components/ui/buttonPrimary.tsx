import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
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
        "bg-primary-soft border px-4  group",
        textSize,
        height,
        className,
      )}
    >
      <span>{title}</span>

      {icon && (
        <span className="flex items-center transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
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
        "flex items-center justify-center gap-2 border px-4 bg-primary-muted text-white group",
        textSize,
        height,
        className,
      )}
    >
      <span>{title}</span>

      {icon ?? (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </button>
  );
};
