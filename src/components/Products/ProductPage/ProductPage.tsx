import React, { useEffect, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { productsAPI } from "../../../API-Requests/products-API";
import { IProduct } from "../../../state/entitiesTypes";
import productIcon from "../../../common-files/product-icon.png";
import { ProdInfo, Wrapper } from "./ProductPage-style";
import { CountQuality } from "../../../common-components/CountQuantity";

interface MatchParams {
  id: string;
}

export const ProductPage = ({ match }: RouteComponentProps<MatchParams>) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [error, setError] = useState(false);

  const productId = match.params.id;

  useEffect(() => {
    productsAPI.getProduct(productId).then((data) => {
      if (data === "error") {
        setError((prevState) => !prevState);
      } else {
        // @ts-ignore
        setProduct(data);
      }
    });
  }, [productId]);

  if (error) {
    return <div>Network error. Please try again later</div>;
  }

  return (
    <Wrapper>
      <img src={productIcon} style={{ height: "300px" }} alt={"Product"} />
      <div
        style={{
          width: "70%",
          padding: "0 5%",
        }}
      >
        {product && (
          <>
            <ProdInfo>
              <div style={{ fontWeight: "bold" }}>{product.name}</div>
              <div>Price: {product.price} ₴</div>
              <div>Created at: {product.createdAt}</div>
              <div>Country of origin: {product.origin}</div>
            </ProdInfo>
            <div style={{ display: "flex" }}>
              <CountQuality
                width={35}
                buttonSize={40}
                itemQuantity={itemQuantity}
                decrement={() => setItemQuantity((prev) => prev - 1)}
                increment={() => setItemQuantity((prev) => prev + 1)}
                product={product}
              />
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};
