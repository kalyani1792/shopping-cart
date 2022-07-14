import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
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
constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router,private auth:AuthService) { }

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
    this.login();
  }
  login()
 {
//     if(this.auth.isLoggedIn()){
// this.router.navigate(['addproject'])
//     }
//  if (this.loginForm.valid){
//   return this.auth.loggedIn(this.loginForm.value).subscribe((res)=>{
//     this.router.navigate(['addproduct'])
//   },
//   (err:Error)=>{
//     alert(err.message)
//   }
//   ) }
//     if(this.loginForm.invalid){
//       return
//     }
    return this.userService.loginUser().subscribe(res=>{
  
      const userData=res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
      });
      if(userData){
        alert("login success");
        this.loginForm.reset();
        this.router.navigate(['shop'])
        localStorage.setItem('token',JSON.stringify(userData));
      }
      else{
        alert("user not found")
      }
    })
    
  // alert('success!!!-)\n\n' +JSON.stringify(this.loginForm.value,null,4));
    
    console.log(this.loginForm.value);
  }

}
