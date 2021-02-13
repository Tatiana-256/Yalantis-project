import { number, object } from "yup";

export const filterSchema = {
  schema: object().shape({
    minPrice: number().positive(),
    maxPrice: number().positive(),
  }),
};
