import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { ButtonWrap, Wrapper } from "./Modal-styles";
import { uiActions } from "../../state/redux/UI-handling/ui-actions";
import { Button } from "../../common-utils/common-styles";

interface IProps {
  headline: string;
  children: ReactNode;
}

export const ModalWrapper: React.FC<IProps> = ({ headline, children }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ButtonWrap>
        {" "}
        <Button
          width="30px"
          height="30px"
          onKeyPress={() => {}}
          onClick={() => dispatch(uiActions.modal.close())}
          role="button"
          tabIndex={0}
        >
          x
        </Button>
      </ButtonWrap>
      <h2> {headline}</h2>
      {children}
    </Wrapper>
  );
};

ModalWrapper.propTypes = {
  headline: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
