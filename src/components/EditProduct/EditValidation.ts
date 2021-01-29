import { object, string } from "yup";

export const editProductSchema = {
  schema: object().shape({
    name: string()
      .matches(/^(?!.* )/, "No space")
      .required("Product name is required")
      .matches(/[a-z]{2,20}/, "Product name must contain from 3 to 20 letters"),
    price: string()
      .matches(/^[1-9][0-9]*$/, "Price must be more than 0")
      .required("Price is required"),
  }),
};
