// eslint-disable-next-line import/no-cycle
import { ActionsType, AppStateType } from "./actions";
import { IBasketProduct, IProduct } from "./entitiesTypes";
import { addItemToBasket } from "./reducer.utils";

interface InitialState {
  loading: boolean;
  products: IProduct[] | null;
  basket: {
    allProducts: IBasketProduct[];
    totalSum: number;
  };
}

export const initialState: InitialState = {
  loading: true,
  products: null,
  basket: {
    allProducts: [],
    totalSum: 0
  }
};

export const stateReducer = (
  state: AppStateType,
  action: ActionsType
): AppStateType => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: !state.loading
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products
      };
    case "ADD_PRODUCTS":
      return {
        ...state,
        basket: {
          ...state.basket,
          allProducts: addItemToBasket(
            state.basket.allProducts,
            action.product
          )
        }
      };
    case "ADD_TOTAL_SUM":
      return {
        ...state,
        basket: {
          ...state.basket,
          totalSum: state.basket.totalSum + action.number
        }
      };
    default: {
      console.error(new Error("Action is not supported"));
      return state;
    }
  }
};
