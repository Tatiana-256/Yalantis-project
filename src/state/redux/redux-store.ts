import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./prosuctSlice";
import filterSlise from "./filterSlise";
import { uiReducer } from "./UI-handling/ui-reduser";
import newProductSlice from "./OwnProductsSlice";

const rootReducer = combineReducers({
  products: productReducer,
  ownProducts: newProductSlice,
  filter: filterSlise,
  ui: uiReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
