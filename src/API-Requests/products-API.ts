import {IProductAPI} from "../state/entitiesTypes";
import {instance} from "./API-settings";


export const productsAPI = {
    getProducts() {
        return instance.get<IProductAPI>(`/products`)
            .then(res => {
                    // debugger
                    console.log(res.data)
                    return res.data
                }
            )
    },
}
