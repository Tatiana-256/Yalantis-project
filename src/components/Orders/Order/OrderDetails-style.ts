import styled from "styled-components";
import { FlexStyle } from "../../../common-utils/common-styles";

export const OrderWrap = styled(FlexStyle)`
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: 50px 200px;
`;

export const DetailWrap = styled(FlexStyle)`
  width: 80vw;
  justify-content: space-between;
  margin: 5px 0;
  padding: 15px 0;
  border-bottom: 2px solid black;
  font-size: 1.2rem;
`;
