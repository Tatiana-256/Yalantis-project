import { useLocation } from "react-router-dom";
import qs from "query-string";
import { IFilterParameters } from "../store/common/entitiesTypes";

export interface IUrl {
  origins?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  pageCount?: number;
}

export const putURL = (
  origins: string | undefined,
  minPrice: number | undefined,
  maxPrice: number | undefined,
  page: number | undefined,
  perPage: number | undefined,
  location: any
) => {
  const queryParam = qs.parse(location);

  return {
    ...queryParam,
    origins,
    minPrice,
    maxPrice,
    page,
    perPage,
  };
};

export const getURL = (location: any): IFilterParameters => {
  return qs.parse(location.search);
};
