// eslint-disable-next-line import/no-cycle
import { initialState } from "./stateReducer";
import { InferActionsTypes, IProduct } from "./entitiesTypes";

export type AppStateType = typeof initialState;

export type ActionsType = InferActionsTypes<typeof actionsProduct>;

export const actionsProduct = {
  setLoading: () => ({ type: "SET_LOADING" } as const),
  setProducts: (products: Array<IProduct>) =>
    ({ type: "SET_PRODUCTS", products } as const),
  addProductToBasket: (product: { product: IProduct; quantity: number }) =>
    ({ type: "ADD_PRODUCTS", product } as const),
  addTotalSum: (number: number) => ({ type: "ADD_TOTAL_SUM", number } as const),
};
