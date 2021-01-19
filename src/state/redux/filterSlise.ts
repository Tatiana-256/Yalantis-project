import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  countries: Array<ICountries>;
  // filterCountries: Array<string>;
}

export const initialState: IInitialState = {
  countries: [],
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
      state.countries.map((a) => {
        if (a.value === action.payload) {
          return (a.isChecked = !a.isChecked);
        }
      });
    },
  },
});
export const {
  setCountries,
  changeCountriesFilter,
  // addToCountriesFilter,
  // removeFromCountriesFilter,
} = filterSlice.actions;
export default filterSlice.reducer;

export interface ICountries {
  value: string;
  displayName: string;
  isChecked: boolean;
}
