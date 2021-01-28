import request, { authKey } from "./API-settings";
import { INewProduct } from "../state/redux/slices/OwnProductsSlice";

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
