import React from 'react';
import {useAppState} from "../../state/AppProvider";
import {BagProd} from "./BagProd/BagProd";
import basket from '../../common-files/shopping-basket.png'
import {IBasketProduct} from "../../state/entitiesTypes";
import {Item, TotalWrap} from './Bag-styles';
import { useLocation } from 'react-router-dom';


export const Bag = () => {
    const {state, dispatch} = useAppState()

    const {allProducts, totalSum} = state.basket

    if (allProducts.length === 0) {
        return <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                height: "70vh",
                flexDirection: "column"
            }}>
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
