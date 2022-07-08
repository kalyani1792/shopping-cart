import { Product } from "../models/product";
export class CartItem {
    id:number;
    productId:number;
    productName:string
    qty:number;
    price:number

constructor(id, product:Product,qty=1)
{
    this.id=id;
    this.productId=product.id;
    this.productName=product.name;
    this.qty=qty;
    this.price=product.price;
}

}