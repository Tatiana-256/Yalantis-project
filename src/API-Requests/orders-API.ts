import request, { authKey } from "./API-settings";

export const ordersAPI = {
  getOrders(orderId?: string) {
    return request.post(`/orders/${orderId}`, {
      headers: {
        Authorization: authKey,
      },
    });
  },
  addOrder(order: any) {
    return request.post(`/orders`, order, {
      headers: {
        Authorization: authKey,
      },
    });
  },
};
