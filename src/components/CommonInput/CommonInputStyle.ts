import styled, { css } from "styled-components";

interface IProps {
  usedInput?: boolean;
  error?: boolean;
  width?: number;
}

export const InputStyle = styled.input<IProps>`
  width: 300px;
  height: 30px;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 13px;
  margin: 8px 0;
  outline: none;
  ${({ usedInput }) =>
    usedInput &&
    css`
      border: solid 1px black;
    `}
  ${({ error }) =>
    error &&
    css`
      border: solid 1px darkred;
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${width}%;
    `}
`;
