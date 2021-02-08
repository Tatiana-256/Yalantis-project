import styled from "styled-components";
import { FlexStyle } from "../../utils/common-styles";

export const BagWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  height: 70vh;
  flex-direction: column;
`;

export const Wrap = styled.div`
  display: flex;
  padding: 3rem 3rem 0;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  align-items: center;
`;

export const TotalWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60vw;
  padding: 2rem 2rem 0;
  font-size: 1.5rem;
`;
export const Item = styled(TotalWrap)`
  padding: 1rem 3rem 0;
  font-weight: bold;
  margin-left: 0;
`;

export const Input = styled.input`
  margin: 0 4px;
  height: 30px;
  width: 30px;
  text-align: center;
  border: 2px solid #363b4d;
  border-radius: 13px;
  outline: none;
`;

export const ButtonWrap = styled(FlexStyle)`
  justify-content: flex-end;
  width: 90%;
  margin-top: 5vh;
`;
