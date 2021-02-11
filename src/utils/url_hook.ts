import { useLocation } from "react-router-dom";
import qs from "query-string";

interface IProps {
  origins: string;
  minPrice: string;
  maxPrice: string;
  page: string;
  perPage: string;
}

export const useURLPut = ({
  maxPrice,
  minPrice,
  origins,
  page,
  perPage,
}: IProps) => {

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
