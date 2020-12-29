import React from 'react';
import {IBasketProduct} from "../../../state/entitiesTypes";
import {ImageProd, WrapperProd} from "../../Products/Product/Product-style";
import productIcon from "../../../common-files/product-icon.png";
import {useHistory} from "react-router-dom";
import {Info, Wrap} from '../Bag-styles';

interface IProd {
    productItem: IBasketProduct
}


export const BagProd: React.FC<IProd> = ({productItem}) => {
    const {product, quantity} = productItem


    const history = useHistory()

    const goToProductPage = () => {
        history.push(`products/${product.id}`)
    }

    return <Wrap>
        <div style={{width: '100px'}}>
            <ImageProd src={productIcon} onClick={goToProductPage}/>
        </div>
        <Info>
            <div style={{fontWeight: "bold"}}>{product.name}</div>
            <div>Price for one item: {product.price}</div>
            <div>Quantity: {quantity}</div>
        </Info>
    </Wrap>
}
