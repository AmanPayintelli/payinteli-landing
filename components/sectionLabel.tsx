import { cn } from "@/lib/utils";
import React from "react";

const SectionLabel = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={cn(
        "font-mono text-[11px] font-thin tracking-normal text-neutral-500 md:text-xs",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default SectionLabel;
