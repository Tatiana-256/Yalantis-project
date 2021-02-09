import React from "react";
import { IProduct } from "../../../store/common/entitiesTypes";

interface IProps {
  product: IProduct;
}

export const OrderInfo: React.FC<IProps> = ({ product }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "5px",
        justifyContent: "space-between",
        width: "90%",
        borderBottom: "1px solid black",
      }}
    >
      <div>{product.name}</div>
      <div>{product.price} $</div>
    </div>
  );
};
