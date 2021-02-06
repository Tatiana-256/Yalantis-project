import { object, string } from "yup";
import { useSelector } from "react-redux";
import { selectFilters } from "../../store/redux/state-selectors";
import { ICountries } from "../../store/redux/slices/filterSlice";

export const newProduct = {
  shape: {
    name: "",
    price: "",
    origin: "",
  },
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

export const useOriginsOptions = () => {
  return useSelector(selectFilters).countries.map((country: ICountries) => {
    return {
      value: country.value,
      label: country.displayName,
    };
  });
};
