import {actionsProduct} from "../state/actions";
import {useAppState} from "../state/AppProvider";
import {IProduct} from "../state/entitiesTypes";


export const useAddItem = (product: IProduct) => {

    const {state, dispatch} = useAppState()


    dispatch(actionsProduct.addProductToBasket({
        product: product,
        quantity: 1
    }))
    dispatch(actionsProduct.addTotalSum(product.price))
    console.log(state.basket)
}
