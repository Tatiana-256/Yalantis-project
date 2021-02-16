import { all } from "redux-saga/effects";
import countriesSaga from "../sagas/countriesSaga";
import {
  addOrderSaga,
  onGetOrdersSaga,
  showOrderDetailsSaga,
} from "../sagas/ordersSaga";
import productSaga, {
  addNewProductSaga,
  editProductSaga,
  productsSaga,
} from "../sagas/productSaga";

export default function* rootSaga() {
  yield all([
    productSaga(),
    productsSaga(),
    countriesSaga(),
    editProductSaga(),
    addNewProductSaga(),
    onGetOrdersSaga(),
    addOrderSaga(),
    showOrderDetailsSaga(),
  ]);
}
