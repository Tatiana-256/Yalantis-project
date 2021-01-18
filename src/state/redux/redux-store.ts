import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./prosuctSlice";

const rootReducer = combineReducers({
  products: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
