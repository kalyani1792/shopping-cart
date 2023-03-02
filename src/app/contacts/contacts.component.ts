import { getLocaleEraNames } from '@angular/common';
import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { AdmindataService } from '../services/admindata.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  listUser:any;
  users:any;
  adminDa:any;
  contactForm:FormGroup;
  enteredText='';
  Departments=[
  {"id":1,"name":"angular"},
  {"id":2,"name":"javascript"},
  {"id":3,"name":"html"},
  {"id":4,"name":"css"}];
  constructor(private router:Router,private notification:NotificationService, private user:UserService, private auth:AuthService,private formBuilder:FormBuilder) {
   }
  ngOnInit() {
    this.contactSave();
  }
  
  getUsers(data):any
   {
    this.user.registerUser(data).subscribe(result=>
      {
      this.listUser=result;
      console.log(this.listUser);
    });
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
sendMsg(data){
  this.notification.sendNotificationData(data.value)
  }
  //contact from
contactSave(){
this.contactForm=this.formBuilder.group({
name:['',Validators.required],
email:['',[Validators.required,Validators.email]],
message:['',Validators.required]
    })
  }
  sendContact(){
     console.warn(this.contactForm.value);
     
  }
onInput(value:string)
{
  this.enteredText=value;
}


}
