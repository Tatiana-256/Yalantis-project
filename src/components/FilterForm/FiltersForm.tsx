import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import qs from "query-string";

import { loadProducts } from "../../store/redux/slices/productSlice";
import {
  selectCounties,
  selectProducts,
} from "../../store/redux/state-selectors";
import {
  ICountries,
  loadCountries,
} from "../../store/redux/slices/filterSlice";
import { Input } from "../CommonInput/CommonInput";
import { Button } from "../../utils/common-styles";
import { IFilterParameters } from "../../store/common/entitiesTypes";
import { CountryCheck } from "./CountryInput";
import { getURL, putURL } from "../../utils/url.utils.";
import { uniqueID } from "../../utils/dataGenerator";

export const FilterForm: React.FC<{ isEditable?: string }> = ({
  isEditable,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  // _________________ state selectors _________________

  const origin = useSelector(selectCounties);
  const { page, perPage } = useSelector(selectProducts);

  // ________________ initial loading page_______________

  const { maxPrice, minPrice, origins } = getURL(location);

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);

  // ________________ formic description _______________

  const formik = useFormik({
    initialValues: {
      originsFilter: origins?.split(","),
      minPrice,
      maxPrice,
    },
    onSubmit: () => {
      // _______________ url settings ________________

      const minUrlPrice =
        Number(formik.values.minPrice) > 0
          ? Number(formik.values.minPrice)
          : undefined;
      const maxUrlPrice =
        Number(formik.values.maxPrice) > 0
          ? Number(formik.values.maxPrice)
          : undefined;

      const url = putURL(
        formik.values.originsFilter?.join(","),
        minUrlPrice,
        maxUrlPrice,
        perPage,
        page,
        location
      );
      history.push(`/products?${qs.stringify(url)}`);

      // _________________ sent request ____________________

      const parameters: IFilterParameters = {
        origins: formik.values.originsFilter?.join(","),
        minPrice: minUrlPrice,
        maxPrice: maxUrlPrice,
        perPage,
        page,
        editable: isEditable,
      };
      dispatch(loadProducts(parameters));
    },
  });

  return (
    <div style={{ padding: "18vh 0 0 4rem", width: "20vw" }}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          {origin.map((country: ICountries, i) => (
            <CountryCheck
              key={uniqueID()}
              index={i}
              country={country}
              originsFilter={formik.values.originsFilter}
              setFieldValue={formik.setFieldValue}
              groupName="originsFilter"
              width={50}
            />
          ))}
        </div>
        <div>
          <label>
            {" "}
            Min price
            <Input
              name="minPrice"
              onBlur={formik.handleBlur}
              placeholder="min price"
              error={formik.errors.minPrice}
              value={formik.values.minPrice}
              onChange={formik.handleChange}
              type="number"
              width={80}
            />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Max price
            <Input
              name="maxPrice"
              onBlur={formik.handleBlur}
              placeholder="max price"
              error={formik.errors.maxPrice}
              value={formik.values.maxPrice}
              onChange={formik.handleChange}
              type="number"
              width={80}
            />
          </label>
        </div>
        <Button type="submit">Add Filters</Button>
      </form>
    </div>
  );
};
