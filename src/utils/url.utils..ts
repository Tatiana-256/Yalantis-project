import qs from "query-string";
import { IFilterParameters } from "../store/common/entitiesTypes";

export interface IUrl {
  origins?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  perPage?: number;
}

export const putURL = (
  origins: string | undefined,
  minPrice: number | undefined,
  maxPrice: number | undefined,
  perPage: number | undefined,
  page: number | undefined,
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
  const newURL: IFilterParameters = qs.parse(location.search);
  return {
    origins: newURL.origins,
    minPrice: Number(newURL.minPrice),
    maxPrice: Number(newURL.maxPrice),
    perPage: Number(newURL.perPage),
    page: Number(newURL.page),
  };
};
