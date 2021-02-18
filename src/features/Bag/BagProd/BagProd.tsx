import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { IBasketProduct } from "../../../store/common/entitiesTypes";
import { ImageProd } from "../../Products/Product/ProductStyles";
import { Info, Wrap } from "../BagStyles";
import { Button } from "../../../utils/common-styles";
import { Count } from "../../Products/ProductPage/ProductPageStyles";
import trash from "../../../assets/trash-icon.png";
import productIcon from "../../../assets/product-icon.png";
import {
  addProductToBasket,
  decreaseProductInBasket,
  deleteProductFromBasket,
} from "../../../store/redux/slices/productSlice";

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
    dispatch(
      addProductToBasket({ product, quantity: 1, sum: Number(product.price) })
    );
  };

  const decreaseProduct = () => {
    if (inputQuantity > 1) {
      setInputQuantity((prevState) => prevState - 1);
      dispatch(
        decreaseProductInBasket({ id: product.id, sum: Number(product.price) })
      );
    }
  };

  const deleteItem = () => {
    const sum = Number(product.price * inputQuantity);
    dispatch(deleteProductFromBasket({ id: product.id, sum }));
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
            onClick={decreaseProduct}
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
