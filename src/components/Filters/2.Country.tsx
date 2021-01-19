import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { CountryWrap, TextCountry } from "./Filters-style";
import {
  changeCountriesFilter,
  ICountries,
} from "../../state/redux/filterSlise";

interface IProps {
  country: ICountries;
}

export const Country: React.FC<IProps> = ({ country }) => {
  const dispatch = useDispatch();
  console.log(country);

  return (
    <CountryWrap>
      <input
        type="checkbox"
        checked={country.isChecked}
        onChange={() => {
          debugger;
          dispatch(changeCountriesFilter(country.value));
        }}
      />
      <TextCountry> {country.displayName}</TextCountry>
    </CountryWrap>
  );
};

Country.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  country: PropTypes.any.isRequired,
};
