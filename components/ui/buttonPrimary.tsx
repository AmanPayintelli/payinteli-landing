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
        "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-primary-soft bg-white px-5 font-semibold text-primary shadow-sm transition-all duration-300 hover:bg-primary-soft hover:shadow-md",
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
        "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-5 font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary-muted hover:shadow-md",
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
