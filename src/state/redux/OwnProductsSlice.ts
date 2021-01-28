import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OwnProductsAPI } from "../../API-Requests/OwnProducts-API";
import { IProduct } from "../entitiesTypes";
import { initialStateProducts } from "./prosuctSlice";

export interface INewProduct {
  name: string;
  price: number;
  origin: string;
}

// export interface IEditProduct {
//   name: string;
//   price: number;
//   origin: string;
// }
//
// interface IState {
//   newProducts: Array<IProduct>;
//   loading: "idle" | "loading" | "succeeded" | "rejected";
// }
//
// const initialState: IState = {
//   newProducts: [],
//   loading: "idle",
// };

export const addNewProduct = createAsyncThunk(
  "newProduct/addNewProduct",
  async (product: { product: INewProduct }) => {
    const response = await OwnProductsAPI.setNewProduct(product);
    return response.data;
  }
);
export const editProduct = createAsyncThunk(
  "newProduct/editProduct",
  async (product: { product: INewProduct; productId: string }) => {
    debugger;
    const response = await OwnProductsAPI.editProduct(product);
    return response.data;
  }
);

const newProductSlice = createSlice({
  name: "newProduct",
  initialState: initialStateProducts,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.status = "succeeded";
    });
    builder.addCase(addNewProduct.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addNewProduct.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(editProduct.fulfilled, (state, action) => {
      debugger;
      state.products = state.products.map((product: IProduct) => {
        console.log(action.payload);
        debugger;
        if (product.id !== action.payload.id) {
          return product;
        }
        return action.payload;
      });
      state.status = "succeeded";
    });
    builder.addCase(editProduct.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(editProduct.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default newProductSlice.reducer;
