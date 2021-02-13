import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { loadProducts } from "../../../store/redux/slices/productSlice";
import {
  selectCounties,
  selectCountiesArray,
  selectProducts,
} from "../../../store/redux/state-selectors";
import {
  ICountries,
  loadCountries,
} from "../../../store/redux/slices/filterSlice";
import { Input } from "../../../components/CommonInput/CommonInput";
import { Button } from "../../../utils/common-styles";
import { IFilterParameters } from "../../../store/common/entitiesTypes";
import { CountryCheck } from "./CountryInput";
import { filterSchema } from "./FilterValidation";

export const FilterForm: React.FC<{ isEditable?: string }> = ({
  isEditable,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);

  const { page, perPage, maxPrice, minPrice } = useSelector(selectProducts);
  const origins = useSelector(selectCounties);
  const originsArray = useSelector(selectCountiesArray);

  const formik = useFormik({
    initialValues: {
      originsFilter: originsArray,
      minPrice,
      maxPrice,
    },
    validationSchema: filterSchema.schema,
    onSubmit: () => {
      const parameters: IFilterParameters = {
        origins: formik.values.originsFilter.join(","),
        minPrice: Number(formik.values.minPrice),
        maxPrice: Number(formik.values.maxPrice),
        pageCount: perPage,
        page,
        editable: isEditable,
      };
      dispatch(
        loadProducts({
          products: parameters,
          history,
          location: location.search,
        })
      );
    },
  });

  return (
    <div style={{ padding: "18vh 0 0 4rem", width: "20vw" }}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          {origins.map((country: ICountries, i) => (
            <CountryCheck
              key={Math.random().toString()}
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
              type="input"
              width={80}
            />
          </label>
        </div>
        <Button type="submit">Add Filters</Button>
      </form>
    </div>
  );
};
