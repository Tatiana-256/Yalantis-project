import { IProduct, IProductAPI } from "../state/entitiesTypes";
import request from "./API-settings";

const productsAPI = {
  getProducts() {
    return request
      .get<IProductAPI>(`/products`)
      .then((res) => {
        return res.data;
      })
      .catch(() => {
        return "error";
      });
  },
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

export default productsAPI;
