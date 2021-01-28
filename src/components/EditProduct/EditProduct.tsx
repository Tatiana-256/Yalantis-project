import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import Select from "react-select";

import { ModalWrapper } from "../../common-components/ModalsWrapper/ModalsWrapper";
import Portal from "../../common-components/Modal";
import { IProduct } from "../../state/entitiesTypes";
import { useOriginsOptions } from "../AddProduct/ProductValidation";
import { Input } from "../../common-components/CommonInput/CommonInput";
import { Button, FlexStyle } from "../../common-utils/common-styles";
import { editProduct, INewProduct } from "../../state/redux/OwnProductsSlice";
import { editProductSchema } from "./EditValidation";

interface IProps {
  product: IProduct;
  closeFunk: () => void;
}

export const EditProduct: React.FC<IProps> = ({ product, closeFunk }) => {
  const options = useOriginsOptions();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: product,
    validationSchema: editProductSchema.schema,
    onSubmit: () => {
      console.log("done");
      const newProd: { product: INewProduct; productId: string } = {
        product: {
          name: formik.values.name,
          price: Number(formik.values.price),
          origin: formik.values.origin,
        },
        productId: formik.values.id,
      };
      dispatch(editProduct(newProd));
      closeFunk();
    },
  });

  return (
    <Portal>
      <ModalWrapper headline="Edit product" handler={closeFunk}>
        <form onSubmit={formik.handleSubmit}>
          1. Product name
          <Input
            name="name"
            onBlur={formik.handleBlur}
            placeholder="Product name"
            error={formik.errors.name}
            value={formik.values.name}
            onChange={formik.handleChange}
            touched={formik.touched.name}
          />
          2. Price
          <Input
            type="number"
            name="price"
            onBlur={formik.handleBlur}
            placeholder="Price"
            error={formik.errors.price}
            value={formik.values.price.toString()}
            onChange={formik.handleChange}
            touched={formik.touched.price}
          />
          3. Origin
          <Select
            name="role"
            options={options}
            onChange={(option) => formik.setFieldValue("origin", option!.value)}
            value={options.find(
              (option) => option.value === formik.values.origin
            )}
          />
          <Button type="submit">Save</Button>
          <Button type="reset" onClick={() => formik.resetForm()}>
            Reset
          </Button>
        </form>
      </ModalWrapper>
    </Portal>
  );
};

EditProduct.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropTypes.any.isRequired,
  closeFunk: PropTypes.func.isRequired,
};
