import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { nextTick } from 'process';
import { DialogComponent } from '../dialog/dialog.component';
import { AdmindataService } from '../services/admindata.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'productCategry', 'freshness', 'price','comments','date','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog,private adminApi:AdmindataService) { }
  openDialog() {
    this.dialog.open(DialogComponent,
      {
   width:'30%'
      });
  }
  ngOnInit() {
    this.getAllProduct();
  }
getAllProduct()
{
 this.adminApi.adminGetData().subscribe({
  next:(res: any[])=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
  },
  error:(err)=>{
    console.log("error while adding products");
  }
})
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
editData(row:any){
this.dialog.open(DialogComponent,{
width:'30%',
data:row
})
}
deleteData(row:any)
{
 this.adminApi.deleteProduct(row.id).subscribe({
  next:(res: any[])=>{
 alert("row deleted suucessfully");
  }
})
  
  
}
}
