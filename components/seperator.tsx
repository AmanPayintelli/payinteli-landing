import { cn } from "@/lib/utils";
import React from "react";

interface SeparatorProps {
  className?: string;
  children?: React.ReactNode;
}

const Separator = ({ className, children }: SeparatorProps) => {
  return (
    <div className={cn("w-full border border-neutral-200/70", className)}>
      {children}
    </div>
  );
};

export default Separator;
