import React from 'react';
import {useAppState} from "../../state/AppProvider";


export const Bag = () => {
    const {state, dispatch} = useAppState()

    const {allProducts} = state.basket


    return <div>
        {allProducts.map(product => <div key={product.product.id}>
            <div>{product.product.name}</div>
            <div>{product.product.price}</div>
            <div>{product.quantity}</div>
        </div>)}
    </div>
}
