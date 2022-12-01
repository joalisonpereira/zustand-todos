import styled from "styled-components";

export interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  width: 50px;
  height: 50px;
  border-radius: 999px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  background-color: ${(props) => props.theme.light};
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    color: ${(props) => props.theme.primary};
    margin: 0;
    padding: 0;
  }
`;
