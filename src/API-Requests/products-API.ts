import {
  IProduct,
  IProductAPI,
  IProductAPIRequest,
} from "../state/entitiesTypes";
import request from "./API-settings";

const productsAPI = {
  getProducts() {
    return request
      .get<IProductAPI>(`/products`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return "error";
      });
  },
  getProduct(productId: string) {
    return request
      .get<IProduct>(`/products/${productId}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return "error";
      });
  },
};

export default productsAPI;
