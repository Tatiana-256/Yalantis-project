import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBasketProduct, IProduct } from "../../entitiesTypes";
import {
  addItemToBasket,
  decreaseProduct,
  deleteItemFromBasket,
} from "../../reducer.utils";
import { loadFilteredProducts } from "../thunk-creators";
import { addOrder } from "./ordersSlice";
import { OwnProductsAPI } from "../../../API/OwnProducts-API";

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
    const response = await OwnProductsAPI.editProduct(product);
    return response.data;
  }
);

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
      state.basket.totalSum = state.basket.totalSum + action.payload.sum;
    },
    decreaseProductInBasket(state, action) {
      state.basket.allProducts = decreaseProduct(
        state.basket.allProducts,
        action.payload.id
      );
      state.basket.totalSum = state.basket.totalSum - action.payload.sum;
    },
    deleteProductFromBasket(state, action) {
      state.basket.allProducts = deleteItemFromBasket(
        state.basket.allProducts,
        action.payload.id
      );
      state.basket.totalSum = state.basket.totalSum - action.payload.sum;
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
    builder.addCase(addOrder.fulfilled, (state) => {
      state.basket.allProducts = [];
      state.basket.totalSum = 0;
      state.status = "succeeded";
    });
    builder.addCase(addOrder.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addOrder.rejected, (state) => {
      state.status = "rejected";
    });
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
      state.products = state.products.map((product: IProduct) => {
        return product.id === action.payload.id
          ? { ...product, ...action.payload }
          : product;
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

export const {
  setProducts,
  setStatus,
  addProductToBasket,
  deleteProductFromBasket,
  decreaseProductInBasket,
} = productsSlice.actions;

export default productsSlice.reducer;

export interface INewProduct {
  name: string;
  price: number;
  origin: string;
}
