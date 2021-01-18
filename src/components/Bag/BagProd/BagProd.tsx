import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { IBasketProduct } from "../../../state/entitiesTypes";
import { ImageProd } from "../../Products/Product/Product-style";
import { Info, Wrap } from "../Bag-styles";
import { Button } from "../../../common-utils/common-styles";
import { Count } from "../../Products/ProductPage/ProductPage-style";
import trash from "../../../common-files/trash-icon.png";
import productIcon from "../../../common-files/product-icon.png";
import {
  addProductToBasket,
  addTotalSum,
  deleteFromTotalSum,
  deleteProductFromBasket,
} from "../../../state/redux/prosuctSlice";

interface IProd {
  productItem: IBasketProduct;
}

export const BagProd: React.FC<IProd> = ({ productItem }) => {
  const { product, quantity } = productItem;
  const [inputQuantity, setInputQuantity] = useState(quantity);
  const dispatch = useDispatch();

  const history = useHistory();

  const goToProductPage = () => {
    history.push(`products/${product.id}`);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQuantity(Number(event.currentTarget.value));
  };

  const addOneMoreItem = () => {
    setInputQuantity((prevState) => prevState + 1);
    dispatch(addProductToBasket({ product, quantity: 1 }));
    dispatch(addTotalSum(product.price));
  };

  const deleteItem = () => {
    dispatch(deleteProductFromBasket(product.id));
    dispatch(deleteFromTotalSum(product.price * inputQuantity));
  };
  return (
    <Wrap>
      <div style={{ width: "100px" }}>
        <ImageProd src={productIcon} onClick={goToProductPage} />
      </div>
      <Info>
        <div style={{ fontWeight: "bold" }}>{product.name}</div>
        <Count width={`${14}%`}>
          <Button
            width={`${40}px`}
            height={`${40}px`}
            // onClick={() => {
            //   // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            //   itemQuantity > 1 && decrement();
            // }}
          >
            -
          </Button>
          <input
            style={{
              margin: "0 4px",
              height: "30px",
              width: "30px",
              textAlign: "center",
              border: "2px solid #363b4d",
              borderRadius: "13px",
              outline: "none",
            }}
            value={inputQuantity}
            onChange={onInputChange}
          />
          <Button width={`${40}px`} height={`${40}px`} onClick={addOneMoreItem}>
            +
          </Button>
        </Count>
        <div>Price for one item: {product.price} ₴</div>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <img
          src={trash}
          alt="trash"
          style={{ height: "20%", cursor: "pointer" }}
          onClick={deleteItem}
          onKeyPress={() => {}}
        />
      </Info>
    </Wrap>
  );
};

BagProd.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  productItem: PropTypes.any.isRequired,
};

// {/*<div>Quantity: {quantity}</div>*/}
