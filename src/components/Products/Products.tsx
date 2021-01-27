import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import filtersAPI from "../../API-Requests/filters-API";
import { IProduct } from "../../state/entitiesTypes";
import { selectProducts } from "../../state/redux/state-selectors";
import { Filters } from "../Filters/1.Filters";
import Pagination from "../Pagination/Pagination";
import { Product } from "./Product/Product";
import { ProductsWrap } from "./Products-styles";
import { setCountries } from "../../state/redux/filterSlise";
import { loadFilteredProducts } from "../../state/redux/thunk-creators";

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFilteredProducts());
    filtersAPI.getOriginCountries().then((data) => {
      dispatch(setCountries(data));
    });
  }, [dispatch]);

  const { status, products } = useSelector(selectProducts);

  if (status === "rejected") {
    return <div>There is some problem with loading data </div>;
  }

  return (
    <div style={{ display: "flex" }}>
      <Filters />
      <ProductsWrap>
        <Pagination />
        <div style={{ width: "100%" }} />
        {status === "succeeded" &&
          (products.length > 0 ? (
            products.map((product: IProduct) => (
              <Product product={product} key={product.id} />
            ))
          ) : (
            <div>No products found</div>
          ))}
      </ProductsWrap>
    </div>
  );
};
