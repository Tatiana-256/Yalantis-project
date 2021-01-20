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
  border-radius: 13px;
  border: none;
  margin: 1rem 0;
  box-shadow: 5px 6px 7px #00000080;

  &:hover {
    color: white;
    background-color: #2f3445;
  }
`;

export const Input = styled.input<IButton>`
  border: 1px solid #363b4d;
  outline: none;
  width: ${({ width }) => width || "50%"};
  height: ${({ height }) => height || "40px"};
  font-size: 1rem;
  color: black;
  border-radius: 13px;
  margin: 1rem 0;
  padding: 2px 5px;
  box-shadow: 3px 4px 5px #00000080;

  &:hover {
    border: 2px solid #32394f;
    box-shadow: 5px 6px 7px #00000080;
  }
`;

export const Option = styled.select<IButton>`
  border: 1px solid #363b4d;
  outline: none;
  width: ${({ width }) => width || "50%"};
  height: ${({ height }) => height || "40px"};
  font-size: 1rem;
  color: black;
  border-radius: 13px;
  margin: 1rem 0;
  padding: 2px 5px;
  box-shadow: 3px 4px 5px #00000080;

  &:hover {
    border: 2px solid #32394f;
    box-shadow: 5px 6px 7px #00000080;
  }
`;
