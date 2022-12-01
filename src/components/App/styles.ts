import styled from "styled-components";

export interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  form {
    display: flex;
    justify-content: center;
    input {
      width: 500px;
      height: 40px;
      border-radius: 6px;
      padding: 0 12px;
      font-size: 1em;
    }
    button {
      height: 40px;
      width: 100px;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      color: ${(props) => props.theme.light};
      font-size: 2em;
      margin: 16px 0;
      display: flex;
      align-items: center;
      button {
        width: 80px;
        height: 26px;
        margin-left: 10px;
      }
    }
  }
`;
