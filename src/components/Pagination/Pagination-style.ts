import styled, { css } from "styled-components";
import { Button } from "../../common-utils/common-styles";

export const PageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 15vh;
`;

interface IPage {
  prop?: {
    backGround?: string;
    borderColor?: string;
    textColor?: string;
  };
}

export const Page = styled(Button)<IPage>`
  height: 40px;
  width: 40px;
  margin: 10px;
  ${({ prop }) =>
    prop &&
    css`
      background-color: ${prop.backGround};

      &:hover {
        color: white;
        background-color: #737b97;
      }
    `}
  ${({ prop }) =>
    prop &&
    css`
      border: 1px solid ${prop.borderColor};
    `}
  ${({ prop }) =>
    prop &&
    css`
      color: ${prop.textColor};
    `}
`;
