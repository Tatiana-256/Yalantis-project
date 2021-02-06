import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/prosuctSlice";
import filterSlise from "./slices/filterSlice";
import { uiReducer } from "./UI-handling/ui-reduser";
import ordersSlice from "./slices/ordersSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    filter: filterSlise,
    orders: ordersSlice,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
