import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { selectFilters } from "../../state/redux/state-selectors";
import { Country } from "./2.Country";
import { FilterText, FilterWrapper } from "./Filters-style";
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
    dispatch(setStatus("loading"));
    filtersAPI
      .loadFiltersProducts({
        origins,
        minPrice,
        maxPrice,
        editable: isEditable,
      })
      .then((data) => {
        if (typeof data !== "string") {
          dispatch(setProducts(data.items));
          dispatch(setStatus("succeeded"));
        } else if (data === "error") dispatch(setStatus("failed"));
      });
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

Filters.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  isEditable: PropTypes.any,
};

Filters.defaultProps = {
  isEditable: "false",
};
