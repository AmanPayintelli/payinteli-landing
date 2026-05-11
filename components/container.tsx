import { cn } from "@/lib/utils";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("mx-auto max-w-400", className)}>{children}</div>;
};

export default Container;
