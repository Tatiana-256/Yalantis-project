import { createReducer } from "@reduxjs/toolkit";
import { uiActions } from "./ui-actions";

interface IInitialState {
  open: boolean;
}

const initialState: IInitialState = {
  open: false,
};

export const uiReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(uiActions.modal.open, (state) => ({
      ...state,
      open: true,
    }))
    .addCase(uiActions.modal.close, (state) => ({
      ...state,
      open: false,
    }));
});
