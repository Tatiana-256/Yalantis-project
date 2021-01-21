import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFiltersSelector } from "../../state/redux/state-selectors";
import { Country } from "./2.Country";
import { FilterWrapper } from "./Filters-style";
import {
  addMaxPrice,
  addMinPrice,
  changeCountriesFilter,
  ICountries,
  selectCountries,
} from "../../state/redux/filterSlise";
import filtersAPI from "../../API-Requests/filters-API";
import { setProducts, setStatus } from "../../state/redux/prosuctSlice";
import { Button, Input } from "../../common-utils/common-styles";

export const Filters = () => {
  const dispatch = useDispatch();

  const { countries, minPrice, maxPrice } = useFiltersSelector();

  const [min, setMinPrice] = useState<number>();
  const [max, setMaxPrice] = useState<number>();

  const origins = useSelector(selectCountries);

  useEffect(() => {
    dispatch(setStatus("loading"));
    filtersAPI.loadFiltersProducts(origins, minPrice, maxPrice).then((data) => {
      console.log(data);
      if (typeof data !== "string") {
        dispatch(setProducts(data.items));
        dispatch(setStatus("succeeded"));
      } else if (data === "error") dispatch(setStatus("failed"));
    });
  }, [origins, dispatch, minPrice, maxPrice]);

  const setCountryFilter = (country: ICountries) => {
    console.log("33, origins: ", origins);
    dispatch(changeCountriesFilter(country.value));
  };
  const setMaxMinFilter = () => {
    dispatch(addMaxPrice(max));
    dispatch(addMinPrice(min));
  };

  return (
    <FilterWrapper>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Filters:
      </div>
      {countries.map((orig) => (
        <Country
          key={Math.random().toString()}
          country={orig}
          setCountryFilter={setCountryFilter}
        />
      ))}
      <div>
        <div>Min Price</div>
        <Input
          height="30px"
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMinPrice(Number(e.target.value))
          }
        />
      </div>
      <div>
        <div>Max Price</div>
        <Input
          height="30px"
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setMaxPrice(Number(e.target.value));
          }}
        />
      </div>
      <Button width="90%" onClick={setMaxMinFilter} type="button">
        Add filters
      </Button>
    </FilterWrapper>
  );
};
