import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import { IProduct } from "../state/entitiesTypes";
import { useAppState } from "../state/AppProvider";
import { actionsProduct } from "../state/actions";
import { Count } from "../components/Products/ProductPage/ProductPage-style";
import { Button } from "../common-utils/common-styles";

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
  const { dispatch } = useAppState();

  const addItem = () => {
    dispatch(
      actionsProduct.addProductToBasket({
        product,
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

CountQuality.propTypes = {
  // eslint-disable-next-line react/require-default-props,react/forbid-prop-types
  product: PropTypes.any,
  itemQuantity: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  buttonSize: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  width: PropTypes.number,
};

export default CountQuality;
