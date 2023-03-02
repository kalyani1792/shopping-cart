import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { admindataUrl } from '../config/api';
import { Observable,throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdmindataService {

  constructor(private http:HttpClient) { }
  adminData(data:any){
    return this.http.post(admindataUrl,data)
  }
  adminGetData():Observable<any>{
    return this.http.get<any>(admindataUrl)
    .pipe(catchError(this.handleError))
   
  }
  handleError(error){
      return throwError(error.message || "server error")
  }
  deleteProduct(id:number){
  return this.http.delete<any>(admindataUrl+id)
  .pipe(map((res:any)=>{
return res
  }))
 }
}
