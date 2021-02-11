import { call, debounce, put, takeEvery } from "redux-saga/effects";
import filtersAPI from "../../../API/filters-API";
import {
  addNewProduct,
  addNewProductRejected,
  addNewProductSuccess,
  editProduct,
  editProductRejected,
  editProductSuccess,
  loadProducts,
  loadProductsRejected,
  loadProductsSuccess,
} from "../../redux/slices/productSlice";
import { OwnProductsAPI } from "../../../API/OwnProducts-API";
import { PayloadAction } from "@reduxjs/toolkit";
import { IFilterParameters, IProduct } from "../../common/entitiesTypes";

// ____________ load product _______________

// action: PayloadAction
function* onGetProducts(action: PayloadAction<IFilterParameters>) {
  try {
    const products: IProduct[] = yield call(filtersAPI.loadFiltersProducts, action.payload);
    yield put(loadProductsSuccess(products));
  } catch (e) {
    yield put(loadProductsRejected);
  }
}

export default function* productSaga() {
  yield debounce(1000, loadProducts.type, onGetProducts);
}

// ______________ edit product ______________

function* onEditProducts(action: any) {
  try {
    const product = yield call(OwnProductsAPI.editProduct, action.payload);
    yield put(editProductSuccess(product.data));
  } catch (e) {
    yield put(editProductRejected);
  }
}

export function* editProductSaga() {
  yield takeEvery(editProduct.type, onEditProducts);
}

// _______________ add new product _______________

function* onAddNewProducts(action: any) {
  try {
    const product = yield call(OwnProductsAPI.setNewProduct, action.payload);
    yield put(addNewProductSuccess(product.data));
  } catch (e) {
    yield put(addNewProductRejected);
  }
}

export function* addNewProductSaga() {
  yield takeEvery(addNewProduct.type, onAddNewProducts);
}
