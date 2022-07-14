import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usersUrl } from '../config/api';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  registerUser(data)
  {
    return this.http.post(usersUrl,data)
  }
  loginUser()
  {
    return this.http.get<any>(usersUrl)
  }
}
