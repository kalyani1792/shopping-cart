import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/model/cartitem';
import { Product } from 'src/app/models/product'
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service'
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product
  @Input() addedWishlist:boolean
  constructor(private cartService:CartService,private msg: MessengerService,private wishlist:WishlistService) { }

  ngOnInit() {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(()=> {
    this.msg.sendMsg(this.productItem)
  })
  }
  handleAddTOWishList(){
  this.wishlist.addTOWishlist(this.productItem.id ).subscribe(()=>{
  this.addedWishlist=true;
  })
}
  handleRemoveFromWishlist(){
  this.wishlist.removeFromWishlist(this.productItem.id).subscribe(()=>{
  this.addedWishlist=false;
})
  }
}
