import React from "react";
import { useAppState } from "../../state/AppProvider";
import { BagProd } from "./BagProd/BagProd";
import basket from "../../common-files/shopping-basket.png";
import { IBasketProduct } from "../../state/entitiesTypes";
import { BagWrap, Item, TotalWrap } from "./Bag-styles";

export const Bag = () => {
  const { state } = useAppState();

  const { allProducts, totalSum } = state.basket;

  if (allProducts.length === 0) {
    return (
      <BagWrap>
        <img src={basket} style={{ height: "30vh" }} alt="basket" />
        Your basket is empty
      </BagWrap>
    );
  }

  const totalQuantity = allProducts.reduce(
    (accumulator: number, current: IBasketProduct) => {
      return accumulator + current.quantity;
    },
    0
  );

  return (
    <div>
      <TotalWrap>
        <Item>Total sum: {totalSum} ₴</Item>
        <Item>Count of products: {totalQuantity}</Item>
      </TotalWrap>
      {allProducts.map((product) => (
        <BagProd productItem={product} key={product.product.id} />
      ))}
    </div>
  );
};
