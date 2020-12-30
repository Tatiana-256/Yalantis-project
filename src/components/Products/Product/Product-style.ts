import styled from "styled-components";


export const WrapperProd = styled.div`
  width: 24%;
  margin: 2%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 13px 11px 30px #0000005c;
`
export const ImageProd = styled.img`
  width: 70%;
  border-radius: 50%;
  border: 2px solid black;
  margin: 3%;
`

export const Button = styled.button`
  background-color: #363B4D;
  width: 50%;
  height: 40px;
  font-size: 1rem;
  color: #cfcfcf;
  padding: 3%;
  border-radius: 31px;
  border: none;
  margin: 2% 0;

  &:hover {
    color: white
  }
`