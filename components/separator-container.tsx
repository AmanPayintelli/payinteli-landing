import Separator from "./seperator";
import Container from "./container";
import { cn } from "@/lib/utils";

interface SeparatorContainerProps {
  className?: string;
  height?: string;
}

const SeparatorContainer = ({
  className,
  height = "h-35 md:h-10",
}: SeparatorContainerProps) => {
  return (
    <Separator className={height}>
      <Container className={cn("flex h-full w-full border-x", className)}>
        <div />
      </Container>
    </Separator>
  );
};

export default SeparatorContainer;
