import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
Departments=[
  {"id":1,"name":"angular"},
  {"id":2,"name":"javascript"},
  {"id":3,"name":"html"},
  {"id":4,"name":"css"}];
  constructor(private router:Router) {
   }
  ngOnInit() {
 
  }
 
getCss(flag:string){
  let cssClass;
   if(flag=='mode')
  {
    cssClass={
      'one':true,
      'two':false
    }
    
  }else{
      cssClass={
        'one':false,
        'two':true
      }
  }
return cssClass;
}
onSelect(department){
  this.router.navigate(['/contacts',department.id])
}
}
