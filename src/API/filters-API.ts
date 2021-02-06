import request, { authKey } from "./API-settings";
import { ICountries } from "../store/redux/slices/filterSlice";
import { IFilterParameters } from "../store/redux/thunk-creators";

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
    const {
      maxPrice,
      minPrice,
      origins,
      page,
      pageCount,
      editable,
    } = parameters!;
    return request
      .get(`/products`, {
        params: {
          origins,
          minPrice,
          maxPrice,
          perPage: pageCount,
          page,
          editable,
        },
        headers: {
          Authorization: authKey,
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
