import request from "./API-settings";
import { ICountries } from "../state/redux/filterSlise";

const filtersAPI = {
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
  loadFiltersProducts(
    origins?: string,
    minPrice?: number,
    maxPrice?: number,
    pageCount?: number,
    page?: number
  ) {
    const url = origins
      ? `?origins=${origins}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}&perPage=${pageCount}`
      : `?minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}&perPage=${pageCount}`;
    return request.get(`/products${url}`);
  },
};

export default filtersAPI;
