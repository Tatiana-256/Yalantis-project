// ______type of actions___________

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>;

// product type

export interface IProductAPI {
  items: Array<IProduct>;
  totalItems: 0;
  page: 0;
  perPage: 0;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  origin: "europe" | "usa" | "africa" | "asia";
  createdAt: string;
  updatedAt: string;
  isEditable: boolean;
}

// basket types
export interface IBasketProduct {
  product: IProduct;
  quantity: number;
}


export interface IFilterParameters {
  origins?: string;
  minPrice?: number;
  maxPrice?: number;
  pageCount?: number;
  page?: number;
  editable?: string;
}
