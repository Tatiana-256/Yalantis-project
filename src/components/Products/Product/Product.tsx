import React from 'react';
import productIcon from '../../../common-files/product-icon.png'
import {ImageProd, WrapperProd} from './Product-style';
import {IProduct} from "../../../state/entitiesTypes";
import {useHistory} from 'react-router-dom';
import {Button} from '../../../common/common-styles';
import {useAppState} from "../../../state/AppProvider";
import {actionsProduct} from '../../../state/actions';


interface IProps {
    product: IProduct

}

export const Product: React.FC<IProps> = ({product}) => {

    const {state, dispatch} = useAppState()


    const {name, price, origin, id} = product

    const history = useHistory()
    const goToProductPage = () => {
        history.push(`products/${id}`)
    }

    const addItem = () => {
        dispatch(actionsProduct.addProductToBasket({
            product: product,
            quantity: 1
        }))
        dispatch(actionsProduct.addTotalSum(product.price))
        console.log(state.basket)
    }


    return <WrapperProd>
        <ImageProd src={productIcon} onClick={goToProductPage}/>
        <div>{name}</div>
        <div>Price: {price}</div>
        <div>Origin: {origin}</div>
        <div style={{display: "flex", alignItems: "center"}}>
            <Button height={"40px"} width={'40px'}>-</Button>
            <div style={{margin: "0 10px"}}>1</div>
            <Button height={"40px"} width={'40px'}>+</Button>
        </div>
        <Button height={"50px"} width={'150px'} onClick={addItem}>Add to basket</Button>
    </WrapperProd>
}

