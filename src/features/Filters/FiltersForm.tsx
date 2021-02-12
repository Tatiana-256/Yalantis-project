import React, { useEffect } from "react";

import { Field, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import Portal from "../../components/Modal/Modal";
import { ModalWrapper } from "../../components/ModalsWrapper/ModalsWrapper";
import { newProduct } from "../AddProduct/ProductValidation";
import {
  addNewProduct,
  INewProduct,
  loadProducts,
} from "../../store/redux/slices/productSlice";
import { uiActions } from "../../store/redux/UI-handling/ui-actions";
import {
  selectCountiesArray,
  selectCountries,
  selectProducts,
} from "../../store/redux/state-selectors";
import {
  changeCountriesFilter,
  ICountries,
  loadCountries,
} from "../../store/redux/slices/filterSlice";
import { Input } from "../../components/CommonInput/CommonInput";
import { Item } from "../Bag/BagStyles";
import { Button, FlexStyle } from "../../utils/common-styles";
import CheckboxGroup from "./test/CheckGroup";
import { FilterWrapper } from "./FiltersStyles";
import { IFilterParameters } from "../../store/common/entitiesTypes";

// interface IProps {}

const Country: React.FC<{
  value: string;
  isChecked: boolean;
  name: string;
}> = ({ name, value, isChecked }) => {
  debugger;
  return (
    <label>
      <Input type="checkbox" name={value} value={value} checked={isChecked} />
      {value}
    </label>
  );
};

export const FilterForm: React.FC<{ isEditable?: string }> = ({
  isEditable,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);
  const { page, perPage, maxPrice, minPrice } = useSelector(selectProducts);
  const origins = useSelector(selectCountiesArray);

  const formik = useFormik({
    initialValues: {
      origins_test: [] as string[],
      minPrice: 0,
      maxPrice: 0,
    },
    onSubmit: () => {
      const parameters: IFilterParameters = {
        origins: formik.values.origins_test.join(","),
        minPrice: Number(formik.values.minPrice),
        maxPrice: Number(formik.values.maxPrice),
        pageCount: perPage,
        page,
        editable: "false",
      };
      debugger;
      dispatch(loadProducts(parameters));
      console.log(formik.values);
      console.log(formik.values.origins_test.join(","));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {origins.map((x: ICountries, i) => (
          <label>
            <Input
              type="checkbox"
              name="groups"
              value={x.value}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const value = event.target.checked ? event.target.value : "";
                return formik.setFieldValue(`origins_test.${i}`, value);
              }}
              checked={formik.values.origins_test.includes(x.value)}
            />
            {x.displayName}
          </label>
        ))}
        <label>
          {" "}
          Min price
          <Input
            name="minPrice"
            onBlur={formik.handleBlur}
            placeholder="min price"
            error={formik.errors.minPrice}
            value={minPrice}
            onChange={formik.handleChange}
            type="input"
            // touched={formik.touched.}
          />
        </label>
        ;
        <label>
          {" "}
          Max price
          <Input
            name="maxPrice"
            onBlur={formik.handleBlur}
            placeholder="max price"
            error={formik.errors.maxPrice}
            value={maxPrice}
            onChange={formik.handleChange}
            type="input"

            // touched={formik.touched.}
          />
        </label>
        <Button type="submit">Add Filters</Button>
      </form>
    </div>
  );
};
