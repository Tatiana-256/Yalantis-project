import React from "react";
import { CountryWrap, TextCountry } from "./FiltersStyles";
import { ICountries } from "../../store/redux/slices/filterSlice";

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
