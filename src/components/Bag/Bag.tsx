import React from 'react';
import style from './Bag.module.css'
import {useAppState} from "../../state/AppProvider";
import {BagProd} from "./BagProd/BagProd";
import basket from '../../common-files/shopping-basket.png'
import {IBasketProduct} from "../../state/entitiesTypes";
import {Item, TotalWrap} from './Bag-styles';


export const Bag = () => {
    const {state} = useAppState()

    const {allProducts, totalSum} = state.basket

    if (allProducts.length === 0) {
        return <div className={style.bag_wrap}>
            <img src={basket} style={{height: '30vh'}}/>
            Your basket is empty
        </div>
    }

    const totalQuantity = allProducts.reduce((accumulator: number, current: IBasketProduct) => {
        return accumulator + current.quantity;
    }, 0);

    return <div>
        <TotalWrap>
            <Item>Total sum: {totalSum} ₴</Item>
            <Item>Count of products: {totalQuantity}</Item>
        </TotalWrap>
        {allProducts.map(product => <BagProd productItem={product}/>)}
    </div>
}
