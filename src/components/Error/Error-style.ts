import styled from "styled-components";

const FlexStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled(FlexStyle)`
  height: 60vh;
  flex-direction: column;
`;

export const Text = styled(FlexStyle)`
  height: 20vh;
`;

export const Button = styled(FlexStyle)`
  background-color: #363b4d;
  height: 7vh;
  font-size: 1.3rem;
  width: 40%;
`;
