import { IInitialStateProduct } from "./slices/prosuctSlice";
import { RootState } from "./redux-store";
import { IInitialStateFilters } from "./slices/filterSlise";
import { IInitialStateOrders, IOrder } from "./slices/ordersSlice";

export const selectProducts = (state: RootState) =>
  state.products as IInitialStateProduct;

export const selectFilters = (state: RootState) =>
  state.filter as IInitialStateFilters;

export const selectBagProducts = (state: RootState) =>
  state.products.basket.allProducts.map((product) => {
    return {
      productId: product.product.id,
      count: product.quantity,
    };
  });

export const selectOrders = (state: RootState) =>
  state.orders as IInitialStateOrders;

export const selectOrder = (state: RootState) => state.orders.orderDetails as IOrder;
