import {IProduct, IProductAPI, IProductAPIRequest} from "../state/entitiesTypes";
import {instance} from "./API-settings";


export const productsAPI = {
    getProducts() {
        return instance.get<IProductAPI>(`/products`)
            .then(res => {
                    console.log(res.data)
                    return res.data
                }
            )
            .catch(error => {
                console.error('Error:', error);
            })
    },
    getProduct(productId: string) {
        return instance.get<IProduct>(`/products/${productId}`
        )
            .then(res => {
                    console.log(res.data)
                    return res.data
                }
            )
            .catch(error => {
                console.error('Error:', error);
            })
    },
}
