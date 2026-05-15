import { cn } from "@/lib/utils";
import React from "react";

const Separator = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full border border-neutral-200/70 md:h-20 h-35",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Separator;
