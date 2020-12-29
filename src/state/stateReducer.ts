import {ActionsType, AppStateType} from "./actions"
import {IBasketProduct, IProduct} from "./entitiesTypes";
import {addItemToBasket} from "./reducer.utils";


export const initialState = {
    loading: true as boolean,
    products: [] as Array<IProduct>,
    basket: {
        allProducts: [] as Array<IBasketProduct>,
        totalSum: 0 as number
    }
};


export const stateReducer = (state: AppStateType, action: ActionsType): AppStateType => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: !state.loading
            }
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.products
            }
        case "ADD_PRODUCTS":
            return {
                ...state,
                basket: {
                    ...state.basket,
                    allProducts: addItemToBasket(state.basket.allProducts, action.product
                    )
                }
                // cartItems: addItemToCart(state.cartItems, action.payload),

            }
        default: {
            console.error(new Error('Action is not supported'))
            return state
        }
    }
}




