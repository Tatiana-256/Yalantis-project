import React from 'react';
import productIcon from '../../../common-files/product-icon.png'
import {ImageProd, WrapperProd} from './Product-style';
import {IProduct} from "../../../state/entitiesTypes";


interface IProps {
    product: IProduct

}

export const Product: React.FC<IProps> = ({product}) => {

    const {name, price, origin} = product


    return <WrapperProd>
        <ImageProd src={productIcon}/>
        <div>{name}</div>
        <div>{price}</div>
        <div>{origin}</div>
        <button>Add to basket</button>
    </WrapperProd>
}

