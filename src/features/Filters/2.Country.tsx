import React from "react";
import { ICountries } from "../../store/redux/slices/filterSlice";
import { CountryWrap, TextCountry } from "./FiltersStyles";

interface IProps {
  country: ICountries;
  setCountryFilter: (country: ICountries) => void;
  newQueryParam?: any;
}

export const Country = React.memo<IProps>(({ country, setCountryFilter }) => {
  const setFilter = () => {
    setCountryFilter(country);
  };

  return (
    <>
      <CountryWrap>
        <input
          type="checkbox"
          checked={country.isChecked}
          onChange={setFilter}
        />

        <TextCountry> {country.displayName}</TextCountry>
      </CountryWrap>
    </>
  );
});
