import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilters } from "../../store/redux/state-selectors";
import { Country } from "./2.Country";
import { FilterText, FilterWrapper } from "./FiltersStyles";
import {
  changeCountriesFilter,
  ICountries,
} from "../../store/redux/slices/filterSlice";
import { Button, Input } from "../../utils/common-styles";
import {
  addMaxPrice,
  addMinPrice,
} from "../../store/redux/slices/productSlice";

interface IProps {
  isEditable?: "true" | "false";
}

export const Filters: React.FC<IProps> = () => {
  // const dispatch = useDispatch();
  //
  // const { countries } = useSelector(selectFilters);
  //
  // const [min, setMinPrice] = useState<number>();
  // const [max, setMaxPrice] = useState<number>();
  //
  // const setCountryFilter = (country: ICountries) => {
  //   dispatch(changeCountriesFilter(country.value));
  // };
  //
  // const setMaxMinFilter = () => {
  //   if (max === 0) {
  //     dispatch(addMaxPrice(undefined));
  //   } else if (max === undefined || max > 0) {
  //     dispatch(addMaxPrice(max));
  //   }
  //   if (min === 0) {
  //     dispatch(addMinPrice(undefined));
  //   } else if (min === undefined || min > 0) {
  //     dispatch(addMinPrice(min));
  //   }
  // };

  return (
    <FilterWrapper>
      <FilterText>Filters:</FilterText>
    </FilterWrapper>
  );
};
