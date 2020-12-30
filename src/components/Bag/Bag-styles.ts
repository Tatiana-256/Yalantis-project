import styled from "styled-components";


export const Wrap = styled.div`
  display: flex;
  //align-items: center;
  padding: 5% 5% 0;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  align-items: center;

`

export const TotalWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 33%;
  padding: 5% 5% 0;
  font-size: 1.5rem;
`
export const Item = styled(TotalWrap)`
  padding: 2% 5% 0;
  font-weight: bold;  
`
