import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/typings/overlay-directives';
import { Component, OnInit } from '@angular/core';
import { AdmindataService } from 'src/app/services/admindata.service';
import { ArraypipePipe,  } from 'src/app/arraypipe.pipe';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  adminDa:any;
  
  constructor(private admin:AdmindataService) { 
  this.admin.adminGetData().subscribe((result)=>{
    console.warn("result",result)
    this.adminDa=result;
    
  })
}
  ngOnInit() {
  }
country:any=['indial','us','UK','ingland'];
addValue(value){
  this.country.push(value);
 console.log(this.country);
}



  getData(data){
   
  }
}
