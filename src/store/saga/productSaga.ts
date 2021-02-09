import { takeEvery, call, put, debounce } from "redux-saga/effects";
import { IFilterParameters } from "../redux/thunk-creators";
import filtersAPI from "../../API/filters-API";
// import {
//   loadProducts,
//   loadProductsRejected,
//   loadProductsSuccess,
// } from "../redux/slices/prosuctSlice";

function* onGetProducts(action: any) {
  // try {
  //   const products = yield call(filtersAPI.loadFiltersProducts, action.payload);
  //   debugger;
  //   yield put(loadProductsSuccess(products));
  // } catch (e) {
  //   yield put(loadProductsRejected);
  // }
}

export default function* productSaga() {
  // yield debounce(1000, loadProducts.type, onGetProducts);
}
