import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../state/redux/state-selectors";
import { loadFilteredProducts } from "../../state/redux/thunk-creators";
import { ProductsView } from "../../common-components/ProductsView/ProductsView";

export const MyProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFilteredProducts({ editable: "true" }));
  }, [dispatch]);

  const { status, products } = useSelector(selectProducts);

  console.log(products);

  return (
    <div>
      <ProductsView status={status} products={products} isEditable="true" />
    </div>
  );
};
