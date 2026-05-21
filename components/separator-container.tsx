import Separator from "./seperator";
import Container from "./container";

interface SeparatorContainerProps {
  height?: string;
}

const SeparatorContainer = ({ height = "h-full" }: SeparatorContainerProps) => {
  return (
    <Separator>
      <Container className={`border-x flex w-full ${height}`}>
        <div></div>
      </Container>
    </Separator>
  );
};

export default SeparatorContainer;
