import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../common/entitiesTypes";

export interface IInitialStateOrders {
  status: "loading" | "succeeded" | "rejected" | "idle";
  orders: Array<IOrder>;
  orderDetails: IOrder;
}

export const initialStateOrders: IInitialStateOrders = {
  status: "idle",
  orders: [],
  orderDetails: {
    id: "",
    pieces: [],
    createdAt: "",
  },
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: initialStateOrders,
  reducers: {
    // __________ get orders ______________
    getOrders(state) {
      state.status = "loading";
    },
    getOrdersSuccess(state, action: PayloadAction<IOrder[]>) {
      state.orders = action.payload;
      state.status = "succeeded";
    },
    getOrdersRejected(state) {
      state.status = "rejected";
    },

    // __________ add orders ______________
    addOrder(state, action) {
      state.status = "loading";
    },
    addOrderSuccess(state, action: PayloadAction<IOrder>) {
      state.orders.push(action.payload);
      state.status = "succeeded";
    },
    addOrderRejected(state) {
      state.status = "rejected";
    },

    // __________ show order details______________
    showDetails(state, action) {
      state.status = "loading";
    },
    showDetailsSuccess(state, action: PayloadAction<IOrder>) {
      state.orderDetails = action.payload;
      state.status = "succeeded";
    },
    showDetailsRejected(state) {
      state.status = "rejected";
    },
  },
});

export const {
  addOrder,
  addOrderRejected,
  addOrderSuccess,
  showDetails,
  showDetailsRejected,
  showDetailsSuccess,
  getOrders,
  getOrdersRejected,
  getOrdersSuccess,
} = ordersSlice.actions;

export default ordersSlice.reducer;
