import { cn } from "@/lib/utils";
import React from "react";
import SectionLabel from "./sectionLabel";
import Heading from "./heading";
import SectionDescription from "./section-description";

type SectionHeaderProps = {
  label: string;
  title: React.ReactNode;
  description: string;
  className?: string;
  contentClassName?: string;
};

const SectionHeader = ({
  label,
  title,
  description,
  className,
  contentClassName,
}: SectionHeaderProps) => {
  return (
    <header
      className={cn(
        "flex shrink-0 items-center justify-start border-b border-neutral-200/70 bg-neutral-50/30 px-4 py-10",
        "md:h-[30%] md:px-8 md:py-14",
        className,
      )}
    >
      <div
        className={cn(
          "flex max-w-full flex-col items-start justify-between gap-4",
          "md:max-w-[60%] md:gap-6",
          contentClassName,
        )}
      >
        <SectionLabel>{label}</SectionLabel>

        <Heading>{title}</Heading>

        <SectionDescription>{description}</SectionDescription>
      </div>
    </header>
  );
};

export default SectionHeader;
