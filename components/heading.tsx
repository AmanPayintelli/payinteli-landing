import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold tracking-tight text-text-brand md:text-3xl",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
