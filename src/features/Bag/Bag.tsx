import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { BagProd } from "./BagProd/BagProd";
import basketImg from "../../assets/shopping-basket.png";
import { IBasketProduct } from "../../store/common/entitiesTypes";
import { BagWrap, ButtonWrap, Item, TotalWrap } from "./BagStyles";
import {
  selectBagProducts,
  selectProducts,
} from "../../store/redux/state-selectors";
import { Button } from "../../utils/common-styles";
import { addOrder } from "../../store/redux/slices/ordersSlice";

export const Bag = () => {
  const { basket } = useSelector(selectProducts);
  const dispatch = useDispatch();
  const history = useHistory();

  const bagProdAPI = useSelector(selectBagProducts);

  const orderProducts = async () => {
    await dispatch(addOrder({ order: { pieces: bagProdAPI } }));
    history.push("/myOrders");
  };

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
      <ButtonWrap>
        <Button
          height="60px"
          width="310px"
          fontSize="1.7rem"
          onClick={orderProducts}
        >
          Buy now
        </Button>
      </ButtonWrap>
    </div>
  );
};
