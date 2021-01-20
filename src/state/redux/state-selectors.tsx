import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux-store";

export const useProductsSelector = () => {
  return useSelector((state: RootState) => {
    return state.products;
  });
};

export const useFiltersSelector = () => {
  return useSelector((state: RootState) => {
    return state.filter;
  });
};

export const useFilteredProducts = () => {
  return useSelector((state: RootState) => {
    return state.filter.countries
      .filter((country) => country.isChecked)
      .map((item) => item.value);
  });
};
