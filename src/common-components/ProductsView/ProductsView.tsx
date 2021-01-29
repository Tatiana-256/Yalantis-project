import React from "react";

import { Filters } from "../../components/Filters/1.Filters";
import { ProductsWrap } from "../../components/Products/Products-styles";
import Pagination from "../../components/Pagination/Pagination";
import { IProduct } from "../../state/entitiesTypes";
import { Product } from "../../components/Products/Product/Product";

interface IProps {
  products: Array<IProduct>;
  status?: string;
  isEditable?: "true" | "false";
}

export const ProductsView: React.FC<IProps> = ({
  products,
  status,
  isEditable,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <Filters isEditable={isEditable} />
      <ProductsWrap>
        <Pagination isEditable={isEditable} />
        <div style={{ width: "100%" }} />
        {status === "succeeded" &&
          (products.length > 0 ? (
            products.map((product: IProduct) => (
              <Product
                isEditable={isEditable}
                product={product}
                key={product.id}
              />
            ))
          ) : (
            <div>No products found</div>
          ))}
      </ProductsWrap>
    </div>
  );
};
