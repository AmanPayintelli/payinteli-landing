import { cn } from "@/lib/utils";
import Container from "./container";

const Seperator = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("w-full md:h-20 h-35 border border-neutral-200/70")}>
      {children}
    </div>
  );
};

export default Seperator;
