import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import productIcon from "../../../common-files/product-icon.png";
import { ImageProd, WrapperProd } from "./Product-style";
import { IProduct } from "../../../state/entitiesTypes";
import CountQuality from "../../../common-components/CountQuantity";
import { Button } from "../../../common-utils/common-styles";
import { EditProduct } from "../../EditProduct/EditProduct";

interface IProps {
  product: IProduct;
  isEditable?: "true" | "false";
}

export const Product: React.FC<IProps> = ({ product, isEditable }) => {
  const [itemQuantity, setItemQuantity] = useState(1);

  const { name, price, origin, id } = product;

  const history = useHistory();
  const goToProductPage = () => {
    history.push(`products/${id}`);
  };

  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow((prevState) => !prevState);
  };

  if (show) {
    return <EditProduct product={product} closeFunk={openModal} />;
  }

  return (
    <WrapperProd>
      <ImageProd src={productIcon} onClick={goToProductPage} />
      <div>{name}</div>
      <div>Price: {price} ₴</div>
      <div>Origin: {origin}</div>
      {isEditable === "true" ? (
        <Button height="40px" width="80%" onClick={openModal}>
          Edit product
        </Button>
      ) : (
        <CountQuality
          width={40}
          buttonSize={30}
          product={product}
          itemQuantity={itemQuantity}
          decrement={() => setItemQuantity((prev) => prev - 1)}
          increment={() => setItemQuantity((prev) => prev + 1)}
        />
      )}
    </WrapperProd>
  );
};

Product.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  isEditable: PropTypes.any,
};

Product.defaultProps = {
  isEditable: undefined,
};
