// ______type of actions___________

import { INewProduct } from "../redux/slices/productSlice";

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>;

// product type

export interface IProductAPI {
  items: Array<IProduct>;
  totalItems: number;
  page: number;
  perPage: number;
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

export interface IEditProduct {
  product: INewProduct;
  productId: string;
}

// orders

export interface IOrder {
  id: string;
  pieces: Array<IOrderProduct>;
  createdAt: string;
}

export interface IOrderProduct {
  product: IProduct;
  count: number;
}
