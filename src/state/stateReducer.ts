import {ActionsType, AppStateType} from "./actions"
import {IProduct} from "./entitiesTypes";


export const initialState = {
    loading: true as boolean,
    products: [] as Array<IProduct>
};


export const stateReducer = (state: AppStateType, action: ActionsType): AppStateType => {
    switch (action.type) {

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




