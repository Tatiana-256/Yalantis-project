import React, { useEffect, useState } from "react";
import productsAPI from "../../API-Requests/products-API";
import { actionsProduct } from "../../state/actions";
import { useAppState } from "../../state/AppProvider";
import { Product } from "./Product/Product";
import { ProductsWrap } from "./Products-styles";

export const Products = () => {
  const { state, dispatch } = useAppState();
  const [error, setError] = useState(false);

  useEffect(() => {
    productsAPI.getProducts().then((data) => {
      if (data === "error") {
        setError((prevState) => !prevState);
      } else if (typeof data !== "string") {
        dispatch(actionsProduct.setProducts(data.items));
      }
    });
  }, [dispatch]);

  if (error) {
    return <div>Network error. Please try again later</div>;
  }

  return (
    <ProductsWrap>
      <div style={{ width: "100%" }} />
      {state.products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ProductsWrap>
  );
};
