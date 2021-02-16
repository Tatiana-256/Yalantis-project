import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import filtersAPI from "../../../API/filters-API";
import { productsAPI } from "../../../API/products-API";
import { OwnProductsAPI } from "../../../API/OwnProducts-API";
import {
  addMaxPrice,
  addMinPrice,
  addNewProduct,
  addNewProductRejected,
  addNewProductSuccess,
  editProduct,
  editProductRejected,
  editProductSuccess,
  loadProducts,
  loadProductsRejected,
  loadProductsSuccess,
  loadProduct,
  loadProductSuccess,
  loadProductRejected,
  INewProduct,
} from "../../redux/slices/productSlice";
import {
  IEditProduct,
  IFilterParameters,
  IProduct,
  IProductAPI,
} from "../../common/entitiesTypes";
import { changeCountriesFilter } from "../../redux/slices/filterSlice";

// ____________ load products _______________

function* onGetProducts(action: PayloadAction<IFilterParameters>) {
  try {
    const products: IProductAPI = yield call(
      filtersAPI.loadFiltersProducts,
      action.payload
    );
    const { maxPrice, minPrice, origins } = action.payload;

    yield put(loadProductsSuccess(products));

    if (maxPrice! > 0) {
      yield put(addMaxPrice(maxPrice));
    }
    if (minPrice! > 0) {
      yield put(addMinPrice(minPrice));
    }

    const origin = origins?.split(",");
    yield put(changeCountriesFilter(origin));
  } catch (e) {
    yield put(loadProductsRejected());
  }
}

export function* productsSaga() {
  yield takeEvery(loadProducts.type, onGetProducts);
}

// ____________ load product _______________

function* onGetProduct(action: PayloadAction<string>) {
  try {
    const product: IProduct = yield call(
      productsAPI.getProduct,
      action.payload
    );
    yield put(loadProductSuccess(product));
  } catch (e) {
    yield put(loadProductRejected());
  }
}

export default function* productSaga() {
  yield takeEvery(loadProduct.type, onGetProduct);
}

// ______________ edit product ______________

function* onEditProducts(action: PayloadAction<IEditProduct>) {
  try {
    const product = yield call(OwnProductsAPI.editProduct, action.payload);
    yield put(editProductSuccess(product.data));
  } catch (e) {
    yield put(editProductRejected());
  }
}

export function* editProductSaga() {
  yield takeEvery(editProduct.type, onEditProducts);
}

// _______________ add new product _______________

function* onAddNewProducts(action: PayloadAction<{ product: INewProduct }>) {
  try {
    const product = yield call(OwnProductsAPI.setNewProduct, action.payload);
    yield put(addNewProductSuccess(product.data));
  } catch (e) {
    yield put(addNewProductRejected());
  }
}

export function* addNewProductSaga() {
  yield takeEvery(addNewProduct.type, onAddNewProducts);
}
