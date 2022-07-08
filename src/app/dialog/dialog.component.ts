import { validateVerticalPosition } from '@angular/cdk/overlay';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { AdmindataService } from '../services/admindata.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditService } from '../services/edit.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  favoriteProduct:string;
  upData!:any
  Freshness=['Brand New','Second Hand','Rehaurshment']
  productForm:FormGroup;
  actionBtn : string = "Save"
  constructor(private formBuilder:FormBuilder,private adminservice:AdmindataService,private dialogRef:MatDialog,
    @Inject(MAT_DIALOG_DATA)public ediitData:any, private editService:EditService) { }
  
  ngOnInit() {
    this.productForm=this.formBuilder.group({
    productName: ['',Validators.required],
    productCategry: ['',Validators.required],
    freshness:['',Validators.required],
    price:['',Validators.required],
    comments:['',Validators.required],
    date:['',Validators.required]
  });
  if(this.ediitData)
  {
    this.actionBtn="Update";
this.productForm.controls['productName'].setValue(this.ediitData.productName);
this.productForm.controls['productCategry'].setValue(this.ediitData.productCategry);
this.productForm.controls['freshness'].setValue(this.ediitData.freshness);
this.productForm.controls['price'].setValue(this.ediitData.price);
this.productForm.controls['comments'].setValue(this.ediitData.comments);
this.productForm.controls['date'].setValue(this.ediitData.date)
  }
}
  addProducts(){
    if(!this.ediitData){
    if(this.productForm.valid){
    this.adminservice.adminData(this.productForm.value)
    .subscribe({next:(res)=>{
      alert("product added Successfully")
    },
     error:()=>{
      alert("error while adding products");
      this.productForm.reset();
      this.dialogRef.closeAll();
     }
    })
  }
  }

else{
 this.updateData();
}
}
updateData(){
this.editService.putData(this.productForm.value, this.ediitData.id) 
.subscribe({
  next:(res)=>{
    this.upData=res;
    console.log(res);
    
    alert("Data updated Successfully");
  },
  error:()=>{
  alert("there is error while updateing");
  this.productForm.reset();
  this.dialogRef.closeAll();
}
})
}

}

