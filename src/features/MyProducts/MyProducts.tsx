import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../store/redux/state-selectors";
import { ProductsView } from "../../components/ProductsView/ProductsView";
import { loadCountries } from "../../store/redux/slices/filterSlice";
import { loadProducts } from "../../store/redux/slices/productSlice";
import { getURL } from "../../utils/url.utils.";

export const MyProducts = () => {
  const dispatch = useDispatch();
  const { status, products } = useSelector(selectProducts);
  const location = useLocation();
  useEffect(() => {
    // const { maxPrice, minPrice, origins, page, perPage } = getURL(location);

    dispatch(
      loadProducts({
        // origins,
        // minPrice,
        // maxPrice,
        // pageCount: perPage,
        // page,
        editable: "true",
      })
    );
    dispatch(loadCountries());
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div>
      <ProductsView status={status} products={products} isEditable="true" />
    </div>
  );
};
