import {ActionsType, AppStateType} from "./actions"


export const initialState = {
    loading: false as boolean,
}


export const stateReducer = (state: AppStateType, action: ActionsType): AppStateType => {
    switch (action.type) {

        default: {
            console.error(new Error('Action is not supported'))
            return state
        }
    }
}

