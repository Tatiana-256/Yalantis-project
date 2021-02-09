import { createSlice } from "@reduxjs/toolkit";
import { IBasketProduct, IProduct } from "../../common/entitiesTypes";
import {
  addItemToBasket,
  decreaseProduct,
  deleteItemFromBasket,
} from "../../common/reducer.utils";

export interface IInitialStateProduct {
  status: "loading" | "succeeded" | "rejected" | "idle";
  products: IProduct[];
  minPrice?: number;
  maxPrice?: number;
  page: number;
  perPage: number;
  ProductsTotalCount: number;
  basket: {
    allProducts: IBasketProduct[];
    totalSum: number;
  };
  error: string;
}

export const initialStateProducts: IInitialStateProduct = {
  status: "idle",
  products: [],
  page: 1,
  perPage: 25,
  ProductsTotalCount: 50,
  minPrice: undefined,
  maxPrice: undefined,
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
      state.basket.totalSum = state.basket.totalSum + action.payload.sum;
    },
    addMinPrice(state, action) {
      state.minPrice = action.payload;
    },
    addMaxPrice(state, action) {
      state.maxPrice = action.payload;
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
    // ____________ load product _______________

    loadProductsSuccess(state, action) {
      const { page, perPage, totalItems } = action.payload;
      state.page = page;
      state.perPage = perPage;
      state.ProductsTotalCount = totalItems;
      state.products = action.payload.items;
      state.status = "succeeded";
    },
    loadProducts(state, action) {
      state.status = "loading";
    },
    loadProductsRejected(state) {
      state.status = "rejected";
    },

    // ______________ edit product ______________

    editProduct(state, action) {
      state.status = "loading";
    },
    editProductSuccess(state, action) {
      state.products = state.products.map((product: IProduct) => {
        return product.id === action.payload.id
          ? { ...product, ...action.payload }
          : product;
      });
      state.status = "succeeded";
    },
    editProductRejected(state) {
      state.status = "rejected";
    },

    // _______________ add new product _______________

    addNewProduct(state, action) {
      state.status = "loading";
    },
    addNewProductSuccess(state, action) {
      state.products.push(action.payload);
      state.status = "succeeded";
    },
    addNewProductRejected(state) {
      state.status = "rejected";
    },

    // _________________________________________

    setPage(state, action) {
      state.page = action.payload;
    },
    setPerPage(state, action) {
      state.perPage = action.payload;
    },
    setURLParameters(state, action) {
      debugger;
      state.maxPrice = action.payload.maxPrice;
      state.minPrice = action.payload.minPrice;
      state.perPage = action.payload.perPage;
      state.page = action.payload.page;
    },
    addNewOrder(state) {
      state.basket.allProducts = [];
      state.basket.totalSum = 0;
    },
  },
});

export const {
  setProducts,
  setStatus,
  addProductToBasket,
  decreaseProductInBasket,
  loadProductsSuccess,
  loadProducts,
  loadProductsRejected,
  setPerPage,
  setPage,
  addMaxPrice,
  addMinPrice,
  deleteProductFromBasket,
  editProductSuccess,
  editProductRejected,
  editProduct,
  addNewProduct,
  addNewProductRejected,
  addNewProductSuccess,
  addNewOrder,
} = productsSlice.actions;

export default productsSlice.reducer;

export interface INewProduct {
  name: string;
  price: number;
  origin: string;
}
