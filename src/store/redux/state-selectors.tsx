import { IInitialStateProduct } from "./slices/prosuctSlice";
import { RootState } from "./redux-store";
import { IInitialStateFilters } from "./slices/filterSlice";
import { IOrder } from "./slices/ordersSlice";

export const selectProducts = (state: RootState): IInitialStateProduct =>
  state.products;

export const selectFilters = (state: RootState): IInitialStateFilters =>
  state.filter;

export const selectBagProducts = (state: RootState) =>
  state.products.basket.allProducts.map((product) => {
    return {
      productId: product.product.id,
      count: product.quantity,
    };
  });

export const selectOrders = (state: RootState) => state.orders;

export const selectOrder = (state: RootState): IOrder =>
  state.orders.orderDetails;
