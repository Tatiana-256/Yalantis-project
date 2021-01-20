import { IProduct, IProductAPI } from "../state/entitiesTypes";
import request from "./API-settings";

const productsAPI = {
  getProducts(pageCount = 10, page = 1) {
    return request
      .get<IProductAPI>(`/products?page=${page}&perPage=${pageCount}`)
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
