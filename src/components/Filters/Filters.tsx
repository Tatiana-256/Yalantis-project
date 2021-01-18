import React from "react";
import { useCountriesSelector } from "../../state/redux/state-selectors";
import { CountryWrap, FilterWrapper, TextCountry } from "./Filters-style";

export const Filters = () => {
  const { countries } = useCountriesSelector();

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
        <CountryWrap key={Math.random().toString()}>
          <input type="checkbox" />
          <TextCountry>{orig.displayName}</TextCountry>
        </CountryWrap>
      ))}
    </FilterWrapper>
  );
};
