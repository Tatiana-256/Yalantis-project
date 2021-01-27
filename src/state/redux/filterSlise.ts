import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./redux-store";
import { loadFilteredProducts } from "./thunk-creators";

export interface IInitialStateFilters {
  countries: Array<ICountries>;
  minPrice?: number;
  maxPrice?: number;
  page: number;
  perPage: number;
  ProductsTotalCount: number;
  loading: "idle" | "loading" | "succeeded" | "rejected";
}

export const initialState: IInitialStateFilters = {
  countries: [],
  page: 1,
  perPage: 25,
  ProductsTotalCount: 50,
  minPrice: undefined,
  maxPrice: undefined,
  loading: "idle",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload.map((item: ICountries) => {
        item.isChecked = false;
        return item;
      });
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
    addMinPrice(state, action) {
      state.minPrice = action.payload;
    },
    addMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadFilteredProducts.fulfilled, (state, action) => {
      const { page, perPage, totalItems } = action.payload;
      state.page = page;
      state.perPage = perPage;
      state.ProductsTotalCount = totalItems;
      state.loading = "succeeded";
    });
    builder.addCase(loadFilteredProducts.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(loadFilteredProducts.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});
export const {
  setCountries,
  changeCountriesFilter,
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
