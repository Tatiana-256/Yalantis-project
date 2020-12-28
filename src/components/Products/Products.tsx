import React, {useEffect} from 'react';
import {productsAPI} from '../../API-Requests/products-API';
import {actionsProduct} from '../../state/actions';
import {useAppState} from '../../state/AppProvider';


export const Products = () => {
    const {state, dispatch} = useAppState()

    useEffect(() => {
        productsAPI.getProducts()
            .then(data => dispatch(actionsProduct.setProducts(data.items)))
    }, [])


    return <div>
        {state.products.map(product => <div>
                <div>{product.name}</div>
                <div>{product.price}</div>
            </div>
        )}

    </div>
}
