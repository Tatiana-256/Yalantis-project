import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  countries: Array<ICountries>;
  filterCountries: Array<string>;
}

export const initialState: IInitialState = {
  countries: [],
  filterCountries: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
    },
  },
});

export const { setCountries } = filterSlice.actions;
export default filterSlice.reducer;

export interface ICountries {
  value: string;
  displayName: string;
}
