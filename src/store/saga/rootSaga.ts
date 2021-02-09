import { all } from "redux-saga/effects";
import countriesSaga from "./countriesSaga";
import productSaga from "./productSaga";

export default function* rootSaga() {
  yield all([productSaga(), countriesSaga()]);
}
