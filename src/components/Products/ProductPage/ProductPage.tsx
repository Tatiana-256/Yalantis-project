import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {productsAPI} from "../../../API-Requests/products-API";
import {IProduct} from "../../../state/entitiesTypes";
import productIcon from '../../../common-files/product-icon.png'
import {ProdInfo, Wrapper} from './ProductPage-style';
import {CountQuality} from '../../../common-components/CountQuantity';


interface MatchParams {
    id: string;
}

export const ProductPage = ({match}: RouteComponentProps<MatchParams>) => {


    const [product, setProduct] = useState<IProduct | null>(null)
    const [itemQuantity, setItemQuantity] = useState(1)

    const productId = match.params.id

    useEffect(() => {
        productsAPI.getProduct(productId)
            .then(data => data && setProduct(data))
    }, [])


    return <Wrapper>
        <img src={productIcon} style={{height: '300px'}}/>
        <div style={{
            width: "70%",
            padding: "0 5%"
        }}>
            <ProdInfo>
                <div style={{fontWeight: "bold"}}>{product.name}</div>
                <div>Price: {product.price} ₴</div>
                <div>Created at: {product.createdAt}</div>
                <div>Country of origin: {product.origin}</div>
            </ProdInfo>
            <div style={{display: "flex"}}>
                <CountQuality
                    width={35}
                    buttonSize={40}
                    itemQuantity={itemQuantity}
                    decrement={() => setItemQuantity(prev => prev - 1)}
                    increment={() => setItemQuantity(prev => prev + 1)}
                    product={product}
                />
            </div>
        </div>
    </Wrapper>
}
