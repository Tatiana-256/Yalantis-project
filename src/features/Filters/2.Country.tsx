import React from "react";
import { useHistory } from "react-router-dom";
import qs from "query-string";
import { ICountries } from "../../store/redux/slices/filterSlice";
import { useURLPut } from "../../utils/url_hook";
import { CountryWrap, TextCountry } from "./FiltersStyles";

interface IProps {
  country: ICountries;
  setCountryFilter: (country: ICountries) => void;
  newQueryParam?: any;
}

export const Country = React.memo<IProps>(({ country, setCountryFilter }) => {
  const history = useHistory();

  const url = useURLPut();

  const setFilter = () => {
    setCountryFilter(country);
    history.push(`/products?${qs.stringify(url)}`);
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
