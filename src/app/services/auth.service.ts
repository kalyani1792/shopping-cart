import { Injectable } from '@angular/core';
import{Router} from '@angular/router';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
//   isLoggedin=false;
// login(email:string, password:string) :Boolean{
// if(email==='sharvil@gmail.com' && password==='11122020')
// {
//   this.isLoggedin=true;
//   return this.isLoggedin;
// }
// this.isLoggedin=false;
// return this.isLoggedin;
// }
  constructor(private router:Router) { }
  isLoggedin=false;
  setToken(token:string){
    localStorage.setItem('token',token)
  }
  getToken() :string | null{
    return localStorage.getItem('token');
  }
  isLoggedIn(){
    this.isLoggedin=true;
    return this.getToken() != null;
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);

  }
  loggedIn({email,password}:any):Observable<any>{
    if(email==='sharvil@gmail.com' && password==='11122020'){
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return
    }
    return throwError(new console.error('failed to login'));
    
  }

  }

