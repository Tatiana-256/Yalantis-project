import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  BagIcon,
  Li,
  LinkWrapper,
  StyledLink,
  Wrapper,
} from "./NavigationStyles";
import shoppingBag from "../../assets/bag.png";
import { selectProducts } from "../../store/redux/state-selectors";
import { uiActions } from "../../store/redux/UI-handling/ui-actions";

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
          <Li>
            <StyledLink to="/products">Main page</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/myProducts">My products</StyledLink>
          </Li>
          <Li onClick={() => dispatch(uiActions.modal.open())}>
            <StyledLink to="/products">Add product</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/myOrders">My orders</StyledLink>
          </Li>
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
