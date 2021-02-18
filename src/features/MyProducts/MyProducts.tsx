import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../store/redux/state-selectors";
import { ProductsView } from "../../components/ProductsView/ProductsView";
import { loadCountries } from "../../store/redux/slices/filterSlice";
import { loadProducts } from "../../store/redux/slices/productSlice";

export const MyProducts = () => {
  const dispatch = useDispatch();
  const { status, products } = useSelector(selectProducts);

  useEffect(() => {
    dispatch(loadProducts({ editable: "true" }));
    dispatch(loadCountries());
  }, [dispatch]);

  return (
    <div>
      <ProductsView status={status} products={products} isEditable="true" />
    </div>
  );
};
