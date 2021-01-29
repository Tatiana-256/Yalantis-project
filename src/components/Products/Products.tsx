import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../state/redux/state-selectors";
import { ProductsView } from "../../common-components/ProductsView/ProductsView";
import { setCountries } from "../../state/redux/slices/filterSlise";
import { AddProduct } from "../AddProduct/AddProduct";
import { RootState } from "../../state/redux/redux-store";

export const Products = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    dispatch(setCountries());
  }, [dispatch]);

  const { status, products } = useSelector(selectProducts);

  if (status === "rejected") {
    return <div>There is some problem with loading data </div>;
  }

  if (open) {
    return <AddProduct />;
  }

  return <ProductsView products={products} status={status} />;
};
