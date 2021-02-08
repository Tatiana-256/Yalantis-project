import { createAction } from "@reduxjs/toolkit";

export const uiActions = {
  modal: {
    open: createAction("OPEN_MODAL"),
    close: createAction("CLOSE_MODAL"),
  },
};
