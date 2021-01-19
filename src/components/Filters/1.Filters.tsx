import React from "react";
import { useCountriesSelector } from "../../state/redux/state-selectors";
import { Country } from "./2.Country";
import { FilterWrapper } from "./Filters-style";

export const Filters = () => {
  const { countries } = useCountriesSelector();

  console.log(countries);

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
        <Country key={Math.random().toString()} country={orig} />
      ))}
    </FilterWrapper>
  );
};
