import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  alert:boolean;
  constructor(private formBuilder:FormBuilder, private user:UserService) { }

  ngOnInit() {
    this.buildForm();
    
  }
  buildForm(){
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  register()
  {
    console.warn(this.registerForm.value);
    this.user.registerUser(this.registerForm.value).subscribe((result)=>{
      console.warn(result);
      this.alert=true
    })
  }
  closeAlert(){
    this.alert=false;
  }
}


