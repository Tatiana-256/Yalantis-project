import styled from "styled-components";

interface IButton {
  width?: string | undefined;
  height?: string | undefined;
}

export const Button = styled.button<IButton>`
  background-color: #363b4d;
  outline: none;
  width: ${({ width }) => width || "50%"};
  height: ${({ height }) => height || "40px"};
  font-size: 1rem;
  color: #cfcfcf;
  padding: 3%;
  border-radius: 13px;
  border: none;
  margin: 2% 0;
  box-shadow: 5px 6px 7px #00000080;

  &:hover {
    color: white;
    background-color: #2f3445;
  }
`;
