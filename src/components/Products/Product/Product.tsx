import React from 'react';
import productIcon from '../../../common-files/product-icon.png'
import {ImageProd, WrapperProd} from './Product-style';
import {IProduct} from "../../../state/entitiesTypes";
import {useHistory} from 'react-router-dom';
import { Button } from '../../../common/common-styles';


interface IProps {
    product: IProduct

}

export const Product: React.FC<IProps> = ({product}) => {

    const {name, price, origin, id} = product

    const history = useHistory()
    const goToProductPage = () => {
        history.push(`products/${id}`)
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
        <Button height={"50px"} width={'150px'}>Add to basket</Button>
    </WrapperProd>
}

