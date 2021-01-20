import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  countries: Array<ICountries>;
  page: number;
  perPage: number;
  ProductsTotalCount: number;
}

export const initialState: IInitialState = {
  countries: [],
  page: 1,
  perPage: 25,
  ProductsTotalCount: 50,
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
              value: c.value,
              displayName: c.displayName,
              isChecked: !c.isChecked,
            }
          : c
      );
    },
    setPageOptions(state, action) {
      state.page = action.payload.page;
      state.perPage = action.payload.perPage;
      state.ProductsTotalCount = action.payload.totalItems;
    },
  },
});
export const {
  setCountries,
  changeCountriesFilter,
  setPageOptions,
} = filterSlice.actions;
export default filterSlice.reducer;

export interface ICountries {
  value: string;
  displayName: string;
  isChecked: boolean;
}
