import React from "react";
import { BagIcon, LinkWrapper, StyledLink, Wrapper } from "./Navigation-styles";
import shoppingBag from "../../common-files/bag.png";
import { useAppState } from "../../state/AppProvider";
import { useHistory, useLocation } from "react-router-dom";

export const Navigation: React.FunctionComponent = () => {
  const { state } = useAppState();

  const history = useHistory();
  const location = useLocation();

  return (
    <nav>
      <Wrapper>
        {history.length < 3 ? (
          <div style={{ color: "white", margin: " 0 3%" }} />
        ) : (
          <div
            style={{ color: "white", margin: " 0 3%", cursor: "pointer" }}
            onClick={history.goBack}
          >
            Back
          </div>
        )}
        <LinkWrapper>
          <li style={{ display: "flex", margin: "0 5%" }}>
            <StyledLink to="/products">Main page</StyledLink>
          </li>
          {location.pathname === "/bag" ? (
            <div />
          ) : (
            <li style={{ display: "flex", width: "29%" }}>
              <StyledLink to="/bag">
                <BagIcon src={shoppingBag} />
                <div>sum {state.basket.totalSum}</div>
              </StyledLink>
            </li>
          )}
        </LinkWrapper>
      </Wrapper>
    </nav>
  );
};
