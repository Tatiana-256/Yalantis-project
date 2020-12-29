import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {productsAPI} from "../../../API-Requests/products-API";
import {IProduct} from "../../../state/entitiesTypes";
import productIcon from '../../../common-files/product-icon.png'
import {Count, ProdInfo, Wrapper} from './ProductPage-style';
import {Button} from '../../../common/common-styles';


interface MatchParams {
    id: string;
}

export const ProductPage = ({match}: RouteComponentProps<MatchParams>) => {

    // const {state, dispatch} = useAppState()

    const [product, setProduct] = useState({} as IProduct)

    const productId = match.params.id
    console.log(`match: ${productId}`)


    useEffect(() => {
        productsAPI.getProduct(productId)
            .then(data => setProduct(data))
    }, [])

    console.log(product)

    return <Wrapper>
        <img src={productIcon} style={{height: '300px'}}/>
        <div style={{
            width: "70%",
            padding: "0 5%"
        }}>
            <ProdInfo>
                <div style={{fontWeight: "bold"}}>{product.name}</div>
                <div>Price: {product.price}</div>
                <div>Created at: {product.createdAt}</div>
                <div>Country of origin: {product.origin}</div>
            </ProdInfo>
            <div style={{display: "flex"}}>
                <Count>
                    <Button width={'30px'} height={'30px'}>-</Button>
                    <div>1</div>
                    <Button width={'30px'} height={'30px'}>+</Button>
                </Count>
                <Button height={"50px"} width={"100px"}>Add</Button>
            </div>
        </div>
    </Wrapper>


}
