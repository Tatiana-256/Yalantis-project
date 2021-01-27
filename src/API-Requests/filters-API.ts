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
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ItCi0LXRgtGP0L3QsCDQnNCw0YLQstGW0ZTQvdC60L4iLCJpYXQiOjE2MTExNzQwNDIsImV4cCI6MTYxNjM1ODA0Mn0.Bg_aMEcz903l9EVEbNLIO6MwUtMNmPl-HWEVB427DEw",
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
