import request from "./API-settings";
import { ICountries } from "../state/redux/filterSlise";

const filtersAPI = {
  getOriginCountries() {
    return request
      .get<{ items: Array<ICountries> }>(`/products-origins`)
      .then((res) => {
        return res.data.items;
      })
      .catch(() => {
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
    return request
      .get(`/products`, {
        params: {
          origins,
          minPrice,
          maxPrice,
          perPage: pageCount,
          page,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch(() => {
        return "error";
      });
  },
};

export default filtersAPI;
