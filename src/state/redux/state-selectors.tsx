import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux-store";

export const useProductsSelector = () => {
  return useSelector((state: RootState) => {
    return state.products;
  });
};
