import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
  }
 getData(value){
  console.log(value);
  
 }
}
