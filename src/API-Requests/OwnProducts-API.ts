import request from "./API-settings";
import { INewProduct } from "../state/redux/OwnProductsSlice";

export const OwnProductsAPI = {
  setNewProduct(product: { product: INewProduct }) {
    return request.post(`/products`, product, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCi0LXRgtGP0L3QsCDQnNCw0YLQstGW0ZTQvdC60L4iLCJpYXQiOjE2MTExNzQwNDIsImV4cCI6MTYxNjM1ODA0Mn0.Bg_aMEcz903l9EVEbNLIO6MwUtMNmPl-HWEVB427DEw",
      },
    });
  },
};
