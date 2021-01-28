import React from "react";
import PropTypes from "prop-types";
import { CountryWrap, TextCountry } from "./Filters-style";
import { ICountries } from "../../state/redux/slices/filterSlise";

interface IProps {
  country: ICountries;
  setCountryFilter: (country: ICountries) => void;
}

export const Country: React.FC<IProps> = ({ country, setCountryFilter }) => {
  return (
    <>
      <CountryWrap>
        <input
          type="checkbox"
          checked={country.isChecked}
          onChange={() => setCountryFilter(country)}
        />
        <TextCountry> {country.displayName}</TextCountry>
      </CountryWrap>
    </>
  );
};

Country.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  country: PropTypes.any.isRequired,
  setCountryFilter: PropTypes.func.isRequired,
};
