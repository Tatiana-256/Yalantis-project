import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialStateFilters {
  countries: Array<ICountries>;
  loading: "idle" | "loading" | "succeeded" | "rejected";
}

export const initialState: IInitialStateFilters = {
  countries: [],
  loading: "idle",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
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
    setCountriesSuccess(state, action: PayloadAction<ICountries[]>) {
      state.countries = action.payload.map((item: ICountries) => {
        item.isChecked = false;
        return item;
      });
      state.loading = "succeeded";
    },
    loadCountries(state) {
      state.loading = "loading";
    },
    setCountriesRejected(state) {
      state.loading = "rejected";
    },
  },
});
export const {
  changeCountriesFilter,
  setCountriesRejected,
  setCountriesSuccess,
  loadCountries,
} = filterSlice.actions;
export default filterSlice.reducer;

export interface ICountries {
  value: string;
  displayName: string;
  isChecked: boolean;
}
