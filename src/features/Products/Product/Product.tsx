import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import productIcon from "../../../assets/product-icon.png";
import { ImageProd, WrapperProd } from "./ProductStyles";
import { IProduct } from "../../../store/common/entitiesTypes";
import CountQuality from "../../../components/CountQuantity/CountQuantity";
import { Button } from "../../../utils/common-styles";
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
