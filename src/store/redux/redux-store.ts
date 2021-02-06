import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/prosuctSlice";
import filterSlise from "./slices/filterSlice";
import { uiReducer } from "./UI-handling/ui-reduser";
import ordersSlice from "./slices/ordersSlice";

const rootReducer = combineReducers({
  products: productReducer,
  filter: filterSlise,
  orders: ordersSlice,
  ui: uiReducer,
});

const store = configureStore({
  reducer: {
    products: productReducer,
    filter: filterSlise,
    orders: ordersSlice,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
