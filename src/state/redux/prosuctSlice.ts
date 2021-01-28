import { createSlice } from "@reduxjs/toolkit";
import { IBasketProduct, IProduct } from "../entitiesTypes";
import {
  addItemToBasket,
  decreaseProduct,
  deleteItemFromBasket,
} from "../reducer.utils";
import { loadFilteredProducts } from "./thunk-creators";

export interface IInitialStateProduct {
  status: "loading" | "succeeded" | "rejected" | "idle";
  products: IProduct[];
  basket: {
    allProducts: IBasketProduct[];
    totalSum: number;
  };
  error: string;
}

export const initialStateProducts: IInitialStateProduct = {
  status: "idle",
  products: [],
  basket: {
    allProducts: [],
    totalSum: 0,
  },
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialStateProducts,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    addProductToBasket(state, action) {
      state.basket.allProducts = addItemToBasket(
        state.basket.allProducts,
        action.payload
      );
    },
    decreaseProductInBasket(state, action) {
      state.basket.allProducts = decreaseProduct(
        state.basket.allProducts,
        action.payload
      );
    },
    addTotalSum(state, action) {
      state.basket.totalSum = state.basket.totalSum + action.payload;
    },
    deleteProductFromBasket(state, action) {
      state.basket.allProducts = deleteItemFromBasket(
        state.basket.allProducts,
        action.payload
      );
    },
    deleteFromTotalSum(state, action) {
      state.basket.totalSum = state.basket.totalSum - action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadFilteredProducts.fulfilled, (state, action) => {
      state.products = action.payload.items;
      state.status = "succeeded";
    });
    builder.addCase(loadFilteredProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loadFilteredProducts.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export const {
  setProducts,
  setStatus,
  addProductToBasket,
  addTotalSum,
  deleteProductFromBasket,
  deleteFromTotalSum,
  decreaseProductInBasket,
} = productsSlice.actions;

export default productsSlice.reducer;
