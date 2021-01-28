import request, { authKey } from "./API-settings";

export const ordersAPI = {
  getOrders() {
    return request.get(`/orders`, {
      headers: {
        Authorization: authKey,
      },
    });
  },
  getOrderDetails(orderId: string) {
    return request.get(`/orders/${orderId}`, {
      headers: {
        Authorization: authKey,
      },
    });
  },
  addOrder(order: IOrderPostAPI) {
    return request.post(`/orders`, order, {
      headers: {
        Authorization: authKey,
      },
    });
  },
};

export interface IOrderPostAPI {
  order: { pieces: Array<IProductOrder> };
}

export interface IProductOrder {
  productId: string;
  count: number;
}
