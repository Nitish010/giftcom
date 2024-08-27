import { Product } from "./Product";

export class Cart {
    productList:{product: Product, quantity: number}[] = []
    cartPrice:number = 0
    itemCount: number = 0
    address: string = ''
}