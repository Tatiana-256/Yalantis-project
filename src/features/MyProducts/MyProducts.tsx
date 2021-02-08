import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../store/redux/state-selectors";
import { loadFilteredProducts } from "../../store/redux/thunk-creators";
import { ProductsView } from "../../components/ProductsView/ProductsView";
import { setCountries } from "../../store/redux/slices/filterSlice";

export const MyProducts = () => {
  const dispatch = useDispatch();
  const { status, products } = useSelector(selectProducts);

  useEffect(() => {
    dispatch(loadFilteredProducts({ editable: "true" }));
    dispatch(setCountries());
  }, [dispatch]);

  return (
    <div>
      <ProductsView status={status} products={products} isEditable="true" />
    </div>
  );
};
