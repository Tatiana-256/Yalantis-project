import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { IProduct } from "../../store/entitiesTypes";
import { Button } from "../../utils/common-styles";
import { editProductSchema } from "./EditValidation";
import {
  editProduct,
  INewProduct,
} from "../../store/redux/slices/prosuctSlice";
import { Form } from "../../components/Form/Form";

interface IProps {
  product: IProduct;
  closeFunk: () => void;
}

export const EditProduct: React.FC<IProps> = ({ product, closeFunk }) => {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: product,
    validationSchema: editProductSchema.schema,
    onSubmit: () => {
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
    <Form formik={formik} headline="Edit product">
      <Button type="submit">Save</Button>
      <Button type="reset" onClick={() => formik.resetForm()}>
        Reset
      </Button>
    </Form>
  );
};
