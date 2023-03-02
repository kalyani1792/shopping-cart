import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { UserService } from '../services/user.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { UsersData } from '../models/users';
import { interval,merge,of } from 'rxjs';
import { delay,exhaustMap,map,take} from 'rxjs/operators';
@Component({
  selector: 'app-abou',
  templateUrl: './abou.component.html',
  styleUrls: ['./abou.component.css']
})
export class AbouComponent implements OnInit {
  notificationMsg:string;
  userData:any;
  public messgae=" ";
  res: any;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'password'];
  dataSource: any=  MatTableDataSource;
  name: string;
 

  constructor(private user:UserService) { }
 
  
  ngOnInit() {
    this.loginData();
 return this.user.loginUser().subscribe({next:(res: any[]): void=>{
  this.dataSource = new MatTableDataSource(res);
  console.log('data',this.dataSource);
 }
 })
 
  }
loginData(){
  return this.user.loginUser().pipe().subscribe(d=>{
this.userData=d;
console.log('response',this.userData);

  })
}
}
of(1,2,3,4).pipe(map(v=>v+10)).subscribe(console.log);
 


