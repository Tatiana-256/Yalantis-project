import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../common/entitiesTypes";
import { IOrderPostAPI, ordersAPI } from "../../../API/orders-API";

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

export const getOrders = createAsyncThunk("orders/getOrders", async () => {
  const response = await ordersAPI.getOrders();
  return response.data.items;
});
export const addOrder = createAsyncThunk(
  "orders/addOrder",
  async (order: IOrderPostAPI) => {
    const response = await ordersAPI.addOrder(order);
    return response.data;
  }
);

export const showDetails = createAsyncThunk(
  "orders/showOrderDetails",
  async (orderId: string) => {
    const response = await ordersAPI.getOrderDetails(orderId);
    return response.data;
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState: initialStateOrders,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getOrders.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getOrders.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.orders.push(action.payload);
      state.status = "succeeded";
    });
    builder.addCase(addOrder.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addOrder.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(showDetails.fulfilled, (state, action) => {
      state.orderDetails = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(showDetails.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(showDetails.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default ordersSlice.reducer;

export interface IOrder {
  id: string;
  pieces: Array<IOrderProduct>;
  createdAt: string;
}

export interface IOrderProduct {
  product: IProduct;
  count: number;
}
