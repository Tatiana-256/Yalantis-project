import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import { selectFilters } from "../store/redux/state-selectors";
import { selectCountries } from "../store/redux/slices/filterSlice";

export const useURLPut = () => {
  const { page, perPage, maxPrice, minPrice } = useSelector(selectFilters);
  const origins = useSelector(selectCountries);

  const location = useLocation();

  const queryParam = qs.parse(location.search);

  return {
    ...queryParam,
    origins,
    minPrice,
    maxPrice,
    page,
    perPage,
  };
};

export const useURLGet = (location: any) => {
  return qs.parse(location.search);
};
