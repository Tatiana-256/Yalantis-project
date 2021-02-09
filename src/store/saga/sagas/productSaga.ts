import { call, debounce, put } from "redux-saga/effects";
import filtersAPI from "../../../API/filters-API";
import {
  addNewProduct,
  addNewProductSuccess,
  addNewProductRejected,
  editProduct,
  editProductRejected,
  editProductSuccess,
  loadProducts,
  loadProductsRejected,
  loadProductsSuccess,
} from "../../redux/slices/productSlice";
import { OwnProductsAPI } from "../../../API/OwnProducts-API";

// ____________ load product _______________

function* onGetProducts(action: any) {
  try {
    const products = yield call(filtersAPI.loadFiltersProducts, action.payload);
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
  yield debounce(1000, editProduct.type, onEditProducts);
}

// _______________ add new product _______________

function* onAddNewProducts(action: any) {
  try {
    const product = yield call(OwnProductsAPI.setNewProduct, action.payload);
    debugger;
    yield put(addNewProductSuccess(product.data));
  } catch (e) {
    yield put(addNewProductRejected);
  }
}

export function* addNewProductSaga() {
  yield debounce(1000, addNewProduct.type, onAddNewProducts);
}
