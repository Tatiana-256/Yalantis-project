import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./redux-store";

export interface IInitialState {
  countries: Array<ICountries>;
  minPrice?: number;
  maxPrice?: number;
  page: number;
  perPage: number;
  ProductsTotalCount: number;
}

export const initialState: IInitialState = {
  countries: [],
  page: 1,
  perPage: 25,
  ProductsTotalCount: 50,
  minPrice: undefined,
  maxPrice: undefined,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload.map((item: any) => {
        item.isChecked = false;
        return item;
      });
      console.log(state.countries);
    },
    changeCountriesFilter(state, action) {
      state.countries = state.countries.map((c) =>
        c.value === action.payload
          ? {
              ...c,
              isChecked: !c.isChecked,
            }
          : c
      );
    },
    setPageOptions(state, action) {
      const { page, perPage, totalItems } = action.payload;
      state.page = page;
      state.perPage = perPage;
      state.ProductsTotalCount = totalItems;
    },
    addMinPrice(state, action) {
      state.minPrice = action.payload;
    },
    addMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },
  },
});
export const {
  setCountries,
  changeCountriesFilter,
  setPageOptions,
  addMinPrice,
  addMaxPrice,
} = filterSlice.actions;
export default filterSlice.reducer;

export interface ICountries {
  value: string;
  displayName: string;
  isChecked: boolean;
}

export const selectCountries = (state: RootState) => {
  return state.filter.countries
    .filter((country) => country.isChecked)
    .map((item) => item.value)
    .join();
};
