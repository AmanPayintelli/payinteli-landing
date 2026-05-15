import Separator from "./seperator";
import Container from "./container";

const SeparatorContainer = () => {
  return (
    <Separator>
      <Container className="border-x flex h-full w-full">
        <div></div>
      </Container>
    </Separator>
  );
};

export default SeparatorContainer;
