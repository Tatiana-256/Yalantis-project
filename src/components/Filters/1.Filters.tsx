import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilters } from "../../state/redux/state-selectors";
import { Country } from "./2.Country";
import { FilterText, FilterWrapper } from "./Filters-style";
import {
  addMaxPrice,
  addMinPrice,
  changeCountriesFilter,
  ICountries,
  selectCountries,
} from "../../state/redux/slices/filterSlise";
import { Button, Input } from "../../common-utils/common-styles";
import { loadFilteredProducts } from "../../state/redux/thunk-creators";

interface IProps {
  isEditable?: "true" | "false";
}

export const Filters: React.FC<IProps> = ({ isEditable }) => {
  const dispatch = useDispatch();

  const { countries, minPrice, maxPrice } = useSelector(selectFilters);
  const origins = useSelector(selectCountries);

  const [min, setMinPrice] = useState<number>();
  const [max, setMaxPrice] = useState<number>();

  useEffect(() => {
    dispatch(
      loadFilteredProducts({
        origins,
        minPrice,
        maxPrice,
        editable: isEditable,
      })
    );
  }, [origins, dispatch, minPrice, maxPrice, isEditable]);

  const setCountryFilter = (country: ICountries) => {
    dispatch(changeCountriesFilter(country.value));
  };

  const setMaxMinFilter = () => {
    if (max === 0) {
      dispatch(addMaxPrice(undefined));
    } else if (max === undefined || max > 0) {
      dispatch(addMaxPrice(max));
    }
    if (min === 0) {
      dispatch(addMinPrice(undefined));
    } else if (min === undefined || min > 0) {
      dispatch(addMinPrice(min));
    }
  };

  return (
    <FilterWrapper>
      <FilterText>Filters:</FilterText>
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
