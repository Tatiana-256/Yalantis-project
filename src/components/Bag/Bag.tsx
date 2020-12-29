import React from 'react';
import {useAppState} from "../../state/AppProvider";
import {BagProd} from "./BagProd/BagProd";


export const Bag = () => {
    const {state, dispatch} = useAppState()

    const {allProducts} = state.basket

    if (allProducts.length === 0) {
        return <div>
            Basket is empty
        </div>
    }

    return <div>
        {allProducts.map(product => <BagProd productItem={product}/>)}
    </div>
}
