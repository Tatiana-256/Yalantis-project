import { createAction } from "@reduxjs/toolkit";

// function withPayloadType<T>() {
//   return (t: T) => ({ payload: t });
// }

export const uiActions = {
  modal: {
    open: createAction("OPEN_MODAL"),
    close: createAction("CLOSE_MODAL"),
  },
};
