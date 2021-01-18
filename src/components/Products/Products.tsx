import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import productsAPI from "../../API-Requests/products-API";
import { IProduct } from "../../state/entitiesTypes";
import { setProducts, setStatus } from "../../state/redux/prosuctSlice";
import { useProductsSelector } from "../../state/redux/state-selectors";
import { Filters } from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import { Product } from "./Product/Product";
import { ProductsWrap } from "./Products-styles";

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus("loading"));
    productsAPI.getProducts().then((data) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (typeof data !== "string") {
        dispatch(setProducts(data.items));
        dispatch(setStatus("succeeded"));
      } else if (data === "error") dispatch(setStatus("failed"));
    });
  }, [dispatch]);

  const { status, products } = useProductsSelector();

  if (status === "loading") return <div>loading...</div>;

  return (
    <div style={{ display: "flex" }}>
      <Filters />
      <ProductsWrap>
        <Pagination currentPage={1} />
        <div style={{ width: "100%" }} />
        {/* eslint-disable-next-line no-nested-ternary */}
        {status === "succeeded" ? (
          products.map((product: IProduct) => (
            <Product product={product} key={product.id} />
          ))
        ) : status === "failed" ? (
          <div>There is some problem with loading data </div>
        ) : (
          <div />
        )}
        <Pagination currentPage={1} />
      </ProductsWrap>
    </div>
  );
};
