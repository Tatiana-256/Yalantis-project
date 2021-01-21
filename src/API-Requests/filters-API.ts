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
    const min = minPrice! > 0 ? minPrice : "";
    const max = maxPrice! > 0 ? maxPrice : "";
    const url =
      origins !== ""
        ? `?origins=${origins}&minPrice=${min}&maxPrice=${max}&page=${page}&perPage=${pageCount}`
        : `?minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}&perPage=${pageCount}`;
    return request
      .get(`/products${url}`)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((error) => {
        return "error";
      });
  },
};

export default filtersAPI;
