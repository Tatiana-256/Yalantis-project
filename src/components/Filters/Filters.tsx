import React from "react";
import { FilterWrapper } from "./Filters-style";

export const Filters = () => {
  const origin = ["Europe", "USA", "Africa", "Asia"];
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
      {origin.map((orig) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "10px ",
          }}
        >
          <input type="checkbox" />
          <div
            style={{
              marginLeft: "10px",
              fontSize: "1.2rem",
            }}
          >
            {orig}
          </div>
        </div>
      ))}
    </FilterWrapper>
  );
};
