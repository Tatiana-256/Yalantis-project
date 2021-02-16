import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import productIcon from "../../../assets/product-icon.png";
import { ProdInfo, Wrapper } from "./ProductPageStyles";
import CountQuality from "../../../components/CountQuantity/CountQuantity";
import { loadProduct } from "../../../store/redux/slices/productSlice";
import { selectProducts } from "../../../store/redux/state-selectors";

interface MatchParams {
  id: string;
}

const ProductPage = ({ match }: RouteComponentProps<MatchParams>) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const dispatch = useDispatch();

  const productId = match.params.id;

  const { product, status } = useSelector(selectProducts);

  useEffect(() => {
    dispatch(loadProduct(productId));
  }, [productId, dispatch]);

  if (status === "loading") {
    return <div>...loading</div>;
  }
  if (status === "rejected") {
    return <div>something wrong :( </div>;
  }

  return (
    <Wrapper>
      <img src={productIcon} style={{ height: "300px" }} alt="Product" />
      <div
        style={{
          width: "70%",
          padding: "0 3.5rem",
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

export default ProductPage;
