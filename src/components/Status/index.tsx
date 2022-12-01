import { useTodos } from "src/store/useTodos";
import { Container, ContainerProps } from "./styles";

export interface StatusProps extends ContainerProps {}

function Status({}: StatusProps) {
  const { todos } = useTodos();

  return (
    <Container>
      <h3>{todos.length}</h3>
    </Container>
  );
}

export default Status;
