import { useLocation } from "react-router-dom";
import qs from "query-string";

interface IUrl {
  origins?: number;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  perPage?: number;
}

export const putURL = (
  origins: string | undefined,
  minPrice: number | undefined,
  maxPrice: number | undefined,
  page: number | undefined,
  perPage: number | undefined,
  location: any
) => {
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

export const getURL = (location: any): IUrl => {
  return qs.parse(location.search);
};
