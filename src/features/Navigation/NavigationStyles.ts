import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  text-transform: uppercase;
  font-size: 1.2rem;
  background-color: #363b4d;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
`;

export const LinkWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 13px;
  text-decoration: none;
  color: #cfcfcf;

  &:hover {
    color: white;
  }
`;
export const BagIcon = styled.img`
  height: 5vh;
  width: 51px;
`;
