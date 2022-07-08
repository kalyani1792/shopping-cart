import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
// function symbolValidator(control){    //control=loginForm=password
// console.log(control.value);

// }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
submitted=false;
constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  this.buildForm();
  }
  buildForm(){
    this.loginForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return
    }
    alert('success!!!-)\n\n' +JSON.stringify(this.loginForm.value,null,4));
    console.log(this.loginForm.value);
    
  }

}
