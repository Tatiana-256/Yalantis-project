import React from 'react';
import {IBasketProduct} from "../../../state/entitiesTypes";

interface IProd {
    productItem: IBasketProduct
}


export const BagProd: React.FC<IProd> = ({productItem}) => {
    const {product, quantity} = productItem

    return <div>
        {product.name}
        {product.price}
        {quantity}
    </div>
}
