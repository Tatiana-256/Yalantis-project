import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  useFiltersSelector,
  useFilteredProducts,
  useProductsSelector,
} from "../../state/redux/state-selectors";
import { Country } from "./2.Country";
import { FilterWrapper } from "./Filters-style";
import {
  addMaxMinPrice,
  changeCountriesFilter,
} from "../../state/redux/filterSlise";
import filtersAPI from "../../API-Requests/filters-API";
import { setProducts } from "../../state/redux/prosuctSlice";
import { Button, Input } from "../../common-utils/common-styles";
import productsAPI from "../../API-Requests/products-API";

export const Filters = () => {
  const dispatch = useDispatch();

  const { countries } = useFiltersSelector();

  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();

  const origins = useFilteredProducts().join();

  const setCountryFilter = (country?: string) => {
    dispatch(changeCountriesFilter(country));
    dispatch(addMaxMinPrice({ minPrice, maxPrice }));
    filtersAPI.loadFiltersProducts(origins, minPrice, maxPrice).then((data) => {
      console.log(data);
      dispatch(setProducts(data.data.items));
    });
  };

  const addMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.currentTarget.value));
  };
  const addMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.currentTarget.value));
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
