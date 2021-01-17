import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { IBasketProduct } from "../../../state/entitiesTypes";
import { ImageProd } from "../../Products/Product/Product-style";
import productIcon from "../../../common-files/product-icon.png";
import { Info, Wrap } from "../Bag-styles";

interface IProd {
  productItem: IBasketProduct;
}

export const BagProd: React.FC<IProd> = ({ productItem }) => {
  const { product, quantity } = productItem;

  const history = useHistory();

  const goToProductPage = () => {
    history.push(`products/${product.id}`);
  };

  return (
    <Wrap>
      <div style={{ width: "100px" }}>
        <ImageProd src={productIcon} onClick={goToProductPage} />
      </div>
      <Info>
        <div style={{ fontWeight: "bold" }}>{product.name}</div>
        <div>Price for one item: {product.price} ₴</div>
        <div>Quantity: {quantity}</div>
      </Info>
    </Wrap>
  );
};

BagProd.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  productItem: PropTypes.any.isRequired,
};
