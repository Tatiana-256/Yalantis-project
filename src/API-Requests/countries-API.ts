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
};

export default countriesAPI;
