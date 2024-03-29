import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from '../config/api';
import { CartItem} from '../model/cartitem';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { 
  }
  getCartItems(): Observable<CartItem[]>
  {
  return this.http.get<CartItem[]>(cartUrl).pipe(
    map((result:any[]) =>{
      let cartItems:CartItem[]=[];

      for(let item of result)
      {
        let productExists = false;
        for (let i in cartItems) {
          if (cartItems[i].productId === item.product.id) {
            cartItems[i].qty++
            productExists = true
            break;
          }
        }
        if (!productExists) {
          cartItems.push(new CartItem(item.id,item.product));
        }
      }
          
          return cartItems;
    })
  );
  }
  addProductToCart(product:Product){
    return this.http.post(cartUrl,{ product });
  }
}


