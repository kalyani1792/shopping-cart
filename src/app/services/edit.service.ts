import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{editdataUrl} from '../config/api'
@Injectable({
  providedIn: 'root'
})
export class EditService {
 
  constructor(private http:HttpClient) { }
  putData(id:number,data:any){
    return this.http.put<any>(editdataUrl + id, data)
  }
}
