import request from "./API-settings";

export const ordersAPI = {
  getOrders(orderId?: string) {
    return request.post(`/orders/${orderId}`, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCi0LXRgtGP0L3QsCDQnNCw0YLQstGW0ZTQvdC60L4iLCJpYXQiOjE2MTExNzQwNDIsImV4cCI6MTYxNjM1ODA0Mn0.Bg_aMEcz903l9EVEbNLIO6MwUtMNmPl-HWEVB427DEw",
      },
    });
  },
  addOrder(order: any) {
    return request.post(`/orders`, order, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCi0LXRgtGP0L3QsCDQnNCw0YLQstGW0ZTQvdC60L4iLCJpYXQiOjE2MTExNzQwNDIsImV4cCI6MTYxNjM1ODA0Mn0.Bg_aMEcz903l9EVEbNLIO6MwUtMNmPl-HWEVB427DEw",
      },
    });
  },
};
