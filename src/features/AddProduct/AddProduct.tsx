import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { newProduct } from "./ProductValidation";
import { uiActions } from "../../store/redux/UI-handling/ui-actions";
import { Button, FlexStyle } from "../../utils/common-styles";
import {
  addNewProduct,
  INewProduct,
} from "../../store/redux/slices/prosuctSlice";
import { Form } from "../../components/Form/Form";

export const AddProduct = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: newProduct.shape,
    validationSchema: newProduct.schema,
    onSubmit: () => {
      const newProd: { product: INewProduct } = {
        product: {
          name: formik.values.name,
          price: Number(formik.values.price),
          origin: formik.values.origin,
        },
      };
      dispatch(addNewProduct(newProd));
      dispatch(uiActions.modal.close());
    },
  });

  const { price, name, origin } = formik.values;
  const disabled = !(name.length > 3 && price && origin);

  return (
    <Form formik={formik} headline="Add new product">
      <FlexStyle>
        <Button type="submit" disabled={Boolean(disabled)}>
          Add new product
        </Button>
      </FlexStyle>
    </Form>
  );
};
