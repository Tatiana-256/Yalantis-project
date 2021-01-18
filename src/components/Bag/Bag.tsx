import React from "react";
import { BagProd } from "./BagProd/BagProd";
import basketImg from "../../common-files/shopping-basket.png";
import { IBasketProduct } from "../../state/entitiesTypes";
import { BagWrap, Item, TotalWrap } from "./Bag-styles";
import { useProductsSelector } from "../../state/redux/state-selectors";

export const Bag = () => {
  const { basket } = useProductsSelector();

  if (basket.allProducts.length === 0) {
    return (
      <BagWrap>
        <img src={basketImg} style={{ height: "30vh" }} alt="basket" />
        Your basket is empty
      </BagWrap>
    );
  }

  const totalQuantity = basket.allProducts.reduce(
    (accumulator: number, current: IBasketProduct) => {
      return accumulator + current.quantity;
    },
    0
  );

  return (
    <div>
      <TotalWrap>
        <Item>Total sum: {basket.totalSum} ₴</Item>
        <Item>Count of products: {totalQuantity}</Item>
      </TotalWrap>
      {basket.allProducts.map((product) => (
        <BagProd productItem={product} key={product.product.id} />
      ))}
    </div>
  );
};
