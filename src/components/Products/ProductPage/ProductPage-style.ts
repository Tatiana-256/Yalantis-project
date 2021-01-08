import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 4rem;

`


export const ProdInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 24vh;
`

export const Count = styled.div<{ width?: string}>`
  display: flex;
  width: ${({width}) => width || "50%"};
  padding: 0 4rem;
  align-items: center;
  justify-content: space-between;
`
