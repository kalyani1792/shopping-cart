import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private route:Router){

  }
  canActivate()
    {
     if(!this.authService.isLoggedin){
      this.route.navigate(['login']);
     }else
     return false;
    
  }
  
}
