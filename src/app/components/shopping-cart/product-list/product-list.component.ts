import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  wishlistt:number[]=[];
  productList: Product[] = []

  constructor(private productService: ProductService,private wishlist:WishlistService) { }

  ngOnInit() {
    this.loadProduct();
  }
    loadProduct(){
      this.productService.getProducts().subscribe((products)=>{
        this.productList=products;
      })
    this.loadWishlist();
  }
  loadWishlist(){
    return this.wishlist.getWishlisted().subscribe(productIds =>{
      console.log("wishlist as follows");
      
      console.log(productIds);
     this.wishlistt=productIds;
    })
  }
}
