import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { BagIcon, LinkWrapper, StyledLink, Wrapper } from "./Navigation-styles";
import shoppingBag from "../../common-files/bag.png";
import { selectProducts } from "../../state/redux/state-selectors";
import { uiActions } from "../../state/redux/UI-handling/ui-actions";

export const Navigation: React.FunctionComponent = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { basket } = useSelector(selectProducts);

  return (
    <nav>
      <Wrapper>
        {history.length < 3 ? (
          <div style={{ color: "white", margin: " 0 3rem" }} />
        ) : (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            style={{ color: "white", margin: " 0 3rem", cursor: "pointer" }}
            onClick={() => {
              history.goBack();
            }}
            onKeyPress={history.goBack}
          >
            Back
          </div>
        )}
        <LinkWrapper>
          <li style={{ display: "flex", margin: "0 3.5rem" }}>
            <StyledLink to="/products">Main page</StyledLink>
          </li>
          <li style={{ display: "flex", margin: "0 3.5rem" }}>
            <StyledLink to="/myProducts">My products</StyledLink>
          </li>
          <li
            style={{ display: "flex", margin: "0 3.5rem" }}
            onClick={() => dispatch(uiActions.modal.open())}
          >
            <StyledLink to="/products">Add product</StyledLink>
          </li>
          <li style={{ display: "flex", margin: "0 3.5rem" }}>
            <StyledLink to="/myOrders">My orders</StyledLink>
          </li>
          {location.pathname === "/bag" ? (
            <div />
          ) : (
            <li style={{ display: "flex", width: "29%" }}>
              <StyledLink to="/bag">
                <BagIcon src={shoppingBag} />
                <div>sum {basket.totalSum}</div>
              </StyledLink>
            </li>
          )}
        </LinkWrapper>
      </Wrapper>
    </nav>
  );
};
