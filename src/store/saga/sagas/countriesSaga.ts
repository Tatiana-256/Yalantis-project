import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  changeCountriesFilter,
  loadCountries,
  setCountriesRejected,
  setCountriesSuccess,
} from "../../redux/slices/filterSlice";
import filtersAPI from "../../../API/filters-API";
import { IUrl } from "../../../utils/url.utils.";
import {
  addMaxPrice,
  addMinPrice,
  addPagePerPage,
} from "../../redux/slices/productSlice";

function* onGetCountries(action: PayloadAction<IUrl>) {
  try {
    const countries = yield call(filtersAPI.getOriginCountries);
    yield put(setCountriesSuccess(countries));

    // const { page, perPage, origins, minPrice, maxPrice } = action.payload;
    // const origin = origins?.split(",");
    // yield put(changeCountriesFilter(origin));
    //
    // if (maxPrice === 0 || NaN) {
    //   yield put(addMaxPrice(undefined));
    // } else if (maxPrice === undefined || maxPrice > 0) {
    //   yield put(addMaxPrice(maxPrice));
    // }
    // if (minPrice === 0 || NaN) {
    //   yield put(addMinPrice(undefined));
    // } else if (minPrice === undefined || minPrice > 0) {
    //   yield put(addMinPrice(minPrice));
    // }
    //
    // yield put(addPagePerPage({ page, perPage }));
  } catch (e) {
    yield put(setCountriesRejected());
  }
}

export default function* countriesSaga() {
  yield takeEvery(loadCountries.type, onGetCountries);
}
