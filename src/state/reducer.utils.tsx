import { IBasketProduct } from "./entitiesTypes";

export const addItemToBasket = (
  basketItems: Array<IBasketProduct>,
  basketItemToAdd: IBasketProduct
) => {
  const existingBasketItem = basketItems.find(
    (basketItem) => basketItem.product.id === basketItemToAdd.product.id
  );

  if (existingBasketItem) {
    return basketItems.map((basketItem) =>
      basketItem.product.id === basketItemToAdd.product.id
        ? {
            ...basketItem,
            quantity: basketItem.quantity + basketItemToAdd.quantity,
          }
        : basketItem
    );
  }
  return [
    ...basketItems,
    { ...basketItemToAdd, quantity: basketItemToAdd.quantity },
  ];
};

export const deleteItemFromBasket = (
  basketItems: Array<IBasketProduct>,
  itemId: string
) => {
  return basketItems.filter(
    (item: IBasketProduct) => item.product.id !== itemId
  );
};
