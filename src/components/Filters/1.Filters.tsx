import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  useFiltersSelector,
  useFilteredProducts,
  useProductsSelector,
} from "../../state/redux/state-selectors";
import { Country } from "./2.Country";
import { FilterWrapper } from "./Filters-style";
import { changeCountriesFilter } from "../../state/redux/filterSlise";
import countriesAPI from "../../API-Requests/countries-API";
import { setProducts } from "../../state/redux/prosuctSlice";
import { Button, Input } from "../../common-utils/common-styles";

export const Filters = () => {
  const dispatch = useDispatch();

  const { countries } = useFiltersSelector();

  const [minPrice, setMinPrice] = useState<string>();
  const [maxPrice, setMaxPrice] = useState<string>();

  const origins = useFilteredProducts().join();

  const setCountryFilter = (country?: string) => {
    dispatch(changeCountriesFilter(country));
    countriesAPI
      .loadFiltersProducts(origins, minPrice, maxPrice)
      .then((data) => {
        console.log(data);
        dispatch(setProducts(data.data.items));
      });
  };

  const addMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.currentTarget.value);
  };
  const addMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.currentTarget.value);
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
        <Input height="30px" type="number" onChange={addMinPrice} />
      </div>
      <div>
        <div>Max Price</div>
        <Input height="30px" type="number" onChange={addMaxPrice} />
      </div>
      <Button width="90%" onClick={() => setCountryFilter()} type="button">
        Add filters
      </Button>
    </FilterWrapper>
  );
};
