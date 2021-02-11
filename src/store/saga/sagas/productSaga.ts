import { call, debounce, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import filtersAPI from "../../../API/filters-API";
import {
  addNewProduct,
  addNewProductRejected,
  addNewProductSuccess,
  editProduct,
  editProductRejected,
  editProductSuccess,
  INewProduct,
  loadProducts,
  loadProductsRejected,
  loadProductsSuccess,
} from "../../redux/slices/productSlice";
import { OwnProductsAPI } from "../../../API/OwnProducts-API";
import {
  IEditProduct,
  IFilterParameters,
  IProduct,
  IProductAPI,
} from "../../common/entitiesTypes";

// ____________ load product _______________

// action: PayloadAction
function* onGetProducts(action: PayloadAction<IFilterParameters>) {
  try {
    const products: IProductAPI = yield call(
      filtersAPI.loadFiltersProducts,
      action.payload
    );
    yield put(loadProductsSuccess(products));
  } catch (e) {
    yield put(loadProductsRejected);
  }
}

export default function* productSaga() {
  yield debounce(1000, loadProducts.type, onGetProducts);
}

// ______________ edit product ______________

function* onEditProducts(action: PayloadAction<IEditProduct>) {
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

function* onAddNewProducts(action: PayloadAction<{ product: INewProduct }>) {
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
