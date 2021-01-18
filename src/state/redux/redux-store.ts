import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./prosuctSlice";
import filterSlise from "./filterSlise";

const rootReducer = combineReducers({
  products: productReducer,
  filter: filterSlise,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
