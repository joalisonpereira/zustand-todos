import styled from "styled-components";

export interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  > button {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    margin: 12px;
    border-radius: 999px;
    cursor: pointer;
  }
`;
