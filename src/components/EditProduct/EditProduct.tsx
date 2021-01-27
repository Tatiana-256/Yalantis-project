import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { ModalWrapper } from "../../common-components/ModalsWrapper/ModalsWrapper";
import Portal from "../../common-components/Modal";
import { IProduct } from "../../state/entitiesTypes";
import { newProduct } from "../AddProduct/ProductValidation";
import { Input } from "../../common-components/CommonInput/CommonInput";

interface IProps {
  product: IProduct;
  closeFunk: () => void;
}

export const EditProduct: React.FC<IProps> = ({ product, closeFunk }) => {
  const { name, price, createdAt } = product;

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: product,
    validationSchema: newProduct.schema,
    onSubmit: () => {
      console.log("done");
      // const newProd: { product: INewProduct } = {
      //   product: {
      //     name: formik.values.productName,
      //     price: Number(formik.values.price),
      //     origin: formik.values.origin,
      //   },
      // };
      // dispatch(addNewProduct(newProd));
      // dispatch(uiActions.modal.close());
    },
  });

  return (
    <Portal>
      <ModalWrapper headline="Edit product" handler={closeFunk}>
        <Input
          name="name"
          onBlur={formik.handleBlur}
          placeholder="Product name"
          error={formik.errors.name}
          value={formik.values.name}
          onChange={formik.handleChange}
          touched={formik.touched.name}
        />
      </ModalWrapper>
    </Portal>
  );
};

EditProduct.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropTypes.any.isRequired,
};
