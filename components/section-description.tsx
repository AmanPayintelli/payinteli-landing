import { cn } from "@/lib/utils";
import React from "react";

const SectionDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-md leading-6 tracking-wide text-neutral-500 md:text-md",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default SectionDescription;
