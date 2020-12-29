import styled from "styled-components";
import {Link} from "react-router-dom";


export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 10vh;
  width: 100%;
  text-transform: uppercase;
  font-size: 1.2rem;
  background-color: #363B4D;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;

`


export const StyledLink = styled(Link)`
  height: 5vh;
  width: 13vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 13px;
  text-decoration: none;
  color: #cfcfcf;

  &:hover {
    color: white
  }

`
export const BagIcon = styled.img`
  height: 5vh;
  width: 51px;
`
