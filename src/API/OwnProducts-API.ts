import { INewProduct } from "../store/redux/slices/productSlice";
import request, { authKey } from "./API-settings";

export const OwnProductsAPI = {
  setNewProduct(product: { product: INewProduct }) {
    return request.post(`/products`, product, {
      headers: {
        Authorization: authKey,
      },
    });
  },
  editProduct(product: { product: INewProduct; productId: string }) {
    return request.patch(`/products/${product.productId}`, product, {
      headers: {
        Authorization: authKey,
      },
    });
  },
};
