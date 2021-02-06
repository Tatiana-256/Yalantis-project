import React from "react";
import { StyledLink } from "../Navigation/NavigationStyles";
import { Button, Text, Wrapper } from "./ErrorStyle";

export const Error404 = () => {
  return (
    <Wrapper>
      <Text> Sorry, this page doesn`t exist</Text>
      <Button>
        <StyledLink to="/products">Go to main page</StyledLink>
      </Button>
    </Wrapper>
  );
};
