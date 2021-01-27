import React from "react";
import PropTypes from "prop-types";

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
              <Product product={product} key={product.id} />
            ))
          ) : (
            <div>No products found</div>
          ))}
      </ProductsWrap>
    </div>
  );
};

ProductsView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.any.isRequired,
  status: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  isEditable: PropTypes.any,
};

ProductsView.defaultProps = {
  status: "succeeded",
  isEditable: "false",
};
