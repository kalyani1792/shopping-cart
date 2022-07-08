import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { admindataUrl } from '../config/api';
@Injectable({
  providedIn: 'root'
})
export class AdmindataService {

  constructor(private http:HttpClient) { }
  adminData(data:any){
    return this.http.post(admindataUrl,data)
  }
  adminGetData(){
    return this.http.get(admindataUrl)
  }
  deleteProduct(id:number){
  return this.http.delete<any>(admindataUrl+{id});
 }
}
