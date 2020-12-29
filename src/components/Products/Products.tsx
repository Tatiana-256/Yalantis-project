import React, {useEffect} from 'react';
import {productsAPI} from '../../API-Requests/products-API';
import {actionsProduct} from '../../state/actions';
import {useAppState} from '../../state/AppProvider';
import {Product} from './Product/Product';
import {ProductsWrap} from './Products-styles';


export const Products =() => {
    const {state, dispatch} = useAppState()


    useEffect(() => {
        productsAPI.getProducts()
            .then(data => dispatch(actionsProduct.setProducts(data.items)))
    }, [])


    return <ProductsWrap>
        {state.products.map(product => <Product product={product} key={product.id}/>)}
    </ProductsWrap>
}

