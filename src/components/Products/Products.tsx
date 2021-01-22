import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import filtersAPI from "../../API-Requests/filters-API";
import productsAPI from "../../API-Requests/products-API";
import { IProduct } from "../../state/entitiesTypes";
import { setProducts, setStatus } from "../../state/redux/prosuctSlice";
import { useProductsSelector } from "../../state/redux/state-selectors";
import { Filters } from "../Filters/1.Filters";
import Pagination from "../Pagination/Pagination";
import { Product } from "./Product/Product";
import { ProductsWrap } from "./Products-styles";
import { setCountries, setPageOptions } from "../../state/redux/filterSlise";

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus("loading"));
    productsAPI.getProducts().then((data) => {
      if (typeof data !== "string") {
        dispatch(setProducts(data.items));
        dispatch(
          setPageOptions({
            page: data.page,
            perPage: data.perPage,
            totalItems: data.totalItems,
          })
        );
        dispatch(setStatus("succeeded"));
      } else if (data === "error") dispatch(setStatus("failed"));
    });
    filtersAPI.getOriginCountries().then((data) => {
      dispatch(setCountries(data));
    });
  }, [dispatch]);

  const { status, products } = useProductsSelector();

  if (status === "failed") {
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
