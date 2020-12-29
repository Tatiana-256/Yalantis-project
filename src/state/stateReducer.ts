import {ActionsType, AppStateType} from "./actions"
import {IBasketProduct, IProduct} from "./entitiesTypes";


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
        default: {
            console.error(new Error('Action is not supported'))
            return state
        }
    }
}




