import { call, put, takeEvery } from "redux-saga/effects";
import {
  loadCountries,
  setCountriesRejected,
  setCountriesSuccess,
} from "../../redux/slices/filterSlice";
import filtersAPI from "../../../API/filters-API";

function* onGetCountries() {
  try {
    const countries = yield call(filtersAPI.getOriginCountries);
    yield put(setCountriesSuccess(countries));
  } catch (e) {
    yield put(setCountriesRejected);
  }
}

export default function* countriesSaga() {
  yield takeEvery(loadCountries.type, onGetCountries);
}
