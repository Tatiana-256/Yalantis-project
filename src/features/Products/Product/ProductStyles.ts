import styled from "styled-components";

export const WrapperProd = styled.div`
  width: 24%;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 13px 11px 30px #0000005c;
`;
export const ImageProd = styled.img`
  width: 70%;
  border-radius: 50%;
  border: 2px solid black;
  margin: 1rem;
`;

export const Button = styled.button`
  background-color: #363b4d;
  width: 50%;
  height: 40px;
  font-size: 1rem;
  color: #cfcfcf;
  padding: 3rem;
  border-radius: 31px;
  border: none;
  margin: 2rem 0;

  &:hover {
    color: white;
  }
`;
