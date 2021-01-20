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
  backGround?: string;
  borderColor?: string;
  textColor?: string;
}

export const Page = styled(Button)<IPage>`
  height: 40px;
  width: 40px;
  margin: 10px;
  ${({ backGround }) =>
    backGround &&
    css`
      background-color: ${backGround};

      &:hover {
        color: white;
        background-color: #737b97;
      }
    `}
  ${({ borderColor }) =>
    borderColor &&
    css`
      border: 1px solid ${borderColor};
    `}
  ${({ textColor }) =>
    textColor &&
    css`
      color: ${textColor};
    `}
`;
