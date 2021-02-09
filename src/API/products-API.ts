import request from "./API-settings";
import { IProduct } from "../store/common/entitiesTypes";

export const productsAPI = {
  getProduct(productId: string) {
    return request
      .get<IProduct>(`/products/${productId}`)
      .then((res) => {
        return res.data;
      })
      .catch(() => {
        return "error";
      });
  },
};
