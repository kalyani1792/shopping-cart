import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
@Input() status:string="hi i am yous parent";
 
  constructor() { }

  ngOnInit() {
  }
 getData(value){
  console.log(value);
  
 }
}
