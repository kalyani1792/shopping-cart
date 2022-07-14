import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate()
      {
        let role=localStorage.getItem("userType")
        if(role=="admin"){
    return true;
  }
  alert("you dont have admin rights")
  return false;
}
}

