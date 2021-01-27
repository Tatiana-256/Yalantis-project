import request from "./API-settings";
import { ICountries } from "../state/redux/filterSlise";
import { IFilterParameters } from "../state/redux/thunk-creators";

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
  loadFiltersProducts(parameters?: IFilterParameters) {
    const { maxPrice, minPrice, origins, page, pageCount } = parameters!;
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
