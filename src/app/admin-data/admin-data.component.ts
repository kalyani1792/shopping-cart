import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent implements OnInit {

  constructor(private cartitem:CartService) { }

  ngOnInit() {
    
  }
cartData(){
  return this.cartitem.getCartItems().subscribe(d=>{
console.log(d);

  })
}
}
