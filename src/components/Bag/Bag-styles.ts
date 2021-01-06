import styled from "styled-components";

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
  padding: 5% 5% 0;
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
  margin-left: 33%;
  padding: 5% 5% 0;
  font-size: 1.5rem;
`;
export const Item = styled(TotalWrap)`
  padding: 2% 5% 0;
  font-weight: bold;
`;
