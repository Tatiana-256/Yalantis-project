import request from "./API-settings";
import { ICountries } from "../state/redux/filterSlise";

const countriesAPI = {
  getOriginCountries() {
    return request
      .get<{ items: Array<ICountries> }>(`/products-origins`)
      .then((res) => {
        return res.data.items;
      })
      .catch((error) => {
        return "error";
      });
  },
  loadFiltersProducts(origins?: string, minPrice?: string, maxPrice?: string) {
    return request.get(
      `/products?origins=${origins}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
  },
};

export default countriesAPI;
