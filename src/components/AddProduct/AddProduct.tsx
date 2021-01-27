import React from "react";
import { useFormik } from "formik";
import Select from "react-select";
import { useDispatch } from "react-redux";

import { newProduct, useOriginsOptions } from "./ProductValidation";
import { FormWrap } from "./AddFile";
import { addNewProduct, INewProduct } from "../../state/redux/OwnProductsSlice";
import { uiActions } from "../../state/redux/UI-handling/ui-actions";
import Portal from "../../common-components/Modal";
import { ModalWrapper } from "../../common-components/ModalsWrapper/ModalsWrapper";
import { Input } from "../../common-components/CommonInput/CommonInput";
import { Button, FlexStyle } from "../../common-utils/common-styles";

export const AddProduct = () => {
  const options = useOriginsOptions();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: newProduct.shape,
    validationSchema: newProduct.schema,
    onSubmit: () => {
      const newProd: { product: INewProduct } = {
        product: {
          name: formik.values.productName,
          price: Number(formik.values.price),
          origin: formik.values.origin,
        },
      };
      dispatch(addNewProduct(newProd));
      dispatch(uiActions.modal.close());
    },
  });

  const { price, productName, origin } = formik.values;
  const disabled = !(productName.length > 3 && price && origin);

  return (
    <Portal>
      <ModalWrapper headline="Add new product">
        <form onSubmit={formik.handleSubmit}>
          <FormWrap>
            1. Product name
            <Input
              name="productName"
              onBlur={formik.handleBlur}
              placeholder="Product name"
              error={formik.errors.productName}
              value={formik.values.productName}
              onChange={formik.handleChange}
              touched={formik.touched.productName}
            />
            2. Price
            <Input
              type="number"
              name="price"
              onBlur={formik.handleBlur}
              placeholder="Price"
              error={formik.errors.price}
              value={formik.values.price}
              onChange={formik.handleChange}
              touched={formik.touched.price}
            />
          </FormWrap>
          3. Origin
          <Select
            name="role"
            options={options}
            onChange={(option) => formik.setFieldValue("origin", option!.value)}
            value={options.find(
              (option) => option.value === formik.values.origin
            )}
          />
          <FlexStyle>
            <Button type="submit" disabled={Boolean(disabled)}>
              Add new product
            </Button>
          </FlexStyle>
        </form>
      </ModalWrapper>
    </Portal>
  );
};
