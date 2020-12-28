import {InferActionsTypes, IProduct} from "./entitiesTypes";
import {initialState} from "./stateReducer";

export type AppStateType = typeof initialState

export type ActionsType = InferActionsTypes<typeof actionsProduct>

export const actionsProduct = {
    setProducts: (products: Array<IProduct>) => ({type: 'SET_PRODUCTS', products} as const),
}
