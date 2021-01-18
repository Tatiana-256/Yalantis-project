import { createSlice } from "@reduxjs/toolkit";
import { IBasketProduct, IProduct } from "../entitiesTypes";
import { addItemToBasket, deleteItemFromBasket } from "../reducer.utils";

export interface IInitialState {
  status: "loading" | "succeeded" | "failed" | null;
  products: IProduct[];
  basket: {
    allProducts: IBasketProduct[];
    totalSum: number;
  };
  error: string;
}

export const initialState: IInitialState = {
  status: null,
  products: [],
  basket: {
    allProducts: [],
    totalSum: 0,
  },
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
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
    deleteProductFromBasket(state, action) {
      state.basket.allProducts = deleteItemFromBasket(
        state.basket.allProducts,
        action.payload
      );
    },
    addTotalSum(state, action) {
      state.basket.totalSum = state.basket.totalSum + action.payload;
    },
  },
});

export const {
  setProducts,
  setStatus,
  addProductToBasket,
  addTotalSum,
  deleteProductFromBasket,
} = productsSlice.actions;

export default productsSlice.reducer;
