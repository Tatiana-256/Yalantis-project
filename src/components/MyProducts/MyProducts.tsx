import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../state/redux/state-selectors";
import { loadFilteredProducts } from "../../state/redux/thunk-creators";
import { ProductsView } from "../../common-components/ProductsView/ProductsView";
import filtersAPI from "../../API-Requests/filters-API";
import { setCountries } from "../../state/redux/filterSlise";

export const MyProducts = () => {
  const dispatch = useDispatch();
  const { status, products } = useSelector(selectProducts);

  useEffect(() => {
    dispatch(loadFilteredProducts({ editable: "true" }));
    filtersAPI.getOriginCountries().then((data) => {
      dispatch(setCountries(data));
    });
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      <ProductsView status={status} products={products} isEditable="true" />
    </div>
  );
};
