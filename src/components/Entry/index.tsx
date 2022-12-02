import { useState } from "react";
import App from "../App";
import { Container, ContainerProps } from "./styles";

export interface EntryProps extends ContainerProps {}

function Entry({}: EntryProps) {
  const [mount, setMount] = useState(false);

  return (
    <Container>
      {mount ? <App /> : null}
      <button type="button" onClick={() => setMount(!mount)}>
        Switch
      </button>
    </Container>
  );
}

export default Entry;
