import { call, debounce, put } from "redux-saga/effects";
import { ordersAPI } from "../../../API/orders-API";
import {
  addOrder,
  addOrderRejected,
  addOrderSuccess,
  getOrders,
  getOrdersRejected,
  getOrdersSuccess,
  showDetails,
  showDetailsRejected,
  showDetailsSuccess,
} from "../../redux/slices/ordersSlice";
import { addNewOrder } from "../../redux/slices/productSlice";

// __________ get orders ______________

function* onGetOrders() {
  try {
    const orders = yield call(ordersAPI.getOrders);
    debugger;
    yield put(getOrdersSuccess(orders.data.items));
    yield put(addNewOrder());
  } catch (e) {
    yield put(getOrdersRejected);
  }
}

export function* onGetOrdersSaga() {
  yield debounce(1000, getOrders.type, onGetOrders);
}

// __________ add orders ______________

function* onAddOrder(action: any) {
  try {
    const product = yield call(ordersAPI.addOrder, action.payload);
    debugger;
    yield put(addOrderSuccess(product.data));
  } catch (e) {
    yield put(addOrderRejected);
  }
}

export function* addOrderSaga() {
  yield debounce(1000, addOrder.type, onAddOrder);
}

// __________ show order details______________

function* showOrderDetails(action: any) {
  try {
    const product = yield call(ordersAPI.getOrderDetails, action.payload);
    debugger;
    yield put(showDetailsSuccess(product.data));
  } catch (e) {
    yield put(showDetailsRejected);
  }
}

export function* showOrderDetailsSaga() {
  yield debounce(1000, showDetails.type, showOrderDetails);
}
