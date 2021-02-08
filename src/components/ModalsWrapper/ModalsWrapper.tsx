import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";

import { ButtonWrap, Wrapper } from "./ModalStyles";
import { uiActions } from "../../store/redux/UI-handling/ui-actions";
import { Button } from "../../utils/common-styles";

interface IProps {
  headline: string;
  children: ReactNode;
  handler?: () => void;
}

export const ModalWrapper: React.FC<IProps> = ({
  headline,
  children,
  handler,
}) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    if (handler) {
      handler();
    }
    dispatch(uiActions.modal.close());
  };

  return (
    <Wrapper>
      <ButtonWrap>
        {" "}
        <Button
          width="30px"
          height="30px"
          onKeyPress={() => {}}
          onClick={closeModal}
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
