import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import filterSlice from "./slices/filterSlice";
import { uiReducer } from "./UI-handling/ui-reduser";
import ordersSlice from "./slices/ordersSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    filter: filterSlice,
    orders: ordersSlice,
    ui: uiReducer,
  },
});

export const rootReducer = combineReducers({
  products: productReducer,
  filter: filterSlice,
  orders: ordersSlice,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
