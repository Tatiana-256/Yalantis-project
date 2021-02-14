import React from "react";
import { useSelector } from "react-redux";

import { selectProducts } from "../../store/redux/state-selectors";
import { ProductsView } from "../../components/ProductsView/ProductsView";
import { AddProduct } from "../AddProduct/AddProduct";
import { RootState } from "../../store/redux/redux-store";

export const Products = () => {
  const { open } = useSelector((state: RootState) => state.ui);
  const { status, products } = useSelector(selectProducts);
  if (status === "rejected") {
    return <div>There is some problem with loading data </div>;
  }
  if (open) {
    return <AddProduct />;
  }
  return <ProductsView products={products} status={status} />;
};
