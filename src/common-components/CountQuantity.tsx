import { IProduct } from "../state/entitiesTypes";
import React from "react";
import { useAppState } from "../state/AppProvider";
import { actionsProduct } from "../state/actions";
import { Count } from "../components/Products/ProductPage/ProductPage-style";
import { Button } from "../common-utils/common-styles";
import PropTypes  from "prop-types";

interface IProps {
  product: IProduct;
  itemQuantity: number;
  increment: () => void;
  decrement: () => void;
  buttonSize?: number;
  width?: number;
}

export const CountQuality: React.FC<IProps> = ({
  itemQuantity,
  decrement,
  increment,
  product,
  buttonSize,
  width,
}) => {
  const { dispatch } = useAppState();

  const addItem = () => {
    dispatch(
      actionsProduct.addProductToBasket({
        product: product,
        quantity: itemQuantity,
      })
    );
    dispatch(actionsProduct.addTotalSum(product.price * itemQuantity));
  };

  return (
    <>
      <Count width={`${width}%`}>
        <Button
          width={`${buttonSize}px`}
          height={`${buttonSize}px`}
          onClick={() => {
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
      <Button height={"50px"} width={"70%"} onClick={addItem}>
        Add to basket
      </Button>
    </>
  );
};

CountQuality.propTypes = {
  product: PropTypes.any,
  itemQuantity: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  buttonSize: PropTypes.number,
  width: PropTypes.number,
};
