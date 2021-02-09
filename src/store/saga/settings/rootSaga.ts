import { all } from "redux-saga/effects";
import countriesSaga from "../sagas/countriesSaga";
import productSaga, {
  addNewProductSaga,
  editProductSaga,
} from "../sagas/productSaga";

export default function* rootSaga() {
  yield all([
    productSaga(),
    countriesSaga(),
    editProductSaga(),
    addNewProductSaga(),
  ]);
}
