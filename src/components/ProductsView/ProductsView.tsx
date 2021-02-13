import React from "react";

import { Filters } from "../../features/Filters/1.Filters";
import { ProductsWrap } from "../../features/Products/ProductsStyles";
import Pagination from "../../features/Pagination/Pagination";
import { IProduct } from "../../store/common/entitiesTypes";
import { Product } from "../../features/Products/Product/Product";
import { FilterForm } from "../../features/Filters/FilterForm/FiltersForm";

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
      <FilterForm isEditable={isEditable} />
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
