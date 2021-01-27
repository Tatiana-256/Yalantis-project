import { createAsyncThunk } from "@reduxjs/toolkit";
import filtersAPI from "../../API-Requests/filters-API";

export const loadFilteredProducts = createAsyncThunk(
  "loadFilteredProducts/addNewProduct/addPageInfo",
  async (parameters?: IFilterParameters) => {
    const response = await filtersAPI.loadFiltersProducts(parameters);
    console.log(response);
    return response;
  }
);

export interface IFilterParameters {
  origins?: string;
  minPrice?: number;
  maxPrice?: number;
  pageCount?: number;
  page?: number;
  editable?: string;
}
