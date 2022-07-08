import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/model/cartitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
  ];
  cartTotal = 0
  constructor(private msg: MessengerService,private cartService:CartService) { }
  ngOnInit() {
    this.handleSubscription();
  }
  handleSubscription(){
    this.msg.getMsg().subscribe((product: Product) => {
   this.loadCartItems();
    })
  }
loadCartItems()
{
  this.cartService.getCartItems().subscribe((items:CartItem[]) => {
    console.log("cart item as follows");
    
    console.log(items);
    this.cartItems=items;
    this.calCartTotal();
  })
}
calCartTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }}


