import { IInitialStateProduct } from "./prosuctSlice";
import { RootState } from "./redux-store";
import { IInitialStateFilters } from "./filterSlise";

export const selectProducts = (state: RootState) =>
  state.products as IInitialStateProduct;

export const selectFilters = (state: RootState) =>
  state.filter as IInitialStateFilters;
