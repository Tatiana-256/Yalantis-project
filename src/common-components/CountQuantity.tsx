import React from "react";
import { useDispatch } from "react-redux";

import { IProduct } from "../state/entitiesTypes";
import { Count } from "../components/Products/ProductPage/ProductPage-style";
import { Button } from "../common-utils/common-styles";
import {
  addProductToBasket,
  addTotalSum,
  // addTotalSum,
} from "../state/redux/slices/prosuctSlice";

interface IProps {
  product: IProduct;
  itemQuantity: number;
  increment: () => void;
  decrement: () => void;
  buttonSize?: number;
  width?: number;
}

const CountQuality: React.FC<IProps> = ({
  itemQuantity,
  decrement,
  increment,
  product,
  buttonSize,
  width,
}) => {
  const dispatch = useDispatch();

  const addItem = () => {
    // const sum = product.price * itemQuantity;
    dispatch(
      addProductToBasket({
        product,
        quantity: itemQuantity,
        // sum,
      })
    );
    dispatch(addTotalSum(product.price * itemQuantity));
  };

  return (
    <>
      <Count width={`${width}%`}>
        <Button
          width={`${buttonSize}px`}
          height={`${buttonSize}px`}
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            itemQuantity > 1 && decrement();
          }}
        >
          -
        </Button>
        <div style={{ margin: "0 4px" }}>{itemQuantity}</div>
        <Button
          width={`${buttonSize}px`}
          height={`${buttonSize}px`}
          onClick={increment}
        >
          +
        </Button>
      </Count>
      <Button height="50px" width="70%" onClick={addItem}>
        Add to basket
      </Button>
    </>
  );
};

export default CountQuality;
