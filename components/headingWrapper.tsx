import { cn } from "@/lib/utils";
import React from "react";

const HeadingWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex max-w-full flex-col items-start justify-between gap-4 md:max-w-[60%] md:gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default HeadingWrapper;
