import {InferActionsTypes} from "./entitiesTypes";
import {initialState} from "./stateReducer";

export type AppStateType = typeof initialState

export type ActionsType = InferActionsTypes<typeof actions>

export const actions = {


}
