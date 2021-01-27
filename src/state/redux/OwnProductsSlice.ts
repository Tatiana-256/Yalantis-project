import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OwnProductsAPI } from "../../API-Requests/OwnProducts-API";
import { IProduct } from "../entitiesTypes";

export interface INewProduct {
  name: string;
  price: number;
  origin: string;
}

interface IState {
  newProducts: Array<IProduct>;
  loading: "idle" | "loading" | "succeeded" | "rejected";
}

const initialState: IState = {
  newProducts: [],
  loading: "idle",
};

export const addNewProduct = createAsyncThunk(
  "newProduct/addNewProduct",
  async (product: { product: INewProduct }) => {
    const response = await OwnProductsAPI.setNewProduct(product);
    return response.data;
  }
);

const newProductSlice = createSlice({
  name: "newProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewProduct.fulfilled, (state, action) => {
      state.newProducts.push(action.payload);
      state.loading = "succeeded";
    });
    builder.addCase(addNewProduct.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(addNewProduct.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export default newProductSlice.reducer;
