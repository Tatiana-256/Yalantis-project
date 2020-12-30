import React, {useState} from 'react';
import productIcon from '../../../common-files/product-icon.png'
import {ImageProd, WrapperProd} from './Product-style';
import {IProduct} from "../../../state/entitiesTypes";
import {useHistory} from 'react-router-dom';
import {CountQuality} from '../../../common-components/CountQuantity';


interface IProps {
    product: IProduct

}

export const Product: React.FC<IProps> = ({product}) => {

    const [itemQuantity, setItemQuantity] = useState(1)

    const {name, price, origin, id} = product

    const history = useHistory()
    const goToProductPage = () => {
        history.push(`products/${id}`)
    }

    return <WrapperProd>
        <ImageProd src={productIcon} onClick={goToProductPage}/>
        <div>{name}</div>
        <div>Price: {price} ₴</div>
        <div>Origin: {origin}</div>
        <CountQuality
            width={40}
            buttonSize={30}
            product={product}
            itemQuantity={itemQuantity}
            decrement={() => setItemQuantity(prev => prev - 1)}
            increment={() => setItemQuantity(prev => prev + 1)}
        />
    </WrapperProd>
}

