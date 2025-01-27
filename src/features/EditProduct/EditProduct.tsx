import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { IEditProduct, IProduct } from "../../store/common/entitiesTypes";
import { Button } from "../../utils/common-styles";
import { editProductSchema } from "./EditValidation";
import { editProduct } from "../../store/redux/slices/productSlice";
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
      const newProd: IEditProduct = {
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
    <Form formik={formik} headline="Edit product" closeFunk={closeFunk}>
      <Button type="submit">Save</Button>
      <Button type="reset" onClick={() => formik.resetForm()}>
        Reset
      </Button>
    </Form>
  );
};
